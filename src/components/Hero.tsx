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
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
              Let's Save the Planet Together! 🌍
            </h1>
            
            <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto drop-shadow-lg font-semibold">
              Pick a story and become an Eco Hero! ♻️✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
