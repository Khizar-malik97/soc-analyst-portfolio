import { useMemo, useState } from 'react'
import type { Project } from '@/types/project'

function useProjectFilter(projects: Project[]) {
  const [activeFilter, setActiveFilter] = useState('All')

  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>()
    projects.forEach((project) => {
      project.technologies.forEach((tech) => techSet.add(tech))
    })
    return ['All', ...Array.from(techSet)]
  }, [projects])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) =>
      project.technologies.includes(activeFilter)
    )
  }, [projects, activeFilter])

  return { activeFilter, setActiveFilter, allTechnologies, filteredProjects }
}

export default useProjectFilter
