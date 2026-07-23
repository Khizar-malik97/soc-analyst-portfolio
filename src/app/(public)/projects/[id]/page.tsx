import Link from 'next/link'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { ArrowLeft } from 'lucide-react'
import { projects } from '@/data/projects'

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-white">Project not found</h1>
        <Link href="/projects" className="mt-4 inline-block text-accent hover:underline">
          ← Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/projects" className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent">
        <ArrowLeft size={14} />
        Back to Projects
      </Link>

      <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">{project.title}</h1>
      <p className="mt-4 text-muted">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="rounded-full bg-card px-3 py-1 text-xs text-accent">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-white">Skills Learned</h2>
          <ul className="mt-3 space-y-1.5 text-sm text-muted">
            {project.skillsLearned.map((skill) => (
              <li key={skill}>- {skill}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">MITRE ATT&CK</h2>
          <ul className="mt-3 space-y-1.5 text-sm text-muted">
            {project.mitreAttack.map((mitreId) => (
              <li key={mitreId}>
                <a href={`https://attack.mitre.org/techniques/${mitreId}/`} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                  {mitreId}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {project.futureImprovements.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-white">Future Improvements</h2>
          <ul className="mt-3 space-y-1.5 text-sm text-muted">
            {project.futureImprovements.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-10 flex gap-4 border-t border-border pt-6">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent">
          <SiGithub size={16} />
          View Code
        </a>
      </div>
    </div>
  )
}
