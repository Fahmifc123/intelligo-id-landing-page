import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, CheckCircle, Users, Target, Award, BarChart3, Briefcase, Lightbulb } from "lucide-react";

const benefits = [
  "Kurikulum disesuaikan dengan kebutuhan perusahaan",
  "Trainer berpengalaman dari industri tech",
  "Fleksibilitas lokasi: onsite atau online",
  "Assessment dan progress report untuk setiap peserta",
  "Sertifikasi resmi untuk karyawan",
  "Konsultasi gratis untuk analisis kebutuhan training"
];

const services = [
  { icon: BarChart3, title: "Data Analytics Training", desc: "Pelatihan analisis data untuk pengambilan keputusan berbasis data" },
  { icon: Lightbulb, title: "AI Implementation", desc: "Workshop implementasi AI untuk otomatisasi dan efisiensi bisnis" },
  { icon: Target, title: "Digital Transformation", desc: "Program transformasi digital untuk meningkatkan daya saing" },
  { icon: Users, title: "Team Upskilling", desc: "Peningkatan kompetensi tim secara berkelanjutan" }
];

const clients = [
  "Startup Teknologi",
  "Perusahaan Multinasional",
  "BUMN",
  "Instansi Pemerintahan",
  "Perbankan & Fintech",
  "E-commerce"
];

const CorporateTraining = () => {
  return (
    <>
      <Helmet>
        <title>Corporate Training | Intelligo Indonesia</title>
        <meta name="description" content="Pelatihan AI & Data untuk perusahaan, instansi pemerintahan, startup, hingga BUMN. Program corporate training yang disesuaikan dengan kebutuhan organisasi." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Building2 className="w-4 h-4" />
                  Corporate Training
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Corporate <span className="text-accent">Training</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Pelatihan untuk perusahaan, instansi pemerintahan, startup, hingga BUMN. 
                  Tingkatkan kompetensi tim Anda dengan program training yang disesuaikan dengan kebutuhan organisasi.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" variant="accent">
                    <a href="https://intelligo.id/wa-mintell" target="_blank" rel="noopener noreferrer">
                      Request Proposal
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
                <h3 className="text-xl font-bold text-foreground mb-6">Trusted by</h3>
                <div className="flex flex-wrap gap-3">
                  {clients.map((client, index) => (
                    <span key={index} className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Layanan Training</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Program training yang komprehensif untuk berbagai kebutuhan organisasi
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border/50 shadow-card text-center hover:shadow-card-hover transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kenapa Pilih Kami?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Partner terpercaya untuk pengembangan SDM di bidang AI & Data
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

        {/* Process Section */}
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Proses Kerja Sama</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Langkah mudah untuk memulai training di perusahaan Anda
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Konsultasi", desc: "Diskusi kebutuhan dan tujuan training" },
                { step: "2", title: "Proposal", desc: "Penyusunan kurikulum dan timeline" },
                { step: "3", title: "Pelaksanaan", desc: "Training dengan trainer profesional" },
                { step: "4", title: "Evaluasi", desc: "Assessment dan laporan progress" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-accent/10">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Siap Upgrade Tim Anda?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Konsultasikan kebutuhan training perusahaan Anda dengan tim kami
            </p>
            <Button asChild size="lg" variant="accent">
              <a href="https://intelligo.id/wa-mintell" target="_blank" rel="noopener noreferrer">
                Request Proposal
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CorporateTraining;
