import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="border-t border-border px-6 py-16 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="font-display text-4xl text-primary mb-2">RAW AUDIOVISUAL</h3>
          <p className="text-muted-foreground text-sm font-body">
            Captação · Edição · Estratégia · Design · Eventos
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube">
            <Youtube size={24} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground text-xs font-body">
          © 2026 RAW Audiovisual. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
