'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  FolderKanban,
  Award,
  LogOut,
} from 'lucide-react'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/reports', label: 'SOC Reports', icon: FileText },
  { href: '/admin/playbooks', label: 'Playbooks', icon: BookOpen },
  { href: '/admin/projects', label: 'Projects', icon: FolderKanban },
  { href: '/admin/certifications', label: 'Certifications', icon: Award },
]

export default function AdminNav({ userEmail }: { userEmail: string }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <aside className="flex w-64 flex-col border-r border-border bg-background px-4 py-6">
      <div className="mb-8 px-2">
        <p className="text-sm font-semibold">Portfolio Admin</p>
        <p className="truncate text-xs text-muted">{userEmail}</p>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive =
            href === '/admin' ? pathname === '/admin' : pathname.startsWith(href)

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-accent/10 text-accent'
                  : 'text-muted hover:bg-accent/5 hover:text-accent'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          )
        })}
      </nav>

      <button
        onClick={handleLogout}
        className="mt-4 flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-danger/10 hover:text-danger"
      >
        <LogOut className="h-4 w-4" />
        Log Out
      </button>
    </aside>
  )
}
