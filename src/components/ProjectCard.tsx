interface ProjectCardProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tags?: string[];
}

const ProjectCard = ({ title, subtitle, date, description, tags }: ProjectCardProps) => {
  return (
    <div className="card group animate-fade-in">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-display text-2xl mb-1">{title}</h3>
          <p className="text-muted">{subtitle}</p>
        </div>
        <span className="text-muted">{date}</span>
      </div>
      <p className="mb-4">{description}</p>
      {tags && (
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-accent/20 rounded-full text-sm"
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