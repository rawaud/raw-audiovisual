import { motion } from "framer-motion";
import { Video, Camera, Palette, TrendingUp, Megaphone, CalendarCheck } from "lucide-react";

const services = [
  { icon: Video, title: "Captação de Vídeos", desc: "Produção audiovisual completa com equipamentos profissionais" },
  { icon: Camera, title: "Fotografia", desc: "Ensaios, produtos e retratos no nosso studio próprio" },
  { icon: Palette, title: "Design de Posts", desc: "Criação visual que comunica a essência da sua marca" },
  { icon: TrendingUp, title: "Estratégia Digital", desc: "Planejamento completo para posicionar sua marca online" },
  { icon: Megaphone, title: "Tráfego Digital", desc: "Campanhas que geram resultados reais e mensuráveis" },
  { icon: CalendarCheck, title: "Cobertura de Eventos", desc: "Registro profissional dos momentos mais importantes" },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            TUDO QUE A <span className="text-primary">RAW</span> ENTREGA
          </h2>
          <div className="w-20 h-1 bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300"
            >
              <service.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-2xl text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
