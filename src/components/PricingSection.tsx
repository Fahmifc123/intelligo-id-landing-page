import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const pricingPlans = [
  {
    name: "Bootcamp Online",
    subtitle: "Mini Intensive - 6 Sesi",
    price: "Rp1.999.999",
    originalPrice: "Rp2.500.000",
    features: [
      "6 Sesi Live Class",
      "Materi & Recording",
      "Sertifikat Kompetensi",
      "Akses Komunitas Alumni",
    ],
    popular: false,
  },
  {
    name: "Mini Bootcamp Online",
    subtitle: "Weekend & Malam - 12 Sesi",
    price: "Rp3.499.999",
    originalPrice: "Rp4.500.000",
    features: [
      "12 Sesi Live Class",
      "Materi & Recording",
      "1x Mentoring Private",
      "Sertifikat Kompetensi",
      "Job Connector Access",
    ],
    popular: true,
  },
  {
    name: "Bootcamp Offline",
    subtitle: "Tatap Muka Intensif",
    price: "Rp5.999.999",
    originalPrice: "Rp7.500.000",
    features: [
      "16+ Sesi Tatap Muka",
      "Materi Lengkap",
      "3x Mentoring Private",
      "Portfolio Building",
      "Mock Interview",
      "Job Guarantee*",
    ],
    popular: false,
  },
  {
    name: "Private Course",
    subtitle: "1-on-1 Mentoring",
    price: "Rp8.000.000",
    originalPrice: "Rp10.000.000",
    features: [
      "10 Sesi Private 1-on-1",
      "Custom Silabus",
      "Flexible Schedule",
      "Portfolio Building",
      "Career Coaching",
      "Unlimited Konsultasi",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Paket Harga & Investasi Karir Anda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan kemampuan Anda. Investasi terbaik untuk karir impian.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border ${
                plan.popular
                  ? "border-accent ring-2 ring-accent/20"
                  : "border-border/50"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full shadow-glow">
                    <Sparkles className="w-4 h-4" />
                    Paling Populer
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6 pt-2">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground line-through">
                  {plan.originalPrice}
                </p>
                <p className="text-3xl font-bold text-accent">{plan.price}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "accent" : "accent-outline"}
                className="w-full"
                size="lg"
              >
                Pilih Paket
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          *Add-on Jaminan Job Interview tersedia untuk paket tertentu
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
