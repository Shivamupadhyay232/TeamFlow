import { useState } from 'react'
import { Check } from 'lucide-react'

const Pricing = () => {
  const [billing, setBilling] = useState('monthly')

  const plans = [
    {
      name: 'Free',
      description: 'For individuals getting started with TeamFlow.',
      monthly: 0,
      yearly: 0,
      features: [
        '3 projects',
        'Basic task management',
        'Basic project analytics',
        'Up to 5 team members',
      ],
      button: 'Get started',
      featured: false,
    },
    {
      name: 'Pro',
      description: 'For growing teams that need more control.',
      monthly: 12,
      yearly: 10,
      features: [
        'Unlimited projects',
        'Advanced analytics',
        'Project automation',
        'GitHub integration',
        'Real-time collaboration',
        'Up to 25 team members',
      ],
      button: 'Start free trial',
      featured: true,
    },
    {
      name: 'Business',
      description: 'For larger teams managing complex workflows.',
      monthly: 25,
      yearly: 21,
      features: [
        'Everything in Pro',
        'Advanced project intelligence',
        'Custom workflows',
        'Role-based permissions',
        'Unlimited team members',
        'Priority support',
      ],
      button: 'Get started',
      featured: false,
    },
  ]

  return (
    <section
      id="pricing"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      {/* Header */}
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          Pricing
        </p>

        <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-6xl">
          Simple pricing that
          <br />
          scales with your team.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Start for free and upgrade when your team needs more power.
        </p>

        {/* Billing Toggle */}
        <div className="mt-10 inline-flex rounded-full border border-slate-200 bg-slate-50 p-1">
          <button
            onClick={() => setBilling('monthly')}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              billing === 'monthly'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-400 hover:text-slate-700'
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setBilling('yearly')}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              billing === 'yearly'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-700'
            }`}
          >
            Yearly
          </button>

          {billing === 'yearly' && (
            <span className="ml-2 flex items-center px-3 text-xs font-semibold text-emerald-600">
                Save 20%
            </span>
          )}`
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const price =
            billing === 'monthly'
              ? plan.monthly
              : plan.yearly

          return (
            <div
              key={plan.name}
              className={`group relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${
                plan.featured
                    ? 'border-blue-600 bg-slate-900 text-white shadow-2xl lg:-translate-y-3 hover:shadow-blue-200/20'
                    : 'border-slate-200 bg-white text-slate-900 hover:border-slate-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white">
                  MOST POPULAR
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold">
                  {plan.name}
                </h3>

                <p
                  className={`mt-3 min-h-14 text-sm leading-6 ${
                    plan.featured
                      ? 'text-slate-300'
                      : 'text-slate-500'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-bold">
                  ${price}
                </span>

                <span
                  className={`mb-1 text-sm ${
                    plan.featured
                      ? 'text-slate-400'
                      : 'text-slate-500'
                  }`}
                >
                  / user / month
                </span>
              </div>

              {billing === 'yearly' && plan.monthly > 0 && (
                <p
                  className={`mt-2 text-xs ${
                    plan.featured
                      ? 'text-emerald-400'
                      : 'text-emerald-600'
                  }`}
                >
                  Billed annually
                </p>
              )}

              {/* Button */}
              <button
                className={`mt-8 w-full rounded-xl px-5 py-3 font-semibold transition-all duration-300 ${
                  plan.featured
                    ? 'bg-blue-600 text-white hover:bg-blue-500'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {plan.button}
              </button>

              {/* Features */}
              <div
                className={`my-8 h-px ${
                  plan.featured
                    ? 'bg-white/10'
                    : 'bg-slate-200'
                }`}
              />

              <p
                className={`text-xs font-semibold uppercase tracking-wider ${
                  plan.featured
                    ? 'text-slate-400'
                    : 'text-slate-400'
                }`}
              >
                What's included
              </p>

              <ul className="mt-5 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <Check
                      size={18}
                      className={`mt-0.5 shrink-0 ${
                        plan.featured
                          ? 'text-blue-400'
                          : 'text-emerald-500'
                      }`}
                    />

                    <span
                      className={`text-sm ${
                        plan.featured
                          ? 'text-slate-300'
                          : 'text-slate-600'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Pricing