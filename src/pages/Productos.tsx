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
      <section className="bg-cream py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-3">Catálogo</p>
          <h1 className="section-title">Nuestros Productos</h1>
          <div className="gold-divider mt-6" />
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-5 py-2 rounded-sm font-body text-sm uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-cream text-charcoal hover:bg-primary/10"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
              className="bg-cream border border-border rounded-sm px-4 py-2 font-body text-sm text-charcoal"
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
            <p className="text-center text-muted-foreground font-body py-20">No hay productos en esta categoría.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Productos;
