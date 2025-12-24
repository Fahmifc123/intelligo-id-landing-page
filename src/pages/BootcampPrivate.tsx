import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Monitor, CheckCircle, Clock, Target, Star, Award, Zap } from "lucide-react";

const benefits = [
  "Perhatian penuh 100% dari trainer profesional",
  "Kurikulum eksklusif yang bisa di-custom",
  "Jadwal dan pace belajar sepenuhnya fleksibel",
  "Akses langsung ke trainer via WhatsApp",
  "Real project dari industri sebagai portofolio",
  "Job placement assistance setelah lulus"
];

const features = [
  { icon: Star, title: "Premium Quality", desc: "Trainer berpengalaman dari top tech companies" },
  { icon: Target, title: "Goal Oriented", desc: "Program dirancang untuk mencapai target karir spesifik" },
  { icon: Zap, title: "Fast Track", desc: "Akselerasi pembelajaran sesuai kemampuan peserta" },
  { icon: Award, title: "Guaranteed Result", desc: "Jaminan kompetensi dan pendampingan hingga siap kerja" }
];

const BootcampPrivate = () => {
  return (
    <>
      <Helmet>
        <title>Bootcamp Private | Intelligo Indonesia</title>
        <meta name="description" content="Program eksklusif dengan perhatian penuh dari trainer profesional. Bootcamp AI & Data Science premium untuk hasil maksimal." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Monitor className="w-4 h-4" />
                  Bootcamp Private
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Bootcamp <span className="text-accent">Private</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Program eksklusif dengan perhatian penuh dari trainer profesional. 
                  Dapatkan pengalaman belajar premium dengan kurikulum yang sepenuhnya disesuaikan untuk tujuan karir kamu.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" variant="accent">
                    <a href="https://intelligo.id/wa-mintell" target="_blank" rel="noopener noreferrer">
                      Daftar Sekarang
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="https://intelligo.id/wa-mintell" target="_blank" rel="noopener noreferrer">
                      Konsultasi Gratis
                    </a>
                  </Button>
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-6">Exclusive Features</h3>
                <div className="space-y-4">
                  {features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{feature.title}</p>
                        <p className="text-sm text-muted-foreground">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Keuntungan Premium</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Investasi terbaik untuk karir impian kamu
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-6 rounded-xl border border-border/50">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section-padding">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kenapa Pilih Private?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Program premium untuk hasil yang premium
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border/50 shadow-card text-center hover:shadow-card-hover transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-accent/10">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Investasi Terbaik untuk Karir
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Dapatkan pengalaman belajar eksklusif dengan trainer terbaik
            </p>
            <Button asChild size="lg" variant="accent">
              <a href="https://intelligo.id/wa-mintell" target="_blank" rel="noopener noreferrer">
                Konsultasi Gratis
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BootcampPrivate;
