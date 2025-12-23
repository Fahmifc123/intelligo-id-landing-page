import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Users, FolderOpen, FileText, GraduationCap, Code, Brain, Monitor, Video } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const bootcampItems = [
    { 
      title: "Bootcamp Job Ready", 
      description: "Persiapan karir IT dengan kurikulum industri.", 
      href: "/#program",
      icon: GraduationCap 
    },
    { 
      title: "Bootcamp Offline", 
      description: "Belajar langsung dengan mentor di lokasi.", 
      href: "/#program",
      icon: Monitor 
    },
    { 
      title: "Bootcamp Course Online", 
      description: "Bootcamp online dengan sesi live & rekaman.", 
      href: "/#program",
      icon: Video 
    },
    { 
      title: "Video Course", 
      description: "Kursus mandiri berbasis video.", 
      href: "/#program",
      icon: Video 
    },
  ];

  const bootcampCoursesItems = [
    { 
      title: "Python Basic", 
      description: "Dasar-dasar pemrograman Python.", 
      href: "/#curriculum",
      icon: Code 
    },
    { 
      title: "AI 101", 
      description: "Pengenalan kecerdasan buatan.", 
      href: "/#curriculum",
      icon: Brain 
    },
    { 
      title: "Bootcamp Data Science For Beginner", 
      description: "Dasar-dasar Data Science & analisis data.", 
      href: "/#program",
      icon: GraduationCap 
    },
  ];

  const whyIntelligoItems = [
    { 
      title: "About Us", 
      description: "Informasi tentang visi dan misi Intelligo.", 
      href: "/about",
      icon: Users 
    },
    { 
      title: "Portofolio Student", 
      description: "Portofolio karya alumni kami.", 
      href: "/portofolio",
      icon: FolderOpen 
    },
    { 
      title: "Kontak", 
      description: "Hubungi tim kami.", 
      href: "/kontak",
      icon: FileText 
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

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">I</span>
              </div>
              <div className="w-1 h-8 bg-accent rounded"></div>
            </div>
            <span className="font-bold text-xl tracking-tight">
              <span className="text-accent">INTELLIGO</span>
              <span className="text-foreground">.ID</span>
            </span>
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

            {/* Bootcamp Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("bootcamp")}
                className={`px-4 py-2 font-medium transition-colors duration-200 flex items-center gap-1 ${
                  activeDropdown === "bootcamp" ? "text-accent" : "text-foreground/70 hover:text-accent"
                }`}
              >
                Bootcamp
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "bootcamp" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "bootcamp" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-card rounded-2xl shadow-2xl border border-border/50 p-6 animate-fade-in">
                  <div className="flex gap-8">
                    {/* Left side - Promo Card */}
                    <div className="w-56 flex-shrink-0">
                      <div className="bg-gradient-to-br from-accent to-accent/80 rounded-xl p-5 text-accent-foreground h-full">
                        <p className="text-sm opacity-90 mb-2">Tingkatkan keterampilan Anda dengan materi dari para ahli.</p>
                        <h3 className="text-2xl font-bold mb-4">Intelligo</h3>
                        <p className="text-xs opacity-80">
                          Jelajahi berbagai kursus dalam analisis data, machine learning, dan big data.
                        </p>
                      </div>
                    </div>

                    {/* Right side - Menu Items */}
                    <div className="flex-1 grid grid-cols-2 gap-x-6">
                      <div className="space-y-1">
                        {bootcampItems.map((item) => (
                          <Link
                            key={item.title}
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block p-3 rounded-lg hover:bg-accent/5 transition-colors group"
                          >
                            <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-sm text-foreground/60">{item.description}</p>
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-1">
                        {bootcampCoursesItems.map((item) => (
                          <Link
                            key={item.title}
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block p-3 rounded-lg hover:bg-accent/5 transition-colors group"
                          >
                            <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-sm text-foreground/60">{item.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Job Connect */}
            <Link
              to="/job-connect"
              className={`px-4 py-2 font-medium transition-colors duration-200 ${
                isActive("/job-connect") ? "text-accent" : "text-foreground/70 hover:text-accent"
              }`}
            >
              Job Connect
            </Link>

            {/* Why Intelligo Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle("why")}
                className={`px-4 py-2 font-medium transition-colors duration-200 flex items-center gap-1 ${
                  activeDropdown === "why" ? "text-accent" : "text-foreground/70 hover:text-accent"
                }`}
              >
                Why Intelligo
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "why" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "why" && (
                <div className="absolute top-full right-0 mt-2 w-[500px] bg-card rounded-2xl shadow-2xl border border-border/50 p-6 animate-fade-in">
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
                      {whyIntelligoItems.map((item) => (
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
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
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

              {/* Mobile Bootcamp Section */}
              <div className="px-4 py-2">
                <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">Bootcamp</p>
                {[...bootcampItems, ...bootcampCoursesItems].map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="block py-2 text-foreground/70 hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
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
                {whyIntelligoItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="block py-2 text-foreground/70 hover:text-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
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
