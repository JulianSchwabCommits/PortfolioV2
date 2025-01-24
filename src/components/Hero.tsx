const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="font-display text-6xl md:text-8xl mb-4 animate-fade-in">
        Hi, I'm Julian.
      </h1>
      <h2 className="font-display text-4xl md:text-6xl mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        A Coder.
      </h2>
      <p className="text-muted text-xl md:text-2xl max-w-2xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
        Application Developer at Swisscom.
      </p>
    </div>
  );
};

export default Hero;