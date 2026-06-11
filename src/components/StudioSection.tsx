import { motion } from "framer-motion";
import studioImg from "@/assets/studio-real.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";

const portfolioPhotos = [
  portfolio1, portfolio2, portfolio3, portfolio4,
  portfolio6, portfolio7, portfolio8, portfolio9,
];

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
            {portfolioPhotos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="aspect-[3/4] bg-secondary border border-border overflow-hidden group"
              >
                <img
                  src={photo}
                  alt={`Foto produzida pela RAW ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
