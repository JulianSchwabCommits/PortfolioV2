import ProjectCard from "./ProjectCard";

const Play = () => {
  const projects = [
    {
      title: "Personal AI Assistant",
      subtitle: "AI-powered productivity tool",
      date: "2024",
      description: "A smart assistant that helps with daily tasks using natural language processing.",
      tags: ["React", "TypeScript", "OpenAI", "TailwindCSS"]
    },
    {
      title: "Smart Home Dashboard",
      subtitle: "IoT Control Center",
      date: "2024",
      description: "A centralized dashboard for managing smart home devices and monitoring energy usage.",
      tags: ["React", "IoT", "Real-time Data", "Charts"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-4xl mb-8 animate-fade-in">Personal Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Play;