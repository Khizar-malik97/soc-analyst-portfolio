import type { Playbook } from '../types/playbook'

export const playbooks: Playbook[] = [
  {
    id: 'phishing-response',
    title: 'Phishing Email Response',
    category: 'Phishing',
    preparation:
      'Ensure email security gateway logging is enabled. Confirm users have a "Report Phishing" button in their mail client. Maintain an updated list of known malicious domains and IOCs.',
    identification:
      'Analyze the reported email header for sender spoofing (SPF/DKIM/DMARC failures). Check embedded links via a sandboxed URL scanner. Determine if any users clicked the link or opened attachments.',
    containment:
      'Block the sender domain and any malicious URLs at the email gateway and web proxy. Quarantine the email organization-wide to prevent further exposure.',
    eradication:
      'Remove any downloaded payloads from affected endpoints. Reset credentials for any users who entered information on a phishing page.',
    recovery:
      'Restore affected accounts with new credentials and enforce MFA if not already active. Monitor affected accounts for suspicious activity for 7 days.',
    postIncidentReview:
      'Review why the email bypassed filtering. Update detection rules and conduct targeted user awareness training if needed.',
    mitreAttack: ['T1566', 'T1204'],
  },
  {
    id: 'ransomware-response',
    title: 'Ransomware Incident Response',
    category: 'Ransomware',
    preparation:
      'Maintain offline, tested backups. Ensure EDR is deployed on all endpoints with behavioral detection for encryption activity enabled.',
    identification:
      'Confirm mass file encryption activity via EDR alerts or user reports. Identify ransom note files and encryption file extensions to determine the ransomware family.',
    containment:
      'Immediately isolate affected endpoints from the network. Disable shared network drives temporarily to prevent lateral spread.',
    eradication:
      'Identify and remove the initial infection vector (e.g., malicious attachment, RDP compromise). Remove persistence mechanisms from affected systems.',
    recovery:
      'Restore affected systems from clean, verified backups. Do not pay the ransom. Rebuild systems from known-good images where backups are unavailable.',
    postIncidentReview:
      'Determine root cause of initial access. Patch the exploited vulnerability or close the exposed access point. Update backup and segmentation strategy.',
    mitreAttack: ['T1486', 'T1490'],
  },
]