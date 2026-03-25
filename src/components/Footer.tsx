import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-background/80 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl font-bold text-background mb-4">
              <span className="text-primary">D</span>UMAR
            </h3>
            <p className="font-body text-sm leading-relaxed text-background/60">
              Quesería y Lácteos Finos. Tradición artesanal colombiana llevada a tu mesa con la más alta calidad.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold text-background mb-4">Enlaces</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link to="/productos" className="hover:text-primary transition-colors">Productos</Link></li>
              <li><Link to="/nosotros" className="hover:text-primary transition-colors">Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold text-background mb-4">Contacto</h4>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Bogotá, Colombia</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +57 300 123 4567</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> info@dumar.co</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 mt-12 pt-8 text-center font-body text-xs text-background/40">
          © {new Date().getFullYear()} DUMAR. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
