import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Building2, 
  Users, 
  FileText, 
  UserCheck, 
  Rocket,
  Clock,
  Laptop,
  FolderKanban,
  Home as HomeIcon,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import company logos
import tokopediaLogo from "@/assets/logos/tokopedia.png";
import gojekLogo from "@/assets/logos/gojek.png";
import grabLogo from "@/assets/logos/grab.png";
import shopeeLogo from "@/assets/logos/shopee.png";
import bukalapakLogo from "@/assets/logos/bukalapak.png";
import tikiLogo from "@/assets/logos/tiketcom.png";
import travelokaLogo from "@/assets/logos/traveloka.png";
import bcaLogo from "@/assets/logos/bca.png";
import danaLogo from "@/assets/logos/dana.png";
import ovoLogo from "@/assets/logos/ovo.png";
import telkomLogo from "@/assets/logos/telkom.png";
import blibliLogo from "@/assets/logos/blibli.png";

const JobConnect = () => {
  const stats = [
    { value: "100+", label: "Pekerjaan", icon: Briefcase },
    { value: "50+", label: "Perusahaan", icon: Building2 },
    { value: "500+", label: "Pencari Kerja", icon: Users },
  ];

  const steps = [
    {
      number: "01",
      title: "Daftar dan Kirim CV",
      description: "Profile Anda akan diverifikasi melalui wawancara, kemudian akan diproses ke perusahaan Mitra jika sesuai.",
      icon: FileText
    },
    {
      number: "02",
      title: "Pencocokan dengan Perusahaan",
      description: "Kami akan mencocokkan ketrampilan dan posisi yang Anda inginkan dengan lowongan pekerjaan yang tersedia.",
      icon: UserCheck
    },
    {
      number: "03",
      title: "Segera Mulai Bekerja",
      description: "Setelah berhasil melewati tes dan wawancara, Anda akan menerima surat penawaran dan dapat segera memulai pekerjaan.",
      icon: Rocket
    }
  ];

  const jobTypes = [
    {
      title: "Full Time",
      description: "Pekerjaan penuh waktu untuk Anda yang mencari posisi tetap dengan peluang karir yang jelas.",
      icon: Briefcase
    },
    {
      title: "Freelance",
      description: "Kesempatan kerja lepas bagi Anda yang ingin mendapatkan penghasilan tambahan.",
      icon: Clock
    },
    {
      title: "Remote",
      description: "Pekerjaan penuh atau paruh waktu bagi Anda yang mengutamakan fleksibilitas dalam cara bekerja.",
      icon: Laptop
    },
    {
      title: "Project Based",
      description: "Pekerjaan penuh atau paruh waktu bagi Anda yang ingin mendapatkan pengalaman kerja yang bervariasi.",
      icon: FolderKanban
    }
  ];

  const testimonials = [
    {
      name: "Rumiati",
      role: "Data Science - Bukalapak",
      quote: "Saya sangat berterima kasih kepada Job Connect Intelligo karena telah membantu saya menemukan pekerjaan impian saya sebagai Data Scientist. Proses pencarian kerja menjadi lebih mudah dan terarah."
    },
    {
      name: "Efendi",
      role: "Data Science - Gojek",
      quote: "Tim Job Connect sangat profesional dan memahami kebutuhan saya. Saya merasa didukung sepanjang proses, dan akhirnya saya mendapatkan posisi yang sesuai dengan keahlian saya."
    },
    {
      name: "Dewi Sartika",
      role: "Data Analyst - Tokopedia",
      quote: "Proses pencarian kerja menjadi lebih mudah dengan Job Connect. Dalam waktu 2 minggu, saya sudah mendapatkan offering dari perusahaan impian saya."
    }
  ];

  const faqs = [
    {
      question: "Apa Itu Job Connect Intelligo?",
      answer: "Job Connect Intelligo adalah layanan penyaluran kerja bagi alumni dan peserta bootcamp Intelligo yang bertujuan untuk menghubungkan talenta siap kerja dengan berbagai perusahaan di industri teknologi."
    },
    {
      question: "Bagaimana cara mendaftar di Job Connect Intelligo?",
      answer: "Cukup dengan menyelesaikan program bootcamp Intelligo, Anda otomatis terdaftar di Job Connect. Tim kami akan membantu proses penyaluran kerja sesuai dengan minat dan keahlian Anda."
    },
    {
      question: "Apakah ada biaya untuk menggunakan Job Connect Intelligo?",
      answer: "Tidak, layanan Job Connect Intelligo 100% gratis untuk alumni bootcamp. Kami hadir untuk membantu Anda mendapatkan karier terbaik tanpa biaya tambahan."
    },
    {
      question: "Apa saja jenis pekerjaan yang ditawarkan di Job Connect Intelligo?",
      answer: "Job Connect Intelligo menawarkan berbagai jenis pekerjaan, seperti full-time, part-time, remote, hybrid, hingga project-based, sesuai kebutuhan perusahaan dan fleksibilitas karier Anda."
    },
    {
      question: "Apakah Job Connect Intelligo membantu dalam membuat CV?",
      answer: "Ya. Kami menyediakan dukungan karier, termasuk review CV, portofolio, hingga simulasi wawancara kerja agar Anda lebih siap menghadapi proses rekrutmen."
    }
  ];

  const companyLogos = [
    { src: tokopediaLogo, alt: "Tokopedia" },
    { src: gojekLogo, alt: "Gojek" },
    { src: grabLogo, alt: "Grab" },
    { src: shopeeLogo, alt: "Shopee" },
    { src: bukalapakLogo, alt: "Bukalapak" },
    { src: tikiLogo, alt: "Tiket.com" },
    { src: travelokaLogo, alt: "Traveloka" },
    { src: bcaLogo, alt: "BCA" },
    { src: danaLogo, alt: "Dana" },
    { src: ovoLogo, alt: "OVO" },
    { src: telkomLogo, alt: "Telkom" },
    { src: blibliLogo, alt: "Blibli" },
  ];

  return (
    <>
      <Helmet>
        <title>Job Connect - Intelligo ID | Temukan Peluang Karir IT</title>
        <meta name="description" content="Temukan peluang karir IT lebih cepat dengan Job Connect Intelligo. Lamar ke ratusan lowongan kerja di berbagai bidang IT dengan proses mudah." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-16 md:pt-20">
          {/* Hero Section */}
          <section className="py-20 md:py-32 bg-gradient-to-b from-accent/5 to-background relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--accent)/0.1),transparent_50%)]" />
            <div className="section-container relative">
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                  Job Connect Intelligo
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Temukan Peluang Karir IT <br />
                  <span className="text-accent">Lebih Cepat</span> di Job Connect
                </h1>
                <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                  Lamar ke ratusan lowongan kerja di berbagai bidang IT. Proses mudah, 
                  penyaluran tepat ke perusahaan terbaik, terbuka untuk semua pencari kerja.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="accent" size="lg" asChild>
                    <a href="https://www.intelligo.id/jobs/" target="_blank" rel="noopener noreferrer">
                      Cek Lowongan
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="https://bit.ly/tanya-mintell" target="_blank" rel="noopener noreferrer">
                      Konsultasi Gratis
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-card border-y border-border/50">
            <div className="section-container">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Jalur cepat menuju pekerjaan Anda berikutnya
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
                    <div className="text-foreground/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Company Logos Section */}
          <section className="py-16">
            <div className="section-container">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  JobConnect Intelligo: Jaringan Karir Anda
                </h2>
                <p className="text-foreground/70">
                  Kami bekerjasama dengan berbagai industri untuk memberikan peluang karir terbaik bagi Anda.
                </p>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {companyLogos.map((logo, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center p-4 bg-card rounded-xl border border-border/50 hover:border-accent/30 transition-all duration-300"
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="h-8 md:h-10 object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-20 md:py-28 bg-card/50">
            <div className="section-container">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  Cara Kerja
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  3 Cara Praktis Dapat Kerja
                </h2>
                <p className="text-foreground/70 mt-4 max-w-2xl mx-auto">
                  Kami mencocokkan keterampilan Anda dengan peluang kerja yang tepat. Bergabunglah sekarang!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-background rounded-2xl border border-border/50 p-8 h-full hover:shadow-xl transition-all duration-300">
                      <div className="text-5xl font-bold text-accent/20 mb-4">{step.number}</div>
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                        <step.icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                      <p className="text-foreground/70">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30" />
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-foreground font-medium">
                    Khusus Alumni: Dapatkan prioritas dan banyak keuntungan!
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Job Types Section */}
          <section className="py-20 md:py-28">
            <div className="section-container">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  Tipe Pekerjaan
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Peluang Karir Sesuai Kebutuhan Anda
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {jobTypes.map((type, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <type.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{type.title}</h3>
                    <p className="text-foreground/70 text-sm">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 md:py-28 bg-card/50">
            <div className="section-container">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  Testimoni
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Apa Yang Mereka Katakan?
                </h2>
                <p className="text-foreground/70 mt-4">
                  Ratusan orang telah menemukan pekerjaan impian mereka melalui Job Connect Intelligo.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="bg-background rounded-2xl border border-border/50 p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                      <Users className="w-8 h-8 text-accent" />
                    </div>
                    <p className="text-foreground/80 italic mb-6">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-accent text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 md:py-28">
            <div className="section-container">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                    FAQ
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Frequently Asked Questions
                  </h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`faq-${index}`}
                      className="bg-card rounded-xl border border-border/50 px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-accent/20 to-accent/5">
            <div className="section-container">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Cukup Kirimkan CV-mu
                </h2>
                <p className="text-xl text-foreground/70 mb-2">
                  Mencari pekerjaan jadi semudah ini!
                </p>
                <p className="text-foreground/60 mb-8">
                  Rasakan kemudahan mencari pekerjaan IT yang tepat untukmu. 
                  Bergabunglah dengan Job Connect Intelligo dan wujudkan impian karirmu!
                </p>
                <Button variant="accent" size="lg" asChild>
                  <a href="https://www.intelligo.id/jobs/" target="_blank" rel="noopener noreferrer">
                    Daftar Lowongan
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default JobConnect;
