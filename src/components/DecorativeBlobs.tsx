import { useEffect, useState } from "react";

const DecorativeBlobs = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top right blob - moves down slowly */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 bg-eco-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(25%, -50%) translateY(${scrollY * 0.15}px)` }}
      />
      
      {/* Top left blob - moves up slowly */}
      <div 
        className="absolute top-20 left-0 w-48 h-48 bg-eco-green/20 rounded-full blur-3xl -translate-x-1/3 pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(-33%, 0) translateY(${scrollY * -0.1}px)` }}
      />
      
      {/* Bottom right blob - moves left and up */}
      <div 
        className="absolute bottom-20 right-10 w-56 h-56 bg-eco-yellow/20 rounded-full blur-3xl translate-x-1/4 pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(25%, 0) translate(${scrollY * -0.08}px, ${scrollY * -0.12}px)` }}
      />
      
      {/* Middle left blob - moves down and right */}
      <div 
        className="absolute top-1/2 left-0 w-40 h-40 bg-eco-purple/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(-50%, -50%) translate(${scrollY * 0.05}px, ${scrollY * 0.1}px)` }}
      />
    </>
  );
};

export default DecorativeBlobs;
