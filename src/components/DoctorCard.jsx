import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa'
import { useInView } from '../hooks/useInView'
import { doctors } from '../data/doctors'
import { doctorImages } from '../data/media'
import LazyImage from './LazyImage'

export default function DoctorsSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="doctors" className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-10 sm:mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-4">
            Our Doctors
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-navy-900 mb-3 sm:mb-4">
            Meet Our <span className="gradient-text">Expert Doctors</span>
          </h2>
          <p className="text-base sm:text-lg text-navy-500">
            Dedicated professionals committed to your health and well-being.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-8 lg:gap-12">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className={`group relative bg-white rounded-2xl sm:rounded-3xl border border-navy-100 overflow-hidden card-hover ${isInView ? (index === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right') : 'opacity-0'
                }`}
            >
              {/* Doctor Photo */}
              <div className={`relative h-65 sm:h-56 md:h-64 ${index === 0
                  ? 'bg-gradient-to-br from-primary-500 via-primary-600 to-primary-800'
                  : 'bg-gradient-to-br from-navy-600 via-navy-700 to-navy-900'
                } overflow-hidden`}>
                <LazyImage
                  src={doctorImages[doctor.id]}
                  alt={doctor.name}
                  className="absolute inset-0 w-full h-full"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                {/* Name on image for mobile */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:hidden">
                  <h3 className="text-lg font-bold text-white font-heading">{doctor.name}</h3>
                  <p className="text-primary-200 text-xs">{doctor.speciality}</p>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full" />
              </div>

              <div className="p-5 sm:p-8">
                {/* Name & Title - hidden on mobile as shown on image */}
                <h3 className="hidden sm:block text-xl sm:text-2xl font-bold text-navy-900 font-heading mb-1">{doctor.name}</h3>
                <p className="hidden sm:block text-primary-600 font-medium mb-2">{doctor.title}</p>
                <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full mb-4 sm:mb-5">
                  {doctor.speciality}
                </span>

                {/* Philosophy */}
                <blockquote className="relative pl-3 sm:pl-4 border-l-[3px] border-primary-400 mb-4 sm:mb-6">
                  <p className="text-navy-500 italic text-xs sm:text-sm leading-relaxed">
                    &ldquo;{doctor.philosophy}&rdquo;
                  </p>
                </blockquote>

                {/* Qualifications */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-navy-700 mb-2 sm:mb-3">
                    <FaGraduationCap className="text-primary-600" /> Qualifications
                  </h4>
                  <ul className="space-y-1 sm:space-y-1.5">
                    {doctor.qualifications.slice(0, 4).map((qual) => (
                      <li key={qual} className="flex items-start gap-2 text-xs sm:text-sm text-navy-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary-600 hover:text-primary-800 group/btn transition-colors"
                >
                  View Full Profile
                  <FiArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
