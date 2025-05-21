
import { Link } from "react-router-dom";
import { Project } from "../types/Project";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/project/${project.id}`}>
      <Card className="project-card overflow-hidden h-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <Badge className="bg-analytics-teal hover:bg-analytics-teal/90">
              {project.category}
            </Badge>
          </div>
          {project.repoUrl && (
            <div className="absolute top-2 left-2">
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-white/90 p-1.5 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <Github className="h-4 w-4 text-black" />
              </a>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {project.tools.slice(0, 3).map((tool, index) => (
              <span
                key={index}
                className="bg-analytics-lightGray text-analytics-gray text-xs px-2 py-1 rounded-md"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 3 && (
              <span className="bg-analytics-lightGray text-analytics-gray text-xs px-2 py-1 rounded-md">
                +{project.tools.length - 3} more
              </span>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;
