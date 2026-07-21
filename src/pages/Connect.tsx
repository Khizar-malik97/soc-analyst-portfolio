import { SiGithub } from '@icons-pack/react-simple-icons'
import { Star, GitFork } from 'lucide-react'

function LinkedInIcon({ size = 24 }: { size?: number }) {
  return (
    <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const pinnedRepos = [
  { name: 'wazuh-siem-lab', description: 'Home SOC lab with Wazuh, Sysmon, and custom detection rules.', stars: 3, forks: 1 },
  { name: 'sigma-rules-collection', description: 'Custom Sigma detection rules mapped to MITRE ATT&CK.', stars: 5, forks: 2 },
  { name: 'elk-threat-hunting', description: 'ELK stack setup for log aggregation and threat hunting exercises.', stars: 2, forks: 0 },
]

function Connect() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Connect</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Find my work and professional profile on GitHub and LinkedIn.
      </p>

      <section className="mt-10">
        <div className="flex items-center gap-3">
          <SiGithub size={24} className="text-white" />
          <h2 className="text-xl font-bold text-white">GitHub</h2>
        </div>
        <p className="mt-2 text-sm text-muted">Pinned repositories from my GitHub profile.</p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {pinnedRepos.map((repo) => (
            <a key={repo.name} href={`https://github.com/Khizar-malik97/${repo.name}`} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent">
              <h3 className="font-mono text-sm font-semibold text-accent">{repo.name}</h3>
              <p className="mt-2 text-sm text-muted">{repo.description}</p>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1"><Star size={12} />{repo.stars}</span>
                <span className="flex items-center gap-1"><GitFork size={12} />{repo.forks}</span>
              </div>
            </a>
          ))}
        </div>

        <a href="https://github.com/Khizar-malik97" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm font-medium text-accent hover:underline">
          View full GitHub profile
        </a>
      </section>

      <section className="mt-14 border-t border-border pt-10">
        <div className="flex items-center gap-3">
          <LinkedInIcon size={24} />
          <h2 className="text-xl font-bold text-white">LinkedIn</h2>
        </div>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Connect with me on LinkedIn to see my professional summary, recommendations, and career updates.
        </p>
        <a href="https://linkedin.com/in/your-linkedin-handle" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-105">
          <LinkedInIcon size={16} />
          View LinkedIn Profile
        </a>
      </section>
    </div>
  )
}

export default Connect
