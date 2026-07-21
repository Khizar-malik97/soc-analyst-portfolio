import { useParams, Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { reports } from '../data/reports'

function ReportDetail() {
  const { id } = useParams()
  const report = reports.find((r) => r.id === id)

  if (!report) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-white">Report not found</h1>
        <Link to="/reports" className="mt-4 inline-block text-accent hover:underline">
          Back to Reports
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link to="/reports" className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent">
        <ArrowLeft size={14} />
        Back to Reports
      </Link>

      <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">{report.title}</h1>

      <div className="mt-6 flex flex-wrap gap-2">
        {report.mitreAttack.map((mitreId) => (
          <a key={mitreId} href={`https://attack.mitre.org/techniques/${mitreId}/`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-card px-3 py-1 text-xs text-accent hover:underline">
            {mitreId}
          </a>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">Executive Summary</h2>
        <p className="mt-2 text-sm text-muted">{report.executiveSummary}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">Incident Timeline</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          {report.incidentTimeline.map((event) => (
            <li key={event} className="border-l-2 border-accent pl-3">{event}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">Indicators of Compromise</h2>
        <ul className="mt-3 space-y-1.5 font-mono text-sm text-danger">
          {report.indicatorsOfCompromise.map((ioc) => (
            <li key={ioc}>{ioc}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">Detection Logic</h2>
        <p className="mt-2 text-sm text-muted">{report.detectionLogic}</p>
      </section>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <section>
          <h2 className="text-lg font-semibold text-white">Containment</h2>
          <p className="mt-2 text-sm text-muted">{report.containment}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-white">Recovery</h2>
          <p className="mt-2 text-sm text-muted">{report.recovery}</p>
        </section>
      </div>

      <section className="mt-10 rounded-lg border border-border bg-card p-5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">Lessons Learned</h2>
        <p className="mt-2 text-sm text-muted">{report.lessonsLearned}</p>
      </section>
    </div>
  )
}

export default ReportDetail
