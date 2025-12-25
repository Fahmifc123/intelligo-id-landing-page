import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Target, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";

const BootcampMalam = () => {
  return (
    <>
      <Helmet>
        <title>Bootcamp Malam (Weekday) | Intelligo Indonesia</title>
        <meta name="description" content="Bootcamp Online Malam Weekday dengan live class interaktif. Belajar Data Science, AI Beginner, atau Job Ready dengan jadwal fleksibel Senin-Rabu-Jumat." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Clock className="w-4 h-4" />
                  Bootcamp Malam (Weekday)
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Bootcamp Online <span className="text-accent">Malam</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Program intensif dengan jadwal fleksibel Senin, Rabu, Jumat pukul 19:30-21:30 WIB. 
                  Ideal untuk yang masih bekerja atau kuliah dan ingin belajar Data Science & AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                    Daftar Sekarang
                  </Button>
                  <Button variant="outline" size="lg">
                    Hubungi Kami
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <Clock className="w-32 h-32 text-accent/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">Jadwal Fleksibel Malam</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pilih Program Anda
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tersedia 3 pilihan program sesuai dengan level dan tujuan karir Anda
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Data Science Beginner", sessions: "25x", price: "Rp1.500.000" },
                { title: "AI Beginner", sessions: "35x", price: "Rp2.250.000" },
                { title: "Job Ready", sessions: "50x", price: "Rp3.900.000", popular: true }
              ].map((program, idx) => (
                <div key={idx} className={`rounded-lg border p-6 transition-all duration-300 ${program.popular ? "border-accent bg-accent/5" : "border-border/50"}`}>
                  {program.popular && <div className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">Populer</div>}
                  <h3 className="text-2xl font-bold text-foreground mb-2">{program.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{program.sessions} Pertemuan</p>
                  <p className="text-3xl font-bold text-accent mb-6">{program.price}</p>
                  <Button className="w-full">Pilih Program</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-secondary/20">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Mengapa Bootcamp Malam?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Clock, title: "Jadwal Fleksibel", desc: "Belajar malam hari tanpa mengorbankan pekerjaan atau kuliah" },
                { icon: Users, title: "Live Interactive", desc: "Pembelajaran langsung dengan trainer profesional berpengalaman" },
                { icon: Target, title: "Siap Karir", desc: "Kurikulum job ready dengan project nyata dari industri" },
                { icon: CheckCircle, title: "Support Penuh", desc: "Mentoring, networking, dan career guidance seumur hidup" }
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <Icon className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
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

export default BootcampMalam;
