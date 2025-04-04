
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-space-dark-blue flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="text-9xl font-bold mb-6 space-gradient-text">404</div>
          <h1 className="text-4xl font-bold mb-6">Page Not Found</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
            The cosmic coordinates you're looking for don't seem to exist in our universe.
          </p>
          <Button 
            className="bg-gradient-to-r from-space-purple to-space-indigo button-shine" 
            size="lg"
            onClick={() => window.location.href = '/'}
          >
            <Home className="mr-2 h-5 w-5" /> Return to Home
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
