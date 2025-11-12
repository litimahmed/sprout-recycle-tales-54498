import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-eco-kids.jpg";
import DecorativeBlobs from "@/components/DecorativeBlobs";

const Hero = () => {
  const scrollToStories = () => {
    const storiesSection = document.getElementById('stories-section');
    storiesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-12 md:py-16 lg:py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-eco-green/10 via-eco-blue/10 to-eco-yellow/10 -z-10" />
      <DecorativeBlobs />
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Let's Save the Planet Together!
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              Join our amazing recycling adventures and learn how to become an Eco Hero! Every story teaches you something special about taking care of our Earth.
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-eco-green hover:bg-eco-green/90 text-white font-semibold text-lg px-10 py-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                onClick={scrollToStories}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Read a Story
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-4">
              <div className="group px-5 py-2.5 rounded-lg bg-background border-2 border-eco-green/30 text-foreground font-medium text-sm hover:border-eco-green/60 transition-all cursor-default">
                <span className="text-eco-green">✦</span> Fun Stories
              </div>
              <div className="group px-5 py-2.5 rounded-lg bg-background border-2 border-eco-blue/30 text-foreground font-medium text-sm hover:border-eco-blue/60 transition-all cursor-default">
                <span className="text-eco-blue">✦</span> Learn Recycling
              </div>
              <div className="group px-5 py-2.5 rounded-lg bg-background border-2 border-eco-yellow/30 text-foreground font-medium text-sm hover:border-eco-yellow/60 transition-all cursor-default">
                <span className="text-eco-yellow">✦</span> Save Earth
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative rounded-3xl overflow-hidden">
            <img 
              src={heroImage} 
              alt="Eco Heroes - Happy cartoon characters learning about recycling" 
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
