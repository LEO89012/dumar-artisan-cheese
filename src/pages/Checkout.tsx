import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowLeft, ShieldCheck } from "lucide-react";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(price);

const Checkout = () => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-heading text-3xl font-bold text-charcoal mb-4">Tu carrito está vacío</h1>
          <p className="font-body text-muted-foreground mb-8">Agrega productos para continuar con tu compra.</p>
          <Link to="/productos" className="btn-primary inline-block">Ver productos</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <section className="bg-cream py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="font-body text-primary uppercase tracking-[0.3em] text-xs mb-4 block">Checkout</span>
          <h1 className="section-title mb-6">Tu Carrito</h1>
          <div className="gold-divider" />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/productos" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm mb-10 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Seguir comprando
          </Link>

          <div className="space-y-3 mb-10">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 md:gap-6 bg-cream p-5 md:p-6 rounded-lg items-center border border-border/30 hover:border-primary/20 transition-colors">
                <img src={item.image} alt={item.name} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-base md:text-lg font-semibold text-charcoal">{item.name}</h3>
                  <p className="text-muted-foreground text-xs mt-0.5">{item.weight}</p>
                  <p className="text-primary font-semibold text-sm mt-1 sm:hidden">{formatPrice(item.price * item.quantity)}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:text-primary transition-colors border border-border rounded-md hover:border-primary/30">
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-9 text-center font-body font-semibold text-sm">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:text-primary transition-colors border border-border rounded-md hover:border-primary/30">
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="font-heading font-bold text-charcoal w-28 text-right hidden sm:block">{formatPrice(item.price * item.quantity)}</p>
                <button onClick={() => removeFromCart(item.id)} className="p-2 text-destructive/60 hover:text-destructive transition-colors rounded-md hover:bg-destructive/5">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-cream p-8 md:p-10 rounded-lg border border-border/30">
            <div className="flex justify-between items-center mb-8">
              <span className="font-heading text-xl">Total</span>
              <span className="font-heading text-3xl font-bold text-charcoal">{formatPrice(totalPrice)}</span>
            </div>
            <button className="btn-primary w-full text-center text-base">
              Proceder al pago con Stripe
            </button>
            <div className="flex items-center justify-center gap-2 mt-5 text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <p className="text-xs font-body">
                Pago seguro procesado por Stripe. Se requiere configuración del backend.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
