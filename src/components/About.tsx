const About = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl mb-8 animate-fade-in">About Me</h2>
        <div className="space-y-6 animate-fade-in">
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
      </div>
    </div>
  );
};

export default About;