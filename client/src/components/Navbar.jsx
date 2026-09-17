import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
     <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <div className="text-2xl font-bold text-slate-900">
          TeamFlow
        </div>

        <div className="flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Features
          </a>

          <a href="#solutions" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Solutions
          </a>

          <a href="#resources" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Resources
          </a>

          <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Pricing
          </a>

          <Link to="/login" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Get Started →
          </Link>
        </div>

      </div>
     </nav>
  )
}

export default Navbar