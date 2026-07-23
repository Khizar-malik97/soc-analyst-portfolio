import Link from 'next/link'
import type { SocReport } from '@/types/report'

interface ReportCardProps {
  report: SocReport
}

function ReportCard({ report }: ReportCardProps) {
  return (
    <Link
      href={`/reports/${report.id}`}
      className="block rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent"
    >
      <h3 className="text-lg font-semibold text-white">{report.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-muted">
        {report.executiveSummary}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {report.mitreAttack.map((id) => (
          <span
            key={id}
            className="rounded-full bg-background px-3 py-1 text-xs text-accent"
          >
            {id}
          </span>
        ))}
      </div>
      <p className="mt-4 text-sm font-medium text-accent">Read Report →</p>
    </Link>
  )
}

export default ReportCard
