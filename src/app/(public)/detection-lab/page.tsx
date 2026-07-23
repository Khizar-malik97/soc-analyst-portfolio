const labTools = [
  { name: 'Wazuh', purpose: 'SIEM & log analysis' },
  { name: 'Sysmon', purpose: 'Endpoint telemetry' },
  { name: 'Elastic Security', purpose: 'Log aggregation & search' },
  { name: 'Microsoft Sentinel', purpose: 'Cloud-based SIEM' },
  { name: 'Docker', purpose: 'Service containerization' },
  { name: 'VirtualBox', purpose: 'Virtual machine hosting' },
]

const labMachines = [
  { name: 'Windows 10 Endpoint', role: 'Victim machine with Sysmon deployed' },
  { name: 'Ubuntu Server', role: 'Wazuh manager and log collector' },
  { name: 'Kali Linux', role: 'Attacker machine for simulated attacks' },
  { name: 'pfSense', role: 'Virtual firewall and network segmentation' },
]

export default function DetectionLab() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">
        Detection Lab
      </h1>
      <p className="mt-2 max-w-2xl text-muted">
        A self-hosted home lab used to simulate attacks, generate telemetry,
        and build and test detection rules in a safe, isolated environment.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-white">Lab Architecture</h2>
        <p className="mt-2 text-sm text-muted">
          The lab runs entirely on isolated virtual machines with no
          connection to production networks. All attacker activity, log
          collection, and detection testing happens within this contained
          environment.
        </p>
        <div className="mt-4 rounded-lg border border-border bg-card p-8 text-center text-sm text-muted">
          Architecture diagram placeholder — add a network diagram image here
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-white">Virtual Machines</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {labMachines.map((machine) => (
            <div
              key={machine.name}
              className="rounded-lg border border-border bg-card p-5"
            >
              <h3 className="font-semibold text-white">{machine.name}</h3>
              <p className="mt-1 text-sm text-muted">{machine.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-white">Tools & Platforms</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {labTools.map((tool) => (
            <div
              key={tool.name}
              className="rounded-lg border border-border bg-card p-4 text-center"
            >
              <p className="font-semibold text-white">{tool.name}</p>
              <p className="mt-1 text-xs text-muted">{tool.purpose}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
