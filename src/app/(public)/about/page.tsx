import { timeline } from '@/data/timeline'

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">About Me</h1>

      <div className="mt-6 space-y-4 text-muted">
        <p>
          I'm a Software Engineering graduate specializing in Security
          Operations, Detection Engineering, and Incident Response. I'm
          passionate about defending systems, analyzing threats, and building
          detection logic that catches attackers before they cause damage.
        </p>
        <p>
          My focus areas include SIEM platforms, log analysis, threat
          hunting, and mapping adversary behavior to the MITRE ATT&CK
          framework. I enjoy building home labs to simulate real-world
          attacks and testing my detection rules against them.
        </p>
      </div>

      <div className="mt-6 rounded-lg border border-border bg-card p-5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">
          Career Objective
        </h2>
        <p className="mt-2 text-muted">
          Seeking a SOC Analyst or Detection Engineering role where I can
          apply my hands-on lab experience to protect real organizations from
          evolving cyber threats.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold text-white">Timeline</h2>

      <div className="mt-6 space-y-6 border-l border-border pl-6">
        {timeline.map((entry) => (
          <div key={entry.id} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="text-xs font-medium uppercase tracking-wide text-accent">
              {entry.period}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-white">
              {entry.title}
            </h3>
            <p className="text-sm text-muted">{entry.organization}</p>
            <p className="mt-2 text-sm text-muted">{entry.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
