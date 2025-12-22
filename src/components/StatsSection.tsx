import { GraduationCap, Building2, TrendingUp, Calendar } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "500+",
    label: "Alumni Bootcamp",
  },
  {
    icon: Building2,
    value: "100+",
    label: "Hiring Partners",
  },
  {
    icon: TrendingUp,
    value: "85%",
    label: "Lulusan Dapat Kerja",
  },
  {
    icon: Calendar,
    value: "20+",
    label: "Batch Telah Berjalan",
  },
];

const StatsSection = () => {
  return (
    <section id="stats" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Aktivitas & Pencapaian Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kebanggaan atas pencapaian dan kepercayaan komunitas terhadap Intelligo ID.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group text-center p-8 bg-card rounded-2xl shadow-card hover:shadow-card-hover border border-border/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
