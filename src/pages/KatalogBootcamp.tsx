import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import { Helmet } from "react-helmet-async";

const KatalogBootcamp = () => {
  return (
    <>
      <Helmet>
        <title>Katalog Bootcamp - Intelligo ID</title>
        <meta
          name="description"
          content="Lihat katalog lengkap bootcamp kami dengan berbagai pilihan program, harga, dan jadwal yang sesuai dengan kebutuhan Anda."
        />
      </Helmet>

      <Navbar />
      <main className="pt-16 md:pt-20 min-h-screen bg-background">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/20 to-accent/5 py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Katalog Bootcamp
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Jelajahi berbagai program bootcamp kami yang dirancang untuk membawa karir Anda ke level berikutnya. 
              Pilih paket yang sesuai dengan tujuan dan jadwal Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <section className="section-padding bg-accent/10">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Masih Bingung Memilih?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Hubungi tim kami untuk konsultasi gratis dan rekomendasi program yang tepat untuk Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://intelligo.id/wa-mintell"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Chat WhatsApp
              </a>
              <a
                href="mailto:support@intelligo.id"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/5 transition-colors"
              >
                Email Kami
              </a>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
};

export default KatalogBootcamp;
