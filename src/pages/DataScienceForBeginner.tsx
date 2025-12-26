import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle, Clock, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";

const modules = [
  { title: "Python Basics", duration: "2 minggu", topics: ["Variables & Data Types", "Control Flow", "Functions", "Libraries"] },
  { title: "Data Cleaning", duration: "2 minggu", topics: ["Handling Missing Data", "Data Transformation", "Normalization", "Quality Assurance"] },
  { title: "Exploratory Data Analysis", duration: "3 minggu", topics: ["Data Visualization", "Statistical Analysis", "Pattern Recognition", "Insights Discovery"] },
  { title: "Basic Statistics", duration: "2 minggu", topics: ["Descriptive Statistics", "Probability", "Distributions", "Hypothesis Testing"] },
  { title: "Data Visualization", duration: "2 minggu", topics: ["Matplotlib & Seaborn", "Interactive Charts", "Dashboard Creation", "Storytelling"] }
];

const benefits = [
  "Materi dari praktisi industri dengan pengalaman 10+ tahun",
  "Hands-on practice dengan dataset real-world",
  "Mentoring 1-on-1 untuk setiap peserta",
  "Portfolio project yang siap ditunjukkan ke perusahaan",
  "Job placement assistance setelah lulus",
  "Lifetime access ke learning materials"
];

const DataScienceForBeginner = () => {
  return (
    <>
      <Helmet>
        <title>Data Science For Beginner | Intelligo Indonesia</title>
        <meta name="description" content="Pelajari fondasi Data Science dari awal. Program intensif untuk pemula yang ingin memulai karir di bidang data science." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <BookOpen className="w-4 h-4" />
                  Silabus Program
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Data Science <span className="text-accent">For Beginner</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Program intensif 11 minggu yang dirancang khusus untuk pemula yang ingin menguasai fondasi Data Science dan siap memasuki industri.
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
                <h3 className="text-xl font-bold text-foreground mb-6">Program Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">11 Minggu</p>
                      <p className="text-sm text-muted-foreground">Intensif & Terstruktur</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Expert Mentors</p>
                      <p className="text-sm text-muted-foreground">Praktisi Industri</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Job Ready</p>
                      <p className="text-sm text-muted-foreground">Siap Bekerja</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kurikulum Program</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                5 modul utama yang dirancang untuk membangun fondasi kuat dalam Data Science
              </p>
            </div>
            <div className="space-y-6">
              {modules.map((module, index) => (
                <div key={index} className="bg-card rounded-xl p-8 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{module.title}</h3>
                      <p className="text-accent font-semibold mt-2">{module.duration}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, idx) => (
                      <span key={idx} className="bg-accent/10 text-accent px-3 py-1.5 rounded-full text-sm font-medium">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Mengapa Pilih Program Kami?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ratusan alumni kami telah berhasil mendapatkan pekerjaan di perusahaan top
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 bg-card p-6 rounded-xl border border-border/50">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-accent/10">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Siap Memulai Karir Data Science?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ratusan alumni yang sukses di bidang Data Science
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

export default DataScienceForBeginner;
