import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, CheckCircle, Clock, Target, BookOpen, Award, MessageSquare } from "lucide-react";

const benefits = [
  "Kelas kecil 3-5 orang untuk interaksi maksimal",
  "Diskusi dan kolaborasi antar peserta",
  "Harga lebih terjangkau dibanding private course",
  "Networking dengan sesama learner",
  "Feedback langsung dari trainer profesional",
  "Project-based learning dengan tim"
];

const tracks = [
  { title: "Data Science", duration: "3 bulan", topics: "Python, SQL, Machine Learning, Deep Learning" },
  { title: "Data Analytics", duration: "2 bulan", topics: "SQL, Excel, Tableau, Power BI" },
  { title: "AI Engineering", duration: "3 bulan", topics: "NLP, Computer Vision, LLM, Deployment" },
  { title: "Business Intelligence", duration: "2 bulan", topics: "Data Warehouse, ETL, Dashboard, Reporting" }
];

const BootcampSemiPrivate = () => {
  return (
    <>
      <Helmet>
        <title>Bootcamp Semi Private | Intelligo Indonesia</title>
        <meta name="description" content="Kelas kecil 3-5 orang untuk pembelajaran lebih intensif dan interaktif. Program bootcamp AI & Data Science dengan networking." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Users className="w-4 h-4" />
                  Bootcamp Semi Private
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Bootcamp <span className="text-accent">Semi Private</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Kelas kecil 3-5 orang untuk pembelajaran lebih intensif dan interaktif. 
                  Nikmati pengalaman belajar personal dengan kesempatan networking bersama sesama learner.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" variant="accent">
                    <a href="https://intelligo.id/wa-mintell" target="_blank" rel="noopener noreferrer">
                      Daftar Sekarang
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="https://intelligo.id/wa-mintell" target="_blank" rel="noopener noreferrer">
                      Konsultasi Gratis
                    </a>
                  </Button>
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-6">Program Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">3-5 Peserta</p>
                      <p className="text-sm text-muted-foreground">Kelas kecil untuk interaksi maksimal</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Diskusi Aktif</p>
                      <p className="text-sm text-muted-foreground">Kolaborasi antar peserta</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Sertifikasi</p>
                      <p className="text-sm text-muted-foreground">Sertifikat resmi Intelligo</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Keuntungan Semi Private</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kombinasi terbaik antara pembelajaran personal dan kolaboratif
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

        {/* Tracks Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pilihan Track</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pilih track yang sesuai dengan tujuan karir kamu
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {tracks.map((track, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">{track.title}</h3>
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {track.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{track.topics}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-accent/10">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Siap Belajar Bersama?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Bergabung dengan kelas semi private dan mulai perjalanan karir AI & Data kamu
            </p>
            <Button asChild size="lg" variant="accent">
              <a href="https://intelligo.id/wa-mintell" target="_blank" rel="noopener noreferrer">
                Daftar Sekarang
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BootcampSemiPrivate;
