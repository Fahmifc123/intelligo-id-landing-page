import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, CheckCircle, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";

const BootcampWeekday = () => {
  return (
    <>
      <Helmet>
        <title>Weekday Bootcamp Offline | Intelligo Indonesia</title>
        <meta name="description" content="Weekday Bootcamp Offline intensif Senin-Sabtu di Jakarta & Bandung. Full day learning dengan praktik langsung dan career coaching." />
      </Helmet>
      <Navbar />
      <main className="pt-20">
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Calendar className="w-4 h-4" />
                  Weekday Bootcamp
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Weekday Bootcamp <span className="text-accent">Offline</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Program intensif Senin-Sabtu 09:00-17:00 WIB di Jakarta & Bandung. Fokus penuh pada pembelajaran dan persiapan karir dengan mentoring langsung dan job guarantee.
                </p>
                <Button className="bg-accent hover:bg-accent/90" size="lg">Daftar Sekarang</Button>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
                <Calendar className="w-32 h-32 text-accent/30" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Paket Weekday Intensive</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {[
                { title: "Weekday Bootcamp Offline", sessions: "16x Full Day", price: "Rp10.135.000", popular: true },
                { title: "AI Bootcamp Offline", sessions: "10x Full Day", price: "Rp6.300.000" }
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
            <h2 className="text-3xl font-bold mb-12 text-center">Mengapa Weekday Intensive?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Briefcase, title: "Job Ready Program", desc: "Persiapan kerja lengkap dengan career coaching" },
                { icon: Users, title: "Full Time Commitment", desc: "Fokus penuh tanpa distraksi pekerjaan sampingan" },
                { icon: CheckCircle, title: "Job Guarantee", desc: "Jaminan interview kerja di perusahaan partner" },
                { icon: Briefcase, title: "Portfolio Projects", desc: "10+ project nyata untuk portfolio Anda" }
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

export default BootcampWeekday;
