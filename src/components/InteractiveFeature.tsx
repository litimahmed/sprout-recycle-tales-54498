import { Button } from "@/components/ui/button";
import interactiveImage from "@/assets/interactive-stories-feature.png";

interface InteractiveFeatureProps {
  onDiscoverClick: () => void;
}

const InteractiveFeature = ({ onDiscoverClick }: InteractiveFeatureProps) => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-gradient-to-br from-eco-green to-eco-blue rounded-3xl p-8 md:p-12 overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            {/* Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-white/80 text-sm font-medium tracking-wider uppercase">
                  Educative Stories
                </span>
                <div className="w-12 h-0.5 bg-white/60 mt-2" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Stories where kids learn by making choices about recycling!
              </h2>
              
              <Button 
                onClick={onDiscoverClick}
                size="lg"
                variant="secondary"
                className="bg-white text-eco-green hover:bg-white/90 font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Start Reading Now
              </Button>
            </div>
            
            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <img 
                src={interactiveImage} 
                alt="Child interacting with educational recycling story on tablet" 
                className="w-full max-w-md h-auto object-contain drop-shadow-2xl animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFeature;
