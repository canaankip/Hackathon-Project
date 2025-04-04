
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { ArrowRight, Book, Briefcase, User, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-space-dark-blue">
      <Navbar />
      <main>
        <Hero />
        
        {/* Quick Access Section */}
        <section className="py-16 bg-space-dark-blue/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              <Link to="/about">
                <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20 hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-space-purple/20 flex items-center justify-center mb-4">
                      <User className="h-8 w-8 text-space-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">About Me</h3>
                    <p className="text-gray-300 mb-4">Learn about my background and skills in real estate.</p>
                    <ArrowRight className="h-5 w-5 text-space-purple mt-auto" />
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/education">
                <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20 hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-space-indigo/20 flex items-center justify-center mb-4">
                      <Book className="h-8 w-8 text-space-indigo" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-gray-300 mb-4">My academic journey at University of Nairobi.</p>
                    <ArrowRight className="h-5 w-5 text-space-indigo mt-auto" />
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/interests">
                <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20 hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-space-teal/20 flex items-center justify-center mb-4">
                      <Heart className="h-8 w-8 text-space-teal" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Interests</h3>
                    <p className="text-gray-300 mb-4">Discover what I'm passionate about beyond academics.</p>
                    <ArrowRight className="h-5 w-5 text-space-teal mt-auto" />
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/contact">
                <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20 hover:-translate-y-1 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-space-cyan/20 flex items-center justify-center mb-4">
                      <Briefcase className="h-8 w-8 text-space-cyan" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Contact</h3>
                    <p className="text-gray-300 mb-4">Get in touch for collaborations or inquiries.</p>
                    <ArrowRight className="h-5 w-5 text-space-cyan mt-auto" />
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Skills Summary Section */}
        <section className="py-16 bg-gradient-to-b from-space-dark-blue to-space-mid-blue">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              My <span className="space-gradient-text">Skills</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Technical Skills */}
              <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Property Valuation</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-space-dark-blue rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-space-purple to-space-indigo h-2.5 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Real Estate Finance</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-space-dark-blue rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-space-purple to-space-indigo h-2.5 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Urban Planning</span>
                        <span>70%</span>
                      </div>
                      <div className="w-full bg-space-dark-blue rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-space-purple to-space-indigo h-2.5 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Construction Technology</span>
                        <span>65%</span>
                      </div>
                      <div className="w-full bg-space-dark-blue rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-space-purple to-space-indigo h-2.5 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Digital Skills */}
              <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Digital Skills</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">HTML/CSS</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full bg-space-dark-blue rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-space-teal to-space-cyan h-2.5 rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">JavaScript</span>
                        <span>80%</span>
                      </div>
                      <div className="w-full bg-space-dark-blue rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-space-teal to-space-cyan h-2.5 rounded-full" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">React</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-space-dark-blue rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-space-teal to-space-cyan h-2.5 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Database Management</span>
                        <span>70%</span>
                      </div>
                      <div className="w-full bg-space-dark-blue rounded-full h-2.5">
                        <div className="bg-gradient-to-r from-space-teal to-space-cyan h-2.5 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/about">
                <Button className="bg-gradient-to-r from-space-purple to-space-indigo hover:opacity-90 transition-opacity button-shine">
                  View Full Profile <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Projects Preview Section */}
        <section className="py-16 bg-space-dark-blue">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Featured <span className="space-gradient-text">Projects</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20 overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-space-purple/30 to-space-indigo/30 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white/70">Project 1</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Affordable Housing Analysis</h3>
                  <p className="text-gray-300 mb-4">A research project analyzing affordable housing trends in Nairobi and potential solutions.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-space-purple/20 rounded-full text-xs">Research</span>
                    <span className="px-3 py-1 bg-space-indigo/20 rounded-full text-xs">Data Analysis</span>
                    <span className="px-3 py-1 bg-space-teal/20 rounded-full text-xs">Urban Planning</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20 overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-space-teal/30 to-space-cyan/30 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white/70">Project 2</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Property Listing Web App</h3>
                  <p className="text-gray-300 mb-4">A responsive web application for listing and searching properties in various neighborhoods.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-space-purple/20 rounded-full text-xs">HTML/CSS</span>
                    <span className="px-3 py-1 bg-space-indigo/20 rounded-full text-xs">JavaScript</span>
                    <span className="px-3 py-1 bg-space-teal/20 rounded-full text-xs">Database</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20 overflow-hidden hover:-translate-y-1 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-space-indigo/30 to-space-neon-pink/30 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white/70">Project 3</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Sustainable Buildings Dashboard</h3>
                  <p className="text-gray-300 mb-4">An interactive dashboard showing energy efficiency metrics for sustainable buildings in Kenya.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-space-purple/20 rounded-full text-xs">React</span>
                    <span className="px-3 py-1 bg-space-indigo/20 rounded-full text-xs">Data Visualization</span>
                    <span className="px-3 py-1 bg-space-teal/20 rounded-full text-xs">Sustainability</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-gradient-to-r from-space-purple to-space-indigo hover:opacity-90 transition-opacity button-shine">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-cta-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Collaborate?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              I'm always interested in new projects and opportunities. Let's connect and discuss how we can work together!
            </p>
            <Link to="/contact">
              <Button className="bg-white text-space-purple hover:bg-gray-100 transition-colors button-shine text-lg px-8 py-6">
                Get In Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
