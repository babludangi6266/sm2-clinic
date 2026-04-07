import { useEffect } from 'react'
import { FiCalendar, FiVideo, FiMapPin, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useInView } from '../hooks/useInView'

export default function BookingSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      const existing = document.querySelector('script[src*="calendly"]')
      if (existing) existing.remove()
    }
  }, [])

  return (
    <section id="booking" className="relative section-padding overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full filter blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-10 sm:mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-300 text-sm font-medium rounded-full mb-4 border border-white/10">
            Book Your Visit
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-heading text-white mb-3 sm:mb-4">
            Schedule Your <span className="gradient-text-gold">Consultation</span>
          </h2>
          <p className="text-sm sm:text-lg text-navy-200">
            Choose a convenient time for your visit. We offer both clinic and online consultations.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 items-start">
          {/* Left - Options */}
          <div className={`lg:col-span-2 space-y-4 sm:space-y-6 ${isInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            {/* Clinic Visit Card */}
            <div className="glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary-500/20 flex items-center justify-center shrink-0">
                  <FiMapPin className="text-primary-400 text-lg sm:text-xl" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">Clinic Visit</h3>
                  <p className="text-navy-300 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                    Visit us at our Jayadev Vihar clinic for in-person consultation and treatment.
                  </p>
                  <div className="text-[10px] sm:text-xs text-navy-400">
                    <p>Mon–Sat: 10AM–1PM | 4PM–8PM</p>
                    <p>Sunday: 10AM–1PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Online Consultation Card */}
            <div className="glass-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 group hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                  <FiVideo className="text-accent text-lg sm:text-xl" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">Online Consultation</h3>
                  <p className="text-navy-300 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
                    15-minute video consultation from the comfort of your home.
                  </p>
                  <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-[10px] sm:text-xs font-medium rounded-full">
                    15 min slot
                  </span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918917592963?text=Hi,%20I%20want%20to%20book%20an%20appointment%20at%20SM2%20Health%20and%20Aesthetics"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 sm:gap-3 w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm rounded-xl sm:rounded-2xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-green-600/25 active:scale-[0.98]"
            >
              <FaWhatsapp size={20} />
              Book via WhatsApp
              <FiArrowRight size={16} />
            </a>

            {/* Direct Booking Link */}
            <a
              href="https://calendly.com/sharmisthabolt007/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 sm:gap-3 w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold text-sm rounded-xl sm:rounded-2xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-primary-600/25 hover:shadow-xl active:scale-[0.98]"
            >
              <FiCalendar size={18} />
              Book on Calendly
              <FiArrowRight size={16} />
            </a>
          </div>

          {/* Right - Calendly Embed */}
          <div className={`lg:col-span-3 ${isInView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/sharmisthabolt007/new-meeting?hide_gdpr_banner=1&primary_color=0d9488"
                style={{ minWidth: '280px', height: '600px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
