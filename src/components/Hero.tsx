import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-12 md:py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 -z-10" />
      
      <div className="container mx-auto max-w-6xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm mb-6 border border-primary/20">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Learn & Have Fun!</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
          Eco Heroes Story Library
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Join our colorful friends on amazing recycling adventures! 
          Learn how to take care of our planet, one story at a time.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <div className="px-4 py-2 rounded-full bg-eco-green/20 text-foreground font-medium">
            🌱 Fun Stories
          </div>
          <div className="px-4 py-2 rounded-full bg-eco-blue/20 text-foreground font-medium">
            ♻️ Learn Recycling
          </div>
          <div className="px-4 py-2 rounded-full bg-eco-yellow/20 text-foreground font-medium">
            🌍 Save Earth
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
