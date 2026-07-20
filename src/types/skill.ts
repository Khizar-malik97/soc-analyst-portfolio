export type SkillCategory =
  | 'Networking'
  | 'Operating Systems'
  | 'SIEM & Detection'
  | 'Threat Hunting & IR'
  | 'Scripting'
  | 'Tools'

export interface Skill {
  name: string
  category: SkillCategory
  proficiency: 1 | 2 | 3 | 4 | 5
}