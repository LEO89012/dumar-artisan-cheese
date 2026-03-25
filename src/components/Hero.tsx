import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/dumar-hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Quesos artesanales Dumar"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/70" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
        <div className="inline-block mb-6">
          <span className="font-body text-gold-light uppercase tracking-[0.4em] text-xs md:text-sm border border-gold-light/30 px-6 py-2 rounded-full backdrop-blur-sm bg-background/5">
            Quesería & Lácteos Finos
          </span>
        </div>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-background font-bold leading-[1.05] mb-8">
          Calidad artesanal
          <br />
          <span className="text-gradient-gold italic font-medium">en cada bocado</span>
        </h1>
        <p className="font-body text-background/70 text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
          Desde Colombia, llevamos a tu mesa los mejores quesos y lácteos
          artesanales con tradición y sabor auténtico.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/productos" className="btn-primary inline-block">
            Comprar ahora
          </Link>
          <Link
            to="/nosotros"
            className="font-body text-background/80 text-sm uppercase tracking-[0.15em] hover:text-gold-light transition-colors duration-300 border-b border-background/30 pb-0.5"
          >
            Conoce nuestra historia
          </Link>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/50 hover:text-gold-light transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
