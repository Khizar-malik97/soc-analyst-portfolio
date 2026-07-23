import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-mono text-sm tracking-widest text-danger">ERROR 404</p>
      <h1 className="text-3xl font-bold text-white">Page Not Found</h1>
      <p className="max-w-md text-muted">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-md border border-accent px-5 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-background"
      >
        Back to Home
      </Link>
    </div>
  )
}
