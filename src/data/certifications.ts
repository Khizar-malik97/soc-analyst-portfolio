import type { Certification } from '@/types/certification'

export const certifications: Certification[] = [
  {
    id: 'letsdefend-soc1',
    title: 'SOC Level 1 Analyst',
    issuer: 'LetsDefend',
    issueDate: '2025',
    credentialUrl: 'https://letsdefend.io',
    badgeColor: 'accent',
  },
  {
    id: 'google-cybersecurity',
    title: 'Google Cybersecurity Certificate',
    issuer: 'Google / Coursera',
    issueDate: '2025',
    credentialUrl: 'https://coursera.org',
    badgeColor: 'success',
  },
]
