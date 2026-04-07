import { useState, useEffect } from 'react'
import { FaGraduationCap, FaUserMd, FaAward, FaHandHoldingHeart, FaCheck } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'
import { doctors } from '../data/doctors'
import { doctorImages, clinicImages, aboutBgImage } from '../data/media'
import LazyImage from '../components/LazyImage'

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
        {/* Background Photo */}
        <img
          src={aboutBgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/85 via-navy-800/80 to-primary-900/85" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full filter blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-300 text-sm font-medium rounded-full mb-4 border border-white/10">
            About Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-4">
            Our <span className="gradient-text-gold">Story</span>
          </h1>
          <p className="text-base sm:text-lg text-navy-200 max-w-2xl mx-auto">
            Dedicated to making world-class healthcare accessible to everyone in Bhubaneswar and beyond.
          </p>
        </div>
      </section>

      {/* Clinic Story */}
      <ClinicStory />

      {/* Doctor Profiles */}
      <section className="section-padding bg-[#f8fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-4">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-navy-900 mb-4">
              Meet Our <span className="gradient-text">Doctors</span>
            </h2>
          </div>

          <div className="space-y-10 sm:space-y-16">
            {doctors.map((doctor, index) => (
              <DoctorProfile key={doctor.id} doctor={doctor} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <ValuesSection />

  
    </main>
  )
}

function ClinicStory() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [bgSlide, setBgSlide] = useState(0)

  // Auto-rotate clinic bg images for "Our Promise" card
  useEffect(() => {
    const timer = setInterval(() => {
      setBgSlide((prev) => (prev + 1) % clinicImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className={`${isInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-4">
              Our Mission
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-navy-900 mb-5 sm:mb-6">
              Health for All, <span className="gradient-text">Without Compromise</span>
            </h2>
            <p className="text-navy-500 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Founded with a vision to provide world-class healthcare that is accessible to everyone, SM2 Health and Aesthetics stands at the intersection of expertise, compassion, and affordability.
            </p>
            <p className="text-navy-500 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Our clinic in Bhubaneswar is equipped with state-of-the-art technology and staffed by specialists who have trained at premier institutions. We believe that quality healthcare should never be a privilege — it should be a right.
            </p>
            <p className="text-navy-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              From complex dental surgeries to routine health check-ups, from cutting-edge aesthetic treatments to critical care medicine, our multi-disciplinary team works together to ensure holistic patient care.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { label: 'Founded', value: 'Bhubaneswar' },
                { label: 'Specialities', value: 'Multi-Speciality' },
                { label: 'Approach', value: 'Patient-First' },
                { label: 'Standards', value: 'International' },
              ].map((item) => (
                <div key={item.label} className="bg-primary-50/50 rounded-xl p-3 sm:p-4">
                  <p className="text-[10px] sm:text-xs text-primary-600 font-medium uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm sm:text-lg font-bold text-navy-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Promise Card with Clinic Photo Background */}
          <div className={`relative ${isInView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] sm:aspect-[4/5]">
              {/* Clinic Photo Background – Slideshow */}
              {clinicImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="SM2 Clinic"
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${index === bgSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                />
              ))}
              {/* Dark Overlay with Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/60 to-navy-900/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 sm:p-8 text-center">
                <FaHandHoldingHeart className="text-4xl sm:text-6xl text-primary-300 mb-4 sm:mb-6" />
                <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-3 sm:mb-4">Our Promise</h3>
                <p className="text-primary-100 text-base sm:text-lg leading-relaxed max-w-sm">
                  &ldquo;Health for All irrespective of the Socioeconomic Status&rdquo;
                </p>
                <div className="mt-6 sm:mt-8 w-16 sm:w-20 h-1 bg-gradient-to-r from-accent to-primary-300 rounded-full" />
              </div>
              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {clinicImages.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${i === bgSlide ? 'w-5 bg-white' : 'w-1 bg-white/40'
                      }`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-20 sm:w-24 h-20 sm:h-24 bg-accent-light rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

function DoctorProfile({ doctor, index }) {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const isReversed = index % 2 !== 0

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-start ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      {/* Profile Visual – Real Photo */}
      <div className={`lg:col-span-2 ${isReversed ? 'lg:order-2' : ''}`}>
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
          <LazyImage
            src={doctorImages[doctor.id]}
            alt={doctor.name}
            className="absolute inset-0 w-full h-full"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
          {/* Name overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">{doctor.name}</h3>
            <p className="text-primary-200 text-xs sm:text-sm mt-1">{doctor.speciality}</p>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
        </div>
      </div>

      {/* Profile Details */}
      <div className={`lg:col-span-3 ${isReversed ? 'lg:order-1' : ''}`}>
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-navy-100/50 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-navy-900 font-heading mb-1">{doctor.name}</h3>
          <p className="text-primary-600 font-medium text-sm sm:text-base mb-3 sm:mb-4">{doctor.title}</p>

          {/* Philosophy */}
          <blockquote className="relative pl-4 sm:pl-5 border-l-4 border-primary-400 mb-6 sm:mb-8 py-1 sm:py-2">
            <p className="text-navy-600 italic text-sm sm:text-lg leading-relaxed">
              &ldquo;{doctor.philosophy}&rdquo;
            </p>
          </blockquote>

          {/* Qualifications */}
          <div className="mb-6 sm:mb-8">
            <h4 className="flex items-center gap-2 text-xs sm:text-sm font-bold text-navy-800 uppercase tracking-wider mb-3 sm:mb-4">
              <FaGraduationCap className="text-primary-600" /> Qualifications & Certifications
            </h4>
            <div className="space-y-2 sm:space-y-3">
              {doctor.qualifications.map((qual) => (
                <div key={qual} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-50 flex items-center justify-center shrink-0 mt-0.5">
                    <FaCheck className="text-primary-600 text-[8px] sm:text-xs" />
                  </div>
                  <span className="text-navy-600 text-xs sm:text-base">{qual}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Areas of Expertise */}
          <div>
            <h4 className="flex items-center gap-2 text-xs sm:text-sm font-bold text-navy-800 uppercase tracking-wider mb-3 sm:mb-4">
              <FaAward className="text-accent" /> Areas of Expertise
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {doctor.expertise.map((exp) => (
                <span
                  key={exp}
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-primary-50 text-primary-700 rounded-lg font-medium"
                >
                  {exp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ValuesSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const values = [
    {
      icon: '🏥',
      title: 'Modern Facility',
      description: 'State-of-the-art equipment and a clean, welcoming clinical environment.'
    },
    {
      icon: '❤️',
      title: 'Patient-First Care',
      description: 'Every treatment plan is personalized to meet your unique health needs.'
    },
    {
      icon: '💰',
      title: 'Affordable Excellence',
      description: 'World-class treatment at prices that are accessible to everyone.'
    },
    {
      icon: '🏆',
      title: 'Certified Experts',
      description: 'Our doctors hold certifications from internationally recognized institutions.'
    },
  ]

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-10 sm:mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-4">
            Our Values
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-navy-900 mb-4">
            Why Choose <span className="gradient-text">SM2</span>?
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`bg-white rounded-2xl p-5 sm:p-8 border border-navy-100/50 text-center card-hover ${isInView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <span className="text-3xl sm:text-4xl block mb-3 sm:mb-4">{value.icon}</span>
              <h3 className="text-sm sm:text-lg font-bold text-navy-900 mb-1 sm:mb-2">{value.title}</h3>
              <p className="text-xs sm:text-sm text-navy-500 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
