import { Monitor, Users, Zap, Calendar, User, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [{
  icon: User,
  title: "Private Course 1-on-1",
  description: "Mentoring personal dengan custom silabus sesuai kebutuhan dan jadwal fleksibel.",
  link: "/program/private-course"
}, {
  icon: Users,
  title: "Bootcamp Semi Private",
  description: "Kelas kecil 3-5 orang untuk pembelajaran lebih intensif dan interaktif.",
  link: "/program/bootcamp-semi-private"
}, {
  icon: Monitor,
  title: "Bootcamp Private",
  description: "Program eksklusif dengan perhatian penuh dari trainer profesional.",
  link: "/program/bootcamp-private"
}, {
  icon: Calendar,
  title: "Workshop & Mini Class",
  description: "Event musiman dengan topik AI & Data terbaru, cocok untuk eksplorasi skill.",
  link: "/program/workshop"
}, {
  icon: Zap,
  title: "Job Ready Bootcamp",
  description: "Program intensif dengan jaminan interview kerja dan pendampingan karir.",
  link: "/program/job-ready-bootcamp"
}, {
  icon: Building2,
  title: "Corporate Training",
  description: "Pelatihan untuk perusahaan, instansi pemerintahan, startup, hingga BUMN.",
  link: "/program/corporate-training"
}];
const ProgramSection = () => {
  return <section id="program" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pilihan Program</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan program yang sesuai dengan kebutuhan dan gaya belajar kamu, baik
            online, offline, maupun privat.
          </p>
        </div>

        {/* Program Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => <div key={program.title} className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50" style={{
          animationDelay: `${index * 100}ms`
        }}>
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <program.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {program.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {program.description}
              </p>

              {/* Link */}
              <Link to={program.link} className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300">
                Lihat Detail
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProgramSection;