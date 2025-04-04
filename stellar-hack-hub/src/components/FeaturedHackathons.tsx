
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Trophy, Clock } from "lucide-react";

const hackathons = [
  {
    id: 1,
    title: "AI Innovation Challenge",
    description: "Build cutting-edge AI solutions to solve real-world problems.",
    date: "Apr 15-17, 2025",
    participants: "254",
    prizePool: "$10,000",
    status: "Upcoming",
    daysLeft: "12"
  },
  {
    id: 2,
    title: "Web3 Hackathon",
    description: "Create decentralized applications and blockchain solutions.",
    date: "May 5-7, 2025",
    participants: "198",
    prizePool: "$15,000",
    status: "Upcoming",
    daysLeft: "32"
  },
  {
    id: 3,
    title: "Climate Tech Summit",
    description: "Develop innovative solutions to combat climate change.",
    date: "May 20-22, 2025",
    participants: "126",
    prizePool: "$12,000",
    status: "Upcoming",
    daysLeft: "47"
  }
];

const FeaturedHackathons = () => {
  return (
    <section className="section bg-space-dark-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Hackathons</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover upcoming hackathon events and start preparing for your next challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon) => (
            <Card key={hackathon.id} className="bg-card-gradient border-space-light-blue/30 card-hover">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="bg-space-indigo/20 text-primary border-primary/30">
                    {hackathon.status}
                  </Badge>
                  <div className="flex items-center text-space-cyan">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{hackathon.daysLeft} days left</span>
                  </div>
                </div>
                <CardTitle className="text-xl mt-3">{hackathon.title}</CardTitle>
                <CardDescription className="text-gray-300">{hackathon.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{hackathon.date}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{hackathon.participants} participants</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Trophy className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Prize pool: {hackathon.prizePool}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-space-light-blue/30 hover:bg-space-light-blue/50 transition-colors">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-space-light-blue/50 hover:bg-space-light-blue/10 transition-colors">
            View All Hackathons
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHackathons;
