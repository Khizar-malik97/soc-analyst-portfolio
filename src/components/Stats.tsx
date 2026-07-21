import StatCounter from './StatCounter'

const stats = [
  { target: 12, label: 'Projects Completed', suffix: '+' },
  { target: 8, label: 'SOC Reports', suffix: '' },
  { target: 20, label: 'Detection Rules', suffix: '+' },
  { target: 5, label: 'Certifications', suffix: '' },
]

function Stats() {
  return (
    <section className="border-t border-border bg-card/50 px-6 py-16">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((stat) => (
          <StatCounter
            key={stat.label}
            target={stat.target}
            label={stat.label}
            suffix={stat.suffix}
          />
        ))}
      </div>
    </section>
  )
}

export default Stats