import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Brain, CheckCircle, Clock, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";

const modules = [
  { title: "Machine Learning Basics", duration: "2 minggu", topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Cross Validation"] },
  { title: "Deep Learning Fundamentals", duration: "3 minggu", topics: ["Neural Networks", "Activation Functions", "Backpropagation", "Framework (TensorFlow)"] },
  { title: "Computer Vision Basics", duration: "2 minggu", topics: ["Image Processing", "CNN Architecture", "Object Detection", "Transfer Learning"] },
  { title: "Natural Language Processing", duration: "2 minggu", topics: ["Text Processing", "Word Embeddings", "Sentiment Analysis", "Language Models"] },
  { title: "AI Ethics & Deployment", duration: "2 minggu", topics: ["Ethical AI", "Bias Detection", "Model Deployment", "Production Ready"] }
];

const benefits = [
  "Belajar dari AI experts dengan sertifikasi internasional",
  "Hands-on dengan framework modern (TensorFlow, PyTorch)",
  "Project real-world dengan dataset industri",
  "Portfolio yang impressive untuk job market",
  "Network dengan profesional di bidang AI",
  "Access ke latest AI research papers"
];

const AIForBeginner = () => {
  return (
    <>
      <Helmet>
        <title>AI For Beginner | Intelligo Indonesia</title>
        <meta name="description" content="Kuasai AI dan Machine Learning dari dasar. Program komprehensif untuk pemula yang ingin mengerti artificial intelligence." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Brain className="w-4 h-4" />
                  Silabus Program
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  AI <span className="text-accent">For Beginner</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Program intensif 11 minggu yang membawa Anda dari fundamentals hingga siap bekerja dengan teknologi AI terkini.
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
                      <p className="font-semibold text-foreground">AI Experts</p>
                      <p className="text-sm text-muted-foreground">Bersertifikat Internasional</p>
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
                5 modul advanced yang mencakup semua aspek Artificial Intelligence modern
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
                Menjadi AI specialist yang dicari oleh perusahaan tech terkemuka
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
              Siap Menjadi AI Specialist?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Mulai perjalanan Anda menuju karir yang lebih cemerlang di dunia AI
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

export default AIForBeginner;
