import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  const featured = products.slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-body text-primary uppercase tracking-[0.3em] text-xs mb-4 block">
            Selección Premium
          </span>
          <h2 className="section-title mb-6">
            Nuestros productos más vendidos
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle mt-6">
            Descubre los favoritos de nuestros clientes, elaborados con los más finos ingredientes artesanales.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/productos" className="btn-outline-gold inline-block">
            Ver todo el catálogo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
