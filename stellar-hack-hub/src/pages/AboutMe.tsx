
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, Book, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-space-dark-blue">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            About <span className="space-gradient-text">Me</span>
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="col-span-1">
              <div className="rounded-xl overflow-hidden bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20 p-6 h-full">
                <div className="aspect-square rounded-full overflow-hidden mx-auto mb-6 w-48 h-48 bg-space-light-blue/20 flex items-center justify-center">
                  {/* Placeholder for profile image */}
                  <span className="text-6xl text-space-purple/70">CK</span>
                </div>
                <h2 className="text-xl font-semibold text-center mb-2">Canaan Kiprop</h2>
                <p className="text-gray-300 text-center">Real Estate Student</p>
                <p className="text-gray-300 text-center">University of Nairobi</p>
              </div>
            </div>
            
            <div className="col-span-2">
              <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20 h-full">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
                  <p className="text-gray-300 mb-4">
                    Hello! I'm a passionate Real Estate student at the University of Nairobi. My journey in the world of real estate began with a curiosity about urban development and has evolved into a deep passion for sustainable housing solutions.
                  </p>
                  <p className="text-gray-300 mb-4">
                    I believe in the power of technology to transform the real estate industry. From blockchain for property transactions to virtual reality for property tours, I'm excited about the intersection of tech and real estate.
                  </p>
                  <p className="text-gray-300">
                    When I'm not studying or working on projects, you can find me exploring architectural wonders, reading about market trends, or volunteering for community housing initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-space-purple mr-2" />
                  <h3 className="text-xl font-semibold">Experience</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Real Estate Intern, PropertyHub (2023)</li>
                  <li>• Housing Survey Research Assistant (2022)</li>
                  <li>• Student Housing Committee Member (2021-Present)</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Book className="h-6 w-6 text-space-indigo mr-2" />
                  <h3 className="text-xl font-semibold">Skills</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Property Valuation</li>
                  <li>• Market Analysis</li>
                  <li>• GIS Mapping</li>
                  <li>• Project Management</li>
                  <li>• Web Development</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-space-teal mr-2" />
                  <h3 className="text-xl font-semibold">Quick Contact</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Email: 41373062@student.uonbi.ac.ke</li>
                  <li>• Phone: +254 758640338</li>
                  <li>• LinkedIn: /canaan-kiprop-cheruiyot-5551792ab</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMe;
