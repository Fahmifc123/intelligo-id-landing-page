import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PackageDetailPopup from "@/components/PackageDetailPopup";
import PaymentPopup from "@/components/PaymentPopup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, BookOpen, Clock, Target, Users, Zap } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

interface PrivateCoursePackage {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  paymentLink: string;
  format: string;
  duration: string;
  hours: number;
  features: string[];
}

const PrivateCourseCategory = () => {
  const [isDetailPopupOpen, setIsDetailPopupOpen] = useState(false);
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PrivateCoursePackage | null>(null);

  const packages: PrivateCoursePackage[] = [
    {
      id: "online-beginner",
      name: "Private Course Online - Data Science Beginner",
      subtitle: "25 sesi (50 jam) pembelajaran 1-on-1",
      price: "Rp4.250.000",
      paymentLink: "https://intelligo.myr.id/pl/private-course-online-ds-beginner",
      format: "Online via Google Meet",
      duration: "Fleksibel (3-4 bulan)",
      hours: 50,
      features: [
        "Jadwal fleksibel sesuai preferensi",
        "Python programming comprehensive",
        "SQL & database fundamentals",
        "Data analysis dengan Pandas & NumPy",
        "Visualization & storytelling",
        "Personal mentoring langsung",
        "Career guidance personal",
        "Lifetime access ke materi"
      ]
    },
    {
      id: "online-jobready",
      name: "Private Course Online - Job Ready",
      subtitle: "40 sesi (80 jam) pembelajaran 1-on-1",
      price: "Rp8.000.000",
      paymentLink: "https://intelligo.myr.id/pl/private-course-online-jobready",
      format: "Online via Google Meet",
      duration: "Fleksibel (5-6 bulan)",
      hours: 80,
      features: [
        "Complete DS & AI curriculum",
        "Advanced Machine Learning",
        "Deep Learning dengan TensorFlow",
        "5-13 portfolio projects",
        "Real-world case studies",
        "Interview preparation intensive",
        "CV & LinkedIn optimization",
        "Job placement assistance"
      ]
    },
    {
      id: "offline-beginner",
      name: "Private Course Offline - Data Science Beginner",
      subtitle: "25 sesi (50 jam) pembelajaran 1-on-1",
      price: "Rp5.500.000",
      paymentLink: "https://intelligo.myr.id/pl/private-course-offline-ds-beginner",
      format: "Offline (Jakarta, Bandung, Bogor, Jogja)",
      duration: "Fleksibel (3-4 bulan)",
      hours: 50,
      features: [
        "Tatap muka langsung dengan mentor",
        "Fleksibel lokasi & jadwal",
        "Python fundamental praktik",
        "Database design hands-on",
        "Data analysis projects real",
        "Networking dengan komunitas",
        "Direct mentoring & feedback",
        "Kopi & snacks disediakan"
      ]
    },
    {
      id: "offline-jobready",
      name: "Private Course Offline - Job Ready",
      subtitle: "40 sesi (80 jam) pembelajaran 1-on-1",
      price: "Rp10.000.000",
      paymentLink: "https://intelligo.myr.id/pl/private-course-offline-jobready",
      format: "Offline (Jakarta, Bandung, Bogor, Jogja)",
      duration: "Fleksibel (5-6 bulan)",
      hours: 80,
      features: [
        "Complete curriculum tatap muka",
        "Advanced topics intensive",
        "Portfolio projects comprehensive",
        "Real mentoring & feedback",
        "Networking dengan industry",
        "Interview coaching 1-on-1",
        "Job placement support personal",
        "Lifetime community access"
      ]
    },
    {
      id: "hourly-online",
      name: "Private Course Online - Per Jam",
      subtitle: "Fleksibel, ambil sesuai kebutuhan",
      price: "Rp100.000/jam",
      paymentLink: "https://intelligo.myr.id/pl/private-course-hourly-online",
      format: "Online via Google Meet",
      duration: "Booking per sesi",
      hours: 1,
      features: [
        "Bayar hanya untuk jam yang diambil",
        "Jadwal 100% fleksibel",
        "Topik sesuai kebutuhan Anda",
        "Perfect untuk consultation",
        "Problem-solving specific",
        "Code review & debugging",
        "Interview preparation",
        "No commitment needed"
      ]
    },
    {
      id: "hourly-offline",
      name: "Private Course Offline - Per Sesi",
      subtitle: "Fleksibel, ambil sesuai kebutuhan",
      price: "Rp300.000/sesi",
      paymentLink: "https://intelligo.myr.id/pl/private-course-hourly-offline",
      format: "Offline (Jakarta, Bandung, Bogor, Jogja)",
      duration: "Booking per sesi",
      hours: 2,
      features: [
        "Per sesi (2 jam) fleksibel",
        "Tatap muka direct mentoring",
        "Topik custom sesuai kebutuhan",
        "Hands-on coding session",
        "Project discussion & review",
        "Career advice personal",
        "No long-term commitment",
        "Flexible scheduling"
      ]
    }
  ];

  const handleSelectPackage = (pkg: PrivateCoursePackage) => {
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
        <title>Private Course 1-on-1 - Intelligo ID</title>
        <meta name="description" content="Kursus private 1-on-1 dengan mentor berpengalaman. Fleksibel online atau offline. Jadwal & topik sesuai kebutuhan Anda." />
      </Helmet>

      <Navbar />
      <main className="pt-16 md:pt-20 min-h-screen bg-background">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/20 to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Private Course 1-on-1
            </h1>
            <p className="text-xl text-foreground/70 mb-6">
              Belajar personal dengan mentor berpengalaman. Jadwal fleksibel, topik custom, dan pembelajaran yang disesuaikan dengan pace Anda.
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
          <h2 className="text-3xl font-bold text-center mb-12">Keuntungan Private Course</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "100% Fleksibel",
                desc: "Jadwal & durasi sesuai kebutuhan Anda"
              },
              {
                icon: Users,
                title: "Personal Mentor",
                desc: "Bimbingan langsung dari expert di bidangnya"
              },
              {
                icon: Target,
                title: "Custom Curriculum",
                desc: "Materi & topik disesuaikan dengan tujuan Anda"
              },
              {
                icon: Zap,
                title: "Cepat & Efisien",
                desc: "Fokus pada hal yang penting untuk Anda"
              },
              {
                icon: BookOpen,
                title: "Praktik Langsung",
                desc: "Real coding & problem-solving setiap sesi"
              },
              {
                icon: Award,
                title: "Hasil Terukur",
                desc: "Progress tracking & feedback berkelanjutan"
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
          <h2 className="text-3xl font-bold text-center mb-4">Paket Private Course</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan tujuan belajar Anda
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
                      {pkg.format}
                    </p>
                    <p className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
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

      {/* Format & Location */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Format & Lokasi</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Online</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold text-accent">💻</span>
                  <span>Via Google Meet dari mana saja</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">🌍</span>
                  <span>Tidak perlu travel, hemat waktu</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">⏰</span>
                  <span>Jadwal lebih fleksibel</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">💰</span>
                  <span>Harga lebih ekonomis</span>
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Offline</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold text-accent">📍</span>
                  <span>Jakarta, Bandung, Bogor, Yogyakarta</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">👥</span>
                  <span>Tatap muka langsung dengan mentor</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">🖥️</span>
                  <span>Setup lab dengan fasilitas lengkap</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">🤝</span>
                  <span>Networking dengan komunitas lokal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ingin Belajar Dengan Mentor Pribadi?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk mendiskusikan kebutuhan Anda dan menemukan mentor yang tepat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90"
            >
              <a href="https://wa.me/6282315556491?text=Halo%20Intelligo%2C%20saya%20tertarik%20dengan%20private%20course" target="_blank" rel="noopener noreferrer">
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

export default PrivateCourseCategory;
