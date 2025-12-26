import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PackageDetailPopup from "@/components/PackageDetailPopup";
import PaymentPopup from "@/components/PaymentPopup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, BookOpen, Clock, Target, Users, Zap } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

interface MiniPackage {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  paymentLink: string;
  duration: string;
  sessions: number;
  features: string[];
}

const MiniBootcampWorkshopCategory = () => {
  const [isDetailPopupOpen, setIsDetailPopupOpen] = useState(false);
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<MiniPackage | null>(null);

  const packages: MiniPackage[] = [
    {
      id: "mini-bootcamp",
      name: "Mini Bootcamp DS & AI",
      subtitle: "Program singkat untuk fondasi kuat",
      price: "Rp400.000",
      paymentLink: "https://intelligo.myr.id/pl/mini-bootcamp-ds-ai",
      duration: "3 hari intensif",
      sessions: 3,
      features: [
        "Python programming crash course",
        "Data Science fundamentals",
        "AI basics introduction",
        "Hands-on practice projects",
        "Real-world use cases",
        "Mentoring dari expert",
        "Networking dengan peserta lain",
        "Certificate of completion"
      ]
    },
    {
      id: "workshop-intensive",
      name: "Workshop Intensive",
      subtitle: "Topik spesifik dengan pembahasan mendalam",
      price: "Hubungi kami",
      paymentLink: "https://bit.ly/tanya-mintell",
      duration: "1-2 hari",
      sessions: 2,
      features: [
        "Topik custom sesuai kebutuhan",
        "Deep dive ke topik spesifik",
        "Live coding & hands-on practice",
        "Industry-expert mentoring",
        "Case study dari real projects",
        "Networking session included",
        "Materials & resources provided",
        "Post-workshop support"
      ]
    }
  ];

  const handleSelectPackage = (pkg: MiniPackage) => {
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
        <title>Mini Bootcamp & Workshop - Intelligo ID</title>
        <meta name="description" content="Program singkat Mini Bootcamp DS & AI dan Workshop Intensive. Fondasi cepat untuk pemula atau deep dive ke topik spesifik." />
      </Helmet>

      <Navbar />
      <main className="pt-16 md:pt-20 min-h-screen bg-background">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/20 to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mini Bootcamp & Workshop
            </h1>
            <p className="text-xl text-foreground/70 mb-6">
              Program singkat untuk membangun fondasi cepat dalam Data Science & AI, atau deep dive ke topik spesifik yang Anda inginkan.
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
          <h2 className="text-3xl font-bold text-center mb-12">Mengapa Mini Bootcamp & Workshop?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Singkat & Padat",
                desc: "Hanya beberapa hari tapi materi comprehensive"
              },
              {
                icon: Award,
                title: "Terjangkau",
                desc: "Harga ekonomis untuk kualitas tinggi"
              },
              {
                icon: Zap,
                title: "Praktik Intensif",
                desc: "Fokus hands-on coding & real projects"
              },
              {
                icon: Users,
                title: "Mentoring Personal",
                desc: "Guidance langsung dari industry experts"
              },
              {
                icon: BookOpen,
                title: "Materi Berkualitas",
                desc: "Kurikulum up-to-date dengan trend industri"
              },
              {
                icon: Target,
                title: "Fleksibel",
                desc: "Topik custom & jadwal yang sesuai"
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
          <h2 className="text-3xl font-bold text-center mb-4">Program Mini Bootcamp & Workshop</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Pilih program yang sesuai dengan tujuan pembelajaran Anda
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-lg mb-2">{pkg.name}</h3>
                  <p className="text-sm text-accent font-semibold mb-4">{pkg.subtitle}</p>
                  
                  <div className="space-y-2 mb-6 text-sm text-foreground/70">
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {pkg.duration}
                    </p>
                    <p className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Kelompok kecil dengan mentoring personal
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

      {/* What's Included */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Apa yang Anda Dapatkan</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-accent">Mini Bootcamp</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold text-accent">✓</span>
                  <span>3 hari pembelajaran intensif</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">✓</span>
                  <span>Fondasi solid DS & AI</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">✓</span>
                  <span>Hands-on coding projects</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">✓</span>
                  <span>Sertifikat completion</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">✓</span>
                  <span>Networking opportunity</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">✓</span>
                  <span>Materi & resources included</span>
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-accent">Workshop Intensive</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold text-accent">✓</span>
                  <span>1-2 hari focused learning</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">✓</span>
                  <span>Topik spesifik sesuai kebutuhan</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">✓</span>
                  <span>Expert mentoring langsung</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">✓</span>
                  <span>Real-world case studies</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">✓</span>
                  <span>Certificate & recognition</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">✓</span>
                  <span>Post-workshop follow-up</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-foreground/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">FAQ</h2>
          
          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                q: "Apakah ada persyaratan untuk mengikuti mini bootcamp?",
                a: "Tidak ada persyaratan khusus. Mini bootcamp dirancang untuk pemula hingga intermediate level."
              },
              {
                q: "Berapa ukuran kelompok di mini bootcamp?",
                a: "Kelompok kecil (max 10-15 peserta) untuk memastikan mentoring personal yang efektif."
              },
              {
                q: "Bisakah workshop disesuaikan dengan kebutuhan spesifik?",
                a: "Ya! Workshop bisa dikustomisasi. Hubungi kami untuk mendiskusikan topik dan kebutuhan Anda."
              },
              {
                q: "Apakah sertifikat diakui industri?",
                a: "Ya, sertifikat kami diakui. Kami juga support untuk LSP certification jika Anda melanjutkan ke bootcamp reguler."
              }
            ].map((item, idx) => (
              <div key={idx} className="border-b pb-6">
                <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-foreground/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Tune di IG!</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Follow Instagram @intelligo untuk update jadwal terbaru.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-accent hover:bg-accent/90"
          >
            <a href="https://instagram.com/intelligo" target="_blank" rel="noopener noreferrer">
              📷 Follow @intelligo di Instagram
            </a>
          </Button>
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

export default MiniBootcampWorkshopCategory;
