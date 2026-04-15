import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["Área Médica", "Empreendimentos", "Advogados"];

const videoPlaceholders: Record<string, { title: string; thumb: string }[]> = {
  "Área Médica": [
    { title: "Clínica Premium - Institucional", thumb: "" },
    { title: "Dr. Silva - Procedimentos", thumb: "" },
    { title: "Hospital Vida - Campanha", thumb: "" },
  ],
  "Empreendimentos": [
    { title: "Residencial Aurora - Tour", thumb: "" },
    { title: "Edifício Horizon - Lançamento", thumb: "" },
    { title: "Condomínio Park - Drone", thumb: "" },
  ],
  "Advogados": [
    { title: "Escritório Juris - Institucional", thumb: "" },
    { title: "Dra. Santos - Personal Brand", thumb: "" },
    { title: "Advocacia Digital - Série", thumb: "" },
  ],
};

const VideosSection = () => {
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="videos" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            CAPTAÇÃO DE <span className="text-primary">VÍDEOS</span>
          </h2>
          <div className="w-20 h-1 bg-primary" />
        </motion.div>

        <div className="flex gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-display text-lg tracking-wider px-6 py-3 border transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {videoPlaceholders[active].map((video, i) => (
            <div
              key={i}
              className="group relative aspect-video bg-secondary border border-border overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-foreground border-b-8 border-b-transparent ml-1" 
                    style={{ borderLeftWidth: '12px' }}
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <p className="font-display text-lg text-foreground">{video.title}</p>
                <p className="text-xs text-primary font-body">{active}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <p className="text-center text-muted-foreground mt-8 text-sm font-body">
          Substitua os placeholders acima pelos seus vídeos reais
        </p>
      </div>
    </section>
  );
};

export default VideosSection;
