import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotificationPopup from "./components/NotificationPopup";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import AIForBeginner from "./pages/AIForBeginner";
import AboutUs from "./pages/AboutUs";
import BootcampMalam from "./pages/BootcampMalam";
import BootcampOffline from "./pages/BootcampOffline";
import BootcampOfflineCategory from "./pages/BootcampOfflineCategory";
import BootcampOnline from "./pages/BootcampOnline";
import BootcampPrivate from "./pages/BootcampPrivate";
import BootcampSemiPrivate from "./pages/BootcampSemiPrivate";
import BootcampWeekday from "./pages/BootcampWeekday";
import BootcampWeekend from "./pages/BootcampWeekend";
import CVAnalyzer from "./pages/CVAnalyzer";
import CareerCoaching from "./pages/CareerCoaching";
import CorporateTrainingCategory from "./pages/CorporateTrainingCategory";
import DataScienceForBeginner from "./pages/DataScienceForBeginner";
import Index from "./pages/Index";
import InterviewAI from "./pages/InterviewAI";
import JobConnect from "./pages/JobConnect";
import JobGuarantee from "./pages/JobGuarantee";
import JobReady from "./pages/JobReady";
import JobReadyBootcamp from "./pages/JobReadyBootcamp";
import KatalogBootcamp from "./pages/KatalogBootcamp";
import Kontak from "./pages/Kontak";
import MiniBootcampWorkshopCategory from "./pages/MiniBootcampWorkshopCategory";
import NotFound from "./pages/NotFound";
import PortofolioAlumni from "./pages/PortofolioAlumni";
import PrivateCourseCategory from "./pages/PrivateCourseCategory";
import PrivateCourseOffline from "./pages/PrivateCourseOffline";
import Silabus from "./pages/Silabus";
import Workshop from "./pages/Workshop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <NotificationPopup />
        <WhatsAppButton />
        <BrowserRouter>          <ScrollToTop />          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/bootcamp-data-science-online" element={<BootcampOnline />} />
            <Route path="/bootcamp-data-science-offline" element={<BootcampOfflineCategory />} />
            <Route path="/private-course" element={<PrivateCourseCategory />} />
            <Route path="/mini-bootcamp-workshop" element={<MiniBootcampWorkshopCategory />} />
            <Route path="/corporate-training" element={<CorporateTrainingCategory />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/portofolio-student" element={<PortofolioAlumni />} />
            <Route path="/job-ready" element={<JobReady />} />
            <Route path="/job-connect" element={<JobConnect />} />
            <Route path="/job-ready/cv-analyzer" element={<CVAnalyzer />} />
            <Route path="/job-ready/career-coaching" element={<CareerCoaching />} />
            <Route path="/job-ready/interview-ai" element={<InterviewAI />} />
            <Route path="/job-ready/job-guarantee" element={<JobGuarantee />} />
            <Route path="/program/bootcamp-malam" element={<BootcampMalam />} />
            <Route path="/program/bootcamp-weekend" element={<BootcampWeekend />} />
            <Route path="/program/bootcamp-offline" element={<BootcampOffline />} />
            <Route path="/program/bootcamp-weekday" element={<BootcampWeekday />} />
            <Route path="/program/private-course" element={<PrivateCourseOffline />} />
            <Route path="/program/mini-bootcamp" element={<Workshop />} />
            <Route path="/program/bootcamp-semi-private" element={<BootcampSemiPrivate />} />
            <Route path="/program/bootcamp-private" element={<BootcampPrivate />} />
            <Route path="/program/workshop" element={<Workshop />} />
            <Route path="/program/job-ready-bootcamp" element={<JobReadyBootcamp />} />
            <Route path="/program/corporate-training" element={<Workshop />} />
            <Route path="/silabus" element={<Silabus />} />
            <Route path="/silabus/data-science" element={<DataScienceForBeginner />} />
            <Route path="/silabus/ai-beginner" element={<AIForBeginner />} />
            <Route path="/katalog-bootcamp" element={<KatalogBootcamp />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
