import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Kontak from "./pages/Kontak";
import PortofolioAlumni from "./pages/PortofolioAlumni";
import JobConnect from "./pages/JobConnect";
import PrivateCourse from "./pages/PrivateCourse";
import BootcampSemiPrivate from "./pages/BootcampSemiPrivate";
import BootcampPrivate from "./pages/BootcampPrivate";
import Workshop from "./pages/Workshop";
import JobReadyBootcamp from "./pages/JobReadyBootcamp";
import CorporateTraining from "./pages/CorporateTraining";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/portofolio" element={<PortofolioAlumni />} />
            <Route path="/job-connect" element={<JobConnect />} />
            <Route path="/program/private-course" element={<PrivateCourse />} />
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
