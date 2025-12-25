import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const PrivateCourseOffline = () => {
  return (
    <>
      <Helmet>
        <title>Private Course Offline | Intelligo Indonesia</title>
        <meta name="description" content="Private Course Offline 1-on-1 dengan jadwal fleksibel Sabtu-Minggu. Mentoring personal dengan kurikulum custom sesuai kebutuhan Anda." />
      </Helmet>
      <Navbar />
      <main className="pt-20">
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Users className="w-4 h-4" />
                  Private Course Offline
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Private Course <span className="text-accent">Offline</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Mentoring 1-on-1 offline dengan jadwal fleksibel Sabtu-Minggu. Kurikulum disesuaikan dengan kebutuhan Anda, lokasi fleksibel (café/coworking), dan pembelajaran intensif personal.
                </p>
                <Button className="bg-accent hover:bg-accent/90" size="lg">Hubungi Kami</Button>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
                <Users className="w-32 h-32 text-accent/30" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Paket Private Course Offline</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Per Sesi Fleksibel", sessions: "2 Jam/Sesi", price: "Rp300.000/sesi", desc: "Jadwal dan materi fleksibel" },
                { title: "Data Science Beginner", sessions: "6x Full Day", price: "Rp1.000.000/sesi", desc: "Program 6 sesi fullday" },
                { title: "AI Beginner", sessions: "10x Full Day", price: "Rp1.000.000/sesi", desc: "Program 10 sesi fullday", popular: true }
              ].map((p, idx) => (
                <div key={idx} className={`border rounded-lg p-6 ${p.popular ? "border-accent bg-accent/5" : ""}`}>
                  {p.popular && <span className="text-xs font-bold bg-accent text-white px-3 py-1 rounded-full inline-block mb-4">Populer</span>}
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{p.sessions}</p>
                  <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                  <p className="text-2xl font-bold text-accent mb-4">{p.price}</p>
                  <Button className="w-full" variant={p.popular ? "default" : "outline"}>Hubungi Kami</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/20">
          <div className="section-container">
            <h2 className="text-3xl font-bold mb-12 text-center">Keuntungan Private Offline</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Clock, title: "Jadwal 100% Fleksibel", desc: "Sesuaikan jam belajar dengan kesibukan Anda" },
                { icon: Users, title: "Mentoring Personal", desc: "1-on-1 focus dengan mentor berpengalaman" },
                { icon: Zap, title: "Kurikulum Custom", desc: "Materi disesuaikan dengan kebutuhan & goals" },
                { icon: CheckCircle, title: "Lokasi Flexible", desc: "Belajar di café, coworking, atau tempat pilihan Anda" }
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

export default PrivateCourseOffline;
