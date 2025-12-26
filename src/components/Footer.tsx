import { Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import logoIntelligo from "/Intelligo.Id_Main Logo Hor (Transparant White).png";

const Footer = () => {
  const locations = [
    { name: "Head Office", detail: "Bandung - Creya Coworking Space" },
    { name: "Training Center", detail: "Bandung - Nindya Biodistrict Hotel" },
    { name: "Training Center", detail: "Jakarta - Coworking Space by EKSCO" },
  ];

  const programs = [
    { label: "Bootcamp Online", href: "/bootcamp-data-science-online" },
    { label: "Bootcamp Offline", href: "/bootcamp-data-science-offline" },
    { label: "Private Course", href: "/private-course" },
    { label: "Mini Bootcamp & Workshop", href: "/mini-bootcamp-workshop" },
    { label: "Corporate Training", href: "/corporate-training" },
    { label: "Job Ready Program", href: "/job-ready" },
  ];

  const silabus = [
    { label: "Data Science For Beginner", href: "/silabus/data-science" },
    { label: "AI For Beginner", href: "/silabus/ai-beginner" },
    { label: "Job Ready", href: "/job-ready" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={logoIntelligo} 
                alt="Intelligo ID" 
                className="h-12 w-auto mb-4"
              />
            </div>
            <p className="text-primary-foreground/70 text-sm mb-6 leading-relaxed">
              Platform bootcamp Data Science & AI terbaik di Indonesia. Belajar dari mentor praktisi dan siap kerja di industri data.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold mb-4">Program</h4>
            <ul className="space-y-3">
              {programs.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Silabus */}
          <div>
            <h4 className="font-bold mb-4">Silabus</h4>
            <ul className="space-y-3">
              {silabus.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  support@intelligo.id
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  +62 823-1031-1632
                </span>
              </li>
              <li className="space-y-2">
                {locations.map((loc) => (
                  <div key={`${loc.name}-${loc.detail}`} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/70 text-sm">
                      {loc.name} ({loc.detail})
                    </span>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2026 Intelligo ID. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
