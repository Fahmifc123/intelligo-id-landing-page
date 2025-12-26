import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import portfolioData from "@/data/alumni-portfolio.json";
import { BarChart3, Brain, Code, Database, Download, Eye, FileText, Filter, Layers, Search, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

interface PortfolioItem {
  title: string;
  author: string;
  batch: string;
  tags: string[];
  category: string;
  description: string;
  pdfUrl: string;
  photo: string;
}

const iconMap: { [key: string]: React.ElementType } = {
  "E-Commerce": BarChart3,
  "Human Resources": Brain,
  "Education": FileText,
  "Marketing": Code,
  "NLP": Brain,
  "Finance": TrendingUp,
  "Entertainment": Layers,
  "Manufacturing": Database,
  "Telecom": Users,
  "Healthcare": Brain,
  "Logistics": BarChart3,
};

const PortofolioAlumni = () => {
  const [selectedPdf, setSelectedPdf] = useState<{ title: string; url: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const portfolios = portfolioData.map((portfolio: PortfolioItem) => ({
    ...portfolio,
    icon: iconMap[portfolio.category] || BarChart3,
  }));

  const stats = [
    { value: portfolios.length.toString(), label: "Total Project" },
    { value: "50+", label: "Company Partner" },
    { value: "15+", label: "Industry Sector" },
    { value: "95%", label: "Project Success Rate" }
  ];

  const categories = ["all", ...new Set(portfolios.map(p => p.category))];
  const batches = ["all", ...new Set(portfolios.map(p => p.batch))];

  const filteredPortfolios = portfolios.filter(portfolio => {
    const matchesSearch = portfolio.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         portfolio.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         portfolio.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBatch = selectedBatch === "all" || portfolio.batch === selectedBatch;
    const matchesCategory = selectedCategory === "all" || portfolio.category === selectedCategory;
    return matchesSearch && matchesBatch && matchesCategory;
  });

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

          {/* Filter Section */}
          <section className="py-8 bg-background sticky top-16 md:top-20 z-40 border-b border-border/50">
            <div className="section-container">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex-1 w-full md:max-w-md relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" />
                  <Input 
                    placeholder="Cari project atau nama alumni..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                  <Select value={selectedBatch} onValueChange={setSelectedBatch}>
                    <SelectTrigger className="w-full md:w-40">
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Batch" />
                    </SelectTrigger>
                    <SelectContent>
                      {batches.map((batch) => (
                        <SelectItem key={batch} value={batch}>
                          {batch === "all" ? "Semua Batch" : batch}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full md:w-44">
                      <SelectValue placeholder="Kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category === "all" ? "Semua Kategori" : category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-4 text-sm text-foreground/60">
                Menampilkan {filteredPortfolios.length} dari {portfolios.length} project
              </div>
            </div>
          </section>

          {/* Portfolio Grid */}
          <section className="py-12 md:py-20">
            <div className="section-container">
              {filteredPortfolios.length === 0 ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Search className="w-10 h-10 text-accent/50" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Tidak ada hasil</h3>
                  <p className="text-foreground/60">Coba ubah filter atau kata kunci pencarian</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPortfolios.map((portfolio, index) => (
                    <div 
                      key={index}
                      className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-accent/30 hover:shadow-xl transition-all duration-300"
                    >
                      {/* Card Header with Icon */}
                      <div className="h-40 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center relative">
                        <portfolio.icon className="w-16 h-16 text-accent/50 group-hover:text-accent transition-colors" />
                        <span className="absolute top-3 right-3 px-2 py-1 bg-background/80 backdrop-blur-sm text-foreground/70 text-xs rounded-full">
                          {portfolio.category}
                        </span>
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
                          {portfolio.tags.length > 3 && (
                            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                              +{portfolio.tags.length - 3}
                            </span>
                          )}
                        </div>

                        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                          {portfolio.title}
                        </h3>

                        <p className="text-foreground/60 text-sm mb-4 line-clamp-3">
                          {portfolio.description}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <div className="flex items-center gap-3 flex-1">
                            <img
                              src={portfolio.photo}
                              alt={portfolio.author}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="text-foreground font-medium text-sm">{portfolio.author}</p>
                              <p className="text-foreground/50 text-xs">{portfolio.batch}</p>
                            </div>
                          </div>
                          
                          {portfolio.pdfUrl ? (
                            <Button 
                              variant="accent" 
                              size="sm"
                              onClick={() => setSelectedPdf({ title: portfolio.title, url: portfolio.pdfUrl })}
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              Lihat
                            </Button>
                          ) : (
                            <span className="text-xs text-foreground/40 italic">Coming soon</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
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
                    <a href="/">
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
            <DialogHeader className="p-4 pb-0 flex flex-row items-center justify-between">
              <DialogTitle className="text-lg font-semibold line-clamp-1 pr-8 flex-1">
                {selectedPdf?.title}
              </DialogTitle>
              {selectedPdf && (
                <Button variant="outline" size="sm" asChild className="mr-8">
                  <a href={selectedPdf.url} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </a>
                </Button>
              )}
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
