import { ShieldCheck } from 'lucide-react'
import { certifications } from '../data/certifications'

function Certifications() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Certifications</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Professional certifications earned through hands-on training and coursework in cybersecurity and security operations.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {certifications.map((cert) => (
          <div key={cert.id} className="rounded-lg border border-border bg-card p-5">
            <div className="flex items-start gap-3">
              <div className="rounded-md bg-background p-2 text-accent">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white">{cert.title}</h3>
                <p className="text-sm text-muted">{cert.issuer}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-muted">
              <span>Issued {cert.issueDate}</span>
              {cert.credentialUrl && (
                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Verify
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certifications
