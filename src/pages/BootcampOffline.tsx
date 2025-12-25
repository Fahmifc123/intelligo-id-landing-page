import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Award, MapPin, Users, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const BootcampOffline = () => {
  return (
    <>
      <Helmet>
        <title>Weekend Bootcamp Offline | Intelligo Indonesia</title>
        <meta name="description" content="Weekend Bootcamp Offline tatap muka di Jakarta & Bandung. Full day learning Sabtu-Minggu dengan praktik langsung dan networking." />
      </Helmet>
      <Navbar />
      <main className="pt-20">
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <MapPin className="w-4 h-4" />
                  Bootcamp Offline
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Weekend Bootcamp <span className="text-accent">Offline</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Pembelajaran tatap muka intensif Sabtu-Minggu 09:00-17:00 WIB di Jakarta & Bandung. 
                  Full day learning dengan hands-on practice, networking langsung, dan mentoring profesional.
                </p>
                <Button className="bg-accent hover:bg-accent/90" size="lg">Daftar Sekarang</Button>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
                <MapPin className="w-32 h-32 text-accent/30" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Program Offline</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Data Science For Beginner", sessions: "6x Full Day", price: "Rp3.800.000" },
                { title: "AI For Beginner", sessions: "10x Full Day", price: "Rp6.300.000" },
                { title: "Job Ready", sessions: "16x Full Day", price: "Rp10.135.000", popular: true }
              ].map((p, idx) => (
                <div key={idx} className={`border rounded-lg p-6 ${p.popular ? "border-accent bg-accent/5" : ""}`}>
                  {p.popular && <span className="text-xs font-bold bg-accent text-white px-3 py-1 rounded-full inline-block mb-4">Populer</span>}
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.sessions}</p>
                  <p className="text-2xl font-bold text-accent mb-4">{p.price}</p>
                  <Button className="w-full">Pilih Program</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/20">
          <div className="section-container">
            <h2 className="text-3xl font-bold mb-12 text-center">Keunggulan Offline Learning</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Users, title: "Networking Langsung", desc: "Bertemu langsung dengan profesional industri" },
                { icon: Zap, title: "Hands-on Practice", desc: "Praktek langsung di lab dengan peralatan profesional" },
                { icon: Award, title: "Sertifikat Resmi", desc: "Sertifikat yang diakui oleh industri" },
                { icon: MapPin, title: "Lokasi Strategis", desc: "Di Jakarta & Bandung dengan fasilitas lengkap" }
              ].map((f, idx) => {
                const Icon = f.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <Icon className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">{f.title}</h3>
                      <p className="text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default BootcampOffline;
