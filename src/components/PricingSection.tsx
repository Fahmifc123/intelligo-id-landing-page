import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

const pricingCategories = [
  {
    id: "online",
    title: "Bootcamp Online",
    description: "Belajar dari rumah dengan live class interaktif",
    plans: [
      {
        name: "Bootcamp Minicon - Online",
        subtitle: "Mini Intensive - 6 Sesi",
        price: "Rp1.999.999",
        originalPrice: "Rp2.500.000",
        features: [
          "6 Sesi Live Class",
          "Materi & Recording",
          "Sertifikat Kompetensi",
          "Akses Komunitas Alumni",
        ],
        popular: false,
      },
      {
        name: "Data Science Beginner",
        subtitle: "12 Sesi Live Class",
        price: "Rp2.499.999",
        originalPrice: "Rp3.500.000",
        features: [
          "12 Sesi Live Class",
          "Python & SQL Basics",
          "Data Visualization",
          "Sertifikat Kompetensi",
          "1x Mentoring Private",
        ],
        popular: true,
      },
      {
        name: "AI & Machine Learning",
        subtitle: "16 Sesi Live Class",
        price: "Rp3.999.999",
        originalPrice: "Rp5.000.000",
        features: [
          "16 Sesi Live Class",
          "ML & Deep Learning",
          "NLP & Computer Vision",
          "Portfolio Project",
          "Job Connector Access",
        ],
        popular: false,
      },
      {
        name: "Weekend Bootcamp",
        subtitle: "8 Weekend Intensive",
        price: "Rp2.999.999",
        originalPrice: "Rp4.000.000",
        features: [
          "8 Weekend Sessions",
          "Full Stack Data",
          "Materi & Recording",
          "Sertifikat",
          "Career Coaching",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "offline",
    title: "Bootcamp Offline",
    description: "Tatap muka intensif dengan praktik langsung",
    plans: [
      {
        name: "Bootcamp Weekend Offline",
        subtitle: "10 Pertemuan Tatap Muka",
        price: "Rp5.500.000",
        originalPrice: "Rp7.000.000",
        features: [
          "10 Sesi Tatap Muka",
          "Hands-on Practice",
          "Networking Langsung",
          "Sertifikat Kompetensi",
          "Lunch & Snack",
        ],
        popular: false,
      },
      {
        name: "Job Ready Bootcamp",
        subtitle: "16+ Pertemuan Intensif",
        price: "Rp7.999.999",
        originalPrice: "Rp10.000.000",
        features: [
          "16+ Sesi Tatap Muka",
          "Materi Lengkap",
          "3x Mentoring Private",
          "Portfolio Building",
          "Mock Interview",
          "Job Guarantee*",
        ],
        popular: true,
      },
      {
        name: "Full Stack Data",
        subtitle: "20 Pertemuan Lengkap",
        price: "Rp9.999.999",
        originalPrice: "Rp12.500.000",
        features: [
          "20 Sesi Tatap Muka",
          "Python to Production",
          "Real Industry Project",
          "Unlimited Mentoring",
          "Job Placement Support",
          "Alumni Network",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "private",
    title: "Private Course",
    description: "1-on-1 mentoring dengan jadwal fleksibel",
    plans: [
      {
        name: "Paket DS Beginner",
        subtitle: "5 Sesi Private",
        price: "Rp3.500.000",
        originalPrice: "Rp4.500.000",
        features: [
          "5 Sesi Private 1-on-1",
          "Custom Silabus",
          "Flexible Schedule",
          "Recording Sesi",
          "Chat Support",
        ],
        popular: false,
      },
      {
        name: "Paket AI Beginner",
        subtitle: "8 Sesi Private",
        price: "Rp5.500.000",
        originalPrice: "Rp7.000.000",
        features: [
          "8 Sesi Private 1-on-1",
          "ML & AI Focus",
          "Flexible Schedule",
          "Portfolio Building",
          "Career Coaching",
        ],
        popular: false,
      },
      {
        name: "Paket Job Ready",
        subtitle: "12 Sesi Private",
        price: "Rp8.000.000",
        originalPrice: "Rp10.000.000",
        features: [
          "12 Sesi Private 1-on-1",
          "Custom Silabus",
          "Flexible Schedule",
          "Portfolio Building",
          "Career Coaching",
          "Unlimited Konsultasi",
        ],
        popular: true,
      },
      {
        name: "Paket Enterprise",
        subtitle: "20 Sesi Private",
        price: "Rp12.000.000",
        originalPrice: "Rp15.000.000",
        features: [
          "20 Sesi Private 1-on-1",
          "Full Custom Program",
          "Priority Scheduling",
          "Real Project Collab",
          "Career Fast Track",
          "Lifetime Support",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "mini",
    title: "Mini Bootcamp",
    description: "Durasi singkat untuk skill spesifik",
    plans: [
      {
        name: "Python Fundamentals",
        subtitle: "4 Sesi Intensive",
        price: "Rp899.000",
        originalPrice: "Rp1.500.000",
        features: [
          "4 Sesi Live Class",
          "Python dari Nol",
          "Hands-on Project",
          "Sertifikat",
        ],
        popular: false,
      },
      {
        name: "SQL for Data",
        subtitle: "4 Sesi Intensive",
        price: "Rp899.000",
        originalPrice: "Rp1.500.000",
        features: [
          "4 Sesi Live Class",
          "SQL Query Mastery",
          "Real Database Practice",
          "Sertifikat",
        ],
        popular: false,
      },
      {
        name: "Data Visualization",
        subtitle: "4 Sesi Intensive",
        price: "Rp999.000",
        originalPrice: "Rp1.800.000",
        features: [
          "4 Sesi Live Class",
          "Matplotlib & Seaborn",
          "Dashboard Creation",
          "Portfolio Ready",
          "Sertifikat",
        ],
        popular: true,
      },
      {
        name: "Machine Learning Intro",
        subtitle: "6 Sesi Intensive",
        price: "Rp1.499.000",
        originalPrice: "Rp2.500.000",
        features: [
          "6 Sesi Live Class",
          "ML Fundamentals",
          "Scikit-learn Practice",
          "Mini Project",
          "Sertifikat",
        ],
        popular: false,
      },
      {
        name: "NLP Workshop",
        subtitle: "4 Sesi Intensive",
        price: "Rp1.299.000",
        originalPrice: "Rp2.000.000",
        features: [
          "4 Sesi Live Class",
          "Text Processing",
          "Sentiment Analysis",
          "Chatbot Basics",
          "Sertifikat",
        ],
        popular: false,
      },
    ],
  },
];

const PricingSection = () => {
  const [activeCategory, setActiveCategory] = useState("online");

  const currentCategory = pricingCategories.find(
    (cat) => cat.id === activeCategory
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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

  // Reset carousel when category changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0);
    }
  }, [activeCategory, emblaApi]);

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Paket Harga & Investasi Karir Anda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan kemampuan Anda.
            Investasi terbaik untuk karir impian.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {pricingCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-accent text-accent-foreground shadow-glow"
                  : "bg-secondary text-foreground/70 hover:bg-secondary/80"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Category Description */}
        {currentCategory && (
          <p className="text-center text-muted-foreground mb-8">
            {currentCategory.description}
          </p>
        )}

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-card shadow-lg border border-border flex items-center justify-center transition-all duration-200 ${
              canScrollPrev
                ? "hover:bg-accent hover:text-accent-foreground"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-card shadow-lg border border-border flex items-center justify-center transition-all duration-200 ${
              canScrollNext
                ? "hover:bg-accent hover:text-accent-foreground"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden mx-6" ref={emblaRef}>
            <div className="flex gap-6">
              {currentCategory?.plans.map((plan, index) => (
                <div
                  key={`${activeCategory}-${plan.name}`}
                  className="flex-shrink-0 w-[280px] md:w-[300px]"
                >
                  <div
                    className={`relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border h-full flex flex-col ${
                      plan.popular
                        ? "border-accent ring-2 ring-accent/20"
                        : "border-border/50"
                    }`}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <div className="flex items-center gap-1 px-4 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full shadow-glow">
                          <Sparkles className="w-4 h-4" />
                          Populer
                        </div>
                      </div>
                    )}

                    {/* Header */}
                    <div className="text-center mb-6 pt-2">
                      <h3 className="text-lg font-bold text-foreground">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {plan.subtitle}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-6">
                      <p className="text-sm text-muted-foreground line-through">
                        {plan.originalPrice}
                      </p>
                      <p className="text-2xl font-bold text-accent">
                        {plan.price}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-6 flex-grow">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      variant={plan.popular ? "accent" : "accent-outline"}
                      className="w-full mt-auto"
                      size="lg"
                    >
                      Pilih Paket
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Swipe Hint */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          ← Geser untuk melihat lebih banyak paket →
        </p>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-4">
          *Add-on Jaminan Job Interview tersedia untuk paket tertentu
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
