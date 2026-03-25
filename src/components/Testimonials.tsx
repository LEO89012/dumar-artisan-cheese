import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "María Rodríguez", role: "Cliente desde 2023", text: "Los quesos de DUMAR me transportan a mi infancia en el campo. ¡El queso campesino es increíble!", rating: 5 },
  { name: "Carlos Gómez", role: "Chef Profesional", text: "Excelente calidad y frescura. El queso doble crema es perfecto para mis arepas del desayuno.", rating: 5 },
  { name: "Ana Martínez", role: "Bloguera Gastronómica", text: "El yogur artesanal de mora es una delicia. Se nota que es 100% natural. ¡Muy recomendado!", rating: 5 },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="font-body text-primary uppercase tracking-[0.3em] text-xs mb-4 block">
            Testimonios
          </span>
          <h2 className="section-title mb-6">Lo que dicen nuestros clientes</h2>
          <div className="gold-divider" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-cream p-8 md:p-10 rounded-lg border border-border/40 hover:border-primary/20 transition-all duration-500 hover:shadow-lg"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/15" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-charcoal/80 italic mb-8 text-sm leading-relaxed">
                "{t.text}"
              </p>
              <div className="border-t border-border/40 pt-5">
                <p className="font-heading text-charcoal font-semibold">{t.name}</p>
                <p className="font-body text-muted-foreground text-xs mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
