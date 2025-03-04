interface ProjectCardProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tags?: string[];
}

const ProjectCard = ({ title, subtitle, date, description, tags }: ProjectCardProps) => {
  return (
    <div className="card relative group z-10 hover:z-20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
      <div className="flex justify-between mb-3">
        <div>
          <h3 className="font-display text-xl">{title}</h3>
          <p className="opacity-70">{subtitle}</p>
        </div>
        <div className="text-right">
          <p className="text-accent opacity-70">{date}</p>
        </div>
      </div>
      <p className="mb-4">{description}</p>
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-accent/20 px-2 py-1 rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;