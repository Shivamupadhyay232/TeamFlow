import React from 'react'
import ProductPreview from './ProductPreview'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

        <div>
            <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                PROJECT INTELLIGENCE
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 lg:text-7xl">
                Your team's work,
                <br />
                finally in sync.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Plan projects, collaborate with your team, and detect risks
                before they turn into delays.
            </p>

            <div className="mt-8 flex items-center gap-6">
                <Link
                    to="/register"
                    className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                    >
                    Get Started →
                </Link>
                <button className="font-semibold text-slate-700 hover:text-blue-600">
                    Learn More
                </button>
            </div>   
        </div>
        {/*Right Side*/}
        <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-full bg-blue-100/60 blur-3xl"></div>
            <ProductPreview />
        </div>

      </div>
    </section>
  )
}

export default Hero