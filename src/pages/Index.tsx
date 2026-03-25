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
      <section className="relative py-24 overflow-hidden">
        <img src={bannerImage} alt="Productos Dumar" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 text-center px-4">
          <h2 className="font-heading text-3xl md:text-5xl text-background font-bold mb-4">
            Descubre toda nuestra <span className="text-gold-light italic">colección</span>
          </h2>
          <p className="font-body text-background/80 text-lg mb-8 max-w-xl mx-auto">
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
