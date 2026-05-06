import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Pages
import Home from "@/pages/home";
import AboutUs from "@/pages/about-us";
import OurBeliefs from "@/pages/our-beliefs";
import OurLeadership from "@/pages/our-leadership";
import Sermons from "@/pages/sermons";
import LegacyFellowships from "@/pages/legacy-fellowships";
import LegacyBlog from "@/pages/legacy-blog";
import BlogLogin from "@/pages/blog-login";
import Events from "@/pages/events";
import ContactUs from "@/pages/contact-us";
import Give from "@/pages/give";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/about/beliefs" component={OurBeliefs} />
          <Route path="/about/leadership" component={OurLeadership} />
          <Route path="/sermons" component={Sermons} />
          <Route path="/fellowships" component={LegacyFellowships} />
          <Route path="/blog" component={LegacyBlog} />
          <Route path="/blog/login" component={BlogLogin} />
          <Route path="/events" component={Events} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/give" component={Give} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;