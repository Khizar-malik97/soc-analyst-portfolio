import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import useProjectFilter from '../hooks/useProjectFilter'

function Projects() {
  const { activeFilter, setActiveFilter, allTechnologies, filteredProjects } =
    useProjectFilter(projects)

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Projects</h1>
      <p className="mt-2 max-w-2xl text-muted">
        A collection of hands-on cybersecurity labs, detection engineering
        work, and blue team projects.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {allTechnologies.map((tech) => (
          <button
            key={tech}
            onClick={() => setActiveFilter(tech)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              activeFilter === tech
                ? 'border-accent bg-accent text-background'
                : 'border-border text-muted hover:border-accent hover:text-accent'
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="mt-12 text-center text-muted">
          No projects found for this filter.
        </p>
      )}
    </div>
  )
}

export default Projects