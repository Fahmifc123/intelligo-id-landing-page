import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle, ChevronRight, Shield, Star, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const JobGuarantee = () => {
  return (
    <>
      <Helmet>
        <title>Jaminan Job Interview - Intelligo Indonesia | Jaminan Interview dengan Perusahaan Top</title>
        <meta name="description" content="Jaminan Job Interview Intelligo: Bonus eksklusif untuk alumni bootcamp Job Ready. Jaminan interview dengan 3+ perusahaan tier-1." />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Award className="w-4 h-4" />
                  Jaminan Job Interview
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Jaminan Interview dengan <span className="text-accent">Perusahaan Top</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Bonus eksklusif untuk alumni bootcamp Job Ready. Kami jamin Anda akan mendapat kesempatan interview dengan minimal 3 perusahaan partner tier-1.
                </p>
                <Button className="bg-accent hover:bg-accent/90" size="lg" asChild>
                  <a href="https://bit.ly/tanya-mintell" target="_blank" rel="noopener noreferrer">
                    Daftar Bootcamp Job Ready
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
                <Award className="w-32 h-32 text-accent/30" />
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Details */}
        <section className="section-padding bg-secondary/20">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Apa yang Dijamin
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Interview dengan 3+ Perusahaan", desc: "Minimal 3 kesempatan interview dengan perusahaan partner tier-1" },
                { title: "Perusahaan Berkualitas", desc: "Semua perusahaan adalah unicorn, market leader, atau fast-growing startup" },
                { title: "Interview Coaching", desc: "Free coaching dan preparation sebelum interview dengan setiap perusahaan" },
                { title: "Lifetime Support", desc: "Dukungan penuh bahkan setelah Anda mendapat pekerjaan" },
                { title: "Career Progression", desc: "Support berkelanjutan untuk career advancement di perusahaan" },
                { title: "Networking Access", desc: "Akses ke alumni network dan professional community" }
              ].map((item, idx) => (
                <div key={idx} className="bg-card rounded-lg p-6 border border-border/50 hover:border-accent/30 transition-all">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Syarat Jaminan Job Interview
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { num: "01", title: "Selesaikan Program Job Ready", desc: "Menyelesaikan bootcamp Job Ready dengan nilai memuaskan" },
                { num: "02", title: "Lengkapi Portofolio", desc: "Memiliki minimal 3 portfolio project berkualitas dari bootcamp" },
                { num: "03", title: "Active dalam Job Search", desc: "Berkomitmen aktif mengikuti interview coaching dan preparation" },
                { num: "04", title: "Meet Qualification", desc: "Memenuhi kriteria minimal yang ditetapkan oleh perusahaan partner" }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-accent text-white font-bold text-lg">
                      {step.num}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="section-padding bg-gradient-to-r from-accent/10 to-accent/5">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Keberhasilan Alumni
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { value: "95%", label: "Alumni Mendapat Job Interview", icon: Star },
                { value: "80%", label: "Sukses Mendapat Offer", icon: Shield },
                { value: "3x", label: "Rata-rata Interview Opportunities", icon: Zap }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-card rounded-lg p-8 border border-border/50 text-center">
                    <Icon className="w-10 h-10 text-accent mx-auto mb-4" />
                    <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                    <p className="text-foreground">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Proses Jaminan Job Interview
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                "Selesaikan bootcamp Job Ready dengan hasil yang memuaskan",
                "Presentasikan portfolio project Anda kepada tim Intelligo",
                "Tim kami akan match Anda dengan perusahaan yang sesuai",
                "Dapatkan interview coaching untuk setiap perusahaan",
                "Interview dengan minimal 3 perusahaan tier-1",
                "Dapatkan feedback dan support untuk improve opportunity"
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-card rounded-lg border border-border/50">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-white font-bold text-sm">
                      {idx + 1}
                    </div>
                  </div>
                  <p className="font-medium text-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Siap untuk Jaminan Job Interview?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Daftar bootcamp Job Ready sekarang dan dapatkan jaminan interview dengan perusahaan-perusahaan terbaik di industri.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-accent hover:bg-accent/90" size="lg" asChild>
                  <a href="https://bit.ly/tanya-mintell" target="_blank" rel="noopener noreferrer">
                    Daftar Sekarang
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/job-ready">
                    Kembali ke Job Ready
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default JobGuarantee;
