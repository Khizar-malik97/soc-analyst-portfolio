import { skills } from '@/data/skills'
import type { SkillCategory } from '@/types/skill'

const categories: SkillCategory[] = [
  'Networking',
  'Operating Systems',
  'SIEM & Detection',
  'Threat Hunting & IR',
  'Scripting',
  'Tools',
]

export default function Skills() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Skills</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Technical skills developed through hands-on labs, certifications, and
        self-study across security operations and detection engineering.
      </p>

      <div className="mt-10 space-y-10">
        {categories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category)
          if (categorySkills.length === 0) return null

          return (
            <div key={category}>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
                {category}
              </h2>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {categorySkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-muted">{skill.proficiency}/5</span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full rounded-full bg-border">
                      <div
                        className="h-1.5 rounded-full bg-accent"
                        style={{ width: `${(skill.proficiency / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
