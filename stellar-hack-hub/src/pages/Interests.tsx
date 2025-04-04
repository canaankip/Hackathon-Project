
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Interests = () => {
  const interestsList = [
    {
      title: "Urban Architecture",
      description: "I'm fascinated by innovative urban design and how architecture shapes communities and living experiences.",
      image: "bg-gradient-to-br from-space-indigo/30 to-space-purple/30"
    },
    {
      title: "Sustainable Housing",
      description: "Exploring eco-friendly building materials and energy-efficient design strategies for sustainable real estate development.",
      image: "bg-gradient-to-br from-space-teal/30 to-space-cyan/30"
    },
    {
      title: "PropTech Innovation",
      description: "Interested in how emerging technologies like AR/VR, blockchain, and IoT are transforming the real estate industry.",
      image: "bg-gradient-to-br from-space-indigo/30 to-space-neon-pink/30"
    },
    {
      title: "Web Development",
      description: "Building interactive web applications and learning new frameworks to create tools for real estate analysis and visualization.",
      image: "bg-gradient-to-br from-space-purple/30 to-space-indigo/30"
    },
    {
      title: "Market Analysis",
      description: "Studying real estate market trends, investment strategies, and economic factors that influence property values.",
      image: "bg-gradient-to-br from-space-indigo/30 to-space-light-blue/30"
    },
    {
      title: "Photography",
      description: "Capturing architectural details and urban landscapes to document the evolving built environment in Nairobi.",
      image: "bg-gradient-to-br from-space-purple/30 to-space-teal/30"
    }
  ];

  return (
    <div className="min-h-screen bg-space-dark-blue">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            My <span className="space-gradient-text">Interests</span>
          </h1>
          
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Beyond academics, I'm passionate about various aspects of real estate, technology, and creative pursuits that shape my perspective and approach to problems.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {interestsList.map((interest, index) => (
              <Card key={index} className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20 overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                <div className={`h-32 ${interest.image} flex items-center justify-center`}>
                  <span className="text-3xl font-bold text-white/70">{interest.title.charAt(0)}</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{interest.title}</h3>
                  <p className="text-gray-300">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Interests</h2>
            
            <div className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Research Focus Areas</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="inline-block w-4 h-4 rounded-full bg-space-purple mt-1 mr-3"></span>
                      <span>Affordable Housing Solutions in Urban Centers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-4 h-4 rounded-full bg-space-indigo mt-1 mr-3"></span>
                      <span>Impact of Digital Transformation on Real Estate Transactions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-4 h-4 rounded-full bg-space-teal mt-1 mr-3"></span>
                      <span>Climate-Resilient Building Practices in East Africa</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-4 h-4 rounded-full bg-space-cyan mt-1 mr-3"></span>
                      <span>Machine Learning Applications in Property Valuation</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Industry Aspirations</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="inline-block w-4 h-4 rounded-full bg-space-purple mt-1 mr-3"></span>
                      <span>Develop PropTech solutions for emerging markets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-4 h-4 rounded-full bg-space-indigo mt-1 mr-3"></span>
                      <span>Lead sustainable urban development projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-4 h-4 rounded-full bg-space-teal mt-1 mr-3"></span>
                      <span>Specialize in real estate investment analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-4 h-4 rounded-full bg-space-cyan mt-1 mr-3"></span>
                      <span>Bridge technology and traditional real estate practices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Interests;
