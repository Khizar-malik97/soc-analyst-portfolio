import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AdminNav from './AdminNav'

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AdminNav userEmail={user.email ?? ''} />
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
