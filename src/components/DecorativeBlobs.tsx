const DecorativeBlobs = () => {
  return (
    <>
      {/* Top right blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-eco-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      {/* Top left blob */}
      <div className="absolute top-20 left-0 w-48 h-48 bg-eco-green/20 rounded-full blur-3xl -translate-x-1/3 pointer-events-none" />
      
      {/* Bottom right blob */}
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-eco-yellow/20 rounded-full blur-3xl translate-x-1/4 pointer-events-none" />
      
      {/* Middle left blob */}
      <div className="absolute top-1/2 left-0 w-40 h-40 bg-eco-purple/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </>
  );
};

export default DecorativeBlobs;
