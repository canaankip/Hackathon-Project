
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-24 bg-hero-pattern relative overflow-hidden hero-stars">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hello, I'm <span className="space-gradient-text">John Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Real Estate Student at University of Nairobi with a passion for blending property development with technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="text-lg px-8 py-6 bg-gradient-to-r from-space-purple to-space-indigo hover:opacity-90 transition-opacity button-shine">
                <Mail className="mr-2 h-5 w-5" /> Contact Me
              </Button>
            </Link>
            <Button variant="outline" className="text-lg px-8 py-6 border-space-light-blue/50 hover:bg-space-light-blue/10 transition-colors">
              <Download className="mr-2 h-5 w-5" /> Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements for decoration */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-space-indigo/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-space-purple/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-space-teal/20 blur-2xl animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;
