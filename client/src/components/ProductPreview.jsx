import { useState } from 'react'

const ProductPreview = () => {
  const [tasks, setTasks] = useState([
    { name: 'UI Design', status: 'done' },
    { name: 'Authentication', status: 'done' },
    { name: 'API Integration', status: 'progress' },
    { name: 'Payment Integration', status: 'warning' },
  ])

  const toggleTask = (taskName) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.name !== taskName) {
          return task
        }

        const nextStatus =
          task.status === 'done'
            ? 'progress'
            : task.status === 'progress'
              ? 'warning'
              : 'done'

        return {
          ...task,
          status: nextStatus,
        }
      })
    )
  }

  const completedTasks = tasks.filter(
    (task) => task.status === 'done'
  ).length

  const progress = Math.round(
    (completedTasks / tasks.length) * 100
  )
  const warningTasks = tasks.filter(
  (task) => task.status === 'warning'
  ).length

  const health = Math.max(
    0,
    Math.min(100, progress + 40 - warningTasks * 20)
  )
  const healthStatus =
  health >= 80
    ? 'Healthy'
    : health >= 60
      ? 'At Risk'
      : 'Critical'
  const healthColor =
  health >= 80
    ? 'bg-green-50 text-green-600'
    : health >= 60
      ? 'bg-amber-50 text-amber-600'
      : 'bg-red-50 text-red-600'
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
      <div className="rounded-xl border border-slate-200 bg-slate-50">

        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-blue-600"></div>

            <span className="text-sm font-semibold text-slate-800">
              TeamFlow
            </span>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${healthColor}`}
          >
            <span className="mr-1 inline-block animate-pulse">●</span>
            {healthStatus}
          </span>
        </div>

        <div className="p-5">

          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Project Overview
          </p>

          <h2 className="mt-2 text-lg font-bold text-slate-900">
            Website Redesign
          </h2>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-sm text-slate-500">
              Progress
            </span>

            <span className="text-sm font-semibold text-slate-800">
              {progress}%
            </span>
          </div>

          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="mt-6 space-y-3">
            {tasks.map((task) => (
              <div
                key={task.name}
                onClick={() => toggleTask(task.name)}
                className="flex cursor-pointer items-center gap-3 rounded-lg bg-white px-3 py-2 transition hover:bg-slate-50">
                <div
                  className={`h-2 w-2 rounded-full ${
                    task.status === 'done'
                      ? 'bg-green-500'
                      : task.status === 'progress'
                        ? 'bg-blue-500'
                        : 'bg-amber-500'
                  }`}
                ></div>

                <span className="text-sm font-medium text-slate-700">
                  {task.name}
                </span>

                <span
                  className={`ml-auto text-xs font-bold ${
                    task.status === 'done'
                      ? 'text-green-500'
                      : task.status === 'progress'
                        ? 'text-blue-500'
                        : 'text-amber-500'
                  }`}
                >
                  {task.status === 'done' && '✓'}
                  {task.status === 'progress' && '◷'}
                  {task.status === 'warning' && '⚠'}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-50 p-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Project Health
              </p>

              <p className={`mt-1 text-sm font-semibold ${healthColor.split(' ')[1]}`}>
                {healthStatus}
              </p>
            </div>

            <div className="text-right">
              <p className="text-2xl font-bold text-slate-900">
                {health}
              </p>

              <p className="text-xs text-slate-400">
                / 100
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductPreview