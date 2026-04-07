import { Link } from 'react-router-dom'
import { FiPhone, FiMapPin, FiClock, FiArrowUpRight } from 'react-icons/fi'
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Our Expertise', path: '/expertise' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const serviceLinks = [
  'Dental Implants',
  'Root Canal Treatment',
  'Smile Designing',
  'General Medicine',
  'Skin & Aesthetics',
  'Orthodontics',
]

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 text-white overflow-hidden">
      {/* Top Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-primary-500 via-accent to-primary-500" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full filter blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="relative -mt-1 pt-8 sm:pt-12 pb-6 sm:pb-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-2xl">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading mb-1 sm:mb-2">Ready to Transform Your Health?</h3>
              <p className="text-primary-100 text-sm sm:text-lg">Book your consultation today and take the first step.</p>
            </div>
            <a
              href="https://calendly.com/sharmisthabolt007/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-700 font-bold text-sm sm:text-base rounded-xl hover:bg-primary-50 transition-all duration-300 shadow-lg whitespace-nowrap hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Book Now <FiArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 py-8 sm:py-12 border-t border-navy-700/50">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 sm:mb-6">
              <img src="/sm2-logo.png" alt="SM2 Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
              <div>
                <h4 className="text-base sm:text-lg font-bold leading-tight">SM2 Health</h4>
                <p className="text-[10px] sm:text-xs text-navy-400 tracking-[0.15em] uppercase">Dental · Skin · Medicine</p>
              </div>
            </Link>
            <p className="text-navy-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              A multi-speciality clinic committed to delivering affordable, world-class healthcare with compassion and expertise.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {[
                { icon: FaInstagram, href: 'https://www.instagram.com/sm2_health_and_aesthetics/?hl=en', label: 'Instagram' },
                { icon: FaWhatsapp, href: 'https://wa.me/918917592963', label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-navy-800 flex items-center justify-center text-navy-300 hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-navy-300 hover:text-primary-300 transition-colors flex items-center gap-2 text-xs sm:text-sm group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-600 group-hover:bg-primary-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    to="/expertise"
                    className="text-navy-300 hover:text-primary-300 transition-colors flex items-center gap-2 text-xs sm:text-sm group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-600 group-hover:bg-primary-400 transition-colors" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary-400 mb-4 sm:mb-6">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <FiMapPin className="text-primary-400 mt-0.5 shrink-0" size={16} />
                <span className="text-navy-300 text-xs sm:text-sm leading-relaxed">
                  Ekamra Villa, 28, Saliasahi Rd,<br />
                  Jayadev Vihar, Bhubaneswar,<br />
                  Odisha – 751015
                </span>
              </li>
              <li>
                <a href="tel:+918917592963" className="flex items-center gap-2 sm:gap-3 text-navy-300 hover:text-primary-300 transition-colors text-xs sm:text-sm">
                  <FiPhone className="text-primary-400 shrink-0" size={16} />
                  +91 8917592963
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <FiClock className="text-primary-400 mt-0.5 shrink-0" size={16} />
                <div className="text-xs sm:text-sm text-navy-300">
                  <p>Mon – Sat: 10AM–1PM | 4PM–8PM</p>
                  <p>Sunday: 10AM–1PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-700/50 py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <p className="text-xs sm:text-sm text-navy-400">
            © {new Date().getFullYear()} SM2 Health and Aesthetics. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  )
}
