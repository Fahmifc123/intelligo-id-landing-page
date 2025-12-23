import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, FileText, Code, BarChart3, Brain, Eye } from "lucide-react";
import { useState } from "react";

const PortofolioAlumni = () => {
  const [selectedPdf, setSelectedPdf] = useState<{ title: string; url: string } | null>(null);

  const portfolios = [
    {
      title: "E-tail Explorer: Navigating E-commerce Customer Interactions",
      author: "Muhammad Vito Aristawidya",
      batch: "Batch 5",
      tags: ["Data Science", "Python", "Analytics", "Business"],
      description: "Analisis mendalam tentang interaksi pelanggan e-commerce untuk meningkatkan pengalaman pengguna dan konversi.",
      pdfUrl: "http://www.intelligo.id/wp-content/uploads/2025/03/Final-Project-Muhammad-Vito-Aristawidya.pptx",
      icon: BarChart3
    },
    {
      title: "Unlocking Employee Growth: ML Approach to Promotion",
      author: "Fahmi Hamam",
      batch: "Batch 6",
      tags: ["Data Science", "Python", "Machine Learning", "HR Analytics"],
      description: "Pendekatan machine learning untuk memprediksi dan mengoptimalkan promosi karyawan dalam perusahaan.",
      pdfUrl: "http://www.intelligo.id/wp-content/uploads/2025/03/Fahmi-Hammam-final-project-PPT-Fahmi-hammam-t.pdf",
      icon: Brain
    },
    {
      title: "Integrated Insights: University Rankings and Student Performance Analysis (2018-2023)",
      author: "Zaki Maulana Hidayat",
      batch: "Batch 6",
      tags: ["Data Science", "Python", "Analytics", "Education"],
      description: "Analisis komprehensif tentang ranking universitas dan performa mahasiswa selama periode 2018-2023.",
      pdfUrl: "http://www.intelligo.id/wp-content/uploads/2025/02/Intelligo-Final-Project-Zaki-Maulana-Hidayat.pdf",
      icon: FileText
    },
    {
      title: "Customer Segmentation using K-Means Clustering",
      author: "Aryandhita Kinanti Putri",
      batch: "Batch 7",
      tags: ["Data Science", "Clustering", "Marketing", "Python"],
      description: "Implementasi K-Means clustering untuk segmentasi pelanggan dan strategi marketing yang lebih targeted.",
      pdfUrl: "",
      icon: Code
    },
    {
      title: "Sentiment Analysis on Social Media Reviews",
      author: "Ahmad Rizki",
      batch: "Batch 7",
      tags: ["NLP", "Python", "Deep Learning", "Analytics"],
      description: "Analisis sentimen menggunakan NLP untuk memahami feedback pelanggan dari review sosial media.",
      pdfUrl: "",
      icon: Brain
    },
    {
      title: "Sales Forecasting with Time Series Analysis",
      author: "Dewi Sartika",
      batch: "Batch 5",
      tags: ["Time Series", "Forecasting", "Python", "Business"],
      description: "Prediksi penjualan menggunakan analisis time series untuk perencanaan bisnis yang lebih akurat.",
      pdfUrl: "",
      icon: BarChart3
    }
  ];

  const stats = [
    { value: "100+", label: "Total Project" },
    { value: "50+", label: "Company Partner" },
    { value: "15+", label: "Industry Sector" },
    { value: "95%", label: "Project Success Rate" }
  ];

  const getGoogleViewerUrl = (url: string) => {
    return `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;
  };

  return (
    <>
      <Helmet>
        <title>Portofolio Alumni - Intelligo ID | Showcase Project Data Science & AI</title>
        <meta name="description" content="Lihat portofolio project dari alumni Intelligo ID. Showcase karya Data Science & AI dari peserta bootcamp kami." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-16 md:pt-20">
          {/* Hero Section */}
          <section className="py-20 md:py-28 bg-gradient-to-b from-accent/5 to-background">
            <div className="section-container">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                  Showcase Portofolio
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Karya <span className="text-accent">Alumni Intelligo ID</span>
                </h1>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                  Showcase Portofolio menampilkan project peserta Intelligo ID. Setiap project dirancang 
                  berdasarkan studi kasus industri, mulai dari analisis data, machine learning, hingga implementasi AI.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 bg-card border-y border-border/50">
            <div className="section-container">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
                    <div className="text-foreground/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio Grid */}
          <section className="py-20 md:py-28">
            <div className="section-container">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolios.map((portfolio, index) => (
                  <div 
                    key={index}
                    className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-accent/30 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Card Header with Icon */}
                    <div className="h-40 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                      <portfolio.icon className="w-16 h-16 text-accent/50 group-hover:text-accent transition-colors" />
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {portfolio.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                        {portfolio.title}
                      </h3>

                      <p className="text-foreground/60 text-sm mb-4 line-clamp-2">
                        {portfolio.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-foreground font-medium text-sm">{portfolio.author}</p>
                          <p className="text-foreground/50 text-xs">{portfolio.batch}</p>
                        </div>
                        
                        {portfolio.pdfUrl && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setSelectedPdf({ title: portfolio.title, url: portfolio.pdfUrl })}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            Lihat
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://www.intelligo.id/portofolio-student/" target="_blank" rel="noopener noreferrer">
                    Lihat Selengkapnya di Website
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-card/50">
            <div className="section-container">
              <div className="bg-gradient-to-r from-accent/20 to-accent/5 rounded-3xl p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Ingin Punya Portofolio Seperti Ini?
                </h2>
                <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
                  Bergabung dengan bootcamp Intelligo ID dan bangun portofolio project 
                  berbasis studi kasus industri nyata bersama mentor praktisi.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="accent" size="lg" asChild>
                    <a href="https://bit.ly/tanya-mintell" target="_blank" rel="noopener noreferrer">
                      Daftar Sekarang
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/#program">
                      Lihat Program
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />

        {/* PDF Viewer Dialog */}
        <Dialog open={!!selectedPdf} onOpenChange={(open) => !open && setSelectedPdf(null)}>
          <DialogContent className="max-w-5xl w-[95vw] h-[85vh] p-0 overflow-hidden">
            <DialogHeader className="p-4 pb-0">
              <DialogTitle className="text-lg font-semibold line-clamp-1 pr-8">
                {selectedPdf?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="flex-1 p-4 pt-2 h-[calc(85vh-60px)]">
              {selectedPdf && (
                <iframe
                  src={getGoogleViewerUrl(selectedPdf.url)}
                  className="w-full h-full rounded-lg border border-border"
                  title={selectedPdf.title}
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default PortofolioAlumni;
