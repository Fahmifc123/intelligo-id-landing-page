import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PackageDetailPopup from "@/components/PackageDetailPopup";
import PaymentPopup from "@/components/PaymentPopup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, BookOpen, Clock, MapPin, Target, Users, Zap } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

interface BootcampPackage {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  paymentLink: string;
  location: string;
  schedule: string;
  duration: string;
  sessions: number;
  features: string[];
}

const BootcampOfflineCategory = () => {
  const [isDetailPopupOpen, setIsDetailPopupOpen] = useState(false);
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<BootcampPackage | null>(null);

  const packages: BootcampPackage[] = [
    {
      id: "weekend-beginner",
      name: "Weekend Bootcamp - Data Science Beginner",
      subtitle: "6 sesi full-day intensif",
      price: "Rp3.800.000",
      paymentLink: "https://intelligo.myr.id/pl/weekend-bootcamp-ds-beginner",
      location: "Jakarta & Bandung",
      schedule: "Sabtu & Minggu | 10:00 - 17:00 WIB",
      duration: "6 minggu",
      sessions: 12,
      features: [
        "Python programming hands-on",
        "SQL database queries praktik",
        "Data analysis dengan real datasets",
        "Visualization projects",
        "Live coding dengan mentor",
        "Networking dengan peserta lain",
        "Lunch & snacks disediakan",
        "Portfolio project"
      ]
    },
    {
      id: "weekday-beginner",
      name: "Weekday Bootcamp - Data Science Beginner",
      subtitle: "3-4 minggu intensive",
      price: "Rp4.500.000",
      paymentLink: "https://intelligo.myr.id/pl/weekday-bootcamp-ds-beginner",
      location: "Jakarta & Bandung",
      schedule: "Senin-Jumat | 09:00 - 17:00 WIB",
      duration: "3-4 minggu",
      sessions: 15,
      features: [
        "Full-day intensive learning",
        "Complete Python curriculum",
        "Database design & SQL mastery",
        "Advanced data analysis",
        "Real-world case studies",
        "Hands-on projects daily",
        "Daily standup dengan mentor",
        "Certification preparation"
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
        <title>Bootcamp Offline - Intelligo ID</title>
        <meta name="description" content="Program bootcamp offline Data Science dengan tatap muka intensif di Jakarta & Bandung. Pembelajaran praktik langsung dengan mentor berpengalaman." />
      </Helmet>

      <Navbar />
      <main className="pt-16 md:pt-20 min-h-screen bg-background">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/20 to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Bootcamp Offline
            </h1>
            <p className="text-xl text-foreground/70 mb-6">
              Belajar Data Science dengan tatap muka intensif, hands-on practice, dan mentoring langsung di Jakarta & Bandung.
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
          <h2 className="text-3xl font-bold text-center mb-12">Mengapa Bootcamp Offline Intelligo?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: "Lokasi Strategis",
                desc: "Pusat pelatihan di Jakarta & Bandung dengan fasilitas lengkap"
              },
              {
                icon: Users,
                title: "Mentoring Langsung",
                desc: "Belajar tatap muka langsung dengan mentor berpengalaman"
              },
              {
                icon: Zap,
                title: "Hands-on Practice",
                desc: "Langsung praktek dengan real data dan tools industri"
              },
              {
                icon: Award,
                title: "Networking Komunitas",
                desc: "Bangun koneksi dengan sesama peserta dan alumni"
              },
              {
                icon: BookOpen,
                title: "Materi Comprehensive",
                desc: "Kurikulum lengkap dari fundamental hingga advanced"
              },
              {
                icon: Target,
                title: "Job Placement",
                desc: "Dukungan penuh untuk menemukan pekerjaan impian"
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
          <h2 className="text-3xl font-bold text-center mb-4">Program Bootcamp Offline</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Pilih program yang sesuai dengan jadwal dan tujuan Anda
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-lg mb-2">{pkg.name}</h3>
                  <p className="text-sm text-accent font-semibold mb-4">{pkg.subtitle}</p>
                  
                  <div className="space-y-2 mb-6 text-sm text-foreground/70">
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {pkg.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {pkg.schedule}
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

      {/* Locations */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Lokasi Pelatihan</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Jakarta</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold text-accent">📍</span>
                  <span>Lokasi strategis di pusat Jakarta</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">🚇</span>
                  <span>Mudah diakses dari berbagai lokasi</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">💼</span>
                  <span>Fasilitas modern dengan lab komputer</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">☕</span>
                  <span>Pantry dan area istirahat nyaman</span>
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Bandung</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold text-accent">📍</span>
                  <span>Creya Coworking Space (Head Office)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">🏢</span>
                  <span>Suasana co-working yang supportif</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">👥</span>
                  <span>Networking dengan startup & tech community</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">🌳</span>
                  <span>Lokasi nyaman dekat dengan berbagai amenities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Belajar Intensif?</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Hubungi tim kami untuk memastikan tempat Anda di bootcamp offline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90"
            >
              <a href="https://wa.me/6282315556491?text=Halo%20Intelligo%2C%20saya%20tertarik%20dengan%20bootcamp%20offline" target="_blank" rel="noopener noreferrer">
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

export default BootcampOfflineCategory;
