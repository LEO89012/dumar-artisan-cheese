import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(price);

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-50" onClick={() => setIsCartOpen(false)} />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="font-heading text-lg font-semibold">Tu Carrito ({totalItems})</h2>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="p-2 rounded-full hover:bg-cream transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground font-body text-center">Tu carrito está vacío</p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="btn-outline-gold mt-6 text-xs"
            >
              Explorar productos
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-cream p-4 rounded-lg border border-border/30">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading text-sm font-semibold text-charcoal truncate">{item.name}</h4>
                    <p className="text-primary font-semibold text-sm mt-1">{formatPrice(item.price)}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1.5 rounded-md hover:bg-background transition-colors">
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-body text-sm w-8 text-center font-semibold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1.5 rounded-md hover:bg-background transition-colors">
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                      <button onClick={() => removeFromCart(item.id)} className="ml-auto p-1.5 rounded-md text-destructive hover:bg-destructive/10 transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-border space-y-4 bg-cream/50">
              <div className="flex justify-between font-heading text-lg">
                <span>Total</span>
                <span className="font-bold text-charcoal">{formatPrice(totalPrice)}</span>
              </div>
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="btn-primary block text-center w-full"
              >
                Proceder al pago
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
