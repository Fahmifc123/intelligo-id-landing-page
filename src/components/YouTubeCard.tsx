import { useState, useEffect } from "react";
import { Play } from "lucide-react";

type Props = {
  videoUrl: string; // full YouTube url or id
  title?: string;
  className?: string;
};

function getVideoId(url: string) {
  // Accepts: full url or just id
  const idMatch = url.match(/[?&]v=([\w-]{11})/) || url.match(/youtu\.be\/([\w-]{11})/) || url.match(/([\w-]{11})$/);
  return idMatch ? idMatch[1] : url;
}

export default function YouTubeCard({ videoUrl, title = "YouTube video", className = "" }: Props) {
  const [open, setOpen] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    setVideoId(getVideoId(videoUrl));
  }, [videoUrl]);

  if (!videoId) return null;

  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const embedSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <div className={`youtube-card ${className}`}> 
      {/* Thumbnail button */}
      <button
        aria-label={`Putar video: ${title}`}
        className="relative block w-full rounded-lg overflow-hidden shadow-md focus:outline-none focus:ring-2 focus:ring-accent"
        onClick={() => setOpen(true)}
      >
        <img src={thumbnail} alt={`Thumbnail ${title}`} className="w-full h-auto object-cover" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-black/40 rounded-full p-4">
            <Play className="w-7 h-7 text-white" />
          </div>
        </div>
      </button>

      {/* Modal-like overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              title={title}
              src={embedSrc}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Close button */}
          <button
            aria-label="Close video"
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 rounded-full bg-white/90 p-2 shadow-md"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
