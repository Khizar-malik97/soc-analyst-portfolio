export interface TimelineEntry {
  id: string
  type: 'education' | 'experience' | 'certification'
  title: string
  organization: string
  period: string
  description: string
}

export const timeline: TimelineEntry[] = [
  {
    id: '1',
    type: 'education',
    title: 'BS Software Engineering',
    organization: 'SZABIST',
    period: '2022 - 2026',
    description:
      'Focused on software development fundamentals with a growing specialization in cybersecurity and blue team operations.',
  },
  {
    id: '2',
    type: 'certification',
    title: 'SOC Level 1 Certification',
    organization: 'LetsDefend',
    period: '2025',
    description:
      'Hands-on training in log analysis, alert triage, and incident escalation using a real SOC analyst simulation platform.',
  },
]