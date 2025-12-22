import { Briefcase, TrendingUp, DollarSign, Target } from "lucide-react";

const careers = [
  {
    title: "Data Scientist",
    salary: "15-25 Juta",
    period: "/bulan",
    description: "Menganalisis data kompleks dan membangun model prediktif",
    skills: ["Python", "Machine Learning", "Statistics"],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "ML Engineer",
    salary: "18-30 Juta",
    period: "/bulan",
    description: "Deploy dan maintain model machine learning di production",
    skills: ["TensorFlow", "PyTorch", "MLOps"],
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Data Analyst",
    salary: "10-18 Juta",
    period: "/bulan",
    description: "Visualisasi data dan business intelligence reporting",
    skills: ["SQL", "Tableau", "Excel"],
    color: "from-green-500 to-green-600",
  },
  {
    title: "AI Engineer",
    salary: "20-35 Juta",
    period: "/bulan",
    description: "Membangun sistem AI dan deep learning solutions",
    skills: ["Deep Learning", "NLP", "Computer Vision"],
    color: "from-orange-500 to-orange-600",
  },
];

const CareerSection = () => {
  return (
    <section id="career" className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">High Demand Career</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Opsi Karier & Gaji di Bidang AI
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Peluang karir di bidang Data Science dan AI terus meningkat dengan gaji yang kompetitif
          </p>
        </div>

        {/* Career Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careers.map((career, index) => (
            <div
              key={career.title}
              className="group relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${career.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <Briefcase className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                {career.title}
              </h3>

              {/* Salary */}
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-2xl font-bold text-accent">{career.salary}</span>
                <span className="text-sm text-primary-foreground/60">{career.period}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-primary-foreground/70 mb-4">
                {career.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {career.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs bg-primary-foreground/10 rounded-full text-primary-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10">
            <DollarSign className="w-8 h-8 text-accent mx-auto mb-2" />
            <p className="text-2xl font-bold text-primary-foreground">2-3x</p>
            <p className="text-sm text-primary-foreground/60">Rata-rata kenaikan gaji</p>
          </div>
          <div className="text-center p-6 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10">
            <Target className="w-8 h-8 text-accent mx-auto mb-2" />
            <p className="text-2xl font-bold text-primary-foreground">85%</p>
            <p className="text-sm text-primary-foreground/60">Tingkat penempatan kerja</p>
          </div>
          <div className="text-center p-6 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10">
            <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
            <p className="text-2xl font-bold text-primary-foreground">35%</p>
            <p className="text-sm text-primary-foreground/60">Pertumbuhan job/tahun</p>
          </div>
          <div className="text-center p-6 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10">
            <Briefcase className="w-8 h-8 text-accent mx-auto mb-2" />
            <p className="text-2xl font-bold text-primary-foreground">100+</p>
            <p className="text-sm text-primary-foreground/60">Hiring partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
