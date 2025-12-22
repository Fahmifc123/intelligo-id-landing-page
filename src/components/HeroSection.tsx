import { Button } from "@/components/ui/button";
import { Star, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-mentor.jpg";

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-background overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-light rounded-full">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-medium text-foreground/80">
                4.9/5 Dari 500+ Alumni
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Belajar{" "}
              <span className="text-accent">Data Science & AI</span>{" "}
              Lebih Terarah dan Job Ready
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Pelajari Python, Machine Learning, AI, NLP, dan Visualisasi Data
              melalui bootcamp online & offline dengan kurikulum job ready.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="animate-pulse-glow">
                Daftar Sekarang
              </Button>
              <Button variant="hero-secondary" size="xl">
                Konsultasi Gratis
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Alumni</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-foreground">85%</p>
                  <p className="text-sm text-muted-foreground">Dapat Kerja</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-slide-in-right animation-delay-200">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Data Scientist Professional"
                className="w-full h-auto rounded-2xl shadow-card-hover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
