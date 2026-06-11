import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import rawLogo from "@/assets/logo-raw.png.asset.json";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="RAW Audiovisual studio"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={rawLogo.url}
            alt="RAW Audiovisual"
            className="h-20 md:h-28 w-auto mx-auto mb-8"
          />
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-4">
            <span className="text-primary">RAW</span>{" "}
            <span className="text-foreground">AUDIOVISUAL</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-body"
        >
          Captação. Edição. Estratégia. Criamos conteúdo que transforma marcas em referência.
        </motion.p>

        <motion.a
          href="#servicos"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-block bg-primary text-primary-foreground px-8 py-4 font-display text-xl tracking-wider hover:glow-red transition-shadow"
        >
          CONHEÇA NOSSO TRABALHO
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
