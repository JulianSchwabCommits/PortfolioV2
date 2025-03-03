const About = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl mb-8 animate-fade-in">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 animate-fade-in">
          {/* Text content */}
          <div className="md:w-2/3 space-y-6">
            <p className="text-lg">
              Hi, I'm Julian Schwab, an Application Developer at Swisscom. I'm passionate about creating elegant solutions to complex problems and bringing innovative ideas to life through code.
            </p>
            <p className="text-lg">
              With expertise in full-stack development, I specialize in building scalable web applications using modern technologies like React, TypeScript, and Node.js.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
            </p>
          </div>
          
          {/* Image section */}
          <div className="md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/MeButSmaller-BW.jpg" 
                alt="Julian Schwab" 
                className="w-full h-auto object-cover transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;