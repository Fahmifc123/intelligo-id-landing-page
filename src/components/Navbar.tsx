import logoIntelligo from "@/assets/logo-intelligo.png";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronDown, ChevronRight, FileText, FolderOpen, Menu, Users, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string>("bootcamp");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const location = useLocation();

  const programCategories = [
    {
      id: "bootcamp-online",
      title: "Bootcamp Online",
      description: "Belajar dari rumah dengan live class interaktif",
      categoryHref: "/bootcamp-data-science-online",
      items: [
        { title: "Bootcamp Malam (Weekday)", href: "/program/bootcamp-malam" },
        { title: "Weekend Bootcamp Online", href: "/program/bootcamp-weekend" },
        { title: "Job Ready Bootcamp Online", href: "/program/job-ready-bootcamp" },
      ]
    },
    {
      id: "bootcamp-offline",
      title: "Bootcamp Offline",
      description: "Tatap muka intensif dengan praktik langsung di Jakarta & Bandung",
      categoryHref: "/bootcamp-data-science-offline",
      items: [
        { title: "Weekend Bootcamp Offline", href: "/program/bootcamp-offline" },
        { title: "Weekday Bootcamp Offline", href: "/program/bootcamp-weekday" },
      ]
    },
    {
      id: "private",
      title: "Private Course",
      description: "1-on-1 mentoring dengan jadwal fleksibel (Online & Offline)",
      categoryHref: "/private-course",
      items: [
        { title: "Private Course Online", href: "/program/private-course" },
        { title: "Private Course Offline", href: "/program/private-course-offline" },
      ]
    },
    {
      id: "mini",
      title: "Mini Bootcamp & Workshop",
      description: "Program singkat untuk fondasi cepat dalam Data Science & AI",
      categoryHref: "/mini-bootcamp-workshop",
      items: [
        { title: "Mini Bootcamp DS & AI", href: "/program/mini-bootcamp" },
        { title: "Workshop Intensive", href: "/program/workshop" },
      ]
    },
    {
      id: "corporate",
      title: "Corporate Training",
      description: "Pelatihan khusus untuk perusahaan dengan kurikulum custom",
      categoryHref: "/corporate-training",
      items: [
        { title: "Corporate Training", href: "/program/corporate-training" },
      ]
    },
  ];

  const whyIntelligoItems = [
    { 
      title: "About Us", 
      description: "Informasi tentang visi dan misi Intelligo.", 
      href: "/about-us",
      icon: Users 
    },
    { 
      title: "Portofolio Student", 
      description: "Portofolio karya alumni kami.", 
      href: "/portofolio-student",
      icon: FolderOpen 
    },
    { 
      title: "Kontak", 
      description: "Hubungi tim kami.", 
      href: "/kontak",
      icon: FileText 
    },
    { 
      title: "Join Community", 
      description: "Bergabung dengan komunitas Intelligo.", 
      href: "https://community.intelligo.id/",
      icon: Users,
      target: "_blank"
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openDropdown = (dropdown: string) => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const scheduleCloseDropdown = (dropdown: string) => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setActiveDropdown((current) => (current === dropdown ? null : current));
    }, 120);
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const activeCategory = programCategories.find(cat => cat.id === hoveredCategory);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoIntelligo} 
              alt="Intelligo ID" 
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {/* Home */}
            <Link
              to="/"
              className={`px-4 py-2 font-medium transition-colors duration-200 ${
                isActive("/") && location.pathname === "/" ? "text-accent" : "text-foreground/70 hover:text-accent"
              }`}
            >
              Home
            </Link>

            {/* Program Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => openDropdown("program")}
                onMouseLeave={() => scheduleCloseDropdown("program")}
                className={`px-4 py-2 font-medium transition-colors duration-200 flex items-center gap-1 ${
                  activeDropdown === "program" ? "text-accent" : "text-foreground/70 hover:text-accent"
                }`}
              >
                Program
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "program" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "program" && (
                <div
                  onMouseEnter={() => openDropdown("program")}
                  onMouseLeave={() => scheduleCloseDropdown("program")}
                  className="absolute top-full left-0 mt-0 pt-2 w-[600px] bg-card rounded-2xl shadow-2xl border border-border/50 p-0 animate-fade-in overflow-hidden z-50"
                >
                  <div className="flex">
                    {/* Left side - Categories */}
                    <div className="w-56 bg-muted/30 border-r border-border/50 py-3">
                      {programCategories.map((category) => (
                        <button
                          key={category.id}
                          onMouseEnter={() => setHoveredCategory(category.id)}
                          className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${
                            hoveredCategory === category.id 
                              ? "text-accent bg-accent/5" 
                              : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                          }`}
                        >
                          <span className="font-medium">{category.title}</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      ))}
                    </div>

                    {/* Right side - Detail */}
                    <div className="flex-1 p-5">
                      {activeCategory && (
                        <>
                          <Link
                            to={activeCategory.categoryHref}
                            onClick={() => setActiveDropdown(null)}
                            className="font-bold text-foreground hover:text-accent transition-colors mb-1 block"
                          >
                            {activeCategory.title}
                          </Link>
                          <p className="text-sm text-foreground/60 mb-4">{activeCategory.description}</p>
                          <div className="space-y-1">
                            {activeCategory.items.map((item) => (
                              <Link
                                key={item.title}
                                to={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="block py-2 text-foreground/80 hover:text-accent transition-colors font-medium"
                              >
                                {item.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Job Ready Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => openDropdown("jobready")}
                onMouseLeave={() => scheduleCloseDropdown("jobready")}
                className={`px-4 py-2 font-medium transition-colors duration-200 flex items-center gap-1 ${
                  activeDropdown === "jobready" ? "text-accent" : "text-foreground/70 hover:text-accent"
                }`}
              >
                Job Ready
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "jobready" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "jobready" && (
                <div
                  onMouseEnter={() => openDropdown("jobready")}
                  onMouseLeave={() => scheduleCloseDropdown("jobready")}
                  className="absolute top-full left-0 mt-0 pt-2 w-[500px] bg-card rounded-2xl shadow-2xl border border-border/50 p-6 animate-fade-in z-50"
                >
                  <div className="flex gap-6">
                    {/* Left side - Promo Card */}
                    <div className="w-48 flex-shrink-0">
                      <div className="bg-gradient-to-br from-accent to-accent/80 rounded-xl p-5 text-accent-foreground h-full">
                        <p className="text-sm opacity-90 mb-2">Siap karir di dunia data science dan AI</p>
                        <h3 className="text-2xl font-bold mb-4">Job Ready</h3>
                        <p className="text-xs opacity-80">
                          Tools dan coaching untuk mendapatkan pekerjaan impian Anda.
                        </p>
                      </div>
                    </div>

                    {/* Right side - Menu Items */}
                    <div className="flex-1 space-y-1">
                      {[
                        { title: "Job Connect", description: "Koneksi dengan perusahaan partner", href: "/job-connect" },
                        { title: "CV Analyzer", description: "Analisis dan optimasi CV Anda", href: "/job-ready/cv-analyzer" },
                        { title: "Career Coaching", description: "Bimbingan persiapan karir profesional", href: "/job-ready/career-coaching" },
                        { title: "Interview with AI", description: "Latihan interview dengan AI coach", href: "/job-ready/interview-ai" },
                        { title: "Jaminan Job Interview", description: "Jaminan interview dengan perusahaan top", href: "/job-ready/job-guarantee" }
                      ].map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                            <CheckCircle className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-sm text-foreground/60">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Why Intelligo Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => openDropdown("why")}
                onMouseLeave={() => scheduleCloseDropdown("why")}
                className={`px-4 py-2 font-medium transition-colors duration-200 flex items-center gap-1 ${
                  activeDropdown === "why" ? "text-accent" : "text-foreground/70 hover:text-accent"
                }`}
              >
                Why Intelligo
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "why" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "why" && (
                <div
                  onMouseEnter={() => openDropdown("why")}
                  onMouseLeave={() => scheduleCloseDropdown("why")}
                  className="absolute top-full right-0 mt-0 pt-2 w-[500px] bg-card rounded-2xl shadow-2xl border border-border/50 p-6 animate-fade-in z-50"
                >
                  <div className="flex gap-6">
                    {/* Left side - Promo Card */}
                    <div className="w-48 flex-shrink-0">
                      <div className="bg-gradient-to-br from-accent to-accent/80 rounded-xl p-5 text-accent-foreground h-full">
                        <p className="text-sm opacity-90 mb-2">Tingkatkan keterampilan Anda dengan materi dari para ahli.</p>
                        <h3 className="text-2xl font-bold mb-4">Intelligo</h3>
                        <p className="text-xs opacity-80">
                          Jelajahi berbagai kursus dalam analisis data, machine learning, dan big data.
                        </p>
                      </div>
                    </div>

                    {/* Right side - Menu Items */}
                    <div className="flex-1 space-y-1">
                      {whyIntelligoItems.map((item) => {
                        const isExternal = item.href.startsWith('http');
                        return isExternal ? (
                          <a
                            key={item.title}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                              <item.icon className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-sm text-foreground/60">{item.description}</p>
                            </div>
                          </a>
                        ) : (
                          <Link
                            key={item.title}
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/5 transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                              <item.icon className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                                {item.title}
                              </h4>
                              <p className="text-sm text-foreground/60">{item.description}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white" size="sm" asChild>
              <Link to="/katalog-bootcamp">
                Katalog Bootcamp
              </Link>
            </Button>
            <Button variant="accent" size="sm" asChild>
              <a href="https://intelligo.myr.id/" target="_blank" rel="noopener noreferrer">
                Learning Portal
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                className="px-4 py-3 text-foreground/70 hover:text-accent hover:bg-accent/5 rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Program Section */}
              <div className="px-4 py-2">
                <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">Program</p>
                {programCategories.flatMap((category) => 
                  category.items.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="block py-2 text-foreground/70 hover:text-accent transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))
                )}
              </div>

              <Link
                to="/job-connect"
                className="px-4 py-3 text-foreground/70 hover:text-accent hover:bg-accent/5 rounded-lg transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Job Connect
              </Link>

              {/* Mobile Why Intelligo Section */}
              <div className="px-4 py-2">
                <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">Why Intelligo</p>
                {whyIntelligoItems.map((item) => {
                  const isExternal = item.href.startsWith('http');
                  return isExternal ? (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 text-foreground/70 hover:text-accent transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="block py-2 text-foreground/70 hover:text-accent transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>

              <div className="px-4 mt-4">
                <Button variant="accent" className="w-full justify-center" asChild>
                  <a href="https://intelligo.myr.id/" target="_blank" rel="noopener noreferrer">
                    Learning Portal
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
