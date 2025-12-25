import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
    Award,
    Brain,
    Briefcase,
    CheckCircle,
    ChevronRight,
    FileText,
    MessageCircle
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const JobReady = () => {
  const services = [
    {
      id: "job-connect",
      title: "Job Connect",
      subtitle: "Koneksi dengan Perusahaan Partner",
      description: "Dapatkan akses ke ratusan lowongan kerja dari perusahaan-perusahaan terkemuka di industri teknologi. Tim kami akan mencocokkan profil Anda dengan posisi yang sesuai.",
      icon: Briefcase,
      features: [
        "Akses ke 100+ lowongan kerja",
        "Pencocokan dengan perusahaan terbaik",
        "Proses aplikasi yang mudah",
        "Priority untuk alumni bootcamp"
      ],
      benefits: "Temukan pekerjaan impian dengan cepat",
      link: "/job-connect"
    },
    {
      id: "cv-analyzer",
      title: "CV Analyzer",
      subtitle: "Optimasi CV Untuk Sukses Interview",
      description: "Analisis mendalam terhadap CV Anda dari expert recruiter. Kami memberikan feedback detail untuk meningkatkan ATS score dan menarik perhatian recruiter.",
      icon: FileText,
      features: [
        "Review CV dari expert",
        "ATS optimization advice",
        "Format recommendation",
        "Content improvement suggestions"
      ],
      benefits: "CV yang lebih menarik bagi recruiter",
      link: "/job-ready/cv-analyzer"
    },
    {
      id: "career-coaching",
      title: "Career Coaching",
      subtitle: "Bimbingan Persiapan Karir Profesional",
      description: "Konsultasi intensif dengan career coach berpengalaman untuk merencanakan trajectory karir Anda. Dari interview prep hingga negotiation strategy.",
      icon: Brain,
      features: [
        "Sesi coaching 1-on-1",
        "Career planning & strategy",
        "Interview preparation",
        "Salary negotiation tips"
      ],
      benefits: "Karir yang terstruktur & sustainable",
      link: "/job-ready/career-coaching"
    },
    {
      id: "interview-ai",
      title: "Interview with AI",
      subtitle: "Latihan Interview Menggunakan AI Coach",
      description: "Praktik interview dengan AI coach yang canggih. Dapatkan feedback real-time tentang performance, body language, dan communication skills Anda.",
      icon: MessageCircle,
      features: [
        "AI-powered interview simulation",
        "Real-time feedback",
        "Multiple question types",
        "Performance analytics"
      ],
      benefits: "Siap menghadapi interview apapun",
      link: "/job-ready/interview-ai"
    },
    {
      id: "job-guarantee",
      title: "Jaminan Job Interview",
      subtitle: "Jaminan Interview dengan Perusahaan Top",
      description: "Bonus eksklusif untuk alumni bootcamp Job Ready. Kami jamin Anda akan mendapat kesempatan interview dengan minimal 3 perusahaan partner.",
      icon: Award,
      features: [
        "Jaminan interview 3+ perusahaan",
        "Perusahaan tier-1",
        "Interview coaching gratis",
        "Lifetime job support"
      ],
      benefits: "Karir yang dijamin untuk alumni",
      link: "/job-ready/job-guarantee"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Job Ready - Intelligo Indonesia | Karir Impian Menanti</title>
        <meta name="description" content="Layanan Job Ready dari Intelligo: Job Connect, CV Analyzer, Career Coaching, Interview with AI, dan Jaminan Job Interview untuk alumni bootcamp." />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Job Ready Program
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Wujudkan <span className="text-accent">Karir Impian</span> Anda
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Comprehensive job readiness program dengan 5 layanan unggulan untuk memastikan Anda mendapatkan pekerjaan terbaik di industri teknologi.
              </p>
              <Button className="bg-accent hover:bg-accent/90" size="lg" asChild>
                <a href="https://www.intelligo.id/jobs/" target="_blank" rel="noopener noreferrer">
                  Mulai Sekarang
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                5 Layanan Unggulan Job Ready
              </h2>
              <p className="text-muted-foreground text-lg">
                Semua tools & coaching yang Anda butuhkan untuk sukses di dunia kerja
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.id} className="bg-card border border-border/50 rounded-2xl p-8 hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{service.title}</h3>
                    <p className="text-accent font-semibold text-sm mb-4">{service.subtitle}</p>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-6">
                      <p className="font-semibold text-foreground text-sm">{service.benefits}</p>
                    </div>
                    
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold" asChild>
                      <Link to={service.link}>
                        Pelajari Lebih Lanjut
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="section-padding bg-secondary/20">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Mengapa Pilih Job Ready?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Comprehensive Program",
                    desc: "5 layanan terintegrasi yang dirancang khusus untuk kesuksesan karir Anda di industri tech."
                  },
                  {
                    title: "Expert Guidance",
                    desc: "Dipandu oleh career coach dan recruiter berpengalaman yang memahami industri tech."
                  },
                  {
                    title: "AI-Powered Tools",
                    desc: "Teknologi AI terdepan untuk interview simulation dan CV optimization yang akurat."
                  },
                  {
                    title: "Industry Connections",
                    desc: "Akses langsung ke 50+ perusahaan partner termasuk unicorn dan startup berkembang pesat."
                  },
                  {
                    title: "Lifetime Support",
                    desc: "Support berkelanjutan bahkan setelah Anda mendapatkan pekerjaan untuk career advancement."
                  },
                  {
                    title: "Gratis untuk Alumni",
                    desc: "100% gratis untuk alumni bootcamp Job Ready Intelligo. Tanpa biaya tambahan apapun."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-white font-bold text-sm">
                        {idx + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-accent/10 to-accent/5">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Siap untuk Karir Impian?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Bergabung dengan ratusan alumni yang telah berhasil mendapatkan pekerjaan di perusahaan terbaik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-accent hover:bg-accent/90" size="lg" asChild>
                  <a href="https://www.intelligo.id/jobs/" target="_blank" rel="noopener noreferrer">
                    Explore Lowongan
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

export default JobReady;
