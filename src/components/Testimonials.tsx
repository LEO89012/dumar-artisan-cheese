import { Star } from "lucide-react";

const testimonials = [
  { name: "María Rodríguez", text: "Los quesos de DUMAR me transportan a mi infancia en el campo. ¡El queso campesino es increíble!", rating: 5 },
  { name: "Carlos Gómez", text: "Excelente calidad y frescura. El queso doble crema es perfecto para mis arepas del desayuno.", rating: 5 },
  { name: "Ana Martínez", text: "El yogur artesanal de mora es una delicia. Se nota que es 100% natural. ¡Muy recomendado!", rating: 5 },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-3">Testimonios</p>
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <div className="gold-divider mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-cream p-8 rounded-sm text-center">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-charcoal italic mb-6 text-sm leading-relaxed">"{t.text}"</p>
              <p className="font-heading text-charcoal font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
