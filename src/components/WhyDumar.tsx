import { Award, Leaf, Heart, Truck } from "lucide-react";

const features = [
  { icon: Award, title: "Calidad Premium", desc: "Ingredientes seleccionados y procesos artesanales que garantizan el mejor sabor." },
  { icon: Leaf, title: "100% Natural", desc: "Sin conservantes ni aditivos artificiales. Pura tradición colombiana." },
  { icon: Heart, title: "Hecho con Pasión", desc: "Cada producto es elaborado con dedicación y el amor de nuestros artesanos." },
  { icon: Truck, title: "Envío Fresco", desc: "Entregamos con cadena de frío para que recibas la frescura directa del campo." },
];

const WhyDumar = () => {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-3">Nuestra Promesa</p>
          <h2 className="section-title">¿Por qué elegir DUMAR?</h2>
          <div className="gold-divider mt-6" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="text-center p-6 group">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary">
                <f.icon className="w-7 h-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">{f.title}</h3>
              <p className="font-body text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDumar;
