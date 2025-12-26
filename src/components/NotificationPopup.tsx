import { Award, CheckCircle, Flame, MessageSquare, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";

interface Notification {
  id: string;
  type: "purchase" | "completed" | "job" | "progress" | "testimonial";
  message: string;
  icon: React.ReactNode;
  color: string;
}

const notifications: Notification[] = [
  {
    id: "1",
    type: "purchase",
    message: "Budi Santoso baru saja membeli Bootcamp Data Science",
    icon: <Zap className="w-5 h-5" />,
    color: "bg-blue-500"
  },
  {
    id: "2",
    type: "purchase",
    message: "Siti Nurhaliza mendaftar di AI For Beginner",
    icon: <Zap className="w-5 h-5" />,
    color: "bg-blue-500"
  },
  {
    id: "3",
    type: "completed",
    message: "Ahmad Wijaya berhasil menyelesaikan Data Science bootcamp",
    icon: <CheckCircle className="w-5 h-5" />,
    color: "bg-green-500"
  },
  {
    id: "4",
    type: "completed",
    message: "Dewi Lestari lulus dari Program Job Ready",
    icon: <CheckCircle className="w-5 h-5" />,
    color: "bg-green-500"
  },
  {
    id: "5",
    type: "job",
    message: "Rendra Pratama berhasil mendapatkan pekerjaan sebagai Data Analyst",
    icon: <Award className="w-5 h-5" />,
    color: "bg-purple-500"
  },
  {
    id: "6",
    type: "job",
    message: "Rina Maulida diterima sebagai Data Scientist",
    icon: <Award className="w-5 h-5" />,
    color: "bg-purple-500"
  },
  {
    id: "7",
    type: "purchase",
    message: "Hendra Kusuma baru saja membeli Workshop AI",
    icon: <Zap className="w-5 h-5" />,
    color: "bg-blue-500"
  },
  {
    id: "8",
    type: "job",
    message: "Fatimah Zahra diterima sebagai Machine Learning Engineer",
    icon: <Award className="w-5 h-5" />,
    color: "bg-purple-500"
  },
  {
    id: "9",
    type: "completed",
    message: "Teguh Setiawan berhasil menyelesaikan AI For Beginner",
    icon: <CheckCircle className="w-5 h-5" />,
    color: "bg-green-500"
  },
  {
    id: "11",
    type: "progress",
    message: "Dimas Wijaya sudah menyelesaikan 5/11 modul Data Science",
    icon: <Flame className="w-5 h-5" />,
    color: "bg-orange-500"
  },
  {
    id: "12",
    type: "progress",
    message: "Ayu Kusuma sedang belajar Deep Learning",
    icon: <Flame className="w-5 h-5" />,
    color: "bg-orange-500"
  },
  {
    id: "13",
    type: "testimonial",
    message: "\"Trainer sangat helpful dan responsif\" - Alumni",
    icon: <MessageSquare className="w-5 h-5" />,
    color: "bg-pink-500"
  },
  {
    id: "14",
    type: "testimonial",
    message: "\"Materi sangat praktis dan mudah dipahami\" - Alumni",
    icon: <MessageSquare className="w-5 h-5" />,
    color: "bg-pink-500"
  }
];

const NotificationPopup = () => {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showRandomNotification = () => {
      const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
      setCurrentNotification(randomNotification);
      setIsVisible(true);

      // Auto hide after 6 seconds
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 6000);

      return hideTimer;
    };

    // Show first notification after 3 seconds
    const initialTimer = setTimeout(() => {
      showRandomNotification();
    }, 3000);

    // Show notification every 8-12 seconds
    const intervalTimer = setInterval(() => {
      showRandomNotification();
    }, Math.random() * 4000 + 8000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  if (!currentNotification || !isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-in slide-in-from-left-10 fade-in">
      <div className="bg-card rounded-lg shadow-lg border border-border/50 overflow-hidden max-w-sm">
        <div className="flex items-start gap-4 p-4">
          <div className={`${currentNotification.color} rounded-lg p-2 text-white flex-shrink-0`}>
            {currentNotification.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-foreground font-medium leading-snug">
              {currentNotification.message}
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary animate-pulse"></div>
      </div>
    </div>
  );
};

export default NotificationPopup;
