import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiPhone, FiMenu, FiX, FiCalendar } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Expertise', path: '/expertise' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy-900 text-white text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-navy-200">📍 Ekamra Villa, Jayadev Vihar, Bhubaneswar</span>
          <div className="flex items-center gap-6">
            <span className="text-navy-200">🕐 Mon-Sat: 10AM-1PM | 4PM-8PM</span>
            <a href="tel:+918917592963" className="flex items-center gap-1 text-primary-300 hover:text-primary-200 transition-colors">
              <FiPhone size={14} /> +91 8917592963
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        id="main-nav"
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass shadow-lg shadow-primary-900/5'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group" id="nav-logo">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-800 flex items-center justify-center shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/40 transition-shadow">
                <span className="text-white font-bold text-sm lg:text-base">SM2</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-base lg:text-lg font-bold text-navy-900 leading-tight">
                  SM2 Health <span className="text-primary-600">&</span> Aesthetics
                </h1>
                <p className="text-[10px] lg:text-xs text-navy-500 tracking-[0.2em] uppercase">
                  Dental · Skin · Medicine
                </p>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`nav-${link.name.toLowerCase()}`}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-navy-600 hover:text-primary-700 hover:bg-primary-50/50'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary-500 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+918917592963"
                id="nav-call"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-navy-700 border border-navy-200 rounded-xl hover:bg-navy-50 transition-all duration-300 hover:border-navy-300"
              >
                <FiPhone size={16} /> Call Now
              </a>
              <a
                href="https://calendly.com/sharmisthabolt007/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                id="nav-book"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5"
              >
                <FiCalendar size={16} /> Book Appointment
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-xl text-navy-700 hover:bg-primary-50 transition-colors"
              aria-label="Toggle menu"
              id="nav-mobile-toggle"
            >
              {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-500 ${
            isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 bg-navy-900/40 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
          <div
            className={`relative bg-white m-4 rounded-2xl shadow-2xl border border-navy-100 transition-all duration-500 ${
              isMobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}
          >
            <div className="p-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    location.pathname === link.path
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-navy-600 hover:bg-navy-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="p-6 pt-2 space-y-3 border-t border-navy-100">
              <a
                href="tel:+918917592963"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-navy-700 border border-navy-200 rounded-xl hover:bg-navy-50 transition-all"
              >
                <FiPhone size={16} /> Call Now
              </a>
              <a
                href="https://calendly.com/sharmisthabolt007/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-lg shadow-primary-500/25"
              >
                <FiCalendar size={16} /> Book Appointment
              </a>
              <a
                href="https://wa.me/918917592963?text=Hi,%20I%20want%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-semibold text-white bg-green-600 rounded-xl"
              >
                <FaWhatsapp size={16} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
