import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Khizar Ul Islam | SOC Analyst Portfolio',
  description:
    'SOC Analyst / Blue Team portfolio showcasing detection engineering, incident investigation, and threat hunting work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
