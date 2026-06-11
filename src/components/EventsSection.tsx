import { useState } from "react";
import { motion } from "framer-motion";
import eventsImg from "@/assets/events.jpg";

import eventoLancamento from "@/assets/videos/evento-lancamento-208.mp4.asset.json";
import eventoCaiado from "@/assets/videos/evento-caiado-pneus.mp4.asset.json";
import eventoGrandourados from "@/assets/videos/evento-grandourados-jpfest.mp4.asset.json";

const eventVideos = [
  { title: "Lançamento 208", src: eventoLancamento.url },
  { title: "Caiado Pneus · Fazenda Campanário", src: eventoCaiado.url },
  { title: "Grandourados · JP Fest", src: eventoGrandourados.url },
];

const EventsSection = () => {
  const [tab, setTab] = useState<"fotos" | "videos">("videos");

  return (
    <section id="eventos" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            COBERTURA DE <span className="text-primary">EVENTOS</span>
          </h2>
          <div className="w-20 h-1 bg-primary" />
        </motion.div>

        {/* Tabs Fotos / Vídeos */}
        <div className="flex gap-4 mb-8">
          {(["videos", "fotos"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`font-display text-lg tracking-wider px-6 py-3 border transition-all duration-300 ${
                tab === t
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
              }`}
            >
              {t === "videos" ? "VÍDEOS" : "FOTOS"}
            </button>
          ))}
        </div>

        {tab === "videos" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventVideos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative aspect-video bg-secondary border border-border overflow-hidden hover:border-primary/50 transition-all"
              >
                <video
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                  <p className="font-display text-lg text-foreground">{video.title}</p>
                  <p className="text-xs text-primary font-body">Cobertura de Eventos</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2 overflow-hidden border border-border group"
              >
                <img
                  src={eventsImg}
                  alt="Cobertura de eventos RAW"
                  loading="lazy"
                  width={1280}
                  height={854}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              <div className="flex flex-col gap-6">
                {[1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex-1 bg-secondary border border-border overflow-hidden flex items-center justify-center text-muted-foreground text-sm font-body"
                  >
                    Evento {i}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i - 3) * 0.1 }}
                  className="aspect-square bg-secondary border border-border overflow-hidden flex items-center justify-center text-muted-foreground text-sm font-body"
                >
                  Evento {i}
                </motion.div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6 text-sm font-body">
              Substitua os placeholders acima pelas suas fotos de eventos
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
