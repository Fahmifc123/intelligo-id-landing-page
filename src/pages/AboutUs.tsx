import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import YouTubeCard from "@/components/YouTubeCard";
import trainers from "@/data/trainers.json";
import { Award, Lightbulb, Target, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Fokus pada Hasil",
      description: "Kami berkomitmen membantu setiap peserta mencapai karir impian di bidang Data Science & AI"
    },
    {
      icon: Users,
      title: "Komunitas Solid",
      description: "Bergabung dengan 1000+ alumni yang sudah bekerja di berbagai perusahaan top Indonesia"
    },
    {
      icon: Lightbulb,
      title: "Pembelajaran Praktis",
      description: "Kurikulum berbasis real case study dari industri dengan mentor praktisi berpengalaman"
    },
    {
      icon: Award,
      title: "Sertifikasi Resmi",
      description: "Bekerja sama dengan LSP untuk memberikan sertifikat resmi yang diakui industri"
    }
  ];

  // Trainers are loaded from `src/data/trainers.json` via import `trainers`
  // Use the script `node scripts/import-trainers.js <file.xlsx>` to update this file from Excel
  const team = trainers;

  return (
    <>
      <Helmet>
        <title>About Us - Intelligo ID | Platform EduTech Data Science & AI</title>
        <meta name="description" content="Intelligo ID adalah platform EduTech Data Science & AI dengan program Bootcamp, Private Course 1on1, Video Course dan Workshop." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-16 md:pt-20">
          {/* Hero Section */}
          <section className="py-20 md:py-32 bg-gradient-to-b from-accent/5 to-background">
            <div className="section-container">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                  Tentang Kami
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Membangun Talenta <span className="text-accent">Data Science & AI</span> Indonesia
                </h1>
                <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                  <strong>Intelligo ID</strong> adalah platform EduTech Data Science & AI dengan program 
                  <strong> Bootcamp, Private Course 1on1, Video Course dan Workshop</strong>. Tersedia 
                  Silabus For Beginner hingga Job Ready Bootcamp lengkap dengan Unlimited Career Coaching 
                  untuk membangun portofolio dan menyiapkan karir di industri.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-card border-y border-border/50">
            <div className="section-container">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">1000+</div>
                  <div className="text-foreground/70">Participants</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
                  <div className="text-foreground/70">Alumni</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
                  <div className="text-foreground/70">Partners</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</div>
                  <div className="text-foreground/70">Batch</div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 md:py-28">
            <div className="section-container">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Kenapa Harus Bootcamp di Intelligo ID?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/30 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <value.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section className="py-20 md:py-28">
            <div className="section-container">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  Company Video
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Story</h2>
                <p className="text-foreground/70 max-w-2xl mx-auto mt-4">Tonton video singkat tentang Intelligo ID.</p>
              </div>

              <div className="max-w-3xl mx-auto">
                <YouTubeCard videoUrl="https://www.youtube.com/watch?v=pur8oY3Sm4w" title="Intelligo ID - Overview" />
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-20 md:py-28 bg-card/50">
            <div className="section-container">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  Our Teacher
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Meet With Our Teacher
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {team.map((member, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-background rounded-2xl border border-border/50 text-center hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-24 h-24 rounded-full bg-accent/20 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                      {member.photoUrl ? (
                        <img src={member.photoUrl} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <Users className="w-12 h-12 text-accent" />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-accent font-medium mb-1">{member.role}</p>
                    <p className="text-foreground/60 text-sm mb-4">{member.company}</p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 hover:underline"
                        aria-label={`Open ${member.name} LinkedIn`}
                      >
                        <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" style={{ filter: 'none' }} />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    )} 
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Location Section */}
          <section className="py-20 md:py-28">
            <div className="section-container">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                    Lokasi
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Kantor & Training Center
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-card rounded-2xl border border-border/50">
                    <h3 className="text-lg font-semibold text-foreground mb-3 text-accent">Head Office</h3>
                    <p className="text-sm text-foreground/70 mb-2 font-medium">Creya Coworking Space</p>
                    <p className="text-sm text-foreground/60">
                      Jl. K.H. Ahmad Dahlan No.20, Malabar, Kec. Lengkong, Kota Bandung, Jawa Barat 40262
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-2xl border border-border/50">
                    <h3 className="text-lg font-semibold text-foreground mb-3 text-accent">Training Center Bandung</h3>
                    <p className="text-sm text-foreground/70 mb-2 font-medium">Nindya Biodistrict Hotel</p>
                    <p className="text-sm text-foreground/60">
                      Jl. Khp Hasan Mustopa No.57, Neglasari, Kec. Cibeunying Kaler, Kota Bandung, Jawa Barat 40124
                    </p>
                  </div>
                  <div className="p-6 bg-card rounded-2xl border border-border/50">
                    <h3 className="text-lg font-semibold text-foreground mb-3 text-accent">Training Center Jakarta</h3>
                    <p className="text-sm text-foreground/70 mb-2 font-medium">Coworking Space by EKSCO, Gedung EST JAKARTA</p>
                    <p className="text-sm text-foreground/60">
                      Jl. Cililitan Besar No.2, Makasar, East Jakarta City, Jakarta 13650
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
