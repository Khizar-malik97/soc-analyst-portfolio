import Link from 'next/link'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'

function LatestProjects() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Latest Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-accent hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestProjects
