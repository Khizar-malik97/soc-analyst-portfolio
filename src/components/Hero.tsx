import { motion } from 'framer-motion'
import { FileText, Mail } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { Link } from 'react-router'
import useTypewriter from '../hooks/useTypewriter'

const roles = ['SOC Analyst', 'Detection Engineer', 'Threat Hunter', 'Incident Responder']

function Hero() {
  const typedText = useTypewriter(roles, 90, 1800)

  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
      <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-4 rounded-full border border-border bg-card px-4 py-1 text-xs font-medium tracking-wide text-accent">
        Available for SOC Analyst / Blue Team Roles
      </motion.span>

      <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
        Khizar Ul Islam
      </motion.h1>

      <div className="mt-4 h-10 text-xl font-medium text-accent sm:text-2xl">
        {typedText}
        <span className="animate-pulse">|</span>
      </div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-4 max-w-xl text-muted">
        I detect, analyze, and respond to security threats using SIEM platforms, threat intelligence, and the MITRE ATT&CK framework.
      </motion.p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-105">
          <FileText size={16} />
          Resume
        </a>
        <a href="https://github.com/Khizar-malik97" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent">
          <SiGithub size={16} />
          GitHub
        </a>
        <Link to="/contact" className="flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent hover:text-accent">
          <Mail size={16} />
          Contact
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero
