import { useState, useEffect, useCallback } from 'react'
import { FaStar, FaGoogle, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'
import { useInView } from '../hooks/useInView'
import { testimonials } from '../data/testimonials'

export default function TestimonialSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, next])

  // Touch swipe handlers
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX)
  const handleTouchEnd = (e) => {
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) next()
      else prev()
    }
  }

  return (
    <section id="testimonials" className="section-padding bg-[#f8fafb]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-10 sm:mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-heading text-navy-900 mb-3 sm:mb-4">
            What Our Patients <span className="gradient-text">Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-navy-500 flex-wrap">
            <FaGoogle className="text-blue-500" />
            <span className="text-xs sm:text-sm">Based on Google Reviews</span>
            <div className="flex items-center gap-0.5 ml-1 sm:ml-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-amber-400 text-xs sm:text-sm" />
              ))}
            </div>
            <span className="font-bold text-navy-800 text-sm">4.9</span>
          </div>
        </div>

        {/* Carousel */}
        <div className={`max-w-4xl mx-auto ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Main Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-xl border border-navy-100/50 relative overflow-hidden">
              {/* Quote Icon */}
              <FaQuoteLeft className="absolute top-4 sm:top-6 right-4 sm:right-6 text-primary-100 text-3xl sm:text-6xl" />

              <div className="relative">
                {/* Stars */}
                <div className="flex gap-0.5 sm:gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 text-base sm:text-xl" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-lg md:text-xl text-navy-700 leading-relaxed mb-5 sm:mb-8 font-medium">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary-400 to-primary-700 flex items-center justify-center text-white font-bold text-base sm:text-xl shadow-lg">
                      {testimonials[current].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-navy-900 text-sm sm:text-lg">{testimonials[current].name}</p>
                      <p className="text-xs sm:text-sm text-primary-600">{testimonials[current].treatment}</p>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-navy-400">{testimonials[current].date}</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-navy-200 flex items-center justify-center text-navy-600 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-600 transition-all duration-300 shadow-sm active:scale-95"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="text-sm" />
              </button>

              {/* Dots */}
              <div className="flex gap-1.5 sm:gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                      index === current
                        ? 'w-6 sm:w-8 bg-primary-500'
                        : 'w-2 sm:w-2.5 bg-navy-200 hover:bg-navy-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-navy-200 flex items-center justify-center text-navy-600 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-600 transition-all duration-300 shadow-sm active:scale-95"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
