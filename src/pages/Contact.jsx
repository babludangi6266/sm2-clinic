import { useState } from 'react'
import { FiPhone, FiMapPin, FiClock, FiMail, FiSend, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent rounded-full filter blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-300 text-sm font-medium rounded-full mb-4 border border-white/10">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-4">
            Contact <span className="gradient-text-gold">Us</span>
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out for appointments, queries, or feedback.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <ContactContent />

      {/* Map Section */}
      <MapSection />
    </main>
  )
}

function ContactContent() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className={`lg:col-span-2 ${isInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold font-heading text-navy-900 mb-6">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-navy-500 leading-relaxed mb-8">
              Whether you want to schedule an appointment, ask about our services, or have any questions — we&apos;re here to help.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center shrink-0">
                  <FiMapPin className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-1">Visit Us</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">
                    Ekamra Villa, 28, Saliasahi Rd,<br />
                    Ekamra Vihar, Jayadev Vihar,<br />
                    Bhubaneswar, Odisha – 751015
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center shrink-0">
                  <FiPhone className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-1">Call Us</h3>
                  <a href="tel:+918917592963" className="text-primary-600 hover:text-primary-800 font-medium transition-colors">
                    +91 8917592963
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center shrink-0">
                  <FiClock className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-1">Working Hours</h3>
                  <div className="text-navy-500 text-sm space-y-1">
                    <div className="flex justify-between gap-8">
                      <span>Monday – Saturday</span>
                      <span className="font-medium text-navy-700">10AM–1PM | 4PM–8PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sunday</span>
                      <span className="font-medium text-navy-700">10AM–1PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 space-y-3">
              <a
                href="tel:+918917592963"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl shadow-lg shadow-primary-500/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                <FiPhone size={18} /> Call Now
              </a>
              <a
                href="https://wa.me/918917592963?text=Hi,%20I%20want%20to%20book%20an%20appointment%20at%20SM2%20Health%20and%20Aesthetics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-2xl shadow-lg shadow-green-600/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaWhatsapp size={20} /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 ${isInView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Format WhatsApp message
    const text = `Hi SM2! I'd like to inquire about your services.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`
    window.open(`https://wa.me/918917592963?text=${encodeURIComponent(text)}`, '_blank')
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-12 border border-navy-100/50 shadow-xl text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <FiCheckCircle className="text-green-600 text-4xl" />
        </div>
        <h3 className="text-2xl font-bold text-navy-900 mb-3">Message Redirected!</h3>
        <p className="text-navy-500">
          Your inquiry is being sent via WhatsApp. Our team will respond shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-10 border border-navy-100/50 shadow-xl">
      <h3 className="text-xl font-bold text-navy-900 mb-6">Send Us a Message</h3>

      <div className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-navy-700 mb-2">Full Name *</label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium text-navy-700 mb-2">Phone *</label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-navy-700 mb-2">Email</label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="contact-service" className="block text-sm font-medium text-navy-700 mb-2">Service Interested In</label>
          <select
            id="contact-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
          >
            <option value="">Select a service</option>
            <option value="Dental Care">Dental Care</option>
            <option value="General Medicine">General Medicine</option>
            <option value="Skin & Aesthetics">Skin & Aesthetics</option>
            <option value="Root Canal">Root Canal</option>
            <option value="Dental Implants">Dental Implants</option>
            <option value="Smile Designing">Smile Designing</option>
            <option value="Orthodontics">Orthodontics</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-navy-700 mb-2">Message *</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
            placeholder="Tell us how we can help you..."
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-3 w-full px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:-translate-y-0.5"
        >
          <FiSend size={18} />
          Send via WhatsApp
        </button>
        <p className="text-xs text-navy-400 text-center">
          Your message will be sent directly to our WhatsApp for a faster response.
        </p>
      </div>
    </form>
  )
}

function MapSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section className="section-padding bg-[#f8fafb]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold font-heading text-navy-900 mb-4">
            Find Us <span className="gradient-text">Here</span>
          </h2>
          <p className="text-navy-500">
            Conveniently located in Jayadev Vihar, Bhubaneswar — easily accessible from all parts of the city.
          </p>
        </div>

        <div className={`rounded-3xl overflow-hidden shadow-2xl border border-navy-100 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <iframe
            title="SM2 Health and Aesthetics Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.8!2d85.78!3d20.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE4JzAwLjAiTiA4NcKwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}
