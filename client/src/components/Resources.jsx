import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Code2,
  CheckCircle2,
  GitPullRequest,
  Activity,
} from 'lucide-react'

const Resources = () => {
  const [activeResource, setActiveResource] = useState('intelligence')
  const [direction, setDirection] = useState(1)

  const resources = {
    documentation: {
      label: 'Documentation',
      category: 'GETTING STARTED',
      title: 'Everything you need to work smarter.',
      description:
        'Learn how to organize projects, manage teams, create workflows, and get the most out of TeamFlow.',
      icon: BookOpen,
    },
    intelligence: {
      label: 'Project Intelligence',
      category: 'PROJECT INTELLIGENCE',
      title: 'Know when your project needs attention.',
      description:
        'Understand project health, detect risks, and identify blockers before they turn into delays.',
      icon: BrainCircuit,
    },
    developers: {
      label: 'Developers',
      category: 'DEVELOPER RESOURCES',
      title: 'Build TeamFlow into your workflow.',
      description:
        'Connect APIs, GitHub repositories, webhooks, and custom integrations to extend your workspace.',
      icon: Code2,
    },
  }

  const resourceKeys = Object.keys(resources)

  const handleResourceChange = (key) => {
    const currentIndex = resourceKeys.indexOf(activeResource)
    const newIndex = resourceKeys.indexOf(key)

    setDirection(newIndex > currentIndex ? 1 : -1)
    setActiveResource(key)
  }

  const current = resources[activeResource]
  const Icon = current.icon

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),

    center: {
      x: 0,
      opacity: 1,
    },

    exit: (direction) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
    }),
  }

  return (
    <section
      id="resources"
      className="mx-auto max-w-7xl px-6 py-15"
    >
      {/* Heading */}
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Resources
        </p>

        <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-6xl">
          Build a better
          <br />
          way to work.
        </h2>
      </div>

      {/* Tabs */}
      <div className="mt-12 flex gap-8 overflow-x-auto border-b border-slate-200">
        {resourceKeys.map((key) => {
          const resource = resources[key]

          return (
            <button
              key={key}
              onClick={() => handleResourceChange(key)}
              className={`relative whitespace-nowrap pb-4 text-sm font-semibold transition-colors ${
                activeResource === key
                  ? 'text-slate-900'
                  : 'text-slate-400 hover:text-slate-700'
              }`}
            >
              {resource.label}

              {activeResource === key && (
                <motion.span
                  layoutId="resource-tab"
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600"
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Showcase */}
      <div className="relative mt-10 overflow-hidden rounded-3xl bg-slate-900">
        <AnimatePresence
          mode="wait"
          custom={direction}
        >
          <motion.div
            key={activeResource}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid min-h-130 grid-cols-1 lg:grid-cols-2"
          >
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center p-8 lg:p-14">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Icon size={24} strokeWidth={1.8} />
              </div>

              <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-blue-300">
                {current.category}
              </p>

              <h3 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-white lg:text-5xl">
                {current.title}
              </h3>

              <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 lg:text-lg">
                {current.description}
              </p>

              <button className="mt-8 flex w-fit items-center gap-2 font-semibold text-white transition-transform duration-300 hover:translate-x-1">
                Explore resource
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Product Visual */}
            <div className="relative flex items-center justify-center overflow-hidden bg-slate-800 p-8 lg:p-12">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-white p-5 shadow-2xl">

                {/* Dashboard Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />

                    <span className="text-sm font-bold text-slate-800">
                      TeamFlow
                    </span>
                  </div>

                  <span className="text-xs font-medium text-slate-400">
                    Project Overview
                  </span>
                </div>

                {/* Intelligence View */}
                {activeResource === 'intelligence' && (
                  <div className="pt-5">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs font-medium text-slate-400">
                          PROJECT HEALTH
                        </p>

                        <p className="mt-1 text-4xl font-bold text-slate-900">
                          82
                        </p>
                      </div>

                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                        Healthy
                      </span>
                    </div>

                    <div className="mt-6 h-2 rounded-full bg-slate-100">
                      <div className="h-full w-[82%] rounded-full bg-blue-600" />
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                        <CheckCircle2
                          size={18}
                          className="text-green-500"
                        />

                        <span className="text-sm font-medium text-slate-700">
                          24 tasks completed
                        </span>
                      </div>

                      <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                        <Activity
                          size={18}
                          className="text-blue-500"
                        />

                        <span className="text-sm font-medium text-slate-700">
                          Team velocity is stable
                        </span>
                      </div>

                      <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                        <GitPullRequest
                          size={18}
                          className="text-violet-500"
                        />

                        <span className="text-sm font-medium text-slate-700">
                          6 pull requests merged
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Documentation View */}
                {activeResource === 'documentation' && (
                  <div className="pt-5">
                    <p className="text-xs font-semibold text-slate-400">
                      QUICK START
                    </p>

                    <h4 className="mt-2 text-2xl font-bold text-slate-900">
                      Set up your workspace
                    </h4>

                    <div className="mt-6 space-y-3">
                      {[
                        'Create your workspace',
                        'Invite your team',
                        'Create your first project',
                        'Add tasks and workflows',
                      ].map((item, index) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-lg bg-slate-50 p-3"
                        >
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                            {index + 1}
                          </div>

                          <span className="text-sm font-medium text-slate-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Developer View */}
                {activeResource === 'developers' && (
                  <div className="pt-5">
                    <p className="text-xs font-semibold text-slate-400">
                      API ACTIVITY
                    </p>

                    <div className="mt-4 rounded-xl bg-slate-900 p-4 font-mono text-xs leading-6 text-slate-300">
                      <p>
                        <span className="text-violet-400">POST</span>{' '}
                        /api/projects
                      </p>

                      <p>
                        <span className="text-green-400">200</span>{' '}
                        Project created successfully
                      </p>

                      <p className="mt-3">
                        <span className="text-violet-400">GET</span>{' '}
                        /api/tasks
                      </p>

                      <p>
                        <span className="text-green-400">200</span>{' '}
                        32 tasks returned
                      </p>
                    </div>

                    <div className="mt-5 flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                      <GitPullRequest
                        size={18}
                        className="text-violet-500"
                      />

                      <span className="text-sm font-medium text-slate-700">
                        GitHub integration connected
                      </span>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Resources