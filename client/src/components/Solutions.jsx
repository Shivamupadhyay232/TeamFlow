import {
  ArrowRight,
  CheckCircle2,
  Circle,
  Clock3,
  GitBranch,
  GitPullRequest,
  Users,
  AlertTriangle,
  TrendingUp,
} from 'lucide-react'

const Solutions = () => {
  return (
    <section
      id="solutions"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      {/* Section Header */}
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Solutions
        </p>

        <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-6xl">
          Built around the way
          <br />
          your team works.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          TeamFlow adapts to the way different teams plan, build,
          collaborate, and deliver their work.
        </p>
      </div>

      {/* Startup */}
      <div className="mt-16 overflow-hidden rounded-4xl bg-slate-50">
        <div className="grid min-h-130 grid-cols-1 lg:grid-cols-2">

          <div className="flex flex-col justify-center p-8 lg:p-16">
            <span className="text-sm font-bold text-slate-300">
              01
            </span>

            <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-emerald-600">
              FOR STARTUPS
            </p>

            <h3 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
              Move fast.
              <br />
              Stay aligned.
            </h3>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Keep your projects, tasks, and growing team connected
              without adding unnecessary complexity to your workflow.
            </p>

            <button className="mt-8 flex w-fit items-center gap-2 font-semibold text-slate-900 transition-transform duration-300 hover:translate-x-1">
              Explore solution
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="flex items-center justify-center bg-emerald-50 p-8 lg:p-12">
            <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">

              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Workspace
                  </p>

                  <h4 className="mt-1 text-lg font-bold text-slate-900">
                    Startup Launch
                  </h4>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                  On track
                </span>
              </div>

              <div className="mt-6">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-500">
                    Sprint progress
                  </span>

                  <span className="text-sm font-bold text-slate-900">
                    72%
                  </span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-slate-100">
                  <div className="h-full w-[72%] rounded-full bg-emerald-500" />
                </div>
              </div>

              <div className="mt-7 space-y-3">
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                  <CheckCircle2 size={19} className="text-emerald-500" />

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Landing page
                    </p>

                    <p className="text-xs text-slate-400">
                      Completed
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                  <Clock3 size={19} className="text-blue-500" />

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      User onboarding
                    </p>

                    <p className="text-xs text-slate-400">
                      In progress
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                  <Circle size={19} className="text-slate-300" />

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      Launch campaign
                    </p>

                    <p className="text-xs text-slate-400">
                      Upcoming
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5">
                <span className="text-xs font-semibold text-slate-400">
                  TEAM ACTIVITY
                </span>

                <span className="text-xs font-semibold text-emerald-600">
                  5 members active
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Development Teams */}
      <div className="mt-8 overflow-hidden rounded-4xl bg-slate-900">
        <div className="grid min-h-130 grid-cols-1 lg:grid-cols-2">

          <div className="flex items-center justify-center bg-slate-800 p-8 lg:p-12">
            <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-white p-6 shadow-2xl">

              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                    <GitBranch size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      teamflow/app
                    </p>

                    <p className="text-xs text-slate-400">
                      GitHub Repository
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                  Connected
                </span>
              </div>

              <div className="mt-6 space-y-4">

                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <GitPullRequest
                      size={18}
                      className="text-violet-500"
                    />

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Authentication API
                      </p>

                      <p className="text-xs text-slate-400">
                        Pull request merged
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <GitPullRequest
                      size={18}
                      className="text-blue-500"
                    />

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Dashboard UI
                      </p>

                      <p className="text-xs text-slate-400">
                        Pull request under review
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <GitBranch
                      size={18}
                      className="text-emerald-500"
                    />

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Feature/payment
                      </p>

                      <p className="text-xs text-slate-400">
                        8 commits today
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
                <span className="text-xs font-semibold text-slate-400">
                  DEVELOPMENT ACTIVITY
                </span>

                <span className="text-xs font-semibold text-violet-600">
                  12 updates today
                </span>
              </div>

            </div>
          </div>

          <div className="flex flex-col justify-center p-8 text-white lg:p-16">

            <span className="text-sm font-bold text-slate-600">
              02
            </span>

            <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-rose-400">
              FOR DEVELOPMENT TEAMS
            </p>

            <h3 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
              Connect code
              <br />
              with execution.
            </h3>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
              Connect your development workflow with projects,
              tasks, pull requests, issues, and releases.
            </p>

            <button className="mt-8 flex w-fit items-center gap-2 font-semibold text-white transition-transform duration-300 hover:translate-x-1">
              Explore solution
              <ArrowRight size={18} />
            </button>

          </div>

        </div>
      </div>

      {/* Project Managers */}
      <div className="mt-8 overflow-hidden rounded-4xl bg-cyan-50">
        <div className="grid min-h-130 grid-cols-1 lg:grid-cols-2">

          <div className="flex flex-col justify-center p-8 lg:p-16">

            <span className="text-sm font-bold text-slate-300">
              03
            </span>

            <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-cyan-600">
              FOR PROJECT MANAGERS
            </p>

            <h3 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
              See problems
              <br />
              before delays.
            </h3>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Understand project health, workload, deadlines,
              dependencies, and blockers from one clear overview.
            </p>

            <button className="mt-8 flex w-fit items-center gap-2 font-semibold text-slate-900 transition-transform duration-300 hover:translate-x-1">
              Explore solution
              <ArrowRight size={18} />
            </button>

          </div>

          <div className="flex items-center justify-center bg-cyan-100 p-8 lg:p-12">

            <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Project Health
                  </p>

                  <p className="mt-1 text-3xl font-bold text-slate-900">
                    91
                  </p>
                </div>

                <TrendingUp
                  size={28}
                  className="text-cyan-600"
                />
              </div>

              <div className="mt-6 h-2 rounded-full bg-slate-100">
                <div className="h-full w-[91%] rounded-full bg-cyan-500" />
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-400">
                    Completed
                  </p>

                  <p className="mt-1 text-xl font-bold text-slate-900">
                    84%
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-400">
                    Team workload
                  </p>

                  <p className="mt-1 text-xl font-bold text-slate-900">
                    68%
                  </p>
                </div>

              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl bg-amber-50 p-4">
                <AlertTriangle
                  size={19}
                  className="text-amber-500"
                />

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    2 tasks may cause delays
                  </p>

                  <p className="text-xs text-slate-500">
                    Review dependencies
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                <Users
                  size={19}
                  className="text-blue-500"
                />

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Team workload balanced
                  </p>

                  <p className="text-xs text-slate-400">
                    No overloaded members detected
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Solutions