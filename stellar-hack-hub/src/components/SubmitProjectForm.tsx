
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const SubmitProjectForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Project submitted successfully! Our team will review it shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };
  
  return (
    <section className="section bg-space-dark-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Submit Your Project</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Share your hackathon project with the community and get recognized for your innovation.
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto bg-card-gradient border-space-light-blue/30">
          <CardHeader>
            <CardTitle>Project Submission Form</CardTitle>
            <CardDescription>
              Fill out the details below to submit your hackathon project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  required 
                  className="bg-space-light-blue/10 border-space-light-blue/30 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="you@example.com" 
                  required 
                  className="bg-space-light-blue/10 border-space-light-blue/30 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="projectName">Project Name</Label>
                <Input 
                  id="projectName" 
                  placeholder="Amazing Project" 
                  required 
                  className="bg-space-light-blue/10 border-space-light-blue/30 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="hackathon">Hackathon</Label>
                <Select required>
                  <SelectTrigger className="bg-space-light-blue/10 border-space-light-blue/30">
                    <SelectValue placeholder="Select hackathon" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai-innovation">AI Innovation Challenge</SelectItem>
                    <SelectItem value="web3">Web3 Hackathon</SelectItem>
                    <SelectItem value="climate-tech">Climate Tech Summit</SelectItem>
                    <SelectItem value="other">Other (specify in description)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="projectUrl">Project URL (GitHub/Demo)</Label>
                <Input 
                  id="projectUrl" 
                  placeholder="https://github.com/yourusername/project" 
                  className="bg-space-light-blue/10 border-space-light-blue/30 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Project Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your project, the tech stack used, and the problem it solves..." 
                  required 
                  className="bg-space-light-blue/10 border-space-light-blue/30 focus:border-primary min-h-32"
                />
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-space-purple to-space-indigo hover:opacity-90 button-shine py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Project"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SubmitProjectForm;
