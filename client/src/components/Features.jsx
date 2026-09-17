import {
  Activity,
  ArrowUpRight,
  GitBranch,
  Users,
  Zap,
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      number: '01',
      title: 'Smart Project Health',
      description:
        'Track progress, overdue tasks, blockers, dependencies, and team workload to understand the health of your project.',
      label: 'PROJECT INTELLIGENCE',
      icon: Activity,
      cardClass: 'bg-blue-50/70 border-blue-100',
      iconClass: 'bg-blue-100 text-blue-600',
      accentClass: 'text-blue-600',
    },
    {
      number: '02',
      title: 'Real-Time Collaboration',
      description:
        'Work together in real time with live task updates, comments, notifications, and team activity.',
      label: 'COLLABORATION',
      icon: Users,
      cardClass: 'bg-violet-50/70 border-violet-100',
      iconClass: 'bg-violet-100 text-violet-600',
      accentClass: 'text-violet-600',
    },
    {
      number: '03',
      title: 'Intelligent Automation',
      description:
        'Automate repetitive project workflows using conditions, triggers, and actions.',
      label: 'AUTOMATION',
      icon: Zap,
      cardClass: 'bg-amber-50/70 border-amber-100',
      iconClass: 'bg-amber-100 text-amber-600',
      accentClass: 'text-amber-600',
    },
    {
      number: '04',
      title: 'GitHub Integration',
      description:
        'Connect your repositories, commits, pull requests, and issues directly with your projects.',
      label: 'DEVELOPMENT',
      icon: GitBranch,
      cardClass: 'bg-slate-100/80 border-slate-200',
      iconClass: 'bg-slate-200 text-slate-700',
      accentClass: 'text-slate-700',
    },
  ]

  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-10">

      {/* Header */}
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Project Intelligence
        </p>

        <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-6xl">
          Everything your team needs
          <br />
          to move faster.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          TeamFlow brings project management, collaboration,
          automation, and development workflows into one connected
          workspace.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">

        {features.map((feature) => {
          const Icon = feature.icon

          return (
            <div
              key={feature.number}
              className={`group relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${feature.cardClass}`}
            >

              {/* Decorative Circle */}
              <div
                className={`absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-60 transition-transform duration-500 group-hover:scale-150 ${feature.iconClass}`}
              />

              {/* Top Row */}
              <div className="relative flex items-center justify-between">

                <span className="text-sm font-bold text-slate-400">
                  {feature.number}
                </span>

                <span className="text-xs font-semibold tracking-widest text-slate-400">
                  {feature.label}
                </span>

              </div>

              {/* Icon */}
              <div
                className={`relative mt-10 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${feature.iconClass}`}
              >
                <Icon size={27} strokeWidth={1.8} />
              </div>

              {/* Content */}
              <div className="relative mt-8">

                <h3 className="text-3xl font-bold tracking-tight text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">
                  {feature.description}
                </p>

              </div>

              {/* Bottom */}
              <div className="relative mt-12 flex items-center justify-between border-t border-slate-900/10 pt-6">

                <span
                  className={`text-sm font-semibold transition-colors duration-300 ${feature.accentClass}`}
                >
                  Explore feature
                </span>

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-1 ${feature.iconClass}`}
                >
                  <ArrowUpRight size={19} />
                </div>

              </div>

            </div>
          )
        })}

      </div>

    </section>
  )
}

export default Features