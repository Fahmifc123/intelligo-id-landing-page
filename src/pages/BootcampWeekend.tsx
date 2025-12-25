import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, Target, Users, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const BootcampWeekend = () => {
  return (
    <>
      <Helmet>
        <title>Weekend Bootcamp Online | Intelligo Indonesia</title>
        <meta name="description" content="Weekend Bootcamp Online dengan jadwal Sabtu-Minggu 10:00-15:00 WIB. Program intensif 4 jam per hari untuk Data Science & AI." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Calendar className="w-4 h-4" />
                  Weekend Bootcamp Online
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Bootcamp <span className="text-accent">Weekend</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Program intensif akhir pekan dengan jadwal Sabtu-Minggu 10:00-15:00 WIB. 
                  Sempurna untuk yang ingin fokus belajar tanpa konflik dengan pekerjaan weekday.
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
                  <Calendar className="w-32 h-32 text-accent/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">Sabtu-Minggu 10:00-15:00 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              3 Program Pilihan
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Data Science Beginner", sessions: "12x", price: "Rp1.750.000" },
                { title: "AI Beginner", sessions: "17x", price: "Rp2.500.000" },
                { title: "Job Ready", sessions: "25x", price: "Rp3.950.000", popular: true }
              ].map((program, idx) => (
                <div key={idx} className={`rounded-lg border p-6 ${program.popular ? "border-accent bg-accent/5" : "border-border/50"}`}>
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

        <section className="section-padding bg-secondary/20">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Keuntungan Bootcamp Weekend
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Zap, title: "Intensif Terfokus", desc: "4 jam pembelajaran intensif setiap weekend" },
                { icon: Users, title: "Batch Kecil", desc: "Maksimal 20 peserta untuk interaksi optimal" },
                { icon: Target, title: "Full Stack", desc: "Pelajari dari Python hingga ML deployment" },
                { icon: CheckCircle, title: "Sertifikat", desc: "Sertifikat kompetensi yang diakui industri" }
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

export default BootcampWeekend;
