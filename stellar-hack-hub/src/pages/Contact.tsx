
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this data to a server
    console.log("Form submitted:", formData);
    
    // Show success notification
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-space-dark-blue">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Contact <span className="space-gradient-text">Me</span>
          </h1>
          
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Have a question or interested in collaborating? Feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="md:col-span-1">
              <div className="space-y-6">
                <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="rounded-full bg-space-purple/20 p-3 mr-4">
                        <Mail className="h-6 w-6 text-space-purple" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p className="text-gray-300">john.doe@student.uonbi.ac.ke</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="rounded-full bg-space-indigo/20 p-3 mr-4">
                        <Phone className="h-6 w-6 text-space-indigo" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Phone</h3>
                        <p className="text-gray-300">+254 700 000000</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="rounded-full bg-space-teal/20 p-3 mr-4">
                        <MapPin className="h-6 w-6 text-space-teal" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Location</h3>
                        <p className="text-gray-300">Nairobi, Kenya</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Social Profiles</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="rounded-full bg-space-purple/20 p-3 hover:bg-space-purple/30 transition-colors">
                      <svg className="h-6 w-6 text-space-purple" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" className="rounded-full bg-space-indigo/20 p-3 hover:bg-space-indigo/30 transition-colors">
                      <svg className="h-6 w-6 text-space-indigo" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.159 1.208A4.92 4.92 0 0016.683 2c-2.746 0-4.97 2.229-4.97 4.979 0 .39.044.765.126 1.124A14.083 14.083 0 012.2 3.195a4.942 4.942 0 00-.671 2.5c0 1.729.882 3.256 2.217 4.145a4.863 4.863 0 01-2.228-.616c0 .019 0 .036 0 .057 0 2.413 1.714 4.426 3.996 4.882a4.944 4.944 0 01-2.223.084 4.98 4.98 0 004.627 3.456 9.89 9.89 0 01-6.127 2.108c-.398 0-.79-.023-1.175-.068a14.092 14.092 0 007.629 2.232c9.153 0 14.155-7.576 14.155-14.155 0-.214-.004-.43-.013-.645a10.1 10.1 0 002.427-2.57l-.047-.02z"/>
                      </svg>
                    </a>
                    <a href="#" className="rounded-full bg-space-teal/20 p-3 hover:bg-space-teal/30 transition-colors">
                      <svg className="h-6 w-6 text-space-teal" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                      </svg>
                    </a>
                    <a href="#" className="rounded-full bg-space-cyan/20 p-3 hover:bg-space-cyan/30 transition-colors">
                      <svg className="h-6 w-6 text-space-cyan" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <Card className="bg-space-mid-blue/50 backdrop-blur-sm border border-space-light-blue/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-space-dark-blue/50 border-space-light-blue/30"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Your Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-space-dark-blue/50 border-space-light-blue/30"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="How can I help you?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-space-dark-blue/50 border-space-light-blue/30"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-space-light-blue/30 bg-space-dark-blue/50 px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="bg-gradient-to-r from-space-purple to-space-indigo button-shine w-full py-6"
                    >
                      <Send className="mr-2 h-5 w-5" /> Send Message
                    </Button>
                  </form>
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

export default Contact;
