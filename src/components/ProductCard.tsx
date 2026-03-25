import { ShoppingCart } from "lucide-react";
import { useCart, type Product } from "@/context/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
    toast.success(`${product.name} agregado al carrito`);
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(price);

  return (
    <div className="card-product group cursor-pointer">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <button
          onClick={handleAdd}
          className="absolute bottom-4 right-4 bg-primary text-primary-foreground p-3 rounded-full transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-gold-dark hover:shadow-lg active:scale-95 shadow-md"
          aria-label={`Agregar ${product.name} al carrito`}
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
      <div className="p-5 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.15em] text-primary font-semibold bg-primary/10 px-2.5 py-0.5 rounded-full">
            {product.category}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
            {product.weight}
          </span>
        </div>
        <h3 className="font-heading text-lg font-semibold text-charcoal leading-snug">
          {product.name}
        </h3>
        <p className="font-body text-muted-foreground text-sm line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="pt-2 border-t border-border/50">
          <span className="font-heading text-xl font-bold text-charcoal">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
