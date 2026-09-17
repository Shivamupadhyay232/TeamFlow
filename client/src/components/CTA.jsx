import { ArrowRight, Sparkles, CheckCircle2, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section className="w-full py-16">
      <div className="relative overflow-hidden bg-slate-900 px-8 py-16 text-center lg:px-16 lg:py-20">

        {/* Left Floating Stickers */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-64 lg:block">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute left-8 top-24 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
              <CheckCircle2 size={19} />
            </div>

            <div className="text-left">
              <p className="text-xs font-semibold text-white">
                Task completed
              </p>

              <p className="mt-0.5 text-[10px] text-slate-400">
                UI Design
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute bottom-24 left-16 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
              <Users size={19} />
            </div>

            <div className="text-left">
              <p className="text-xs font-semibold text-white">
                Team activity
              </p>

              <p className="mt-0.5 text-[10px] text-slate-400">
                5 members active
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Floating Stickers */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-64 lg:block">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute right-8 top-24 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400">
              <Sparkles size={19} />
            </div>

            <div className="text-left">
              <p className="text-xs font-semibold text-white">
                Automation
              </p>

              <p className="mt-0.5 text-[10px] text-slate-400">
                Workflow triggered
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.6,
            }}
            className="absolute bottom-24 right-16 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
              <span className="text-sm font-bold">!</span>
            </div>

            <div className="text-left">
              <p className="text-xs font-semibold text-white">
                Project risk
              </p>

              <p className="mt-0.5 text-[10px] text-slate-400">
                2 tasks need attention
              </p>
            </div>
          </motion.div>
        </div>

        {/* Background Effects */}
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />

        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-blue-300">
            <Sparkles size={21} />
          </div>

          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Get started with TeamFlow
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white lg:text-5xl">
            Ready to bring your
            <br />
            team into sync?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 lg:text-lg">
            Plan projects, collaborate with your team, and understand
            project risks before they become delays.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/register"
              className="group flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
            >
              Get Started

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/login"
              className="rounded-xl border border-white/15 px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              Sign in
            </Link>
          </div>

          <p className="mt-5 text-xs text-slate-500">
            No credit card required to get started.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA