import { Button } from "@/components/ui/button";
import { Star, Users, Award, Calendar, BookOpen, Briefcase, GraduationCap, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-mentor.jpg";

const HeroSection = () => {
  const features = [
    { icon: BookOpen, label: "Bootcamp" },
    { icon: Users, label: "Mentor Praktisi" },
    { icon: GraduationCap, label: "Beginner Friendly" },
    { icon: Briefcase, label: "Job Ready" },
  ];

  return (
    <section id="hero" className="relative pt-16 md:pt-20 pb-16 md:pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/70" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up text-primary-foreground">
            {/* Feature Tags */}
            <div className="flex flex-wrap gap-2">
              {features.map((feature) => (
                <div 
                  key={feature.label}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20"
                >
                  <feature.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-primary-foreground">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your #1{" "}
              <span className="text-accent">Data Science & AI</span>{" "}
              Learning Platform
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
              Job Ready Bootcamp dengan Jaminan Interview Kerja dan Pendampingan Karir 
              lengkap dengan pembuatan CV, optimasi LinkedIn & personal branding.
            </p>

            {/* Batch Info */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Calendar className="w-4 h-4 text-accent" />
                <span>Online & Offline Program</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Users className="w-4 h-4 text-accent" />
                <span>Beginner & Job Ready</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="animate-pulse-glow">
                Daftar Sekarang
              </Button>
              <Button variant="hero-secondary" size="xl">
                Konsultasi Gratis
              </Button>
            </div>

            {/* Certification Badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">Certified by</p>
                  <p className="font-semibold text-sm text-primary-foreground">BNSP Indonesia</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">Partner</p>
                  <p className="font-semibold text-sm text-primary-foreground">Microsoft Azure</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="relative animate-slide-in-right animation-delay-200">
            <div className="bg-card/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-border/50">
              {/* Stats Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Bergabung dengan 315+ Alumni Sukses
                </h3>
                <p className="text-muted-foreground">
                  21+ Batch telah berjalan dengan hasil memuaskan
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-accent/10 rounded-xl">
                  <p className="text-3xl md:text-4xl font-bold text-accent">85%</p>
                  <p className="text-sm text-muted-foreground mt-1">Alumni Dapat Kerja</p>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-xl">
                  <p className="text-3xl md:text-4xl font-bold text-primary">4.9/5</p>
                  <p className="text-sm text-muted-foreground mt-1">Rating Kepuasan</p>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-xl">
                  <p className="text-3xl md:text-4xl font-bold text-accent">20+</p>
                  <p className="text-sm text-muted-foreground mt-1">Batch Berjalan</p>
                </div>
              </div>

              {/* Career Paths */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground">Opsi Karier & Gaji:</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">Data Scientist</p>
                      <p className="text-xs text-accent font-semibold">15-25 Juta/bln</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">ML Engineer</p>
                      <p className="text-xs text-accent font-semibold">18-30 Juta/bln</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">Data Analyst</p>
                      <p className="text-xs text-accent font-semibold">10-18 Juta/bln</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">AI Engineer</p>
                      <p className="text-xs text-accent font-semibold">20-35 Juta/bln</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex items-center justify-center gap-2 mt-6 pt-6 border-t border-border">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Dari 500+ Review Alumni
                </span>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
