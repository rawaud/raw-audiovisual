// Baixa para dist/ os arquivos (logo, vídeos) que o Lovable guarda fora do repositório
// e que são referenciados por arquivos *.asset.json em src/assets.
import { readdirSync, readFileSync, mkdirSync, writeFileSync, statSync } from "node:fs";
import { join, dirname } from "node:path";

const PROJECT_ID = "17d18596-597f-4d28-9e0b-d1dea94516e1";
const ORIGINS = (process.env.LOVABLE_ORIGINS ||
  [
    `https://id-preview--${PROJECT_ID}.lovable.app`,
    `https://${PROJECT_ID}.lovableproject.com`,
  ].join(",")).split(",").map((s) => s.trim()).filter(Boolean);

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".asset.json") ? [p] : [];
  });
}

let failed = 0;
for (const file of walk("src/assets")) {
  const { url, size } = JSON.parse(readFileSync(file, "utf8"));
  const dest = join("dist", url);
  let ok = false;
  for (const origin of ORIGINS) {
    try {
      const res = await fetch(origin + url);
      const type = res.headers.get("content-type") || "";
      if (!res.ok || type.includes("text/html")) {
        console.log(`  ${res.status} ${type} <- ${origin}${url}`);
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      mkdirSync(dirname(dest), { recursive: true });
      writeFileSync(dest, buf);
      console.log(`OK ${url} (${(buf.length / 1048576).toFixed(1)} MB, esperado ${(size / 1048576).toFixed(1)} MB) <- ${origin}`);
      ok = true;
      break;
    } catch (e) {
      console.log(`  erro ${e.message} <- ${origin}${url}`);
    }
  }
  if (!ok) { failed++; console.log(`FALHOU ${url}`); }
}
if (failed) { console.error(`${failed} arquivo(s) não baixado(s)`); process.exit(1); }
