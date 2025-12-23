import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageCircle, Instagram, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Kontak = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp with message
    const message = `Halo Intelligo ID!%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0ATelepon: ${formData.phone}%0ASubject: ${formData.subject}%0A%0APesan:%0A${formData.message}`;
    window.open(`https://wa.me/6282315556491?text=${message}`, "_blank");
    
    toast({
      title: "Pesan terkirim!",
      description: "Anda akan diarahkan ke WhatsApp untuk melanjutkan percakapan."
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      value: "+62 823 1555 6491",
      link: "tel:+6282315556491"
    },
    {
      icon: Mail,
      title: "Email",
      value: "support@intelligo.id",
      link: "mailto:support@intelligo.id"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat dengan MinTell",
      link: "https://bit.ly/tanya-mintell"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@intelligo.id",
      link: "https://www.instagram.com/intelligo.id/"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Kontak - Intelligo ID | Hubungi Kami</title>
        <meta name="description" content="Hubungi Intelligo ID untuk informasi lebih lanjut tentang program bootcamp Data Science & AI. Tim kami siap membantu!" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-16 md:pt-20">
          {/* Hero Section */}
          <section className="py-20 md:py-28 bg-gradient-to-b from-accent/5 to-background">
            <div className="section-container">
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                  Kontak Kami
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Ada Pertanyaan? <span className="text-accent">Hubungi Kami!</span>
                </h1>
                <p className="text-lg text-foreground/70">
                  Tim kami siap membantu menjawab pertanyaan seputar program bootcamp, 
                  pendaftaran, dan informasi lainnya.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Cards */}
          <section className="py-16">
            <div className="section-container">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-foreground/70">{item.value}</p>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form & Map */}
          <section className="py-16 bg-card/50">
            <div className="section-container">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Kirim Pesan
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nama Lengkap</Label>
                        <Input 
                          id="name"
                          placeholder="Masukkan nama"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email"
                          type="email"
                          placeholder="email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">No. Telepon</Label>
                        <Input 
                          id="phone"
                          placeholder="08xxxxxxxxxx"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input 
                          id="subject"
                          placeholder="Pertanyaan tentang..."
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Pesan</Label>
                      <Textarea 
                        id="message"
                        placeholder="Tulis pesan Anda..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      />
                    </div>
                    <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">
                      <Send className="w-4 h-4 mr-2" />
                      Kirim via WhatsApp
                    </Button>
                  </form>
                </div>

                {/* Location Info */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Lokasi Kami
                  </h2>
                  <div className="space-y-6">
                    <div className="p-6 bg-background rounded-2xl border border-border/50">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Head Office</h3>
                          <p className="text-foreground/70 text-sm">
                            Creya Coworking Space, Jl. K.H. Ahmad Dahlan No.20, Malabar, 
                            Kec. Lengkong, Kota Bandung, Jawa Barat 40262
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-background rounded-2xl border border-border/50">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Training Center</h3>
                          <p className="text-foreground/70 text-sm">
                            Nindya Biodistrict Hotel, Jl. Khp Hasan Mustopa No.57, Neglasari, 
                            Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40124
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Map Embed */}
                    <div className="rounded-2xl overflow-hidden border border-border/50 h-64">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8983366161796!2d107.61856847499636!3d-6.905499693092651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64c5e8866e5%3A0x37be7ac9d575f7ed!2sCreya%20Coworking%20Space!5e0!3m2!1sen!2sid!4v1704000000000!5m2!1sen!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Intelligo ID Location"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="section-container">
              <div className="bg-accent/10 rounded-3xl p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Siap Untuk Memulai Perjalanan Data Science?
                </h2>
                <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
                  Konsultasikan kebutuhan belajar Anda dengan tim kami dan temukan program yang tepat.
                </p>
                <Button variant="accent" size="lg" asChild>
                  <a href="https://bit.ly/tanya-mintell" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat dengan MinTell
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Kontak;
