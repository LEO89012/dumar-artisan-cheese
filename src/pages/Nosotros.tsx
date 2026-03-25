import farmImage from "@/assets/dumar-farm.jpg";
import tablaImage from "@/assets/dumar-tabla.jpg";
import allProductsImage from "@/assets/dumar-all-products.jpg";
import { Link } from "react-router-dom";

const stats = [
  { value: "10+", label: "Años de tradición" },
  { value: "25+", label: "Productos artesanales" },
  { value: "5K+", label: "Clientes satisfechos" },
  { value: "100%", label: "Ingredientes naturales" },
];

const Nosotros = () => {
  return (
    <main className="pt-20">
      <section className="bg-cream py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="font-body text-primary uppercase tracking-[0.3em] text-xs mb-4 block">Nuestra Historia</span>
          <h1 className="section-title mb-6">Sobre DUMAR</h1>
          <div className="gold-divider" />
          <p className="section-subtitle mt-6">
            Una historia de pasión, tradición y compromiso con la excelencia artesanal colombiana.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-charcoal py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">{s.value}</p>
                <p className="font-body text-background/60 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
            <div>
              <span className="font-body text-primary uppercase tracking-[0.2em] text-xs mb-4 block">Nuestros Orígenes</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight">
                Tradición artesanal <span className="text-primary italic">colombiana</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-5">
                DUMAR nació de la pasión por los sabores auténticos de Colombia. Desde nuestros inicios, nos hemos dedicado a producir quesos y lácteos de la más alta calidad, respetando las técnicas artesanales que han sido transmitidas de generación en generación.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Trabajamos directamente con ganaderos locales, asegurando la frescura de nuestra leche y el bienestar animal. Cada pieza de queso que sale de nuestra quesería lleva consigo el sabor del campo colombiano.
              </p>
              <Link to="/productos" className="btn-outline-gold inline-block text-xs">
                Descubre nuestros productos
              </Link>
            </div>
            <div className="relative">
              <img src={farmImage} alt="Finca Dumar" className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-28">
            <div className="relative md:order-first">
              <img src={tablaImage} alt="Productos artesanales" className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            </div>
            <div>
              <span className="font-body text-primary uppercase tracking-[0.2em] text-xs mb-4 block">Nuestro Proceso</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-tight">
                Del campo a <span className="text-primary italic">tu mesa</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-5">
                Nuestro compromiso va más allá de la producción. Cada producto es cuidadosamente seleccionado, empacado y enviado con cadena de frío para garantizar que llegue a tu hogar con toda la frescura y calidad que nos caracteriza.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Desde quesos frescos como el campesino y el costeño, hasta madurados como el Paipa, pasando por nuestros yogures artesanales — cada producto DUMAR es una celebración de los sabores colombianos.
              </p>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <img src={allProductsImage} alt="Todos los productos Dumar" className="w-full aspect-[21/9] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent flex items-end">
              <div className="p-8 md:p-12">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-background mb-2">
                  Nuestra Colección Completa
                </h3>
                <p className="font-body text-background/70 text-sm">
                  Más de 25 productos artesanales para todos los gustos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Nosotros;
