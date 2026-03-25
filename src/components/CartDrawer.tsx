import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(price);

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-charcoal/50 z-50" onClick={() => setIsCartOpen(false)} />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col animate-fade-in">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-heading text-xl font-semibold">Carrito ({totalItems})</h2>
          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:text-primary transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground font-body">Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-cream p-4 rounded-sm">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-sm" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading text-sm font-semibold text-charcoal truncate">{item.name}</h4>
                    <p className="text-primary font-semibold text-sm mt-1">{formatPrice(item.price)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 hover:text-primary transition-colors">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-body text-sm w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 hover:text-primary transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                      <button onClick={() => removeFromCart(item.id)} className="ml-auto p-1 text-destructive hover:text-destructive/80 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-border space-y-4">
              <div className="flex justify-between font-heading text-lg">
                <span>Total</span>
                <span className="font-bold">{formatPrice(totalPrice)}</span>
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
