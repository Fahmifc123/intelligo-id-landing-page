import { useState } from "react";
import { Star, Quote, ExternalLink, FileText, X, ChevronLeft, ChevronRight } from "lucide-react";
import LogoCarousel from "./LogoCarousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Portfolio {
  title: string;
  description: string;
  thumbnail: string;
  type: "pdf" | "ppt";
  fileUrl: string;
  slides?: string[];
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  portfolio: Portfolio;
}

const testimonials: Testimonial[] = [
  {
    name: "Rizky Pratama",
    role: "Data Analyst di Tokopedia",
    content:
      "Keren sangat! Materinya sangat terstruktur dan mentor-mentornya berpengalaman. Dalam 3 bulan setelah lulus, saya langsung dapat kerja!",
    rating: 5,
    avatar: "RP",
    portfolio: {
      title: "E-Commerce Sales Dashboard",
      description: "Dashboard interaktif untuk analisis penjualan e-commerce menggunakan Python, Pandas, dan Tableau. Proyek ini menganalisis data 1 juta+ transaksi.",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      type: "pdf",
      fileUrl: "#",
      slides: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
      ],
    },
  },
  {
    name: "Sinta Dewi",
    role: "ML Engineer di Gojek",
    content:
      "Bootcamp-nya beda banget dari yang lain. Fokus ke praktik dan proyek nyata. Portfolio yang dibangun beneran membantu saat interview.",
    rating: 5,
    avatar: "SD",
    portfolio: {
      title: "Sentiment Analysis Model",
      description: "Model NLP untuk analisis sentimen review produk Indonesia dengan akurasi 92%. Menggunakan BERT dan fine-tuning untuk bahasa Indonesia.",
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
      type: "ppt",
      fileUrl: "#",
      slides: [
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop",
      ],
    },
  },
  {
    name: "Andi Firmansyah",
    role: "Data Scientist Freelancer",
    content:
      "Setelah ikut bootcamp, skill saya meningkat drastis. Sekarang sudah bisa handle project data science secara mandiri.",
    rating: 5,
    avatar: "AF",
    portfolio: {
      title: "Customer Churn Prediction",
      description: "Model prediksi churn pelanggan dengan XGBoost dan feature engineering. Meningkatkan retensi pelanggan hingga 25%.",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      type: "pdf",
      fileUrl: "#",
      slides: [
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      ],
    },
  },
];

const alumniCompanies = [
  "Tokopedia",
  "Gojek",
  "Shopee",
  "Traveloka",
  "Bukalapak",
  "OVO",
  "Dana",
  "Grab",
  "Blibli",
  "Tiket.com",
  "Telkom",
  "Bank BCA",
];

const TestimonialSection = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState<Testimonial | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openPortfolio = (testimonial: Testimonial) => {
    setSelectedPortfolio(testimonial);
    setCurrentSlide(0);
  };

  const closePortfolio = () => {
    setSelectedPortfolio(null);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    if (selectedPortfolio?.portfolio.slides) {
      setCurrentSlide((prev) => 
        prev < selectedPortfolio.portfolio.slides!.length - 1 ? prev + 1 : 0
      );
    }
  };

  const prevSlide = () => {
    if (selectedPortfolio?.portfolio.slides) {
      setCurrentSlide((prev) => 
        prev > 0 ? prev - 1 : selectedPortfolio.portfolio.slides!.length - 1
      );
    }
  };

  return (
    <section id="testimoni" className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dipercaya Alumni, Diakui Industri
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Dengarkan cerita sukses alumni kami yang kini berkarir di perusahaan-perusahaan top Indonesia.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-accent mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-primary-foreground/90 mb-6 leading-relaxed flex-grow">
                "{testimonial.content}"
              </p>

              {/* Portfolio Preview */}
              <div 
                className="mb-6 group cursor-pointer"
                onClick={() => openPortfolio(testimonial)}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={testimonial.portfolio.thumbnail} 
                    alt={testimonial.portfolio.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-3">
                    <div className="flex-1">
                      <p className="text-white text-sm font-semibold truncate">
                        {testimonial.portfolio.title}
                      </p>
                      <div className="flex items-center gap-1 text-white/70 text-xs mt-1">
                        <FileText className="w-3 h-3" />
                        <span>{testimonial.portfolio.type.toUpperCase()}</span>
                      </div>
                    </div>
                    <div className="bg-accent text-accent-foreground px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 group-hover:bg-accent/90 transition-colors">
                      <ExternalLink className="w-3 h-3" />
                      Lihat
                    </div>
                  </div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-primary-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alumni Companies Carousel */}
        <div className="text-center">
          <p className="text-sm text-primary-foreground/50 mb-6 uppercase tracking-wider">
            Alumni kami bekerja di
          </p>
          <LogoCarousel 
            logos={alumniCompanies} 
            direction="left" 
            speed="normal"
            variant="dark"
          />
        </div>
      </div>

      {/* Portfolio Dialog */}
      <Dialog open={!!selectedPortfolio} onOpenChange={closePortfolio}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0 bg-card">
          <DialogHeader className="p-6 pb-0">
            <div className="flex items-start justify-between">
              <div>
                <DialogTitle className="text-2xl font-bold text-foreground">
                  {selectedPortfolio?.portfolio.title}
                </DialogTitle>
                <p className="text-muted-foreground mt-1 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-accent/10 text-accent rounded text-xs font-medium">
                    <FileText className="w-3 h-3" />
                    {selectedPortfolio?.portfolio.type.toUpperCase()}
                  </span>
                  <span>oleh {selectedPortfolio?.name}</span>
                </p>
              </div>
            </div>
          </DialogHeader>

          <div className="p-6">
            {/* Portfolio Description */}
            <p className="text-muted-foreground mb-6">
              {selectedPortfolio?.portfolio.description}
            </p>

            {/* Slides Viewer */}
            {selectedPortfolio?.portfolio.slides && (
              <div className="relative">
                <div className="aspect-video bg-secondary rounded-xl overflow-hidden">
                  <img 
                    src={selectedPortfolio.portfolio.slides[currentSlide]} 
                    alt={`Slide ${currentSlide + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Slide Navigation */}
                <div className="flex items-center justify-between mt-4">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={prevSlide}
                    className="rounded-full"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>

                  <div className="flex items-center gap-2">
                    {selectedPortfolio.portfolio.slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                          idx === currentSlide 
                            ? "bg-accent w-6" 
                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                      />
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={nextSlide}
                    className="rounded-full"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>

                {/* Slide Counter */}
                <p className="text-center text-sm text-muted-foreground mt-2">
                  Slide {currentSlide + 1} dari {selectedPortfolio.portfolio.slides.length}
                </p>
              </div>
            )}

            {/* Download Button */}
            <div className="flex justify-center mt-6">
              <Button variant="accent" className="gap-2">
                <FileText className="w-4 h-4" />
                Download {selectedPortfolio?.portfolio.type.toUpperCase()}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TestimonialSection;
