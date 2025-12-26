import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface PackageDetail {
  name: string;
  price: string;
  subtitle: string;
  paymentLink: string;
  features: string[];
}

interface PackageDetailPopupProps {
  isOpen: boolean;
  package: PackageDetail | null;
  onClose: () => void;
  onPaymentClick: () => void;
}

const PackageDetailPopup = ({
  isOpen,
  package: pkg,
  onClose,
  onPaymentClick,
}: PackageDetailPopupProps) => {
  if (!isOpen || !pkg) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-background rounded-2xl shadow-2xl w-full max-w-md relative animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-lg transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 pr-8">
            {pkg.name}
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            {pkg.subtitle}
          </p>

          {/* Price Section */}
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-6">
            <p className="text-xs text-muted-foreground mb-1">Harga Paket:</p>
            <p className="text-3xl font-bold text-accent">{pkg.price}</p>
          </div>

          {/* Features - Scrollable */}
          <div className="mb-6 max-h-[200px] overflow-y-auto">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Yang Anda Dapatkan:
            </h3>
            <ul className="space-y-2">
              {pkg.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="text-xs text-foreground/70 flex items-start gap-2"
                >
                  <span className="text-accent flex-shrink-0">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              className="w-full bg-accent hover:bg-accent/90 text-base py-6"
              onClick={onPaymentClick}
            >
              Lanjut ke Pembayaran
            </Button>
            <Button variant="outline" className="w-full py-6" onClick={onClose}>
              Batal
            </Button>
          </div>

          {/* Info Text */}
          <p className="text-xs text-muted-foreground text-center mt-4">
            Anda akan diarahkan ke halaman pembayaran kami
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailPopup;
