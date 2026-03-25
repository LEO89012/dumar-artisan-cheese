import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/productos", label: "Productos" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";
  const navBg = scrolled || !isHome
    ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
    : "bg-transparent border-b border-transparent";
  const textColor = scrolled || !isHome ? "text-charcoal" : "text-background";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className={`font-heading text-2xl md:text-3xl font-bold tracking-wider transition-colors duration-300 ${textColor}`}>
          <span className="text-primary">D</span>UMAR
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`font-body text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:text-primary relative py-1 ${
                  location.pathname === link.to
                    ? "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary"
                    : textColor
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className={`relative p-2.5 rounded-full transition-all duration-300 hover:bg-primary/10 ${textColor}`}
            aria-label="Abrir carrito"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-md">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 ${textColor}`}
            aria-label="Menú"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border animate-fade-in">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-6 py-4 font-body text-sm uppercase tracking-[0.15em] transition-colors hover:bg-cream ${
                    location.pathname === link.to ? "text-primary font-semibold border-l-2 border-primary" : "text-charcoal"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
