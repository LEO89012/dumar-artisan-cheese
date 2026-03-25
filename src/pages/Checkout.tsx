import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(price);

const Checkout = () => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl font-semibold text-charcoal mb-4">Tu carrito está vacío</h1>
          <Link to="/productos" className="btn-primary inline-block">Ver productos</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <section className="bg-cream py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="section-title">Tu Carrito</h1>
          <div className="gold-divider mt-6" />
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/productos" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm mb-8">
            <ArrowLeft className="w-4 h-4" /> Seguir comprando
          </Link>

          <div className="space-y-4 mb-8">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 md:gap-6 bg-cream p-4 md:p-6 rounded-sm items-center">
                <img src={item.image} alt={item.name} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-sm" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-lg font-semibold text-charcoal">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">{item.weight}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:text-primary transition-colors border border-border rounded-sm">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-body font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:text-primary transition-colors border border-border rounded-sm">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <p className="font-heading font-bold text-charcoal w-28 text-right hidden sm:block">{formatPrice(item.price * item.quantity)}</p>
                <button onClick={() => removeFromCart(item.id)} className="p-2 text-destructive hover:text-destructive/80 transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-cream p-6 md:p-8 rounded-sm">
            <div className="flex justify-between items-center mb-6">
              <span className="font-heading text-xl">Total</span>
              <span className="font-heading text-2xl font-bold text-charcoal">{formatPrice(totalPrice)}</span>
            </div>
            <button className="btn-primary w-full text-center">
              Proceder al pago con Stripe
            </button>
            <p className="text-center text-muted-foreground text-xs mt-4 font-body">
              Pago seguro procesado por Stripe. Se requiere configuración del backend.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
