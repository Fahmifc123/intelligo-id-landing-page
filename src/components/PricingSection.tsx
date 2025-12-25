import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import { Check, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const pricingCategories = [
  {
    id: "online",
    title: "Bootcamp Online",
    description: "Belajar dari rumah dengan live class interaktif",
    plans: [
      {
        name: "Bootcamp Malam - Data Science Beginner",
        subtitle: "25x Pertemuan",
        price: "Rp1.500.000",
        originalPrice: "Rp3.000.000",
        features: [
          "25x Pertemuan (2 jam/sesi)",
          "Senin–Rabu–Jumat | 19.30–21.30 WIB",
          "Python, SQL, Data Visualization",
          "Machine Learning Basics",
          "Sertifikat Kompetensi",
        ],
        popular: false,
      },
      {
        name: "Bootcamp Malam - AI Beginner",
        subtitle: "35x Pertemuan",
        price: "Rp2.250.000",
        originalPrice: "Rp4.500.000",
        features: [
          "35x Pertemuan (2 jam/sesi)",
          "Senin–Rabu–Jumat | 19.30–21.30 WIB",
          "Deep Learning & Neural Network",
          "Computer Vision & NLP",
          "Model Deployment & API",
        ],
        popular: false,
      },
      {
        name: "Bootcamp Malam - Job Ready",
        subtitle: "50x Pertemuan",
        price: "Rp3.900.000",
        originalPrice: "Rp7.800.000",
        features: [
          "50x Pertemuan (2 jam/sesi)",
          "Senin–Rabu–Jumat | 19.30–21.30 WIB",
          "Data Science + AI Lengkap",
          "10 Portfolio Projects",
          "Career Coaching & Job Interview Jaminan",
        ],
        popular: true,
      },
      {
        name: "Weekend Bootcamp - Data Science Beginner",
        subtitle: "12x Pertemuan",
        price: "Rp1.750.000",
        originalPrice: "TBA",
        features: [
          "12x Pertemuan (4 jam/sesi)",
          "Sabtu–Minggu | 10.00–15.00 WIB",
          "Python, SQL, Data Visualization",
          "Machine Learning Basics",
          "Sertifikat Kompetensi",
        ],
        popular: false,
      },
      {
        name: "Weekend Bootcamp - AI Beginner",
        subtitle: "17x Pertemuan",
        price: "Rp2.500.000",
        originalPrice: "TBA",
        features: [
          "17x Pertemuan (4 jam/sesi)",
          "Sabtu–Minggu | 10.00–15.00 WIB",
          "Deep Learning, Computer Vision, NLP",
          "LLM & Generative AI",
          "Mentoring Private",
        ],
        popular: false,
      },
      {
        name: "Weekend Bootcamp - Job Ready",
        subtitle: "25x Pertemuan",
        price: "Rp3.950.000",
        originalPrice: "TBA",
        features: [
          "25x Pertemuan (4 jam/sesi)",
          "Sabtu–Minggu | 10.00–15.00 WIB",
          "Data Science + AI Lengkap",
          "Real Project & Portofolio",
          "Career Coaching & Job Guarantee",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "offline",
    title: "Bootcamp Offline",
    description: "Tatap muka intensif dengan praktik langsung di Jakarta & Bandung",
    plans: [
      {
        name: "Weekend Bootcamp - Data Science For Beginner",
        subtitle: "6x Full Day",
        price: "Rp3.800.000",
        originalPrice: "Rp7.600.000",
        features: [
          "6x Pertemuan Full Day (8 jam/sesi)",
          "Sabtu–Minggu | 09.00–17.00 WIB",
          "Python, SQL, Data Visualization",
          "Machine Learning Basics",
          "Hands-on Projects & Networking",
        ],
        popular: false,
      },
      {
        name: "Weekend Bootcamp - AI For Beginner",
        subtitle: "10x Full Day",
        price: "Rp6.300.000",
        originalPrice: "Rp12.600.000",
        features: [
          "10x Pertemuan Full Day (8 jam/sesi)",
          "Sabtu–Minggu | 09.00–17.00 WIB",
          "Deep Learning, Computer Vision, NLP",
          "Model Deployment & API",
          "Final AI Project",
        ],
        popular: false,
      },
      {
        name: "Weekend Bootcamp - Job Ready",
        subtitle: "16x Full Day",
        price: "Rp10.135.000",
        originalPrice: "Rp20.270.000",
        features: [
          "16x Pertemuan Full Day (8 jam/sesi)",
          "Sabtu–Minggu | 09.00–17.00 WIB",
          "Data Science + AI Lengkap",
          "Real Project & Portofolio",
          "Career Coaching & Job Guarantee",
        ],
        popular: true,
      },
    ],
  },
  {
    id: "private",
    title: "Private Course",
    description: "1-on-1 mentoring dengan jadwal fleksibel (Online & Offline)",
    plans: [
      {
        name: "Private Course Online - Fleksibel Per Jam",
        subtitle: "1 Jam",
        price: "Rp100.000",
        originalPrice: "TBA",
        features: [
          "Private 1-on-1 Online",
          "Jadwal Fleksibel",
          "Custom Materi",
          "Recording Tersedia",
          "Chat Support",
        ],
        popular: false,
      },
      {
        name: "Paket Private Data Science For Beginner",
        subtitle: "25x (50 jam)",
        price: "Rp4.250.000",
        originalPrice: "TBA",
        features: [
          "25x Pertemuan Online (2 jam/sesi)",
          "Jadwal Fleksibel",
          "Python, SQL, Visualization",
          "Machine Learning",
          "Recording & Akses Materi Selamanya",
        ],
        popular: false,
      },
      {
        name: "Paket Private AI For Beginner",
        subtitle: "35x (70 jam)",
        price: "Rp5.810.000",
        originalPrice: "TBA",
        features: [
          "35x Pertemuan Online (2 jam/sesi)",
          "Jadwal Fleksibel",
          "Deep Learning, Computer Vision, NLP",
          "LLM & Generative AI",
          "Career Coaching",
        ],
        popular: false,
      },
      {
        name: "Paket Private Job Ready (Include DS + AI)",
        subtitle: "50x (100 jam)",
        price: "Rp8.000.000",
        originalPrice: "TBA",
        features: [
          "50x Pertemuan Online (2 jam/sesi)",
          "Data Science + AI Lengkap",
          "10 Portfolio Projects",
          "CV & LinkedIn Optimization",
          "Career Coaching & Job Interview Jaminan",
        ],
        popular: true,
      },
      {
        name: "Private Course Offline - Fleksibel Per Sesi",
        subtitle: "2 Jam",
        price: "Rp300.000",
        originalPrice: "TBA",
        features: [
          "Private 1-on-1 Offline (2 jam/sesi)",
          "Sabtu & Minggu | by Appointment",
          "Lokasi: Café atau Coworking Space",
          "Intensif & Personal",
          "Custom Silabus",
        ],
        popular: false,
      },
      {
        name: "Paket Private Offline - Data Science For Beginner",
        subtitle: "6x Full Day",
        price: "Rp1.000.000/sesi",
        originalPrice: "TBA",
        features: [
          "6x Pertemuan Full Day (6-8 jam/sesi)",
          "Intensif & Personal",
          "Python, SQL, Visualization",
          "Machine Learning",
          "Hands-on Projects",
        ],
        popular: false,
      },
      {
        name: "Paket Private Offline - AI For Beginner",
        subtitle: "10x Full Day",
        price: "Rp1.000.000/sesi",
        originalPrice: "TBA",
        features: [
          "10x Pertemuan Full Day (6-8 jam/sesi)",
          "Deep Learning, Computer Vision, NLP",
          "LLM & Generative AI",
          "Real Project Collab",
          "Career Fast Track",
        ],
        popular: false,
      },
      {
        name: "Paket Private Offline - Job Ready",
        subtitle: "16x Full Day",
        price: "Rp1.000.000/sesi",
        originalPrice: "TBA",
        features: [
          "16x Pertemuan Full Day (6-8 jam/sesi)",
          "Data Science + AI Lengkap",
          "10 Portfolio Projects",
          "Career Coaching & Mock Interview",
          "Job Guarantee & Lifetime Support",
        ],
        popular: true,
      },
    ],
  },
  {
    id: "mini",
    title: "Mini Bootcamp & Workshop",
    description: "Program singkat untuk fondasi cepat dalam Data Science & AI",
    plans: [
      {
        name: "Mini Bootcamp DS & AI",
        subtitle: "8x Pertemuan",
        price: "Rp400.000",
        originalPrice: "Rp800.000",
        features: [
          "8x Pertemuan (2 jam/sesi)",
          "Selasa & Kamis | 19.30–21.30 WIB",
          "Python Basics & Data Analysis",
          "Data Visualization",
          "Hands-on Project & Sertifikat",
        ],
        popular: true,
      },
      {
        name: "Workshop Intensive",
        subtitle: "1–2x Pertemuan",
        price: "Diskusi Kebutuhan",
        originalPrice: "TBA",
        features: [
          "1–2x Pertemuan (2–4 jam/sesi)",
          "Seasonal - Menyesuaikan Tren",
          "Topic-Specific Intense Learning",
          "Hands-on Practice",
          "Sertifikat",
        ],
        popular: false,
      },
      {
        name: "Mini Class (Online)",
        subtitle: "1x Pertemuan",
        price: "Gratis*",
        originalPrice: "TBA",
        features: [
          "1x Pertemuan (1–3 jam)",
          "Intensive Hands-on",
          "Diadakan Berkala (Mingguan/Bulanan)",
          "Live via Google Meet / Zoom",
          "Untuk Member & Community",
        ],
        popular: false,
      },
    ],
  },
  {
    id: "corporate",
    title: "Corporate Training",
    description: "Pelatihan khusus untuk perusahaan dengan kurikulum custom",
    plans: [
      {
        name: "Corporate Training",
        subtitle: "Custom Session",
        price: "Diskusi Kebutuhan",
        originalPrice: "TBA",
        features: [
          "Customizable untuk Perusahaan",
          "Online atau Onsite",
          "Kurikulum Sesuai Kebutuhan",
          "Diskusi Awal Gratis",
          "Sertifikat untuk Peserta",
        ],
        popular: true,
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
                  ? "bg-accent text-accent-foreground shadow-lg"
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
        <div className="relative px-4 md:px-16">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-lg border border-border items-center justify-center transition-all duration-200 ${
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
            className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-lg border border-border items-center justify-center transition-all duration-200 ${
              canScrollNext
                ? "hover:bg-accent hover:text-accent-foreground"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden -mx-1">
            <div className="overflow-visible px-1" ref={emblaRef}>
              <div className="flex gap-6 py-6">
                {currentCategory?.plans.map((plan) => (
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
                          <div className="flex items-center gap-1 px-4 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full shadow-lg">
                            <Sparkles className="w-4 h-4" />
                            Populer
                          </div>
                        </div>
                      )}

                      {/* Header */}
                      <div className="text-center mb-6 pt-2">
                        <h3 className="text-lg font-bold text-foreground line-clamp-2">
                          {plan.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {plan.subtitle}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="text-center mb-6">
                        {plan.originalPrice && plan.originalPrice !== "TBA" && (
                          <p className="text-sm text-muted-foreground line-through">
                            {plan.originalPrice}
                          </p>
                        )}
                        <p className={`text-2xl font-bold ${plan.price === "Gratis*" ? "text-green-600" : plan.price.includes("Diskusi") ? "text-blue-600" : "text-accent"}`}>
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
                        {plan.price === "Gratis*" ? "Join Sekarang" : plan.price.includes("Diskusi") ? "Hubungi Kami" : "Pilih Paket"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Swipe Hint */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          ← Geser untuk melihat lebih banyak paket →
        </p>

        {/* Notes */}
        <p className="text-center text-sm text-muted-foreground mt-4">
          *Harga Diskon khusus 5 orang pendaftar pertama saat Batch baru dibuka
        </p>
        <p className="text-center text-sm text-muted-foreground mt-2">
          *Add-on Jaminan Job Interview tersedia untuk paket tertentu
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
