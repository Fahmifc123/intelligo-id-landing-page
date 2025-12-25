import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import BootcampMalam from "./pages/BootcampMalam";
import BootcampOffline from "./pages/BootcampOffline";
import BootcampPrivate from "./pages/BootcampPrivate";
import BootcampSemiPrivate from "./pages/BootcampSemiPrivate";
import BootcampWeekday from "./pages/BootcampWeekday";
import BootcampWeekend from "./pages/BootcampWeekend";
import CVAnalyzer from "./pages/CVAnalyzer";
import CareerCoaching from "./pages/CareerCoaching";
import CorporateTraining from "./pages/CorporateTraining";
import Index from "./pages/Index";
import InterviewAI from "./pages/InterviewAI";
import JobConnect from "./pages/JobConnect";
import JobGuarantee from "./pages/JobGuarantee";
import JobReady from "./pages/JobReady";
import JobReadyBootcamp from "./pages/JobReadyBootcamp";
import Kontak from "./pages/Kontak";
import MinBootcamp from "./pages/MinBootcamp";
import NotFound from "./pages/NotFound";
import PortofolioAlumni from "./pages/PortofolioAlumni";
import PrivateCourse from "./pages/PrivateCourse";
import PrivateCourseOffline from "./pages/PrivateCourseOffline";
import Workshop from "./pages/Workshop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>          <ScrollToTop />          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/portofolio" element={<PortofolioAlumni />} />
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
            <Route path="/program/private-course" element={<PrivateCourse />} />
            <Route path="/program/private-course-offline" element={<PrivateCourseOffline />} />
            <Route path="/program/mini-bootcamp" element={<MinBootcamp />} />
            <Route path="/program/bootcamp-semi-private" element={<BootcampSemiPrivate />} />
            <Route path="/program/bootcamp-private" element={<BootcampPrivate />} />
            <Route path="/program/workshop" element={<Workshop />} />
            <Route path="/program/job-ready-bootcamp" element={<JobReadyBootcamp />} />
            <Route path="/program/corporate-training" element={<CorporateTraining />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
