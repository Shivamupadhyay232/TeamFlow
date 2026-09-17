import { ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div className="max-w-sm">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              TeamFlow
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Project management that helps teams stay aligned,
              collaborate in real time, and understand project
              risks before they become delays.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:text-slate-900"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:text-slate-900"
                aria-label="X"
              >
                <FaXTwitter size={17} />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:text-slate-900"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={17} />
              </a>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Product
            </h3>

            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="#features"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#solutions"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Solutions
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="#resources"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Solutions
            </h3>

            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="#solutions"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  For Startups
                </a>
              </li>

              <li>
                <a
                  href="#solutions"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Development Teams
                </a>
              </li>

              <li>
                <a
                  href="#solutions"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Project Managers
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Remote Teams
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Resources
            </h3>

            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="#resources"
                  className="group flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Documentation

                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>

              <li>
                <a
                  href="#resources"
                  className="group flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Developer API

                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>

              <li>
                <a
                  href="#resources"
                  className="group flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Guides

                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="group flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  GitHub

                  <ArrowUpRight
                    size={13}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-16 flex flex-col gap-6 border-t border-slate-200 pt-8 md:flex-row md:items-center md:justify-between">

          <p className="text-sm text-slate-400">
            © 2026 TeamFlow. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#"
              className="text-sm text-slate-400 transition-colors hover:text-slate-900"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-sm text-slate-400 transition-colors hover:text-slate-900"
            >
              Terms
            </a>

            <a
              href="#"
              className="text-sm text-slate-400 transition-colors hover:text-slate-900"
            >
              Security
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer