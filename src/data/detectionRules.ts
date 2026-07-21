import type { DetectionRule } from '../types/detectionRule'

export const detectionRules: DetectionRule[] = [
  {
    id: 'sigma-encoded-powershell',
    title: 'Encoded PowerShell Execution from Office',
    ruleType: 'Sigma',
    language: 'yaml',
    description:
      'Detects PowerShell processes launched with an encoded command from a Microsoft Office parent process.',
    mitreAttack: ['T1059.001', 'T1027'],
    code: `title: Encoded PowerShell from Office
status: experimental
logsource:
  category: process_creation
  product: windows
detection:
  selection:
    ParentImage|endswith:
      - '\\WINWORD.EXE'
      - '\\EXCEL.EXE'
    Image|endswith: '\\powershell.exe'
    CommandLine|contains:
      - '-enc'
      - '-EncodedCommand'
  condition: selection
level: high`,
  },
  {
    id: 'kql-failed-logon-spike',
    title: 'Spike in Failed Logon Attempts',
    ruleType: 'KQL',
    language: 'sql',
    description:
      'Microsoft Sentinel query to detect a sudden spike in failed authentication attempts from a single source IP.',
    mitreAttack: ['T1110'],
    code: `SigninLogs
| where ResultType != "0"
| summarize FailedAttempts = count() by IPAddress, bin(TimeGenerated, 5m)
| where FailedAttempts > 10
| order by FailedAttempts desc`,
  },
]