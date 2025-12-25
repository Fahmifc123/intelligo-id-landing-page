import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight, Users, FolderOpen, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoIntelligo from "@/assets/logo-intelligo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string>("bootcamp");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const programCategories = [
    {
      id: "private",
      title: "Private Course",
      description: "Belajar 1-on-1 dengan mentor senior untuk hasil maksimal.",
      items: [
        { title: "Private Course 1-on-1", href: "/program/private-course" },
      ]
    },
    {
      id: "bootcamp",
      title: "Bootcamp",
      description: "Program intensif dengan kurikulum industri dan karir support.",
      items: [
        { title: "Bootcamp Semi Private", href: "/program/bootcamp-semi-private" },
        { title: "Bootcamp Private", href: "/program/bootcamp-private" },
        { title: "Job Ready Bootcamp", href: "/program/job-ready-bootcamp" },
      ]
    },
    {
      id: "workshop",
      title: "Workshop & Mini Class",
      description: "Kelas singkat untuk skill spesifik dengan biaya terjangkau.",
      items: [
        { title: "Workshop & Mini Class", href: "/program/workshop" },
      ]
    },
    {
      id: "corporate",
      title: "Corporate Training",
      description: "Pelatihan khusus untuk perusahaan dengan kurikulum custom.",
      items: [
        { title: "Corporate Training", href: "/program/corporate-training" },
      ]
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
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("program")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-4 py-2 font-medium transition-colors duration-200 flex items-center gap-1 ${
                  activeDropdown === "program" ? "text-accent" : "text-foreground/70 hover:text-accent"
                }`}
              >
                Program
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "program" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "program" && (
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-card rounded-2xl shadow-2xl border border-border/50 p-0 animate-fade-in overflow-hidden">
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
                          <h3 className="font-bold text-foreground mb-1">{activeCategory.title}</h3>
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
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("why")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
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
