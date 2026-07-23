'use client'

import { use } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  FileText,
  Clock,
  ShieldAlert,
  Search,
  ShieldCheck,
  RotateCcw,
  Lightbulb,
  ExternalLink,
} from 'lucide-react'
import { reports } from '@/data/reports'

export default function ReportDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const report = reports.find((r) => r.id === id)

  if (!report) {
    return (
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-bold">Report not found</h1>
        <p className="mt-2 text-muted">
          This report may have been moved or doesn't exist.
        </p>
        <Link
          href="/reports"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-background transition hover:opacity-90"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Reports
        </Link>
      </section>
    )
  }

  return (
    <section className="min-h-screen px-6 py-24 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <Link
          href="/reports"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Reports
        </Link>

        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {report.title}
        </h1>

        {report.pdfUrl && (
          <a
            href={report.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-105"
          >
            <ExternalLink className="h-4 w-4" />
            View Full Report on GitHub
          </a>
        )}

        <div className="mt-10">
          <div className="mb-3 flex items-center gap-2">
            <FileText className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-bold">Executive Summary</h2>
          </div>
          <p className="leading-relaxed text-muted">{report.executiveSummary}</p>
        </div>

        <div className="mt-10">
          <div className="mb-3 flex items-center gap-2">
            <Clock className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-bold">Incident Timeline</h2>
          </div>
          <ol className="space-y-3 border-l border-border pl-5">
            {report.incidentTimeline.map((event, i) => (
              <li key={i} className="relative text-sm text-muted">
                <span className="absolute -left-[1.45rem] top-1.5 h-2 w-2 rounded-full bg-accent" />
                {event}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10">
          <div className="mb-3 flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-bold">MITRE ATT&CK Techniques</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {report.mitreAttack.map((technique) => (
              <a
                key={technique}
                href={`https://attack.mitre.org/techniques/${technique.replace('.', '/')}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border bg-background px-3 py-1 text-xs font-medium transition-colors hover:border-accent hover:text-accent"
              >
                {technique}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-3 flex items-center gap-2">
            <Search className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-bold">Indicators of Compromise</h2>
          </div>
          <ul className="space-y-2">
            {report.indicatorsOfCompromise.map((ioc, i) => (
              <li key={i} className="rounded-md bg-background/60 px-4 py-2 font-mono text-xs text-muted">
                {ioc}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <div className="mb-3 flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-bold">Detection Logic</h2>
          </div>
          <p className="leading-relaxed text-muted">{report.detectionLogic}</p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-accent" />
              <h2 className="text-xl font-bold">Containment</h2>
            </div>
            <p className="leading-relaxed text-muted">{report.containment}</p>
          </div>
          <div>
            <div className="mb-3 flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-accent" />
              <h2 className="text-xl font-bold">Recovery</h2>
            </div>
            <p className="leading-relaxed text-muted">{report.recovery}</p>
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-accent/30 bg-accent/5 p-6">
          <div className="mb-3 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-bold">Lessons Learned</h2>
          </div>
          <p className="leading-relaxed text-muted">{report.lessonsLearned}</p>
        </div>
      </motion.div>
    </section>
  )
}
