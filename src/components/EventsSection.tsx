import { motion } from "framer-motion";

import eventoLancamento from "@/assets/videos/evento-lancamento-208.mp4.asset.json";
import eventoCaiado from "@/assets/videos/evento-caiado-pneus.mp4.asset.json";
import eventoGrandourados from "@/assets/videos/evento-grandourados-jpfest.mp4.asset.json";

const eventVideos = [
  { title: "Lançamento 208", src: eventoLancamento.url },
  { title: "Caiado Pneus · Fazenda Campanário", src: eventoCaiado.url },
  { title: "Grandourados · JP Fest", src: eventoGrandourados.url },
];

const EventsSection = () => {
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
      </div>
    </section>
  );
};

export default EventsSection;
