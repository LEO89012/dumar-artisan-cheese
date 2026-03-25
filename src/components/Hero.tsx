import { Link } from "react-router-dom";
import heroImage from "@/assets/dumar-hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Quesos artesanales Dumar"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/50" />
      <div className="relative z-10 text-center px-4 animate-fade-up">
        <p className="font-body text-gold-light uppercase tracking-[0.3em] text-sm mb-4">
          Quesería y Lácteos Finos
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-background font-bold leading-tight mb-6">
          Calidad artesanal<br />
          <span className="text-gold-light italic">en cada bocado</span>
        </h1>
        <p className="font-body text-background/80 text-lg md:text-xl max-w-xl mx-auto mb-10">
          Desde Colombia, llevamos a tu mesa los mejores quesos y lácteos artesanales con tradición y sabor auténtico.
        </p>
        <Link to="/productos" className="btn-primary inline-block">
          Comprar ahora
        </Link>
      </div>
    </section>
  );
};

export default Hero;
