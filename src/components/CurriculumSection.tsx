import { useState } from "react";
import { Code, Brain, Briefcase, CheckCircle2 } from "lucide-react";

const tabs = [
  {
    id: "beginner",
    label: "Data Science for Beginner",
    icon: Code,
    topics: [
      "Python Programming",
      "Data Analysis & EDA",
      "SQL for Data",
      "Data Visualization (Matplotlib, Seaborn)",
      "Statistik Dasar",
    ],
  },
  {
    id: "ai",
    label: "AI & Machine Learning",
    icon: Brain,
    topics: [
      "Machine Learning Fundamentals",
      "Deep Learning & Neural Networks",
      "NLP (Sentiment Analysis, ABSA)",
      "Computer Vision",
      "AI Project & Case Study",
    ],
  },
  {
    id: "jobready",
    label: "Job Ready Program",
    icon: Briefcase,
    topics: [
      "Portfolio Building (GitHub & Dashboard)",
      "CV & LinkedIn Optimization",
      "Career Coaching",
      "Mock Interview",
      "Job Connector dengan Hiring Partners",
    ],
  },
];

const CurriculumSection = () => {
  const [activeTab, setActiveTab] = useState("beginner");

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Materi Apa Saja yang Akan Dipelajari?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kurikulum komprehensif dari dasar hingga mahir, dirancang untuk menyiapkan
            karir di industri data dan AI.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-accent text-accent-foreground shadow-glow"
                  : "bg-secondary text-foreground/70 hover:bg-secondary/80"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              {activeContent && (
                <>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <activeContent.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {activeContent.label}
                  </h3>
                </>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {activeContent?.topics.map((topic, index) => (
                <div
                  key={topic}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-accent/5 transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
