import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load route components to reduce initial bundle size
const Index = lazy(() => import("./pages/Index"));
const Premium = lazy(() => import("./pages/Premium"));
const Ecological = lazy(() => import("./pages/Ecological"));
const DeliveryFast = lazy(() => import("./pages/DeliveryFast"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/ecologica" element={<Ecological />} />
            <Route path="/delivery-rapido" element={<DeliveryFast />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
