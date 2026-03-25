import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
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
      <section className="bg-cream py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="font-body text-primary uppercase tracking-[0.3em] text-xs mb-4 block">Escríbenos</span>
          <h1 className="section-title mb-6">Contacto</h1>
          <div className="gold-divider" />
          <p className="section-subtitle mt-6">
            ¿Tienes preguntas sobre nuestros productos? Nos encantaría saber de ti.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-charcoal mb-2">Hablemos</h2>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Dirección", value: "Bogotá, Colombia" },
                  { icon: Phone, label: "Teléfono", value: "+57 300 123 4567" },
                  { icon: Mail, label: "Email", value: "info@dumar.co" },
                  { icon: Clock, label: "Horario", value: "Lun - Sáb: 8:00 AM - 6:00 PM" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="font-body text-charcoal text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5 bg-cream p-8 md:p-10 rounded-lg border border-border/40">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Nombre</label>
                  <input
                    type="text"
                    placeholder="Tu nombre completo"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-charcoal placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                  />
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="tu@correo.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-charcoal placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Mensaje</label>
                <textarea
                  rows={6}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-charcoal placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all resize-none"
                />
              </div>
              <button type="submit" className="btn-primary flex items-center gap-2.5">
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
