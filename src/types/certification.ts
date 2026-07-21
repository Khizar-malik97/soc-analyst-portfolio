export interface Certification {
  id: string
  title: string
  issuer: string
  issueDate: string
  expirationDate?: string
  credentialUrl?: string
  badgeColor: 'accent' | 'success' | 'warning'
}