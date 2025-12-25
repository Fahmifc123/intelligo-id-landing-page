import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { BarChart3, CheckCircle, ChevronRight, FileText, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const CVAnalyzer = () => {
  return (
    <>
      <Helmet>
        <title>CV Analyzer - Intelligo Indonesia | Optimasi CV Anda</title>
        <meta name="description" content="CV Analyzer Intelligo: Analisis mendalam CV Anda dari expert recruiter. Tingkatkan ATS score dan tarik perhatian recruiter dengan feedback detail." />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <FileText className="w-4 h-4" />
                  CV Analyzer
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Optimasi CV Anda untuk <span className="text-accent">Sukses Interview</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Analisis mendalam terhadap CV Anda dari expert recruiter. Kami memberikan feedback detail untuk meningkatkan ATS score dan menarik perhatian recruiter.
                </p>
                <Button className="bg-accent hover:bg-accent/90" size="lg" asChild>
                  <a href="https://bit.ly/tanya-mintell" target="_blank" rel="noopener noreferrer">
                    Analisis CV Saya Sekarang
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
                <FileText className="w-32 h-32 text-accent/30" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-secondary/20">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Apa yang Kami Analisis
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "ATS Optimization", desc: "Analisis keyword dan format agar CV Anda lolos dari sistem ATS" },
                { title: "Content Review", desc: "Evaluasi detail isi CV dari segi industri dan best practices" },
                { title: "Format & Design", desc: "Rekomendasi struktur dan visual untuk CV yang lebih menarik" },
                { title: "Achievement Highlight", desc: "Strategi menyampaikan achievement yang lebih impactful" },
                { title: "Industry Alignment", desc: "Validasi CV Anda sesuai dengan standar industri tech" },
                { title: "Competitive Analysis", desc: "Bandingkan CV Anda dengan kompetitor di market" }
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

        {/* Process */}
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Proses CV Analyzer
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { num: "01", title: "Upload CV Anda", desc: "Kirimkan CV dalam format PDF atau Word ke platform kami" },
                { num: "02", title: "Expert Review", desc: "Tim recruiter expert menganalisis setiap aspek CV Anda" },
                { num: "03", title: "Detailed Feedback", desc: "Dapatkan laporan komprehensif dengan rekomendasi perbaikan" },
                { num: "04", title: "Implementation", desc: "Terapkan saran dan lihat improvement dalam response rate" }
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
                Manfaat CV Analyzer
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: "Tingkatkan Response Rate",
                    desc: "CV yang optimal akan mendapat lebih banyak panggilan interview dari recruiter"
                  },
                  {
                    icon: BarChart3,
                    title: "ATS Score Lebih Tinggi",
                    desc: "Optimasi keyword dan format membuat CV Anda lolos sistem automated filtering"
                  },
                  {
                    icon: CheckCircle,
                    title: "Stand Out dari Kompetitor",
                    desc: "Presentasi achievement Anda dengan cara yang lebih compelling dan memorable"
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
                CV Anda Siap untuk Upgrade?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Dapatkan feedback expert untuk meningkatkan peluang Anda mendapat interview dari perusahaan impian.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-accent hover:bg-accent/90" size="lg" asChild>
                  <a href="https://bit.ly/tanya-mintell" target="_blank" rel="noopener noreferrer">
                    Analisis CV Sekarang
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

export default CVAnalyzer;
