import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-eco-kids.jpg";

const Hero = () => {
  return (
    <section className="relative py-8 md:py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-eco-green/10 via-eco-blue/10 to-eco-yellow/10 -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src={heroImage} 
            alt="Eco Heroes - Happy cartoon characters learning about recycling" 
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg mb-4 border border-eco-green/30">
              <Sparkles className="w-4 h-4 text-eco-green" />
              <span className="text-sm font-bold text-foreground">Learn & Have Fun!</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight drop-shadow-lg">
              Eco Heroes Story Library
            </h1>
            
            <p className="text-base md:text-lg text-foreground max-w-2xl mx-auto mb-6 drop-shadow-md font-medium">
              Join our colorful friends on amazing recycling adventures! 
              Learn how to take care of our planet, one story at a time.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-xs md:text-sm">
              <div className="px-3 md:px-4 py-2 rounded-full bg-eco-green text-white font-bold shadow-lg">
                🌱 Fun Stories
              </div>
              <div className="px-3 md:px-4 py-2 rounded-full bg-eco-blue text-white font-bold shadow-lg">
                ♻️ Learn Recycling
              </div>
              <div className="px-3 md:px-4 py-2 rounded-full bg-eco-yellow text-white font-bold shadow-lg">
                🌍 Save Earth
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
