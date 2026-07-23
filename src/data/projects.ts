import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'phishing-detection-lab',
    title: 'Phishing Detection & Response Lab',
    description:
      'Built a detection pipeline for phishing emails using Sysmon, Wazuh, and custom Sigma rules mapped to MITRE ATT&CK.',
    image: '/projects/placeholder.png',
    technologies: ['Wazuh', 'Sysmon', 'Sigma', 'Python'],
    skillsLearned: ['Log correlation', 'Rule writing', 'Alert triage'],
    mitreAttack: ['T1566', 'T1204'],
    githubUrl: 'https://github.com/Khizar-malik97',
    futureImprovements: ['Add automated email header parsing'],
  },
  {
    id: 'ransomware-simulation',
    title: 'Ransomware Behavior Simulation',
    description:
      'Simulated ransomware file-encryption behavior in an isolated VM to test and tune detection rules in Elastic Security.',
    image: '/projects/placeholder.png',
    technologies: ['Elastic Security', 'VirtualBox', 'PowerShell'],
    skillsLearned: ['Behavioral detection', 'IOC extraction'],
    mitreAttack: ['T1486', 'T1059.001'],
    githubUrl: 'https://github.com/Khizar-malik97',
    futureImprovements: ['Extend to network-based detection'],
  },
  {
    id: 'siem-home-lab',
    title: 'SOC Home Lab Architecture',
    description:
      'Designed a full home SOC lab with centralized logging, Sysmon deployment, and dashboards for real-time monitoring.',
    image: '/projects/placeholder.png',
    technologies: ['Wazuh', 'Docker', 'Windows Server', 'Ubuntu'],
    skillsLearned: ['Lab architecture', 'Log pipeline design'],
    mitreAttack: ['T1078'],
    githubUrl: 'https://github.com/Khizar-malik97',
    futureImprovements: ['Add Microsoft Sentinel integration'],
  },
]
