'use client'

import { useState } from 'react'
import { playbooks } from '@/data/playbooks'

const phases = [
  { key: 'preparation', label: 'Preparation' },
  { key: 'identification', label: 'Identification' },
  { key: 'containment', label: 'Containment' },
  { key: 'eradication', label: 'Eradication' },
  { key: 'recovery', label: 'Recovery' },
  { key: 'postIncidentReview', label: 'Post-Incident Review' },
] as const

export default function Playbooks() {
  const [openId, setOpenId] = useState<string | null>(playbooks[0]?.id ?? null)

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">SOC Playbooks</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Structured incident response procedures following the NIST incident handling lifecycle.
      </p>

      <div className="mt-8 space-y-4">
        {playbooks.map((playbook) => {
          const isOpen = openId === playbook.id

          return (
            <div key={playbook.id} className="rounded-lg border border-border bg-card">
              <button onClick={() => setOpenId(isOpen ? null : playbook.id)} className="flex w-full items-center justify-between px-6 py-4 text-left">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wide text-accent">{playbook.category}</span>
                  <h2 className="mt-1 text-lg font-semibold text-white">{playbook.title}</h2>
                </div>
                <span className="text-muted">{isOpen ? '-' : '+'}</span>
              </button>

              {isOpen && (
                <div className="space-y-5 border-t border-border px-6 py-5">
                  {phases.map((phase) => (
                    <div key={phase.key}>
                      <h3 className="text-sm font-semibold text-white">{phase.label}</h3>
                      <p className="mt-1 text-sm text-muted">{playbook[phase.key]}</p>
                    </div>
                  ))}

                  <div className="flex flex-wrap gap-2 border-t border-border pt-4">
                    {playbook.mitreAttack.map((mitreId) => (
                      <a key={mitreId} href={`https://attack.mitre.org/techniques/${mitreId}/`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-background px-3 py-1 text-xs text-accent hover:underline">
                        {mitreId}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
