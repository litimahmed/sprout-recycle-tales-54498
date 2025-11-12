import aboutUsImage from "@/assets/about-us-illustration.jpg";

const AboutUs = () => {
  return (
    <section id="about-section" className="relative py-16 px-4 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-eco-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-eco-blue/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image on the left */}
          <div className="order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-lg h-full">
              <img 
                src={aboutUsImage} 
                alt="Children learning about recycling and eco-friendly practices in a beautiful natural setting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Content on the right */}
          <div className="order-1 md:order-2 space-y-4">
            <div className="inline-block px-4 py-1 bg-eco-green/20 text-eco-green rounded-full text-sm font-medium mb-2">
              ABOUT US
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Teaching Kids to Care for{" "}
              <span className="text-eco-green">Our Planet</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              We believe that learning about recycling and environmental care should be fun, 
              engaging, and accessible to every child. Our interactive stories transform 
              complex environmental concepts into magical adventures that kids love.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Each story is carefully crafted to teach important lessons about waste sorting, 
              composting, recycling, and sustainability while sparking imagination and 
              encouraging positive action.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-eco-green">6+</div>
                <div className="text-sm text-muted-foreground">Educational Stories</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-eco-blue">100%</div>
                <div className="text-sm text-muted-foreground">Free to Read</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
