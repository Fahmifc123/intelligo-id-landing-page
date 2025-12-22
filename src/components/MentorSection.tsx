import mentor1 from "@/assets/mentor-1.jpg";
import mentor2 from "@/assets/mentor-2.jpg";
import mentor3 from "@/assets/mentor-3.jpg";
import mentor4 from "@/assets/mentor-4.jpg";
import LogoCarousel from "./LogoCarousel";

const mentors = [
  {
    name: "Syarifudin Aji",
    role: "Lead Data Scientist",
    company: "Ex-Tokopedia",
    image: mentor1,
    experience: "8+ tahun pengalaman di industri data science dan machine learning.",
  },
  {
    name: "Budi Santoso",
    role: "Senior Backend Engineer",
    company: "Ex-Gojek",
    image: mentor2,
    experience: "Spesialis Python, SQL, dan data engineering di skala enterprise.",
  },
  {
    name: "Citra Lestari",
    role: "AI & Machine Learning Lead",
    company: "Startup AI Jakarta",
    image: mentor3,
    experience: "Expert di NLP, Computer Vision, dan deployment ML models.",
  },
  {
    name: "Raka Nugraha",
    role: "NLP Engineer",
    company: "Tech Unicorn",
    image: mentor4,
    experience: "Fokus di NLP dan sentiment analysis untuk produk Indonesia.",
  },
];

const mentorCompanies = [
  "Tokopedia",
  "Gojek",
  "Shopee",
  "Traveloka",
  "Microsoft",
  "Google",
  "Amazon",
  "Meta",
  "Grab",
  "Bukalapak",
  "Telkom",
  "Bank Mandiri",
];

const MentorSection = () => {
  return (
    <section id="mentor" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mentor Praktisi Ahli
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Belajar langsung dari praktisi yang berpengalaman di perusahaan-perusahaan teknologi terkemuka.
          </p>
        </div>

        {/* Mentor Companies Carousel */}
        <div className="mb-12">
          <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider">
            Mentor kami berasal dari
          </p>
          <LogoCarousel 
            logos={mentorCompanies} 
            direction="right" 
            speed="normal"
            variant="light"
          />
        </div>

        {/* Mentors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <div
              key={mentor.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground">{mentor.name}</h3>
                <p className="text-accent font-semibold text-sm">{mentor.role}</p>
                <p className="text-muted-foreground text-sm mb-3">{mentor.company}</p>
                <p className="text-sm text-muted-foreground/80 line-clamp-2">
                  {mentor.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
