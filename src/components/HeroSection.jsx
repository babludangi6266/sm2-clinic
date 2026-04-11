import { useState, useEffect } from 'react'
import { FiCalendar, FiPhone, FiArrowRight } from 'react-icons/fi'
import { FaStethoscope, FaTooth, FaStar } from 'react-icons/fa'
import { useInView } from '../hooks/useInView'
import { clinicImages } from '../data/media'

export default function HeroSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate clinic images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % clinicImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden hero-pattern"
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-accent-light/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-navy-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-6 sm:space-y-8 ${isInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-50 border border-primary-200 rounded-full text-xs sm:text-sm text-primary-700 font-medium">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              Bhubaneswar&apos;s Trusted Multi-Speciality Clinic
            </div>

            {/* Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading">
                <span className="text-navy-900">Your Health,</span>
                <br />
                <span className="gradient-text">Our Priority</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-navy-500 leading-relaxed max-w-lg">
                Comprehensive <strong className="text-primary-700">Dental</strong>,{' '}
                <strong className="text-primary-700">Skin</strong> &{' '}
                <strong className="text-primary-700">Medical</strong> care with a commitment
                to excellence and patient well-being.
              </p>
            </div>

            {/* Mobile Clinic Slideshow – visible only on mobile */}
            <div className="block lg:hidden">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10]">
                {clinicImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`SM2 Clinic ${index + 1}`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                      index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  />
                ))}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
                {/* Slide indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {clinicImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
                {/* SM2 Badge on image */}
                <div className="absolute top-3 left-3 glass rounded-lg px-3 py-1.5">
                  <span className="text-xs font-bold text-primary-800">SM2 Health</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://calendly.com/sharmisthabolt007/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-book"
                className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/40 hover:-translate-y-1 transition-all duration-300 active:scale-[0.98]"
              >
                <FiCalendar size={18} />
                Book Appointment
                <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+918917592963"
                id="hero-call"
                className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-navy-700 bg-white border-2 border-navy-200 rounded-2xl hover:bg-navy-50 hover:border-navy-300 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-navy-900/5 active:scale-[0.98]"
              >
                <FiPhone size={18} />
                Call Now
              </a>
            </div>

            {/* Trust Stats */}
            <div className="flex flex-wrap gap-5 sm:gap-8 pt-2 sm:pt-4">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                  <FaTooth className="text-primary-600 text-lg sm:text-xl" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-navy-900">10+</p>
                  <p className="text-xs sm:text-sm text-navy-500">Years Exp.</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                  <FaStethoscope className="text-primary-600 text-lg sm:text-xl" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-navy-900">5000+</p>
                  <p className="text-xs sm:text-sm text-navy-500">Happy Patients</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent-light/50 flex items-center justify-center">
                  <FaStar className="text-accent text-lg sm:text-xl" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-navy-900">4.9</p>
                  <p className="text-xs sm:text-sm text-navy-500">Google Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Clinic Photo Slideshow (Desktop Only) */}
          <div className={`relative hidden lg:block ${isInView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Image Container with Slideshow */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/20">
                {clinicImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`SM2 Clinic ${index + 1}`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                      index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                    }`}
                  />
                ))}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/20 to-transparent" />

                {/* Text Overlay on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="glass-dark rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <img src="/sm2-logo.webp" alt="SM2 Logo" className="w-10 h-10 object-contain" />
                      <div>
                        <h2 className="text-lg font-bold text-white font-heading">Health & Aesthetics</h2>
                        <p className="text-primary-300 text-xs tracking-[0.2em] uppercase">Dental · Skin · Medicine</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute top-6 right-6 flex gap-1.5">
                  {clinicImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentSlide ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-6 top-1/4 glass rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-800">Certified Specialists</p>
                    <p className="text-xs text-navy-500">International Standards</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-1/3 glass rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center">
                    <FaStar className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-800">Top Rated</p>
                    <p className="text-xs text-navy-500">500+ Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50L48 45C96 40 192 30 288 33C384 36 480 52 576 57C672 62 768 56 864 48C960 40 1056 30 1152 33C1248 36 1344 52 1392 60L1440 68V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="#f8fafb"/>
        </svg>
      </div>
    </section>
  )
}
