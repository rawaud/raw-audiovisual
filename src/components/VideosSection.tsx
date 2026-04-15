import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Área Médica",
    videos: [
      { title: "Clínica Premium - Institucional" },
      { title: "Dr. Silva - Procedimentos" },
      { title: "Hospital Vida - Campanha" },
    ],
  },
  {
    name: "Empreendimentos",
    videos: [
      { title: "Residencial Aurora - Tour" },
      { title: "Edifício Horizon - Lançamento" },
      { title: "Condomínio Park - Drone" },
    ],
  },
  {
    name: "Advogados",
    videos: [
      { title: "Escritório Juris - Institucional" },
      { title: "Dra. Santos - Personal Brand" },
      { title: "Advocacia Digital - Série" },
    ],
  },
];

const VideosSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const sectionWidth = container.scrollWidth / categories.length;
      const index = Math.round(scrollLeft / sectionWidth);
      setActiveIndex(Math.min(index, categories.length - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCategory = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const sectionWidth = container.scrollWidth / categories.length;
    container.scrollTo({ left: sectionWidth * index, behavior: "smooth" });
  };

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

        {/* Category indicators */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => scrollToCategory(i)}
              className={`font-display text-lg tracking-wider px-6 py-3 border transition-all duration-300 ${
                activeIndex === i
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50"
              }`}
            >
              {cat.name.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="snap-start shrink-0 w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pr-6">
                {cat.videos.map((video, vi) => (
                  <div
                    key={vi}
                    className="group relative aspect-video bg-secondary border border-border overflow-hidden hover:border-primary/50 transition-all"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                        <div
                          className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent ml-1"
                          style={{ borderLeftWidth: "12px", borderLeftColor: "hsl(var(--foreground))", borderLeftStyle: "solid" }}
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                      <p className="font-display text-lg text-foreground">{video.title}</p>
                      <p className="text-xs text-primary font-body">{cat.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll progress dots */}
        <div className="flex justify-center gap-3 mt-8">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => scrollToCategory(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
              aria-label={cat.name}
            />
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-6 text-sm font-body">
          Arraste para o lado ou clique nas categorias para navegar
        </p>
      </div>
    </section>
  );
};

export default VideosSection;
