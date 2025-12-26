import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface PaymentPackage {
  name: string;
  paymentLink: string;
}

interface PaymentPopupProps {
  isOpen: boolean;
  package: PaymentPackage | null;
  onClose: () => void;
}

const PaymentPopup = ({ isOpen, package: pkg, onClose }: PaymentPopupProps) => {
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
        <div className="p-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            {pkg.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Anda akan diarahkan ke halaman pembayaran kami yang aman untuk menyelesaikan transaksi.
          </p>

          {/* Action Buttons */}
          <div className="space-y-3">
            <a
              href={pkg.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-accent hover:bg-accent/90 text-base py-6">
                Lanjut Pembayaran
              </Button>
            </a>
            <Button
              variant="outline"
              className="w-full py-6"
              onClick={onClose}
            >
              Batal
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Pembayaran aman dengan berbagai metode
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPopup;
