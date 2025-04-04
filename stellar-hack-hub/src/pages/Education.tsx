
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Book } from "lucide-react";

const Education = () => {
  return (
    <div className="min-h-screen bg-space-dark-blue">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            <span className="space-gradient-text">Education</span>
          </h1>
          
          <div className="max-w-3xl mx-auto mt-12">
            <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20 mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="rounded-full bg-space-purple/20 p-4 mr-4">
                    <Book className="h-8 w-8 text-space-purple" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Bachelor of Real Estate</h2>
                    <p className="text-xl text-gray-300">University of Nairobi</p>
                    <p className="text-gray-400">2022 - Present</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Currently pursuing a Bachelor's degree in Real Estate with a focus on urban development and sustainable housing solutions. My coursework includes property valuation, land economics, construction technology, and real estate finance.
                </p>
                <h3 className="text-xl font-semibold mb-3">Key Achievements:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Research Assistant for Department Housing Study</li>
                  <li>• Student Representative, Faculty of Built Environment</li>
                  <li>• Led team project on Affordable Housing Solutions that won departmental recognition</li>
                </ul>
              </CardContent>
            </Card>
            
            <h3 className="text-2xl font-bold mb-6 mt-12">Relevant Coursework</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">Core Real Estate Subjects</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Property Valuation and Appraisal</li>
                    <li>• Real Estate Economics</li>
                    <li>• Land Use Planning</li>
                    <li>• Construction Technology</li>
                    <li>• Real Estate Finance</li>
                    <li>• Property Management</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">Additional Studies</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• GIS for Real Estate Analysis</li>
                    <li>• Sustainable Development</li>
                    <li>• Urban Economics</li>
                    <li>• Real Estate Marketing</li>
                    <li>• Building Information Modeling (BIM)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 mt-12">Certifications & Workshops</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">Technical Certifications</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Introduction to PropTech (PropTech Kenya)</li>
                    <li>• Real Estate Data Analytics (Coursera)</li>
                    </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">Workshops & Seminars</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Affordable Housing Solutions in Kenya</li>
                    <li>• Digital Marketing for Property Agents</li>
                    <li>• Climate Resilient Real Estate Development</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
