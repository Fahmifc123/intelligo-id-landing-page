import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Zap, CheckCircle, Briefcase, Target, FileCheck, Users, Award, TrendingUp } from "lucide-react";

const benefits = [
  "Jaminan interview kerja di perusahaan partner",
  "Pendampingan karir intensif hingga dapat kerja",
  "CV dan portfolio review oleh HR profesional",
  "Mock interview dengan feedback detail",
  "Koneksi langsung ke hiring manager",
  "Job guarantee program dengan refund policy"
];

const phases = [
  { icon: Target, title: "Phase 1: Foundation", duration: "4 minggu", desc: "Penguasaan fundamental programming, database, dan tools esensial" },
  { icon: Zap, title: "Phase 2: Core Skills", duration: "6 minggu", desc: "Deep dive ke Machine Learning, Data Analysis, atau AI Engineering" },
  { icon: FileCheck, title: "Phase 3: Portfolio", duration: "3 minggu", desc: "Membangun 3-5 project real-world untuk portfolio profesional" },
  { icon: Briefcase, title: "Phase 4: Career Launch", duration: "3 minggu", desc: "Interview prep, networking, dan job matching dengan partner" }
];

const stats = [
  { value: "95%", label: "Tingkat kelulusan" },
  { value: "3 bulan", label: "Rata-rata dapat kerja" },
  { value: "150+", label: "Alumni sukses" },
  { value: "50+", label: "Perusahaan partner" }
];

const JobReadyBootcamp = () => {
  return (
    <>
      <Helmet>
        <title>Job Ready Bootcamp | Intelligo Indonesia</title>
        <meta name="description" content="Program intensif dengan jaminan interview kerja dan pendampingan karir. Bootcamp AI & Data Science yang siap kerja." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Zap className="w-4 h-4" />
                  Job Ready Bootcamp
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Job Ready <span className="text-accent">Bootcamp</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Program intensif dengan jaminan interview kerja dan pendampingan karir. 
                  Didesain khusus untuk mempersiapkan kamu masuk ke industri AI & Data Science dalam waktu singkat.
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
                <h3 className="text-xl font-bold text-foreground mb-6">Program Guarantee</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Job Interview Guarantee</p>
                      <p className="text-sm text-muted-foreground">Jaminan interview di perusahaan partner</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Career Mentoring</p>
                      <p className="text-sm text-muted-foreground">Pendampingan hingga dapat kerja</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Refund Policy</p>
                      <p className="text-sm text-muted-foreground">Garansi uang kembali jika tidak puas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-accent">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-accent-foreground mb-2">{stat.value}</p>
                  <p className="text-accent-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Apa yang Kamu Dapat?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Investasi terbaik untuk karir di bidang AI & Data
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

        {/* Program Phases */}
        <section className="section-padding">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Program Timeline</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                16 minggu intensif menuju karir impian
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {phases.map((phase, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border/50 shadow-card relative">
                  <div className="absolute -top-3 left-6 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {phase.duration}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mt-4 mb-4">
                    <phase.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-accent/10">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Siap Menjadi Data Professional?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Mulai perjalanan karir kamu dengan program yang menjamin hasil
            </p>
            <Button asChild size="lg" variant="accent">
              <a href="https://intelligo.id/wa-mintell" target="_blank" rel="noopener noreferrer">
                Daftar Job Ready Bootcamp
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default JobReadyBootcamp;
