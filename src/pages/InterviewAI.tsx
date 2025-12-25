import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { BarChart3, Brain, CheckCircle, ChevronRight, MessageCircle, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const InterviewAI = () => {
  return (
    <>
      <Helmet>
        <title>Interview with AI - Intelligo Indonesia | Latihan Interview dengan AI Coach</title>
        <meta name="description" content="Interview with AI Intelligo: Praktik interview dengan AI coach canggih. Dapatkan feedback real-time dan tingkatkan confidence Anda." />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <MessageCircle className="w-4 h-4" />
                  Interview with AI
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Latihan Interview dengan <span className="text-accent">AI Coach</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Praktik interview dengan AI coach yang canggih. Dapatkan feedback real-time tentang performance, body language, dan communication skills Anda.
                </p>
                <Button className="bg-accent hover:bg-accent/90" size="lg" asChild>
                  <a href="https://bit.ly/tanya-mintell" target="_blank" rel="noopener noreferrer">
                    Mulai Latihan Interview
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
                <MessageCircle className="w-32 h-32 text-accent/30" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-secondary/20">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Fitur AI Interview Coach
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "Real-Time Feedback", desc: "Dapatkan feedback langsung selama simulasi interview" },
                { title: "Multiple Question Types", desc: "Latih berbagai tipe pertanyaan dari behavioral hingga technical" },
                { title: "Performance Analytics", desc: "Analisis detail tentang kecepatan bicara, intonasi, dan kejelasan" },
                { title: "Customizable Scenarios", desc: "Simulasi interview untuk posisi dan perusahaan spesifik" },
                { title: "Confidence Building", desc: "Tingkatkan kepercayaan diri melalui practice berulang" },
                { title: "Recording & Playback", desc: "Review hasil interview Anda untuk improvement berkelanjutan" }
              ].map((feature, idx) => (
                <div key={idx} className="bg-card rounded-lg p-6 border border-border/50 hover:border-accent/30 transition-all">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Cara Kerja Interview dengan AI
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { num: "01", title: "Pilih Tipe Interview", desc: "Pilih pertanyaan dari behavioral, technical, atau case study" },
                { num: "02", title: "Simulasi Interview", desc: "Lakukan interview dengan AI coach dalam lingkungan yang realistis" },
                { num: "03", title: "Real-Time Feedback", desc: "Dapatkan feedback langsung tentang performance Anda" },
                { num: "04", title: "Improvement Plan", desc: "Dapatkan rekomendasi untuk improvement dan latihan lebih lanjut" }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-accent text-white font-bold text-lg">
                      {step.num}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-gradient-to-r from-accent/10 to-accent/5">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Manfaat Interview dengan AI
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: "Praktik Unlimited",
                    desc: "Latihan interview kapan saja tanpa batasan, 24/7"
                  },
                  {
                    icon: Brain,
                    title: "AI-Powered Insights",
                    desc: "Analisis mendalam dari AI yang terus belajar dari ribuan interview"
                  },
                  {
                    icon: BarChart3,
                    title: "Measurable Progress",
                    desc: "Tracking improvement Anda dengan metrics yang jelas dan terukur"
                  }
                ].map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={idx} className="flex gap-6 bg-card rounded-xl p-6 border border-border/50">
                      <Icon className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Siap Hadapi Interview Apapun?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Mulai latihan interview dengan AI coach kami dan tingkatkan confidence Anda untuk sukses di interview sesungguhnya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-accent hover:bg-accent/90" size="lg" asChild>
                  <a href="https://bit.ly/tanya-mintell" target="_blank" rel="noopener noreferrer">
                    Mulai Latihan Sekarang
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/job-ready">
                    Kembali ke Job Ready
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default InterviewAI;
