import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import testimonialsData from "@/data/testimonials.json";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ExternalLink, FileText, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface Portfolio {
  title: string;
  description: string;
  thumbnail: string;
  type: "pdf" | "ppt";
  fileUrl: string;
  slides?: string[];
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  batch: string;
  content: string;
  photo: string;
  portfolio: Portfolio;
}

// Load testimonials from JSON
const testimonials: Testimonial[] = testimonialsData.testimonials.map((t: any) => ({
  id: t.id,
  name: t.name,
  role: t.role,
  batch: t.batch,
  content: t.content,
  photo: t.photo,
  portfolio: t.portfolio,
}));



const TestimonialSection = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState<Testimonial | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Testimonial Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

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
      setCurrentSlide((prev) => (prev < selectedPortfolio.portfolio.slides!.length - 1 ? prev + 1 : 0));
    }
  };

  const prevSlide = () => {
    if (selectedPortfolio?.portfolio.slides) {
      setCurrentSlide((prev) => (prev > 0 ? prev - 1 : selectedPortfolio.portfolio.slides!.length - 1));
    }
  };

  return (
    <section id="testimoni" className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dipercaya Alumni, Diakui Industri</h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Dengarkan cerita sukses alumni kami yang kini berkarir di perusahaan-perusahaan top Indonesia.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative px-4 md:px-16 mb-16">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 items-center justify-center transition-all duration-200 hover:bg-primary-foreground/20"
          >
            <ChevronLeft className="w-6 h-6 text-primary-foreground" />
          </button>

          <button
            onClick={scrollNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 items-center justify-center transition-all duration-200 hover:bg-primary-foreground/20"
          >
            <ChevronRight className="w-6 h-6 text-primary-foreground" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 h-full flex flex-col">
                    {/* Photo */}
                    <div className="relative h-48 overflow-hidden">
                      <img src={testimonial.photo} alt={testimonial.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />

                      {/* Author Info Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="font-bold text-primary-foreground text-lg">{testimonial.name}</p>
                        <p className="text-sm text-accent font-medium">{testimonial.role}</p>
                        <p className="text-xs text-primary-foreground/60 mt-1">{testimonial.batch}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      {/* Quote */}
                      <div className="flex-grow">
                        <Quote className="w-8 h-8 text-accent mb-3" />
                        <p className="text-primary-foreground/90 leading-relaxed">"{testimonial.content}"</p>
                      </div>

                      {/* Portfolio Preview */}
                      <div className="mt-6 group cursor-pointer" onClick={() => openPortfolio(testimonial)}>
                        <div className="relative overflow-hidden rounded-xl">
                          <img
                            src={testimonial.portfolio.thumbnail}
                            alt={testimonial.portfolio.title}
                            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                            <div className="flex-1 min-w-0 mr-3">
                              <p className="text-white text-sm font-semibold truncate">{testimonial.portfolio.title}</p>
                              <div className="flex items-center gap-1 text-white/70 text-xs mt-1">
                                <FileText className="w-3 h-3 flex-shrink-0" />
                                <span>{testimonial.portfolio.type.toUpperCase()}</span>
                              </div>
                            </div>
                            <div className="bg-accent text-accent-foreground px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 group-hover:bg-accent/90 transition-colors flex-shrink-0">
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>Lihat</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                className="w-2 h-2 rounded-full bg-primary-foreground/30 hover:bg-primary-foreground/50 transition-colors"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Dialog */}
      <Dialog open={!!selectedPortfolio} onOpenChange={closePortfolio}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-card">
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
            <p className="text-muted-foreground mb-6">{selectedPortfolio?.portfolio.description}</p>

            {/* Slides Viewer */}
            {selectedPortfolio?.portfolio.slides && (
              <div className="relative">
                <div className="bg-secondary rounded-xl overflow-hidden">
                  <img
                    src={selectedPortfolio.portfolio.slides[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="w-full h-auto max-h-[400px] object-cover"
                  />
                </div>

                {/* Slide Navigation */}
                <div className="flex items-center justify-between mt-4">
                  <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
                    <ChevronLeft className="w-5 h-5" />
                  </Button>

                  <div className="flex items-center gap-2">
                    {selectedPortfolio.portfolio.slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                          idx === currentSlide ? "bg-accent w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                      />
                    ))}
                  </div>

                  <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
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
            <div className="flex justify-center mt-6 pb-2">
              <Button variant="accent" className="gap-2 flex-shrink-0">
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


