import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Briefcase, CheckCircle, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const JobConnect = () => {
  return (
    <>
      <Helmet>
        <title>Job Connect - Intelligo Indonesia | Koneksi dengan Perusahaan Partner</title>
        <meta name="description" content="Job Connect Intelligo: Akses ke ratusan lowongan kerja dari perusahaan terkemuka. Tim kami mencocokkan profil Anda dengan posisi yang sesuai." />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Briefcase className="w-4 h-4" />
                  Job Connect
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Koneksi dengan <span className="text-accent">Perusahaan Partner</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Dapatkan akses ke ratusan lowongan kerja dari perusahaan-perusahaan terkemuka di industri teknologi. Tim kami akan mencocokkan profil Anda dengan posisi yang sesuai.
                </p>
                <Button className="bg-accent hover:bg-accent/90" size="lg" asChild>
                  <a href="https://www.intelligo.id/jobs/" target="_blank" rel="noopener noreferrer">
                    Cek Lowongan Sekarang
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
                <Briefcase className="w-32 h-32 text-accent/30" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-secondary/20">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Fitur Job Connect
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "100+ Lowongan Kerja", desc: "Akses ke ratusan posisi dari berbagai industri" },
                { title: "Pencocokan Cerdas", desc: "AI-powered matching antara skill Anda dengan kebutuhan perusahaan" },
                { title: "Proses Mudah", desc: "Aplikasi yang simple dan tracking status real-time" },
                { title: "Priority Alumni", desc: "Prioritas khusus untuk alumni bootcamp Intelligo" },
                { title: "50+ Perusahaan Partner", desc: "Dari startup hingga unicorn di berbagai sektor" },
                { title: "Support Penuh", desc: "Tim recruiter siap membantu proses dari awal hingga akhir" }
              ].map((feature, idx) => (
                <div key={idx} className="bg-card rounded-lg p-6 border border-border/50 hover:border-accent/30 transition-all">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Cara Kerja Job Connect
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { num: "01", title: "Lengkapi Profil", desc: "Isi profil Anda dengan detail tentang skills, experience, dan target posisi" },
                { num: "02", title: "Matching Process", desc: "Sistem kami akan mencocokkan profil dengan lowongan yang tersedia" },
                { num: "03", title: "Aplikasi Otomatis", desc: "Kami submit aplikasi Anda ke perusahaan yang cocok" },
                { num: "04", title: "Interview & Offer", desc: "Dapatkan kesempatan interview dan menerima penawaran kerja" }
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

        {/* Stats Section */}
        <section className="section-padding bg-gradient-to-r from-accent/10 to-accent/5">
          <div className="section-container">
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { value: "100+", label: "Lowongan Kerja" },
                { value: "50+", label: "Perusahaan Partner" },
                { value: "500+", label: "Alumni Berhasil" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                  <p className="text-foreground text-lg">{stat.label}</p>
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
                Siap Mulai Mencari Kerja?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Bergabunglah dengan Job Connect dan temukan pekerjaan terbaik untuk karir Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-accent hover:bg-accent/90" size="lg" asChild>
                  <a href="https://www.intelligo.id/jobs/" target="_blank" rel="noopener noreferrer">
                    Cek Lowongan
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://bit.ly/tanya-mintell" target="_blank" rel="noopener noreferrer">
                    Konsultasi Gratis
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

export default JobConnect;
