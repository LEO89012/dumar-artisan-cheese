import { Award, Leaf, Heart, Truck } from "lucide-react";

const features = [
  { icon: Award, title: "Calidad Premium", desc: "Ingredientes seleccionados y procesos artesanales que garantizan el mejor sabor." },
  { icon: Leaf, title: "100% Natural", desc: "Sin conservantes ni aditivos artificiales. Pura tradición colombiana." },
  { icon: Heart, title: "Hecho con Pasión", desc: "Cada producto es elaborado con dedicación y el amor de nuestros artesanos." },
  { icon: Truck, title: "Envío Fresco", desc: "Entregamos con cadena de frío para que recibas la frescura directa del campo." },
];

const WhyDumar = () => {
  return (
    <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="font-body text-primary uppercase tracking-[0.3em] text-xs mb-4 block">
            Nuestra Promesa
          </span>
          <h2 className="section-title mb-6">¿Por qué elegir DUMAR?</h2>
          <div className="gold-divider" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-lg bg-background/60 backdrop-blur-sm border border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-lg group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-3">
                <f.icon className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">{f.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDumar;
