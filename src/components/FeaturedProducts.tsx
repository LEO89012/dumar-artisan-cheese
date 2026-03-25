import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  const featured = products.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-3">Selección Premium</p>
          <h2 className="section-title">Nuestros productos más vendidos</h2>
          <div className="gold-divider mt-6" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-14">
          <Link to="/productos" className="btn-outline-gold inline-block">
            Ver todo el catálogo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
