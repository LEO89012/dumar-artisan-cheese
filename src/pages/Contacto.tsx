import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contacto = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Por favor completa todos los campos");
      return;
    }
    toast.success("¡Mensaje enviado! Te contactaremos pronto.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="pt-20">
      <section className="bg-cream py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="font-body text-primary uppercase tracking-[0.3em] text-sm mb-3">Escríbenos</p>
          <h1 className="section-title">Contacto</h1>
          <div className="gold-divider mt-6" />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-charcoal mb-6">¿Tienes preguntas?</h2>
              <p className="font-body text-muted-foreground mb-8">
                Nos encantaría saber de ti. Escríbenos y te responderemos lo antes posible.
              </p>
              <ul className="space-y-4 font-body text-sm">
                <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-primary" /> Bogotá, Colombia</li>
                <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary" /> +57 300 123 4567</li>
                <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-primary" /> info@dumar.co</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-cream border border-border rounded-sm px-4 py-3 font-body text-sm text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-cream border border-border rounded-sm px-4 py-3 font-body text-sm text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <textarea
                rows={5}
                placeholder="Tu mensaje"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-cream border border-border rounded-sm px-4 py-3 font-body text-sm text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
              <button type="submit" className="btn-primary flex items-center gap-2">
                <Send className="w-4 h-4" /> Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacto;
