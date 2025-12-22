import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const PromoSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 19,
    minutes: 8,
    seconds: 50,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <section className="section-padding bg-primary">
      <div className="section-container">
        <div className="text-center">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-accent" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Dapatkan Diskon Khusus untuk Hari Ini!
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Jangan lewatkan kesempatan untuk bergabung dengan harga spesial. Penawaran terbatas!
          </p>

          {/* Countdown */}
          <div className="flex justify-center gap-4 mb-10">
            {[
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-accent rounded-xl flex items-center justify-center shadow-glow-lg animate-pulse-glow">
                  <span className="text-3xl md:text-4xl font-bold text-accent-foreground">
                    {formatNumber(item.value)}
                  </span>
                </div>
                <p className="text-sm text-primary-foreground/60 mt-2 font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button variant="accent" size="xl" className="shadow-glow-lg animate-bounce-subtle">
            Daftar Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
