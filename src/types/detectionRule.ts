export type RuleLanguage = 'yaml' | 'sql' | 'json' | 'markup'

export interface DetectionRule {
  id: string
  title: string
  ruleType: 'Sigma' | 'KQL' | 'SPL' | 'Elastic' | 'Sysmon'
  language: RuleLanguage
  description: string
  code: string
  mitreAttack: string[]
}