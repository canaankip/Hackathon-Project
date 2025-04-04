
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Code, ArrowUpRight, GitBranch } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "EcoTrack",
    description: "A mobile application that tracks and reduces carbon footprint through daily activities.",
    tags: ["Mobile", "AI", "Sustainability"],
    stars: 142,
    forks: 32,
    author: "GreenTeam",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "MediChain",
    description: "Secure medical records management system using blockchain technology.",
    tags: ["Blockchain", "Healthcare", "Security"],
    stars: 98,
    forks: 24,
    author: "HealthTech",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "LearnLab",
    description: "AI-powered learning platform that adapts to individual student needs.",
    tags: ["Education", "ML", "Web"],
    stars: 87,
    forks: 19,
    author: "EduInnovators",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  }
];

const ProjectsShowcase = () => {
  return (
    <section className="section bg-space-mid-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Winning Projects</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore innovative projects that won previous hackathons for inspiration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-card-gradient border-space-light-blue/30 overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400" />
                      <span className="text-sm text-gray-300">{project.stars}</span>
                    </div>
                    <div className="flex items-center">
                      <GitBranch className="h-4 w-4 mr-1 text-gray-400" />
                      <span className="text-sm text-gray-300">{project.forks}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mt-2">{project.description}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400 mb-3">Created by {project.author}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-space-indigo/10 text-blue-400 border-blue-500/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="border-space-light-blue/30 hover:bg-space-light-blue/10">
                  <Code className="h-4 w-4 mr-2" /> View Code
                </Button>
                <Button className="bg-space-cyan hover:bg-space-cyan/80">
                  Demo <ArrowUpRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-space-light-blue/50 hover:bg-space-light-blue/10 transition-colors">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
