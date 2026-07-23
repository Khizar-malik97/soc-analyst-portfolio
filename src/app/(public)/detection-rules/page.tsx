'use client'

import { useState } from 'react'
import { detectionRules } from '@/data/detectionRules'
import CodeBlock from '@/components/CodeBlock'

export default function DetectionRules() {
  const [search, setSearch] = useState('')

  const filtered = detectionRules.filter((rule) =>
    rule.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">
        Detection Rules
      </h1>
      <p className="mt-2 max-w-2xl text-muted">
        A repository of Sigma rules, KQL queries, and SPL searches written
        for lab-based threat detection.
      </p>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search rules..."
        className="mt-8 w-full rounded-md border border-border bg-card px-4 py-2.5 text-sm text-white placeholder:text-muted focus:border-accent focus:outline-none"
      />

      <div className="mt-8 space-y-8">
        {filtered.map((rule) => (
          <div
            key={rule.id}
            className="rounded-lg border border-border bg-card p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-semibold text-white">
                {rule.title}
              </h2>
              <span className="rounded-full bg-background px-3 py-1 text-xs text-accent">
                {rule.ruleType}
              </span>
            </div>

            <p className="mt-2 text-sm text-muted">{rule.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {rule.mitreAttack.map((id) => (
                <span key={id} className="text-xs text-muted">
                  MITRE: {id}
                </span>
              ))}
            </div>

            <div className="mt-4">
              <CodeBlock code={rule.code} language={rule.language} />
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-center text-muted">No rules match your search.</p>
        )}
      </div>
    </div>
  )
}
