import { Button } from "@/components/ui/button";
import pricingData from "@/data/pricing.json";
import useEmblaCarousel from "embla-carousel-react";
import { Check, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import PackageDetailPopup from "./PackageDetailPopup";
import PaymentPopup from "./PaymentPopup";

const pricingCategories = pricingData.pricingCategories;

const PricingSection = () => {
  const [activeCategory, setActiveCategory] = useState("online");
  const [isDetailPopupOpen, setIsDetailPopupOpen] = useState(false);
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  const currentCategory = pricingCategories.find(
    (cat) => cat.id === activeCategory
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Reset carousel when category changes
  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(0);
    }
  }, [activeCategory, emblaApi]);

  const handleSelectPackage = (plan: any, categoryId: string) => {
    // Corporate Training - redirect to WhatsApp
    if (categoryId === "corporate") {
      window.open("https://wa.me/6282315556491?text=Halo%20MinTell%2C%20saya%20tertarik%20dengan%20corporate%20training", "_blank");
      return;
    }
    
    // Mini Bootcamp & Workshop - redirect to Instagram
    if (categoryId === "mini") {
      window.open("https://instagram.com/intelligo", "_blank");
      return;
    }
    
    // Other categories - show popup if payment link exists
    if (plan.paymentLink) {
      setSelectedPackage({
        name: plan.name,
        subtitle: plan.subtitle,
        price: plan.price,
        paymentLink: plan.paymentLink,
        features: plan.features,
      });
      setIsDetailPopupOpen(true);
    }
  };

  const handlePaymentClick = () => {
    setIsDetailPopupOpen(false);
    // Small delay to let detail popup close before payment popup opens
    setTimeout(() => {
      setIsPaymentPopupOpen(true);
    }, 300);
  };

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Paket Harga & Investasi Karir Anda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan dan kemampuan Anda.
            Investasi terbaik untuk karir impian.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {pricingCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : "bg-secondary text-foreground/70 hover:bg-secondary/80"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Category Description */}
        {currentCategory && (
          <p className="text-center text-muted-foreground mb-8">
            {currentCategory.description}
          </p>
        )}

        {/* Carousel Container */}
        <div className="relative px-4 md:px-16">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-lg border border-border items-center justify-center transition-all duration-200 ${
              canScrollPrev
                ? "hover:bg-accent hover:text-accent-foreground"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-lg border border-border items-center justify-center transition-all duration-200 ${
              canScrollNext
                ? "hover:bg-accent hover:text-accent-foreground"
                : "opacity-50 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden -mx-1">
            <div className="overflow-visible px-1" ref={emblaRef}>
              <div className="flex gap-6 py-6">
                {currentCategory?.plans.map((plan) => (
                  <div
                    key={`${activeCategory}-${plan.name}`}
                    className="flex-shrink-0 w-[280px] md:w-[300px]"
                  >
                    <div
                      className={`relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border h-full flex flex-col ${
                        plan.popular
                          ? "border-accent ring-2 ring-accent/20"
                          : "border-border/50"
                      }`}
                    >
                      {/* Popular Badge */}
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <div className="flex items-center gap-1 px-4 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full shadow-lg">
                            <Sparkles className="w-4 h-4" />
                            Populer
                          </div>
                        </div>
                      )}

                      {/* Header */}
                      <div className="text-center mb-6 pt-2">
                        <h3 className="text-lg font-bold text-foreground line-clamp-2">
                          {plan.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {plan.subtitle}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="text-center mb-6">
                        {plan.originalPrice && plan.originalPrice !== "TBA" && (
                          <p className="text-sm text-muted-foreground line-through">
                            {plan.originalPrice}
                          </p>
                        )}
                        <p className={`text-2xl font-bold ${plan.price === "Gratis*" ? "text-green-600" : plan.price.includes("Diskusi") ? "text-blue-600" : "text-accent"}`}>
                          {plan.price}
                        </p>
                      </div>

                      {/* Features */}
                      <ul className="space-y-3 mb-6 flex-grow">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground/80">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Button
                        variant={plan.popular ? "accent" : "accent-outline"}
                        className="w-full mt-auto"
                        size="lg"
                        onClick={() => handleSelectPackage(plan, activeCategory)}
                      >
                        {activeCategory === "mini" && (plan.name === "Workshop Intensive" || plan.name === "Mini Class (Online)")
                          ? "📷 Stay Tune di IG" 
                          : plan.price === "Gratis*" 
                            ? "Join Sekarang" 
                            : plan.price.includes("Diskusi") 
                              ? "Hubungi Kami" 
                              : "Pilih Paket"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Swipe Hint */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          ← Geser untuk melihat lebih banyak paket →
        </p>

        {/* Notes */}
        <p className="text-center text-sm text-muted-foreground mt-4">
          *Harga Diskon khusus 5 orang pendaftar pertama saat Batch baru dibuka
        </p>
        <p className="text-center text-sm text-muted-foreground mt-2">
          *Add-on Jaminan Job Interview tersedia untuk paket tertentu
        </p>
      </div>
      {/* Package Detail Popup */}
      <PackageDetailPopup
        isOpen={isDetailPopupOpen}
        package={selectedPackage}
        onClose={() => setIsDetailPopupOpen(false)}
        onPaymentClick={handlePaymentClick}
      />
      {/* Payment Popup */}
      <PaymentPopup
        isOpen={isPaymentPopupOpen}
        package={selectedPackage ? { name: selectedPackage.name, paymentLink: selectedPackage.paymentLink } : null}
        onClose={() => setIsPaymentPopupOpen(false)}
      />
    </section>
  );
};

export default PricingSection;
