const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Web Development",
      subtitle: "@Personal",
      date: "2021-Present",
      description: "Creating responsive and modern web experiences.",
    },
    {
      title: "Python Games",
      subtitle: "@Personal",
      date: "2022-Present",
      description: "Collection of interactive Python games using Pygame",
      tags: ["Python", "Pygame"],
    },
    {
      title: "Game Development",
      subtitle: "@Personal",
      date: "2023-2024",
      description: "Creating immersive 3D experiences with Unreal Engine 5",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="font-display text-4xl mb-12 text-center">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ProjectCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;