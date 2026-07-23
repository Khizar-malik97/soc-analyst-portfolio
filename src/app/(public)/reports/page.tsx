import { reports } from '@/data/reports'
import ReportCard from '@/components/ReportCard'

export default function Reports() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">
        SOC Reports
      </h1>
      <p className="mt-2 max-w-2xl text-muted">
        Detailed incident analysis reports from hands-on lab investigations,
        including detection logic, IOCs, and lessons learned.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {reports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))}
      </div>
    </div>
  )
}
