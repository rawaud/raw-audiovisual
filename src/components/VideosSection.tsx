import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import medThales from "@/assets/videos/med-thales.mp4.asset.json";
import medDaniela from "@/assets/videos/med-daniela.mp4.asset.json";
import medKleber from "@/assets/videos/med-kleber.mp4.asset.json";
import empGuilherme from "@/assets/videos/emp-guilherme.mp4.asset.json";
import empIbirapuera from "@/assets/videos/emp-ibirapuera.mp4.asset.json";
import empOuroBranco from "@/assets/videos/emp-ourobranco.mp4.asset.json";
import advJacques from "@/assets/videos/adv-jacques.mp4.asset.json";
import advDhionatan from "@/assets/videos/adv-dhionatan.mp4.asset.json";
import advCarol from "@/assets/videos/adv-carol.mp4.asset.json";

const categories = [
  {
    name: "Área Médica",
    videos: [
      { title: "Dr. Thales", src: medThales.url },
      { title: "Dra. Daniela", src: medDaniela.url },
      { title: "Dr. Kleber", src: medKleber.url },
    ],
  },
  {
    name: "Empreendimentos",
    videos: [
      { title: "Corretor Guilherme", src: empGuilherme.url },
      { title: "Ibirapuera", src: empIbirapuera.url },
      { title: "Ouro Branco", src: empOuroBranco.url },
    ],
  },
  {
    name: "Advogados",
    videos: [
      { title: "Dr. Jacques", src: advJacques.url },
      { title: "Dr. Dhionatan", src: advDhionatan.url },
      { title: "Dra. Carol", src: advCarol.url },
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
            <div key={cat.name} className="snap-start shrink-0 w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pr-6">
                {cat.videos.map((video, vi) => (
                  <div
                    key={vi}
                    className="group relative aspect-[9/16] bg-secondary border border-border overflow-hidden hover:border-primary/50 transition-all"
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
