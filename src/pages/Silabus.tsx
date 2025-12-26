import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import silabusData from "@/data/silabus.json";
import { BookOpen, Brain, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const curriculums = silabusData.curriculums;

const Silabus = () => {
  // Map icon names to components
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    BookOpen: BookOpen,
    Brain: Brain,
    Zap: Zap,
  };

  return (
    <>
      <Helmet>
        <title>Silabus Kursus | Intelligo Indonesia</title>
        <meta name="description" content="Lihat silabus lengkap untuk semua program bootcamp kami. Data Science For Beginner, AI For Beginner, dan Job Ready." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Silabus Program
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Judul <span className="text-accent">Silabus</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Jelajahi kurikulum lengkap dari semua program pelatihan kami yang dirancang untuk membentuk profesional data science dan AI terkemuka.
              </p>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {curriculums.map((curriculum, index) => {
                const Icon = iconMap[curriculum.icon] || BookOpen;
                return (
                  <div key={index} className="bg-card rounded-2xl p-8 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{curriculum.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {curriculum.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Topik Utama:</h4>
                      <ul className="space-y-2">
                        {curriculum.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-foreground text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild className="w-full" variant="accent">
                      <a href="https://intelligo.id/wa-mintell" target="_blank" rel="noopener noreferrer">
                        Pelajari Lebih Lanjut
                      </a>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-accent/10">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Siap Memulai Perjalanan?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Hubungi kami untuk informasi lebih lanjut tentang program yang sesuai dengan tujuan karir Anda
            </p>
            <Button asChild size="lg" variant="accent">
              <a href="https://intelligo.id/wa-mintell" target="_blank" rel="noopener noreferrer">
                Hubungi Kami Sekarang
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Silabus;
