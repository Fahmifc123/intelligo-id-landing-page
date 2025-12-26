import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, BarChart3, BookOpen, Target, Users, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const CorporateTrainingCategory = () => {
  return (
    <>
      <Helmet>
        <title>Corporate Training - Intelligo ID</title>
        <meta name="description" content="Program pelatihan korporat custom untuk perusahaan. Tingkatkan skill tim dalam Data Science & AI dengan kurikulum yang disesuaikan." />
      </Helmet>

      <Navbar />
      <main className="pt-16 md:pt-20 min-h-screen bg-background">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/20 to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Corporate Training
            </h1>
            <p className="text-xl text-foreground/70 mb-6">
              Program pelatihan kustomisasi untuk meningkatkan kompetensi tim Anda dalam Data Science, AI, dan teknologi terkait.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href="#benefits">Lihat Keuntungan</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://bit.ly/tanya-mintell" target="_blank" rel="noopener noreferrer">Hubungi Kami</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Corporate Training */}
      <section id="benefits" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Mengapa Corporate Training Intelligo?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Customizable Program",
                desc: "Kurikulum disesuaikan dengan kebutuhan spesifik perusahaan Anda"
              },
              {
                icon: Users,
                title: "Expert Trainers",
                desc: "Trainer berpengalaman dari industri dengan track record proven"
              },
              {
                icon: BarChart3,
                title: "Measurable Results",
                desc: "ROI jelas dengan metrics & assessment yang terukur"
              },
              {
                icon: Award,
                title: "Sertifikasi",
                desc: "Peserta mendapatkan sertifikat yang diakui industri"
              },
              {
                icon: Zap,
                title: "Flexible Delivery",
                desc: "On-site, hybrid, atau online sesuai kebutuhan Anda"
              },
              {
                icon: BookOpen,
                title: "Post-Training Support",
                desc: "Mentoring berkelanjutan untuk implementasi materi"
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <item.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 md:py-24 bg-foreground/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Program Training Solutions</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Data Science Fundamentals",
                desc: "Program dasar untuk tim yang ingin memahami konsep Data Science",
                topics: [
                  "Python for Data Analysis",
                  "SQL & Database Management",
                  "Data Visualization",
                  "Statistical Analysis",
                  "Intro to Machine Learning"
                ]
              },
              {
                title: "Advanced AI & Machine Learning",
                desc: "Program lanjutan untuk team dengan fondasi kuat",
                topics: [
                  "Deep Learning with TensorFlow",
                  "Advanced ML Algorithms",
                  "NLP & Computer Vision",
                  "Model Deployment",
                  "Production-Ready Systems"
                ]
              },
              {
                title: "Leadership & Strategy",
                desc: "Untuk manager & leader untuk memahami DS/AI strategy",
                topics: [
                  "Data-Driven Decision Making",
                  "AI Implementation Strategy",
                  "Team Building & Management",
                  "Project Management for DS",
                  "ROI & KPI Measurement"
                ]
              },
              {
                title: "Custom Solutions",
                desc: "Program disesuaikan dengan kebutuhan spesifik perusahaan",
                topics: [
                  "Analisis kebutuhan mendalam",
                  "Kurikulum custom design",
                  "Mentoring khusus industri",
                  "Real project implementation",
                  "Continuous support"
                ]
              }
            ].map((solution, idx) => (
              <Card key={idx} className="p-8">
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-foreground/70 mb-6">{solution.desc}</p>
                <div className="space-y-2">
                  {solution.topics.map((topic, topicIdx) => (
                    <div key={topicIdx} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span className="text-foreground/80">{topic}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Format */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Format Delivery</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "On-Site Training",
                desc: "Pelatihan di lokasi perusahaan Anda",
                features: [
                  "Trainer datang ke lokasi Anda",
                  "Setup dengan infrastruktur perusahaan",
                  "Pembelajaran dalam team environment",
                  "Flexible schedule"
                ]
              },
              {
                title: "Hybrid Training",
                desc: "Kombinasi online dan on-site",
                features: [
                  "Teori online, praktik on-site",
                  "Fleksibel untuk tim distributed",
                  "Interactive live sessions",
                  "Hands-on labs"
                ]
              },
              {
                title: "Online Training",
                desc: "Full program virtual learning",
                features: [
                  "Live classes via Zoom",
                  "Rekaman untuk review",
                  "Interactive exercises",
                  "Continuous support"
                ]
              }
            ].map((format, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="text-xl font-bold mb-3">{format.title}</h3>
                <p className="text-foreground/70 mb-4">{format.desc}</p>
                <ul className="space-y-2">
                  {format.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-sm text-foreground/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-foreground/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Proses Implementasi</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Konsultasi & Assessment",
                  desc: "Kami akan melakukan diskusi mendalam tentang kebutuhan, tujuan, dan kondisi tim Anda saat ini."
                },
                {
                  step: "2",
                  title: "Program Design",
                  desc: "Tim kami merancang kurikulum custom yang sesuai dengan kebutuhan spesifik perusahaan dan industri Anda."
                },
                {
                  step: "3",
                  title: "Training Execution",
                  desc: "Program dilaksanakan oleh trainer expert dengan metode interaktif dan hands-on practice."
                },
                {
                  step: "4",
                  title: "Assessment & Certification",
                  desc: "Peserta diassess dan mendapatkan sertifikat setelah menyelesaikan program dengan sukses."
                },
                {
                  step: "5",
                  title: "Support & Follow-up",
                  desc: "Kami memberikan mentoring berkelanjutan untuk memastikan implementasi materi di workplace."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-white font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-foreground/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Perusahaan yang Telah Bekerja Sama</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            {[
              "Telkomsel", "Paragon", "Sinar Mas", "Tiket.com",
              "Gojek", "Grab", "OVO", "Dana"
            ].map((company, idx) => (
              <div key={idx} className="text-center">
                <p className="font-semibold">{company}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-foreground/60 mt-8">
            ...dan banyak perusahaan lainnya
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Pricing</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Harga corporate training tergantung dari scope program, durasi, jumlah peserta, dan delivery format. 
            Kami menawarkan flexible pricing yang sesuai dengan budget perusahaan Anda.
          </p>
          
          <div className="max-w-2xl mx-auto border rounded-lg p-8 bg-white">
            <h3 className="font-bold text-lg mb-6">Faktor yang Mempengaruhi Harga:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Durasi program (1 hari - beberapa minggu)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Jumlah peserta (min 5 - max 50 orang)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Kompleksitas kurikulum & customization</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Delivery format (on-site, hybrid, online)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Post-training support & mentoring</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Tingkatkan Kompetensi Tim Anda Sekarang</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Hubungi MinTell untuk mendiskusikan kebutuhan pelatihan corporate Anda dan dapatkan proposal custom sesuai budget.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-accent hover:bg-accent/90"
          >
            <a href="https://wa.me/6282315556491?text=Halo%20MinTell%2C%20saya%20tertarik%20dengan%20corporate%20training" target="_blank" rel="noopener noreferrer">
              💬 Chat MinTell di WhatsApp
            </a>
          </Button>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
};

export default CorporateTrainingCategory;
