import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mentor1 from "@/assets/mentor-1.jpg";
import mentor2 from "@/assets/mentor-2.jpg";
import mentor3 from "@/assets/mentor-3.jpg";
import mentor4 from "@/assets/mentor-4.jpg";
import LogoCarousel from "./LogoCarousel";
import useEmblaCarousel from "embla-carousel-react";
import trainers from "@/data/trainers";

// Map imported trainers.json to mentor items used by the UI
const mentors = (trainers || []).map((t) => ({
  name: t.name || "",
  role: t.role || "Trainer",
  company: t.company || "",
  image: t.photoUrl || mentor1,
  experience: t.experience || "",
  expertise: t.expertise || [],
  linkedin: t.linkedin || "",
}));

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
                      {/* Show role once; show company only if different */}
                      <p className="text-accent font-semibold text-sm mb-2">{mentor.role}</p>

                      {mentor.company && mentor.company.trim().toLowerCase() !== mentor.role.trim().toLowerCase() && (
                        <p className="text-muted-foreground text-sm mb-2">{mentor.company}</p>
                      )}

                      {/* LinkedIn */}
                      {mentor.linkedin && (
                        <a
                          href={mentor.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-3 hover:underline"
                          aria-label={`Open ${mentor.name} LinkedIn`}
                        >
                          <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="w-4 h-4" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      )}

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
