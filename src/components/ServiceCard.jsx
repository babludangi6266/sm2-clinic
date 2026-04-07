import { Link } from 'react-router-dom'
import { FaTooth, FaStethoscope, FaSpa } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'

const iconMap = {
  tooth: FaTooth,
  stethoscope: FaStethoscope,
  sparkles: FaSpa,
}

const bgPatterns = [
  'from-primary-500 to-primary-700',
  'from-navy-600 to-navy-800',
  'from-amber-500 to-amber-700',
]

export default function ServicesSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const services = [
    {
      id: 'dental',
      title: 'Dental Care',
      tagline: 'Complete Oral Health Solutions',
      description: 'From preventive care to complex surgical procedures, our dental team provides comprehensive oral healthcare using state-of-the-art equipment.',
      icon: 'tooth',
      features: ['Root Canal Treatment', 'Dental Implants', 'Smile Designing', 'Teeth Whitening', 'Fixed Orthodontics', 'Maxillofacial Surgery']
    },
    {
      id: 'medicine',
      title: 'General Medicine',
      tagline: 'Trusted Medical Care',
      description: 'Expert diagnosis and treatment for a wide range of medical conditions with a patient-first approach and compassionate care.',
      icon: 'stethoscope',
      features: ['General Assessment', 'Diabetes Management', 'Blood Pressure Care', 'Fever Treatment', 'Pain Management', 'Critical Care']
    },
    {
      id: 'aesthetics',
      title: 'Aesthetic & Skin',
      tagline: 'Reveal Your Best Self',
      description: 'Advanced cosmetic and dermatological treatments designed to enhance your natural beauty with safe, proven procedures.',
      icon: 'sparkles',
      features: ['Skin Rejuvenation', 'Anti-aging', 'Acne Management', 'Hair Restoration', 'Cosmetology', 'Laser Treatments']
    }
  ]

  return (
    <section id="services" className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-10 sm:mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-heading text-navy-900 mb-3 sm:mb-4">
            Comprehensive Healthcare <span className="gradient-text">Under One Roof</span>
          </h2>
          <p className="text-sm sm:text-lg text-navy-500 leading-relaxed">
            SM2 Health and Aesthetics brings together dental, aesthetic, and medical expertise to deliver holistic care.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <div
                key={service.id}
                className={`group relative bg-white rounded-2xl sm:rounded-3xl border border-navy-100 overflow-hidden card-hover ${
                  isInView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Top Gradient Bar */}
                <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${bgPatterns[index]}`} />

                <div className="p-5 sm:p-8">
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${bgPatterns[index]} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="text-white text-lg sm:text-2xl" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-1">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-primary-600 font-medium mb-3 sm:mb-4">{service.tagline}</p>
                  <p className="text-navy-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-navy-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="/expertise"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary-600 hover:text-primary-800 group/btn transition-colors"
                  >
                    Learn More
                    <FiArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
