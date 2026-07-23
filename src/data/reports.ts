import type { SocReport } from '../types/report'

export const reports: SocReport[] = [
  {
    id: 'multi-vector-attack-simulation',
    title: 'Multi-Vector Attack Simulation and Detection Validation on a Windows 11 Workstation',
    executiveSummary:
      'A controlled, self-authorized SOC L1 exercise in which network reconnaissance, SMB credential brute-forcing, and base64-encoded PowerShell execution were deliberately launched from a Kali Linux attacker VM against a monitored Windows 11 endpoint running a Wazuh agent. The reconnaissance scan produced no dedicated alert, exposing a genuine gap in the default ruleset for raw port scans. The SMB brute-force attempt was successfully detected and traced back to the attacker IP. The encoded PowerShell execution produced the strongest detections of the exercise, including one Critical-severity alert that was investigated and correctly attributed to a benign Windows internal mechanism rather than an independent malware drop.',
    incidentTimeline: [
      'Setup - Kali Linux attacker VM configured on an isolated host-only network; Wazuh confirmed monitoring the target endpoint with a clean baseline (0 Critical / 0 High alerts)',
      '15:07 PKT - Full-port reconnaissance scan (nmap -sV -Pn -p-) launched from Kali against the target',
      '15:11 PKT - Scan completed in 228.84s; six open ports identified and host fingerprinted as Windows; no Wazuh alert generated for this step',
      'Following recon - Three SMB login attempts against the "administrator" account executed from Kali, each rejected with a logon failure',
      'Reviewed later - Wazuh rule 60122 ("Logon Failure - Unknown user or bad password") confirmed, tracing the source IP directly to the Kali VM',
      '00:50:52 PKT (Jul 9) - Encoded PowerShell command executed on the target: powershell.exe -EncodedCommand, decoding to a WebClient download attempt',
      '00:50:53 PKT - Rule 92057 (Level 12) fired for base64-encoded PowerShell execution; full command line and process hashes captured',
      '00:50:54 PKT - Rule 92213 (Level 15, Critical) fired for an executable dropped in a folder commonly used by malware',
      'Post-incident - Full review of 2,371 events across the window confirmed 63 Level 12+ alerts and 10 MITRE ATT&CK techniques represented on the dashboard',
    ],
    mitreAttack: ['T1046', 'T1595', 'T1110', 'T1078', 'T1087', 'T1059.001', 'T1027'],
    indicatorsOfCompromise: [
      'Attacker source IP: 192.168.174.128 (Kali Linux, host-only adapter)',
      'Targeted account (SMB brute force): administrator, source port 49466',
      'Encoded command: powershell.exe -EncodedCommand <base64>, decoding to IEX (New-Object Net.WebClient).DownloadString(\'http://127.0.0.1/test.txt\')',
      'Dropped artifact: __PSScriptPolicyTest_hy2tgudq.zbt.ps1 in %TEMP% (confirmed benign - a PowerShell script-policy test file, not a second-stage payload)',
      'PowerShell process hash (SHA256): C6E6838840944783F05A942973A8F194288279C7CCCCB6B38979857006A2F8E',
    ],
    detectionLogic:
      'Wazuh rule 60122 (Level 5) fires on NTLM logon failures and aggregates repeated attempts. Rule 92057 (Level 12) fires when powershell.exe spawns a child process executing a base64-encoded command line, mapping to MITRE T1059.001/T1027. Rule 92213 (Level 15) fires when an executable is written to a directory commonly used by malware, and was root-caused here to a benign PowerShell script-policy artifact using ProcessGuid and timestamp correlation against rule 92057 rather than treated as an independent finding.',
    containment:
      'This was a detection-validation exercise on self-owned infrastructure, so no active containment was required. Response was limited to reviewing alerts in Wazuh Threat Hunting, drilling into raw event detail to confirm source-IP attribution, and correlating the Critical-severity alert back to its benign root cause.',
    recovery:
      'No recovery actions were necessary since no host compromise occurred. The exercise instead fed directly into hardening recommendations: deploying an IDS/IPS layer (e.g. Suricata) to close the confirmed port-scan detection gap, and tuning rule 92213 to suppress the specific PSScriptPolicyTest pattern while preserving detection for genuinely unknown executables.',
    lessonsLearned:
      'Raw TCP port scanning is not covered by Wazuh\'s default ruleset without an IDS layer - a real, reproducible detection gap rather than a tooling error. Encoded PowerShell execution remains a high-fidelity, high-severity detection signal, but Critical-severity alerts still require root-cause correlation before escalation, since Windows itself generates artifacts (like PSScriptPolicyTest files) that can superficially resemble malicious drops.',
    pdfUrl:
      'https://github.com/Khizar-malik97/Wazuh-SIEM-HomeLab/blob/main/Multi-Vector%20Attack%20Simulation%20and%20Detection%20Validation%20By%20Wazuh/Multi-Vector%20Attack%20Simulation%20and%20Detection%20Validation.pdf',
  },
  {
    id: 'edr-sysmon-fim-active-response',
    title: 'Endpoint Detection & Response: Sysmon Telemetry, File Integrity Monitoring, and Automated Active Response',
    executiveSummary:
      'A full EDR capability was built on top of an existing Wazuh deployment: Sysmon telemetry health was verified end-to-end, real-time File Integrity Monitoring (FIM) was configured and validated against a simulated persistence attempt, and an automated Active Response was engineered and proven against a live SMB brute-force attack launched from a separate Kali Linux host - capturing the complete detect-to-block-to-release lifecycle with no manual intervention.',
    incidentTimeline: [
      'Sysmon service confirmed running on the Windows endpoint; ossec.conf verified to be forwarding the Sysmon Operational channel to the manager',
      'Manager\'s logall/logall_json settings enabled to capture full raw telemetry for independent verification, then restarted',
      'FIM (syscheck) configured with real-time monitoring on the Windows Startup folder and the hosts file - two classic persistence/tampering locations',
      'Persistence attempt simulated: calc.exe copied and renamed to "totally_legit_update.exe" and dropped into the Startup folder',
      'FIM detection confirmed: "File added to the system" (Rule 554) and "File deleted" (Rule 553) fired in the correct sequence in real time',
      'Active Response configured: win_route-null bound to Windows-specific logon-failure rules 60122 and 60115 with a 600-second block window',
      'SMB brute-force launched from Kali against the endpoint\'s SMB service using NetExec after an initial Hydra attempt failed on SMB2/3 protocol incompatibility',
      'Detection chain fired within the same second: suspicious cmd-shell activity, an abnormal process spawning a command prompt, and a successful anonymous NTLM logon flagged as a possible pass-the-hash pattern',
      'Active Response event confirmed firing (data.command: "add"), correlated with the NTLM authentication data tracing back to the Kali source IP',
      'Full lifecycle confirmed end-to-end: attack activity, automated block, and automatic unblock after the configured timeout, all timestamped and traceable',
    ],
    mitreAttack: ['T1547.001', 'T1036', 'T1110', 'T1557', 'T1075'],
    indicatorsOfCompromise: [
      'Persistence artifact: totally_legit_update.exe (renamed copy of calc.exe) in the Windows Startup folder',
      'Attacker source IP: 192.168.44.128 (Kali Linux, same lab network)',
      'Attack tooling: NetExec SMB brute force against a local account using a common wordlist',
      'FIM rule triggers: Rule 553 (file deleted) and Rule 554 (file added) on the monitored Startup folder',
      'Pass-the-hash indicator: Rule 92652 - anonymous NTLM logon flagged during the brute-force window',
    ],
    detectionLogic:
      'File Integrity Monitoring (syscheck) is hash- and timestamp-based and fires independently of the process that created a change, which is why it reliably caught the persistence file even though PowerShell\'s Copy-Item cmdlet did not trigger a matching Sysmon process-level alert. The Active Response was deliberately bound to Windows-specific authentication-failure rules (60122, 60115) rather than the generic Linux/PAM brute-force rule (5712), since Windows agents score authentication failures under separate, platform-specific rule IDs.',
    containment:
      'The automated Active Response (win_route-null) null-routed the attacking source IP for a 600-second window immediately upon the bound rules matching, with no manual intervention required to contain the in-progress brute-force attempt.',
    recovery:
      'The Active Response automatically released the block after its configured timeout expired, restoring normal connectivity from the source IP - the full detect-to-block-to-release cycle was captured and verified in the dashboard timeline.',
    lessonsLearned:
      'Process-level sensors like Sysmon are not guaranteed to catch every file-system change depending on the API path a tool uses to write files, making FIM a necessary, sensor-agnostic complement. Active Response bindings must target platform-correct rule IDs - a generic Linux brute-force rule will silently never fire against Windows agents. Correlating an Active Response event\'s own record against the underlying raw Windows Security event produces a complete, defensible evidence trail from detection through to automated action.',
    pdfUrl:
      'https://github.com/Khizar-malik97/Wazuh-SIEM-HomeLab/blob/main/Wazuh%20Endpoint%20Detection%20%26%20Response/Wazuh%20Endpoint%20Detection%20%26%20Response.pdf',
  },
  {
    id: 'endpoint-event-monitoring-log-analysis',
    title: 'Endpoint Event Monitoring & Log Analysis: Correlating Windows Activity to Wazuh Alerts',
    executiveSummary:
      'A structured log-analysis exercise correlating common Windows endpoint activities - logins, Command Prompt commands, and GUI application launches - against the Wazuh alerts they generated, confirming which default rules cover common SOC L1 detection scenarios and which activities produce no alert at all.',
    incidentTimeline: [
      'Login events reviewed: failed logons, multiple failures, successful logons, and logoff all captured for the monitored endpoint',
      'Rule 60204 (Level 10) observed aggregating repeated failed logons (rule 60122) into a "Multiple Windows Logon Failures" escalation, mirroring a brute-force detection pattern',
      'whoami and ipconfig executed from a standard Command Prompt to generate process-creation telemetry',
      'ping, mkdir, and file create/delete executed from an elevated Command Prompt',
      'Every command confirmed logged under rule 67027 ("A process was created"), tied to Windows Event ID 4688',
      'Raw event details opened for whoami.exe, ping.exe, ipconfig.exe, and Notepad.exe to confirm exact process name and parent process for each',
    ],
    mitreAttack: ['T1078', 'T1059'],
    indicatorsOfCompromise: [
      'Rule 60122 / 60204 - failed and repeated-failure logon events (Event ID 4625)',
      'Rule 60118 - successful logon events (Event ID 4624)',
      'Rule 67023 - session logoff (Event ID 4634)',
      'Rule 67027 - process creation for whoami.exe, ipconfig.exe, PING.EXE, and Notepad.exe (Event ID 4688)',
    ],
    detectionLogic:
      'Windows Event ID 4688 fires for every process creation, including routine command-line tools and GUI applications, and is matched by the same Wazuh rule 67027 regardless of what was launched - meaning filtering by process name and parent process is essential during real investigation rather than relying on the rule match alone. Login events are scored separately under rules 60122, 60204, and 67023, tied to Event IDs 4624/4625/4634.',
    containment:
      'Not applicable - this was a controlled log-correlation exercise on the analyst\'s own endpoint with no adversarial activity involved.',
    recovery:
      'Not applicable - no remediation was required.',
    lessonsLearned:
      'Wazuh\'s default Windows ruleset already covers the most common SOC L1 detection scenarios (logon success/failure, process creation) without additional configuration, but not every user action triggers an alert - coverage gaps can be closed with Sysmon or custom rules. The Document Details view is the fastest way to confirm an alert corresponds to the exact action taken, by checking process name and parent process together.',
    pdfUrl:
      'https://github.com/Khizar-malik97/Wazuh-SIEM-HomeLab/blob/main/Endpoint%20Monitoring%20_Log%20Analysis_Investigation%20report/Wazuh_Endpoint_Report_Formatted.pdf',
  },
  {
    id: 'wazuh-agent-deployment-cis-hardening',
    title: 'Wazuh Agent Deployment, Vulnerability Detection & CIS Benchmark Hardening on Windows 11',
    executiveSummary:
      'End-to-end deployment of a Wazuh agent on a Windows 11 endpoint and integration with the manager for centralized monitoring, followed by a full security assessment cycle: vulnerability detection identified 17 vulnerabilities including a CVSS 9.9 critical CVE in ASP.NET Core/Kestrel, and a CIS Microsoft Windows 11 Enterprise Benchmark scan established a 26% compliance baseline against 482 checks. Manual remediation across password policy, account lockout, audit policy, and interactive logon settings was applied and verified via rescan, moving compliance from 26% to 27% with three targeted checks flipping from Failed to Passed.',
    incidentTimeline: [
      'Manager reviewed with zero registered agents; Windows MSI package selected via the "Deploy new agent" wizard with the manager IP and a descriptive agent name supplied',
      'Auto-generated PowerShell installation one-liner executed in an elevated session on the Windows 11 endpoint',
      'Wazuh service started (NET START Wazuh) and confirmed running; local installation independently verified via Windows Settings > Apps',
      'Vulnerability Detection module run against the newly enrolled endpoint, surfacing 17 vulnerabilities including CVE-2025-55315 (CVSS 9.9, ASP.NET Core/Kestrel)',
      'CIS Microsoft Windows 11 Enterprise Benchmark v3.0.0 scan executed, establishing a 26% compliance baseline (124/482 checks passed)',
      'Manual hardening applied across Password Policy, Account Lockout Policy, Audit Policy, account naming, and Interactive Logon settings',
      'Rescan confirmed compliance improvement to 27% (128/482 checks passed), with password-policy checks 26000-26002 flipping from Failed to Passed',
    ],
    mitreAttack: ['T1082', 'T1210'],
    indicatorsOfCompromise: [
      'CVE-2025-55315 - CVSS 9.9 critical vulnerability identified in ASP.NET Core/Kestrel via Wazuh Vulnerability Detection',
      'CIS Benchmark check IDs 26000-26002 - password-policy controls remediated from Failed to Passed',
      'Baseline compliance: 124/482 checks passed (26%); post-remediation: 128/482 (27%)',
    ],
    detectionLogic:
      'Wazuh\'s Vulnerability Detection module cross-references installed software inventory against known-CVE databases to surface exploitable versions. The CIS benchmark module runs a policy-as-code style scan against the CIS Microsoft Windows 11 Enterprise Benchmark v3.0.0, evaluating 482 discrete configuration checks and reporting pass/fail status for each.',
    containment:
      'Not an active-incident scenario - this was a proactive assessment cycle. No containment actions were required since no exploitation occurred; findings were prioritized for remediation instead.',
    recovery:
      'Manual hardening was applied directly on the endpoint across password policy, account lockout policy, audit policy, account naming conventions, and interactive logon settings, then verified via a CIS rescan confirming the targeted checks moved from Failed to Passed.',
    lessonsLearned:
      'Deploying visibility (the Wazuh agent) is only the first step - vulnerability detection and compliance scanning surface concrete, prioritizable risk, but hardening is iterative: a single remediation pass closed only 4 of 349 failed checks, underscoring that CIS compliance work is a sustained effort rather than a one-time fix.',
    pdfUrl:
      'https://github.com/Khizar-malik97/Wazuh-SIEM-HomeLab/blob/main/Wazuh%20Agent%20Integration%20and%20Threat%20hunting/Wazuh_Windows_Endpoint_Deployment_Hardening_Report.pdf',
  },
  {
    id: 'mitre-attack-lockbit3-mapping',
    title: 'MITRE ATT&CK Framework Exploration: LockBit 3.0 Ransomware Technique Mapping',
    executiveSummary:
      'A threat-intelligence research exercise mapping the documented MITRE ATT&CK techniques associated with LockBit 3.0, one of the most prolific ransomware families observed in the wild. Ten distinct techniques spanning six tactics - Privilege Escalation, Execution, Persistence, Command & Control, Defense Evasion, and Impact - were identified via the official ATT&CK knowledge base and organized into a structured technique-mapping table and attack-chain visualization.',
    incidentTimeline: [
      'Research initiated with a keyword search for "Ransomware" within the ATT&CK Software directory',
      'LockBit 3.0 software entry located and its documented technique list extracted',
      'Ten techniques classified by tactic and compiled into a structured mapping table (Sr. No., ATT&CK ID, Technique, Tactic, Description)',
      'Techniques sequenced into a logical attack-chain visualization from initial privilege escalation through to final impact',
    ],
    mitreAttack: ['T1486', 'T1490', 'T1055', 'T1027'],
    indicatorsOfCompromise: [
      'This was a threat-intelligence research exercise rather than a live-environment investigation, so no endpoint-specific IOCs were generated - see the full report for the complete ATT&CK technique-to-tactic mapping table.',
    ],
    detectionLogic:
      'Not applicable in the traditional sense - this exercise focused on converting open-source threat intelligence (the LockBit 3.0 ATT&CK software profile) into structured, analyst-ready documentation that can inform future detection-engineering and incident-response playbook work, rather than validating a live detection rule.',
    containment:
      'Not applicable - research and documentation exercise only.',
    recovery:
      'Not applicable - research and documentation exercise only.',
    lessonsLearned:
      'Structuring adversary behavior into the ATT&CK tactic/technique model - rather than just listing indicators of compromise - is what makes threat intelligence actionable for detection engineering and incident response. Building this mapping skill on a well-documented ransomware family like LockBit 3.0 is directly transferable to profiling any other threat actor a SOC might need to prepare defenses against.',
    pdfUrl:
      'https://github.com/Khizar-malik97/Wazuh-SIEM-HomeLab/blob/main/MITTRE%20Mapping/MITRE_ATTACK_LockBit3_Report.pdf',
  },
]