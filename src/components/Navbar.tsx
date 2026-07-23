import Link from 'next/link'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Reports', path: '/reports' },
  { label: 'Rules', path: '/detection-rules' },
  { label: 'Playbooks', path: '/playbooks' },
  { label: 'Contact', path: '/contact' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold text-white">
          Khizar<span className="text-accent">.</span>
        </Link>

        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className="text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
