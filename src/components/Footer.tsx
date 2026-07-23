import { Mail } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'

function LinkedInIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-center">
        <div className="flex items-center gap-5">
          <a href="https://github.com/Khizar-malik97" target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-accent" aria-label="GitHub">
            <SiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/khizarulislam79" target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-accent" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="mailto:mrkhizar97@gmail.com" className="text-muted transition-colors hover:text-accent" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
        <p className="text-sm text-muted">(c) {year} Khizar Ul Islam. Built with React, TypeScript &amp; Tailwind CSS.</p>
      </div>
    </footer>
  )
}

export default Footer
