import { useState, useEffect } from "react";
import { 
  Home, 
  GraduationCap, 
  BookOpen, 
  MessageSquare, 
  BarChart3, 
  Users, 
  CreditCard, 
  Gift, 
  HelpCircle,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const SidebarNav = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { id: "hero", label: "Beranda", icon: Home },
    { id: "program", label: "Program", icon: GraduationCap },
    { id: "curriculum", label: "Kurikulum", icon: BookOpen },
    { id: "testimoni", label: "Testimoni", icon: MessageSquare },
    { id: "stats", label: "Pencapaian", icon: BarChart3 },
    { id: "mentor", label: "Mentor", icon: Users },
    { id: "pricing", label: "Harga", icon: CreditCard },
    { id: "promo", label: "Promo", icon: Gift },
    { id: "faq", label: "FAQ", icon: HelpCircle },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed left-0 top-0 h-screen bg-card/95 backdrop-blur-md border-r border-border/50 z-50 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-56"
      } hidden lg:flex flex-col`}
    >
      {/* Logo */}
      <div className="p-4 border-b border-border/50">
        <a href="#hero" className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }}>
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
            <span className="text-accent-foreground font-bold text-xl">I</span>
          </div>
          {!isCollapsed && (
            <span className="font-bold text-lg text-foreground whitespace-nowrap">Intelligo ID</span>
          )}
        </a>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 py-6 px-2 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group relative ${
                    isActive 
                      ? "bg-accent text-accent-foreground shadow-md" 
                      : "text-foreground/70 hover:bg-accent/10 hover:text-accent"
                  }`}
                >
                  {/* Active indicator line */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent rounded-r-full -ml-2" />
                  )}
                  
                  <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "" : "group-hover:scale-110"} transition-transform`} />
                  
                  {!isCollapsed && (
                    <span className={`text-sm font-medium whitespace-nowrap ${isActive ? "font-semibold" : ""}`}>
                      {item.label}
                    </span>
                  )}

                  {/* Tooltip for collapsed state */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-card border border-border rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="p-4 border-t border-border/50">
        {!isCollapsed ? (
          <a
            href="#pricing"
            onClick={(e) => { e.preventDefault(); scrollToSection("pricing"); }}
            className="block w-full py-3 px-4 bg-accent text-accent-foreground text-center font-semibold rounded-lg hover:bg-accent/90 transition-colors shadow-lg"
          >
            Daftar Sekarang
          </a>
        ) : (
          <button
            onClick={() => scrollToSection("pricing")}
            className="w-full aspect-square flex items-center justify-center bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors shadow-lg"
          >
            <CreditCard className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-12 bg-card border border-border rounded-r-lg flex items-center justify-center hover:bg-accent/10 transition-colors shadow-md"
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4 text-foreground/70" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-foreground/70" />
        )}
      </button>
    </nav>
  );
};

export default SidebarNav;
