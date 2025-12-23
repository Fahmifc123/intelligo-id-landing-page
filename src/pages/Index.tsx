import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramSection from "@/components/ProgramSection";
import CurriculumSection from "@/components/CurriculumSection";
import CareerSection from "@/components/CareerSection";
import TestimonialSection from "@/components/TestimonialSection";
import StatsSection from "@/components/StatsSection";
import MentorSection from "@/components/MentorSection";
import PricingSection from "@/components/PricingSection";
import PromoSection from "@/components/PromoSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Intelligo ID | Bootcamp Data Science & AI Terbaik di Indonesia</title>
        <meta
          name="description"
          content="Belajar Data Science, Machine Learning, AI, Python, dan SQL dengan kurikulum job ready. Bootcamp online & offline dibimbing mentor praktisi industri. 85% lulusan dapat kerja!"
        />
        <meta
          name="keywords"
          content="bootcamp data science, kursus machine learning, belajar AI, bootcamp python, kursus data analyst, bootcamp indonesia"
        />
        <meta property="og:title" content="Intelligo ID | Bootcamp Data Science & AI" />
        <meta
          property="og:description"
          content="Bootcamp Data Science & AI dengan kurikulum job ready. Dibimbing mentor praktisi industri."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://intelligo.id" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Top Navbar */}
        <Navbar />

        {/* Main Content - with top padding for fixed navbar */}
        <main className="pt-16 md:pt-20">
          <HeroSection />
          <ProgramSection />
          <CurriculumSection />
          <CareerSection />
          <TestimonialSection />
          <StatsSection />
          <MentorSection />
          <PricingSection />
          <PromoSection />
          <FAQSection />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Index;
