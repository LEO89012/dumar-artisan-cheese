import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const Productos = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const filtered = products
    .filter((p) => activeCategory === "all" || p.category === activeCategory)
    .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));

  return (
    <main className="pt-20">
      <section className="bg-cream py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="font-body text-primary uppercase tracking-[0.3em] text-xs mb-4 block">Catálogo</span>
          <h1 className="section-title mb-6">Nuestros Productos</h1>
          <div className="gold-divider" />
          <p className="section-subtitle mt-6">
            Explora nuestra selección de quesos y lácteos artesanales, elaborados con la mejor leche colombiana.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-5 py-2.5 rounded-full font-body text-xs uppercase tracking-[0.12em] transition-all duration-300 border ${
                    activeCategory === cat.value
                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                      : "bg-background text-charcoal border-border hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
              className="bg-background border border-border rounded-full px-5 py-2.5 font-body text-xs text-charcoal focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="asc">Precio: Menor a Mayor</option>
              <option value="desc">Precio: Mayor a Menor</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-muted-foreground font-body text-lg">No hay productos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Productos;
