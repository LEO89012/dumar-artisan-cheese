import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-background/80">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-20">
          <div className="md:col-span-1">
            <Link to="/" className="font-heading text-3xl font-bold text-background mb-4 inline-block">
              <span className="text-primary">D</span>UMAR
            </Link>
            <p className="font-body text-sm leading-relaxed text-background/50 mt-4">
              Quesería y Lácteos Finos. Tradición artesanal colombiana llevada a tu mesa con la más alta calidad.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/50 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/50 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-background uppercase tracking-[0.15em] mb-6">Navegación</h4>
            <ul className="space-y-3 font-body text-sm">
              <li><Link to="/" className="text-background/50 hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link to="/productos" className="text-background/50 hover:text-primary transition-colors">Productos</Link></li>
              <li><Link to="/nosotros" className="text-background/50 hover:text-primary transition-colors">Nosotros</Link></li>
              <li><Link to="/contacto" className="text-background/50 hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-background uppercase tracking-[0.15em] mb-6">Productos</h4>
            <ul className="space-y-3 font-body text-sm">
              <li><Link to="/productos" className="text-background/50 hover:text-primary transition-colors">Quesos Frescos</Link></li>
              <li><Link to="/productos" className="text-background/50 hover:text-primary transition-colors">Quesos Madurados</Link></li>
              <li><Link to="/productos" className="text-background/50 hover:text-primary transition-colors">Artesanales</Link></li>
              <li><Link to="/productos" className="text-background/50 hover:text-primary transition-colors">Yogures</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-background uppercase tracking-[0.15em] mb-6">Contacto</h4>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-background/50">Bogotá, Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-background/50">+57 300 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-background/50">info@dumar.co</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-background/30">
            © {new Date().getFullYear()} DUMAR. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-background/30">
            Hecho con pasión en Colombia 🇨🇴
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
