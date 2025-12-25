import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles, Users, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const MinBootcamp = () => {
  return (
    <>
      <Helmet>
        <title>Mini Bootcamp DS & AI | Intelligo Indonesia</title>
        <meta name="description" content="Mini Bootcamp DS & AI dengan 8x pertemuan. Program singkat untuk fondasi cepat dalam Data Science & AI Beginner." />
      </Helmet>
      <Navbar />
      <main className="pt-20">
        <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/5">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Zap className="w-4 h-4" />
                  Mini Bootcamp
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Mini Bootcamp <span className="text-accent">DS & AI</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Program singkat intensif dengan 8x pertemuan 2 jam Selasa & Kamis 19:30-21:30 WIB. 
                  Fondasi cepat dalam Data Science & AI dengan hands-on projects dan sertifikat.
                </p>
                <Button className="bg-accent hover:bg-accent/90" size="lg">Daftar Sekarang</Button>
              </div>
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
                <Sparkles className="w-32 h-32 text-accent/30" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Program Mini Bootcamp</h2>
            <div className="max-w-2xl mx-auto">
              <div className="border rounded-lg p-8 border-accent bg-accent/5">
                <h3 className="text-3xl font-bold text-foreground mb-4">Mini Bootcamp DS & AI</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">Durasi:</span>
                    <span className="font-semibold">8x Pertemuan (16 jam total)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">Jadwal:</span>
                    <span className="font-semibold">Selasa & Kamis | 19:30-21:30 WIB</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">Harga:</span>
                    <span className="text-3xl font-bold text-accent">Rp400.000</span>
                    <span className="line-through text-muted-foreground">Rp800.000</span>
                  </div>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-lg py-6">Daftar Sekarang</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/20">
          <div className="section-container">
            <h2 className="text-3xl font-bold mb-12 text-center">Yang Anda Pelajari</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: Zap, title: "Python Basics", desc: "Fondasi Python untuk data science dan AI" },
                { icon: CheckCircle, title: "Data Analysis", desc: "Analisis data dengan pandas dan numpy" },
                { icon: Users, title: "Hands-on Projects", desc: "Project mini untuk portfolio Anda" },
                { icon: Sparkles, title: "Sertifikat", desc: "Sertifikat kompetensi yang diakui" }
              ].map((f, idx) => {
                const Icon = f.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <Icon className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">{f.title}</h3>
                      <p className="text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-3xl font-bold mb-8 text-center">Kurikulum Mini Bootcamp</h2>
            <div className="max-w-2xl mx-auto space-y-4">
              {[
                "Week 1: Python Basics & Ecosystem Setup",
                "Week 2: Data Structures & Numpy Fundamentals",
                "Week 3: Pandas for Data Manipulation",
                "Week 4: Exploratory Data Analysis (EDA)",
                "Week 5: Data Visualization Techniques",
                "Week 6: Statistical Foundations",
                "Week 7: Mini Project - Real Data Analysis",
                "Week 8: Presentation & Certification"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-secondary/30 rounded-lg border border-border/50">
                  <div className="flex items-center justify-center w-8 h-8 bg-accent text-white rounded-full flex-shrink-0 font-bold">
                    {idx + 1}
                  </div>
                  <p className="font-medium text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default MinBootcamp;
