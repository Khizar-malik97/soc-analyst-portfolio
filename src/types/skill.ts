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
  proficiency: number
}
