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
    <div className="card-product group">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
      </div>
      <div className="p-5">
        <span className="text-xs uppercase tracking-widest text-primary font-semibold">
          {product.category} · {product.weight}
        </span>
        <h3 className="font-heading text-lg font-semibold text-charcoal mt-1 mb-2">
          {product.name}
        </h3>
        <p className="font-body text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-heading text-xl font-bold text-charcoal">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={handleAdd}
            className="bg-primary text-primary-foreground p-3 rounded-sm transition-all duration-300 hover:bg-gold-dark hover:shadow-lg active:scale-95"
            aria-label={`Agregar ${product.name} al carrito`}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
