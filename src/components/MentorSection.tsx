import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mentor1 from "@/assets/mentor-1.jpg";
import mentor2 from "@/assets/mentor-2.jpg";
import mentor3 from "@/assets/mentor-3.jpg";
import mentor4 from "@/assets/mentor-4.jpg";
import LogoCarousel from "./LogoCarousel";
import useEmblaCarousel from "embla-carousel-react";

const mentors = [
  {
    name: "Muhammad Fahmi",
    role: "Founder & Head Learning",
    company: "Intelligo ID & NoLimit Indonesia",
    image: mentor1,
    experience: "Full time Data Scientist di NoLimit Indonesia. Expert di NLP dan Data Mining.",
    expertise: ["Python", "NLP", "Data Mining"],
  },
  {
    name: "Andika Risky Sururi",
    role: "Data Scientist",
    company: "OLX Mobbi (Astra)",
    image: mentor2,
    experience: "Praktisi machine learning dan AI dengan fokus pada data science dan Python.",
    expertise: ["Machine Learning", "AI", "Python"],
  },
  {
    name: "Muhammad Ikhwan Fathulloh",
    role: "Software Engineer & Educator",
    company: "Universitas Teknologi Bandung",
    image: mentor3,
    experience: "Director Data & Information. Expert di IoT dan software architecture.",
    expertise: ["IoT", "Software Architecture", "Python"],
  },
  {
    name: "Yudy Yunardy",
    role: "Business Analyst",
    company: "19+ Years Banking Experience",
    image: mentor4,
    experience: "Expert di Trade Finance, Management Information Analyst, dan Dashboard Reporting.",
    expertise: ["Dashboard", "Power BI", "Banking"],
  },
  {
    name: "Joko Eliyanto",
    role: "Data Scientist",
    company: "LLM & ML Specialist",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    experience: "Expert di analytical dashboard, machine learning, dan LLM prompt engineer.",
    expertise: ["LLM", "Machine Learning", "Analytics"],
  },
  {
    name: "Mardhani D Novianto",
    role: "Data Scientist",
    company: "Python & ML Expert",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    experience: "Mastering Python untuk data processing, analysis, dan machine learning models.",
    expertise: ["Python", "Data Analysis", "ML Models"],
  },
];

const mentorCompanies = [
  { name: "Tokopedia", key: "tokopedia" as const },
  { name: "Gojek", key: "gojek" as const },
  { name: "Shopee", key: "shopee" as const },
  { name: "Traveloka", key: "traveloka" as const },
  { name: "Microsoft", key: "microsoft" as const },
  { name: "Google", key: "google" as const },
  { name: "Amazon", key: "amazon" as const },
  { name: "Meta", key: "meta" as const },
  { name: "Grab", key: "grab" as const },
  { name: "Bukalapak", key: "bukalapak" as const },
  { name: "Telkom", key: "telkom" as const },
  { name: "Bank Mandiri", key: "mandiri" as const },
];

const MentorSection = () => {
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

  return (
    <section id="mentor" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mentor Praktisi Ahli
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Belajar langsung dari praktisi yang berpengalaman di perusahaan-perusahaan teknologi terkemuka.
          </p>
        </div>

        {/* Mentor Companies Carousel */}
        <div className="mb-12">
          <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider">
            Mentor kami berasal dari
          </p>
          <LogoCarousel 
            logos={mentorCompanies} 
            direction="right" 
            speed="normal"
            variant="light"
          />
        </div>

        {/* Mentors Carousel */}
        <div className="relative px-4 md:px-16">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-lg border border-border items-center justify-center transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-lg border border-border items-center justify-center transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {mentors.map((mentor, index) => (
                <div
                  key={mentor.name}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                >
                  <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50 h-full">
                    {/* Image */}
                    <div className="aspect-square overflow-hidden relative">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Expertise Tags */}
                      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1">
                        {mentor.expertise.slice(0, 2).map((skill) => (
                          <span 
                            key={skill}
                            className="px-2 py-0.5 bg-primary/80 text-primary-foreground text-xs rounded-full backdrop-blur-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-foreground">{mentor.name}</h3>
                      <p className="text-accent font-semibold text-sm">{mentor.role}</p>
                      <p className="text-muted-foreground text-sm mb-3">{mentor.company}</p>
                      <p className="text-sm text-muted-foreground/80 line-clamp-2">
                        {mentor.experience}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {mentors.map((_, idx) => (
              <button
                key={idx}
                onClick={() => emblaApi?.scrollTo(idx)}
                className="w-2 h-2 rounded-full bg-foreground/30 hover:bg-foreground/50 transition-colors"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
