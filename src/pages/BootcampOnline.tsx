import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PackageDetailPopup from "@/components/PackageDetailPopup";
import PaymentPopup from "@/components/PaymentPopup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, BookOpen, Clock, Target, Users, Zap } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

interface BootcampPackage {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  paymentLink: string;
  schedule: string;
  duration: string;
  sessions: number;
  features: string[];
}

const BootcampOnline = () => {
  const [isDetailPopupOpen, setIsDetailPopupOpen] = useState(false);
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<BootcampPackage | null>(null);

  const packages: BootcampPackage[] = [
    {
      id: "malam-beginner",
      name: "Bootcamp Malam - Data Science Beginner",
      subtitle: "25-35 sesi pembelajaran",
      price: "Rp3.800.000",
      paymentLink: "https://intelligo.myr.id/pl/bc-ds-beginner",
      schedule: "Senin, Rabu, Jumat | 19:30 - 21:30 WIB",
      duration: "3 bulan",
      sessions: 30,
      features: [
        "Belajar Python dari dasar",
        "SQL untuk data manipulation",
        "Data analysis dengan Pandas & NumPy",
        "Visualization dengan Matplotlib & Seaborn",
        "Introduksi Machine Learning",
        "Mentoring 1-on-1 personal",
        "Akses materi selamanya",
        "Portfolio project"
      ]
    },
    {
      id: "malam-ai",
      name: "Bootcamp Malam - AI Beginner",
      subtitle: "25-35 sesi pembelajaran",
      price: "Rp6.300.000",
      paymentLink: "https://intelligo.myr.id/pl/bc-ai-beginner-92624",
      schedule: "Senin, Rabu, Jumat | 19:30 - 21:30 WIB",
      duration: "3 bulan",
      sessions: 30,
      features: [
        "Python fundamentals untuk AI",
        "Deep Learning basics dengan TensorFlow",
        "Neural Networks architecture",
        "Natural Language Processing intro",
        "Computer Vision fundamentals",
        "Model training dan evaluation",
        "Mentoring 1-on-1 personal",
        "AI project portfolio"
      ]
    },
    {
      id: "malam-jobready",
      name: "Bootcamp Malam - Job Ready",
      subtitle: "60 sesi pembelajaran kombinasi DS & AI",
      price: "Rp10.135.000",
      paymentLink: "https://intelligo.myr.id/pl/bc-ds-ai-beginner-jobready-85687",
      schedule: "Senin, Rabu, Jumat | 19:30 - 21:30 WIB",
      duration: "6 bulan",
      sessions: 60,
      features: [
        "Complete Data Science curriculum",
        "Advanced AI & Deep Learning",
        "Real-world project experience (5-13 projects)",
        "Career coaching unlimited",
        "CV optimization & LinkedIn",
        "Interview preparation & simulation",
        "Job connector service",
        "Lifetime community access",
        "Sertifikasi profesional LSP"
      ]
    },
    {
      id: "weekend-beginner",
      name: "Weekend Bootcamp - Data Science Beginner",
      subtitle: "6 sesi full-day weekend",
      price: "Rp3.800.000",
      paymentLink: "https://intelligo.myr.id/pl/bootcamp-data-science-for-beginner-online-weekend-class",
      schedule: "Sabtu & Minggu | 10:00 - 17:00 WIB",
      duration: "6 minggu",
      sessions: 12,
      features: [
        "Intensive full-day learning",
        "Python programming",
        "SQL database queries",
        "Data analysis hands-on",
        "Visualization projects",
        "Live mentoring setiap sesi",
        "Q&A session unlimited",
        "Portfolio project"
      ]
    },
    {
      id: "weekend-ai",
      name: "Weekend Bootcamp - AI Beginner",
      subtitle: "6 sesi full-day weekend",
      price: "Rp6.300.000",
      paymentLink: "https://intelligo.myr.id/pl/bootcamp-ai-for-beginner-online-weekend-class",
      schedule: "Sabtu & Minggu | 10:00 - 17:00 WIB",
      duration: "6 minggu",
      sessions: 12,
      features: [
        "AI fundamentals intensive",
        "Machine Learning algorithms",
        "Deep Learning with TensorFlow",
        "Hands-on neural networks",
        "NLP & Computer Vision projects",
        "Live coding sessions",
        "Model deployment basics",
        "Certification preparation"
      ]
    },
    {
      id: "weekend-jobready",
      name: "Weekend Bootcamp - Job Ready",
      subtitle: "16 sesi full-day weekend",
      price: "Rp10.135.000",
      paymentLink: "https://intelligo.myr.id/pl/bc-ds-ai-for-jobready-online-weekend-class",
      schedule: "Sabtu & Minggu | 10:00 - 17:00 WIB",
      duration: "4 bulan",
      sessions: 32,
      features: [
        "Complete DS & AI curriculum",
        "Portfolio projects (5-13)",
        "Industry-ready skills",
        "Career coaching 1-on-1",
        "Mock interview preparation",
        "Job interview simulation",
        "CV & LinkedIn optimization",
        "Job placement assistance",
        "Lifetime mentoring access"
      ]
    }
  ];

  const handleSelectPackage = (pkg: BootcampPackage) => {
    setSelectedPackage(pkg);
    setIsDetailPopupOpen(true);
  };

  const handlePaymentClick = () => {
    setIsDetailPopupOpen(false);
    setIsPaymentPopupOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Bootcamp Online - Intelligo ID</title>
        <meta name="description" content="Program bootcamp online Data Science & AI dengan kelas malam dan weekend. Belajar dari rumah dengan mentoring personal dan job guarantee." />
      </Helmet>

      <Navbar />
      <main className="pt-16 md:pt-20 min-h-screen bg-background">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/20 to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Bootcamp Online
            </h1>
            <p className="text-xl text-foreground/70 mb-6">
              Belajar Data Science & AI dari rumah dengan live class interaktif, mentoring personal, dan jaminan job interview.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href="#packages">Lihat Program</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://bit.ly/tanya-mintell" target="_blank" rel="noopener noreferrer">Konsultasi Gratis</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mengapa Bootcamp Online Intelligo?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Fleksibel & Praktis",
                desc: "Belajar dari rumah dengan jadwal yang sesuai (malam atau weekend)"
              },
              {
                icon: Users,
                title: "Mentoring 1-on-1",
                desc: "Personal guidance dari mentor berpengalaman di industri"
              },
              {
                icon: BookOpen,
                title: "Materi Berkualitas",
                desc: "Kurikulum up-to-date mengikuti kebutuhan industri"
              },
              {
                icon: Award,
                title: "Sertifikasi Resmi",
                desc: "Sertifikat dari Lembaga Sertifikasi Profesi (LSP)"
              },
              {
                icon: Zap,
                title: "Project Real",
                desc: "Pengalaman langsung dengan real-world case studies"
              },
              {
                icon: Target,
                title: "Job Ready",
                desc: "Career coaching hingga placement assistance"
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <item.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 md:py-24 bg-foreground/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Program Bootcamp Online</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Pilih program yang sesuai dengan jadwal dan tujuan karir Anda
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-lg mb-2">{pkg.name}</h3>
                  <p className="text-sm text-accent font-semibold mb-4">{pkg.subtitle}</p>
                  
                  <div className="space-y-2 mb-6 text-sm text-foreground/70">
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {pkg.schedule}
                    </p>
                    <p className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {pkg.duration}
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-3xl font-bold text-accent">{pkg.price}</p>
                  </div>

                  <Button 
                    onClick={() => handleSelectPackage(pkg)}
                    className="w-full bg-accent hover:bg-accent/90 mt-auto"
                  >
                    Lihat Detail & Daftar
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Jadwal & Format Kelas</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Kelas Malam (Weekday)</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold text-accent">📅</span>
                  <span>Senin, Rabu, Jumat: 19:30 - 21:30 WIB</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">⏱️</span>
                  <span>2 jam per sesi, 3-4 kali per minggu</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">👥</span>
                  <span>Live class via Google Meet</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">💼</span>
                  <span>Cocok untuk yang masih bekerja</span>
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Kelas Weekend</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold text-accent">📅</span>
                  <span>Sabtu & Minggu: 10:00 - 17:00 WIB</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">⏱️</span>
                  <span>7 jam per sesi, full-day intensive</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">👥</span>
                  <span>Live class + hands-on projects</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">🚀</span>
                  <span>Pembelajaran lebih cepat dan intensif</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Mulai Belajar?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Hubungi tim kami untuk konsultasi gratis dan temukan program yang paling sesuai untuk Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90"
            >
              <a href="https://wa.me/6282315556491?text=Halo%20Intelligo%2C%20saya%20tertarik%20dengan%20bootcamp%20online" target="_blank" rel="noopener noreferrer">
                💬 Chat WhatsApp
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
            >
              <a href="mailto:support@intelligo.id">
                📧 Email kami
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Popups */}
      {selectedPackage && (
        <>
          <PackageDetailPopup
            isOpen={isDetailPopupOpen}
            package={selectedPackage}
            onClose={() => setIsDetailPopupOpen(false)}
            onPaymentClick={handlePaymentClick}
          />
          <PaymentPopup
            isOpen={isPaymentPopupOpen}
            package={{ name: selectedPackage.name, paymentLink: selectedPackage.paymentLink }}
            onClose={() => setIsPaymentPopupOpen(false)}
          />
        </>
      )}
      </main>
      <Footer />
    </>
  );
};

// Fix Calendar icon import
const Calendar = Clock; // Placeholder until we import the correct icon

export default BootcampOnline;
