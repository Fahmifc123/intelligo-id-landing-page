import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, Clock, Users, Lightbulb, Sparkles } from "lucide-react";

const benefits = [
  "Topik terbaru seputar AI & Data Science",
  "Durasi singkat dan padat (1-2 hari)",
  "Harga terjangkau untuk eksplorasi skill baru",
  "Hands-on practice dengan real case",
  "Networking dengan komunitas data enthusiast",
  "Sertifikat partisipasi"
];

const upcomingEvents = [
  { title: "Introduction to ChatGPT & Prompt Engineering", date: "Coming Soon", duration: "1 hari", level: "Beginner" },
  { title: "Data Visualization with Tableau", date: "Coming Soon", duration: "1 hari", level: "Beginner" },
  { title: "Machine Learning Fundamentals", date: "Coming Soon", duration: "2 hari", level: "Intermediate" },
  { title: "SQL for Data Analysis", date: "Coming Soon", duration: "1 hari", level: "Beginner" }
];

const pastTopics = [
  "Python for Data Science",
  "Power BI Dashboard",
  "Web Scraping with Python",
  "Natural Language Processing",
  "Computer Vision Basics",
  "AI in Business Strategy"
];

const Workshop = () => {
  return (
    <>
      <Helmet>
        <title>Workshop & Mini Class | Intelligo Indonesia</title>
        <meta name="description" content="Event musiman dengan topik AI & Data terbaru, cocok untuk eksplorasi skill baru. Workshop singkat dan padat dengan hands-on practice." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Calendar className="w-4 h-4" />
                  Workshop & Mini Class
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Workshop & <span className="text-accent">Mini Class</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Event musiman dengan topik AI & Data terbaru, cocok untuk eksplorasi skill baru. 
                  Pelajari teknologi terkini dalam waktu singkat dengan praktik langsung.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" variant="accent">
                    <a href="https://intelligo.id/wa-mintell" target="_blank" rel="noopener noreferrer">
                      Lihat Jadwal
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="https://intelligo.id/wa-mintell" target="_blank" rel="noopener noreferrer">
                      Request Topic
                    </a>
                  </Button>
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-6">Workshop Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">1-2 Hari</p>
                      <p className="text-sm text-muted-foreground">Durasi singkat dan padat</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Topik Terkini</p>
                      <p className="text-sm text-muted-foreground">Teknologi AI & Data terbaru</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Hands-on Practice</p>
                      <p className="text-sm text-muted-foreground">Praktik langsung dengan real case</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kenapa Ikut Workshop?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cara terbaik untuk eksplorasi skill baru dengan investasi waktu dan biaya minimal
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-card p-6 rounded-xl border border-border/50">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="section-padding">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Workshop Mendatang</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Daftar sekarang untuk workshop yang akan datang
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-foreground">{event.title}</h3>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {event.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Topics */}
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Topik Sebelumnya</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Workshop yang sudah pernah diadakan
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {pastTopics.map((topic, index) => (
                <span key={index} className="bg-card px-4 py-2 rounded-full border border-border/50 text-foreground">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-accent/10">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Punya Request Topik?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sampaikan topik yang ingin kamu pelajari dan kami akan adakan workshopnya
            </p>
            <Button asChild size="lg" variant="accent">
              <a href="https://intelligo.id/wa-mintell" target="_blank" rel="noopener noreferrer">
                Request Topic
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Workshop;
