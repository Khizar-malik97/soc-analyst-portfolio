import { Download } from 'lucide-react'

export default function Resume() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Resume</h1>
          <p className="mt-2 text-muted">View or download my full resume below.</p>
        </div>
        <a href="/resume.pdf" download className="flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-105">
          <Download size={16} />
          Download PDF
        </a>
      </div>

      <div className="mt-8 overflow-hidden rounded-lg border border-border">
        <iframe src="/resume.pdf" title="Resume" className="h-[80vh] w-full" />
      </div>
    </div>
  )
}
