import farmImage from "@/assets/dumar-farm.jpg";
import tablaImage from "@/assets/dumar-tabla.jpg";
import allProductsImage from "@/assets/dumar-all-products.jpg";

const Nosotros = () => {
  return (
    <main className="pt-20">
      <section className="bg-cream py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-3">Nuestra Historia</p>
          <h1 className="section-title">Sobre DUMAR</h1>
          <div className="gold-divider mt-6" />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-charcoal mb-6">
                Tradición artesanal <span className="text-primary italic">colombiana</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                DUMAR nació de la pasión por los sabores auténticos de Colombia. Desde nuestros inicios, nos hemos dedicado a producir quesos y lácteos de la más alta calidad, respetando las técnicas artesanales que han sido transmitidas de generación en generación.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Trabajamos directamente con ganaderos locales, asegurando la frescura de nuestra leche y el bienestar animal. Cada pieza de queso que sale de nuestra quesería lleva consigo el sabor del campo colombiano.
              </p>
            </div>
            <img src={farmImage} alt="Finca Dumar" className="rounded-sm shadow-lg w-full aspect-[4/3] object-cover" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <img src={tablaImage} alt="Productos artesanales" className="rounded-sm shadow-lg w-full aspect-[4/3] object-cover md:order-first" />
            <div>
              <h2 className="font-heading text-3xl font-semibold text-charcoal mb-6">
                Del campo a <span className="text-primary italic">tu mesa</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Nuestro compromiso va más allá de la producción. Cada producto es cuidadosamente seleccionado, empacado y enviado con cadena de frío para garantizar que llegue a tu hogar con toda la frescura y calidad que nos caracteriza.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Desde quesos frescos como el campesino y el costeño, hasta madurados como el Paipa, pasando por nuestros yogures artesanales — cada producto DUMAR es una celebración de los sabores colombianos.
              </p>
            </div>
          </div>

          <div className="text-center">
            <img src={allProductsImage} alt="Todos los productos Dumar" className="rounded-sm shadow-lg w-full max-w-4xl mx-auto aspect-video object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Nosotros;
