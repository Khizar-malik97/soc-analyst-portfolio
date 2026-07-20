export interface SocReport {
  id: string
  title: string
  executiveSummary: string
  incidentTimeline: string[]
  mitreAttack: string[]
  indicatorsOfCompromise: string[]
  detectionLogic: string
  containment: string
  recovery: string
  lessonsLearned: string
  pdfUrl?: string
}