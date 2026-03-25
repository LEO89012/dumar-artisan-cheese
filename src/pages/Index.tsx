import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyDumar from "@/components/WhyDumar";
import Testimonials from "@/components/Testimonials";
import bannerImage from "@/assets/dumar-brand.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <WhyDumar />

      {/* CTA Banner */}
      <section className="relative py-32 overflow-hidden">
        <img src={bannerImage} alt="Productos Dumar" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/60 to-charcoal/75" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <span className="font-body text-gold-light uppercase tracking-[0.3em] text-xs mb-4 block">
            Explora Más
          </span>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-background font-bold mb-6 leading-tight">
            Descubre toda nuestra{" "}
            <span className="text-gradient-gold italic">colección</span>
          </h2>
          <p className="font-body text-background/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Quesos frescos, madurados, artesanales y yogures naturales directamente desde Colombia.
          </p>
          <Link to="/productos" className="btn-primary inline-block">
            Explorar productos
          </Link>
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default Index;
