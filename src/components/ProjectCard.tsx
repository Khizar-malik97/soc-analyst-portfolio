import { Link } from 'react-router'
import { SiGithub } from '@icons-pack/react-simple-icons'
import type { Project } from '../types/project'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent">
      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 3).map((tech) => (
          <span key={tech} className="rounded-full bg-background px-3 py-1 text-xs text-accent">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent">
          <SiGithub size={15} />
          Code
        </a>
        <Link to={`/projects/${project.id}`} className="text-sm font-medium text-accent hover:underline">
          View Details →
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
