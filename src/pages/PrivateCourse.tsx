import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { User, CheckCircle, Clock, Target, BookOpen, Award } from "lucide-react";

const benefits = [
  "Custom silabus sesuai kebutuhan dan tujuan karir",
  "Jadwal fleksibel, bisa disesuaikan dengan kesibukan",
  "Perhatian penuh dari trainer profesional",
  "Progress tracking personal dan feedback langsung",
  "Materi dan proyek disesuaikan dengan industri target",
  "Akses seumur hidup ke rekaman sesi dan materi"
];

const curriculum = [
  { title: "Assessment & Goal Setting", desc: "Evaluasi kemampuan awal dan penentuan tujuan pembelajaran" },
  { title: "Fundamental Concepts", desc: "Penguasaan dasar-dasar programming dan data" },
  { title: "Core Skills Development", desc: "Pengembangan skill inti sesuai track yang dipilih" },
  { title: "Real Project Implementation", desc: "Implementasi proyek nyata dengan bimbingan langsung" },
  { title: "Portfolio Building", desc: "Pembuatan portfolio profesional untuk job hunting" },
  { title: "Interview Preparation", desc: "Persiapan interview teknis dan behavioral" }
];

const PrivateCourse = () => {
  return (
    <>
      <Helmet>
        <title>Private Course 1-on-1 | Intelligo Indonesia</title>
        <meta name="description" content="Mentoring personal dengan custom silabus sesuai kebutuhan dan jadwal fleksibel. Belajar AI & Data Science dengan trainer profesional." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <User className="w-4 h-4" />
                  Private Course
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Private Course <span className="text-accent">1-on-1</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Mentoring personal dengan custom silabus sesuai kebutuhan dan jadwal fleksibel. 
                  Dapatkan perhatian penuh dari trainer profesional untuk akselerasi karir di bidang AI & Data Science.
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
                <h3 className="text-xl font-bold text-foreground mb-6">Program Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Durasi Fleksibel</p>
                      <p className="text-sm text-muted-foreground">Sesuaikan dengan kecepatan belajar</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Custom Curriculum</p>
                      <p className="text-sm text-muted-foreground">Materi disesuaikan kebutuhan</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Sertifikasi</p>
                      <p className="text-sm text-muted-foreground">Sertifikat resmi Intelligo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Keuntungan Private Course</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Belajar dengan cara yang paling efektif untuk mencapai tujuan karir kamu
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

        {/* Curriculum Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Alur Pembelajaran</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Proses belajar yang terstruktur untuk hasil maksimal
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {curriculum.map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border/50 shadow-card">
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-accent/10">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Siap Mulai Perjalanan Karir?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Konsultasikan kebutuhan belajar kamu dengan tim kami secara gratis
            </p>
            <Button asChild size="lg" variant="accent">
              <a href="https://intelligo.id/wa-mintell" target="_blank" rel="noopener noreferrer">
                Konsultasi Gratis Sekarang
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PrivateCourse;
