import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  BookOpen,
  Briefcase,
  MessageSquare,
  BarChart3,
  Award,
  DollarSign,
  Megaphone,
  HelpCircle,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: "program", label: "Program", icon: LayoutGrid },
  { id: "curriculum", label: "Kurikulum", icon: BookOpen },
  { id: "career", label: "Karir Support", icon: Briefcase },
  { id: "testimoni", label: "Testimoni", icon: MessageSquare },
  { id: "stats", label: "Statistik", icon: BarChart3 },
  { id: "mentor", label: "Mentor", icon: Users },
  { id: "pricing", label: "Harga", icon: DollarSign },
  { id: "promo", label: "Promo", icon: Megaphone },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

interface ScrollSideNavProps {
  onVisibleChange?: (visible: boolean) => void;
}

const ScrollSideNav = ({ onVisibleChange }: ScrollSideNavProps) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sidebar after scrolling past hero section
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const nextVisible = window.scrollY > heroBottom - 100;
        setIsVisible((prev) => {
          if (prev !== nextVisible) onVisibleChange?.(nextVisible);
          return nextVisible;
        });
      }

      // Find active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onVisibleChange]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!isVisible) return null;

  return (
    <nav className="fixed left-2 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col bg-card/95 backdrop-blur-md rounded-2xl shadow-lg border border-border/50 p-2 animate-fade-in max-w-[160px]">
      <div className="flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs font-medium transition-all duration-200 group ${
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground/60 hover:bg-accent/10 hover:text-accent"
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">{item.label}</span>
            </button>
          );
        })}
      </div>

      <div className="border-t border-border/50 mt-3 pt-3">
        <Button variant="accent" size="sm" className="w-full justify-center gap-2" asChild>
          <a href="https://intelligo.id/wa-mintell" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4" />
            Hubungi Kami
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default ScrollSideNav;
