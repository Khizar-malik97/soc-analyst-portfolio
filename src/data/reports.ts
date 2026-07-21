import type { SocReport } from '../types/report'

export const reports: SocReport[] = [
  {
    id: 'suspicious-powershell-execution',
    title: 'Suspicious PowerShell Execution Detected on Endpoint',
    executiveSummary:
      'Sysmon logs revealed an encoded PowerShell command executed on a lab endpoint, consistent with a fileless malware delivery technique. The activity was contained and analyzed within an isolated lab environment.',
    incidentTimeline: [
      '14:02 - Sysmon Event ID 1 logged suspicious PowerShell process creation',
      '14:03 - Wazuh alert triggered based on custom detection rule',
      '14:05 - Analyst reviewed encoded command, decoded Base64 payload',
      '14:10 - Endpoint isolated in lab environment for further analysis',
      '14:20 - Root cause identified as a simulated phishing payload',
    ],
    mitreAttack: ['T1059.001', 'T1027'],
    indicatorsOfCompromise: [
      'powershell.exe -EncodedCommand <base64 string>',
      'Parent process: WINWORD.EXE',
      'Outbound connection attempt to 203.0.113.25',
    ],
    detectionLogic:
      'Wazuh rule triggers on PowerShell process creation events where the parent process is a Microsoft Office application and the command line contains "-EncodedCommand" or "-enc".',
    containment:
      'Endpoint was isolated from the lab network. The PowerShell process was terminated and the parent Office document was quarantined.',
    recovery:
      'Endpoint was restored from a clean snapshot. Detection rule was tuned to reduce false positives on legitimate encoded scripts.',
    lessonsLearned:
      'Office macro execution should be restricted by default. Encoded PowerShell commands from Office processes are a strong high-fidelity detection signal.',
  },
]