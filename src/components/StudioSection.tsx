import { motion } from "framer-motion";
import studioImg from "@/assets/studio-real.jpg";

const StudioSection = () => {
  return (
    <section id="studio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            CONHEÇA O <span className="text-primary">STUDIO</span> DA RAW
          </h2>
          <div className="w-20 h-1 bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden border border-border"
          >
            <img
              src={studioImg}
              alt="Studio RAW Audiovisual"
              loading="lazy"
              width={1280}
              height={854}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
              Nosso studio é equipado com iluminação profissional, fundos variados e toda a estrutura
              necessária para ensaios fotográficos, gravações e produções de alto padrão.
            </p>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              Um espaço pensado para oferecer o melhor resultado, com conforto e criatividade.
              Agende uma visita e conheça de perto.
            </p>
          </motion.div>
        </div>

        <div>
          <h3 className="font-display text-3xl text-foreground mb-8">
            FOTOS QUE JÁ <span className="text-primary">PRODUZIMOS</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="aspect-square bg-secondary border border-border overflow-hidden group"
              >
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm font-body">
                  Foto {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm font-body">
            Substitua os placeholders acima pelas suas fotos reais
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
