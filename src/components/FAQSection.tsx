import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apakah cocok untuk pemula yang belum pernah coding?",
    answer:
      "Sangat cocok! Kurikulum kami dirancang dari nol untuk pemula. Kami mulai dari dasar Python dan logika pemrograman, lalu bertahap ke materi lanjutan. Mentor kami siap membantu di setiap langkah.",
  },
  {
    question: "Apakah dapat sertifikat setelah selesai?",
    answer:
      "Ya, semua peserta yang menyelesaikan program akan mendapatkan sertifikat kompetensi dari Intelligo ID. Sertifikat ini dapat ditampilkan di LinkedIn dan CV Anda.",
  },
  {
    question: "Apakah ada job assistance setelah lulus?",
    answer:
      "Ya! Kami memiliki program Job Connector yang menghubungkan alumni dengan 100+ hiring partners. Selain itu, ada sesi career coaching, CV review, dan mock interview untuk mempersiapkan Anda masuk ke industri.",
  },
  {
    question: "Bagaimana sistem kelas dan jadwal belajar?",
    answer:
      "Untuk bootcamp online, kelas diadakan live via Zoom di akhir pekan atau malam hari agar tidak mengganggu aktivitas utama. Semua sesi direkam sehingga Anda bisa mengulang materi kapan saja.",
  },
  {
    question: "Apakah bisa konsultasi sebelum mendaftar?",
    answer:
      "Tentu! Kami menyediakan sesi konsultasi gratis untuk membantu Anda memilih program yang tepat sesuai dengan tujuan karir dan kemampuan saat ini. Klik tombol 'Konsultasi Gratis' untuk menjadwalkan.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Punya Pertanyaan Belum Terjawab?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan seputar program Intelligo ID.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
