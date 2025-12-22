import { Star, Quote } from "lucide-react";
import LogoCarousel from "./LogoCarousel";

const testimonials = [
  {
    name: "Rizky Pratama",
    role: "Data Analyst di Tokopedia",
    content:
      "Keren sangat! Materinya sangat terstruktur dan mentor-mentornya berpengalaman. Dalam 3 bulan setelah lulus, saya langsung dapat kerja!",
    rating: 5,
  },
  {
    name: "Sinta Dewi",
    role: "ML Engineer di Gojek",
    content:
      "Bootcamp-nya beda banget dari yang lain. Fokus ke praktik dan proyek nyata. Portfolio yang dibangun beneran membantu saat interview.",
    rating: 5,
  },
  {
    name: "Andi Firmansyah",
    role: "Data Scientist Freelancer",
    content:
      "Setelah ikut bootcamp, skill saya meningkat drastis. Sekarang sudah bisa handle project data science secara mandiri.",
    rating: 5,
  },
];

const alumniCompanies = [
  "Tokopedia",
  "Gojek",
  "Shopee",
  "Traveloka",
  "Bukalapak",
  "OVO",
  "Dana",
  "Grab",
  "Blibli",
  "Tiket.com",
  "Telkom",
  "Bank BCA",
];

const TestimonialSection = () => {
  return (
    <section id="testimoni" className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dipercaya Alumni, Diakui Industri
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Dengarkan cerita sukses alumni kami yang kini berkarir di perusahaan-perusahaan top Indonesia.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-accent mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-primary-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Alumni Companies Carousel */}
        <div className="text-center">
          <p className="text-sm text-primary-foreground/50 mb-6 uppercase tracking-wider">
            Alumni kami bekerja di
          </p>
          <LogoCarousel 
            logos={alumniCompanies} 
            direction="left" 
            speed="normal"
            variant="dark"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
