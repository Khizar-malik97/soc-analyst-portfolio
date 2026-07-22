import { Link } from 'react-router'
import { Mail } from 'lucide-react'

function CallToAction() {
  return (
    <section className="border-t border-border px-6 py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Let's talk security.
        </h2>
        <p className="max-w-lg text-muted">
          Open to SOC Analyst, Blue Team, and Detection Engineering roles.
          Reach out and let's discuss how I can help protect your organization.
        </p>
        <Link
          to="/contact"
          className="mt-2 flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
        >
          <Mail size={16} />
          Get in Touch
        </Link>
      </div>
    </section>
  )
}

export default CallToAction