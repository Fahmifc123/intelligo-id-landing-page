import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Brain, CheckCircle, ChevronRight, Target, TrendingUp, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";

const CareerCoaching = () => {
  return (
    <>
      <Helmet>
        <title>Career Coaching - Intelligo Indonesia | Persiapan Karir Profesional</title>
        <meta name="description" content="Career Coaching Intelligo: Konsultasi intensif dengan career coach berpengalaman. Career planning, interview prep, dan salary negotiation strategy." />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Brain className="w-4 h-4" />
                  Career Coaching
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Bimbingan <span className="text-accent">Karir Profesional</span> yang Terstruktur
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Konsultasi intensif dengan career coach berpengalaman untuk merencanakan trajectory karir Anda. Dari interview prep hingga negotiation strategy.
                </p>
                <Button className="bg-accent hover:bg-accent/90" size="lg" asChild>
                  <a href="https://bit.ly/tanya-mintell" target="_blank" rel="noopener noreferrer">
                    Booking Sesi Coaching
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
                <Brain className="w-32 h-32 text-accent/30" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-secondary/20">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Layanan Coaching Kami
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Career Planning", desc: "Rencanakan trajectory karir jangka panjang dengan strategi yang jelas" },
                { title: "Interview Preparation", desc: "Simulasi interview dengan feedback detail dan tips untuk sukses" },
                { title: "Salary Negotiation", desc: "Strategi negosiasi gaji dan benefits untuk deal terbaik" },
                { title: "Personal Branding", desc: "Bangun personal brand yang strong di LinkedIn dan platform lainnya" },
                { title: "Skill Development", desc: "Identifikasi skill gap dan rencana pengembangan diri" },
                { title: "Job Search Strategy", desc: "Strategi efektif mencari pekerjaan di industri tech" }
              ].map((service, idx) => (
                <div key={idx} className="bg-card rounded-lg p-6 border border-border/50 hover:border-accent/30 transition-all">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coaching Format */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Format Coaching
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { num: "01", title: "1-on-1 Consultation", desc: "Sesi private dengan career coach dedicated untuk Anda" },
                { num: "02", title: "Personalized Plan", desc: "Rencana karir custom berdasarkan goals dan keahlian Anda" },
                { num: "03", title: "Ongoing Support", desc: "Support berkelanjutan selama job search dan career transition" },
                { num: "04", title: "Success Tracking", desc: "Monitor progress dan adjust strategy sesuai perkembangan" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-accent text-white font-bold text-lg">
                      {item.num}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-gradient-to-r from-accent/10 to-accent/5">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Manfaat Career Coaching
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: "Jelas Arah Karir",
                    desc: "Memiliki roadmap karir yang jelas dan achievable goals"
                  },
                  {
                    icon: Users,
                    title: "Networking Berkualitas",
                    desc: "Akses network profesional dan peluang kolaborasi"
                  },
                  {
                    icon: TrendingUp,
                    title: "Accelerated Growth",
                    desc: "Percepatan career growth dengan strategi yang terbukti"
                  }
                ].map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={idx} className="flex gap-6 bg-card rounded-xl p-6 border border-border/50">
                      <Icon className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Siap Membentuk Karir Impian Anda?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Konsultasi dengan career coach expert dan dapatkan rencana karir yang terstruktur untuk kesuksesan jangka panjang.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-accent hover:bg-accent/90" size="lg" asChild>
                  <a href="https://bit.ly/tanya-mintell" target="_blank" rel="noopener noreferrer">
                    Booking Sesi Sekarang
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

export default CareerCoaching;
