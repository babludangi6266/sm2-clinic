import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { clinicImages } from '../data/media'

import HeroSection from '../components/HeroSection'
import TrustIndicators from '../components/TrustIndicators'
import ServicesSection from '../components/ServiceCard'
import TreatmentsGrid from '../components/TreatmentsGrid'
import DoctorsSection from '../components/DoctorCard'
import BookingSection from '../components/BookingSection'
import TestimonialSection from '../components/TestimonialSection'
import GallerySection from '../components/GallerySection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustIndicators />
      <AboutClinicSection />
      <ServicesSection />
      <TreatmentsGrid />
      <DoctorsSection />
      <BookingSection />
      <TestimonialSection />
      <GallerySection />
    </main>
  )
}

function AboutClinicSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [currentImg, setCurrentImg] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % clinicImages.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about-clinic" className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Image – Clinic Photo Slideshow */}
          <div className={`relative ${isInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/10 aspect-[4/3]">
              {/* Clinic Photo Slideshow */}
              {clinicImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`SM2 Clinic ${index + 1}`}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${index === currentImg ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                />
              ))}
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />

              {/* Stats on image */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="glass-dark rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <img src="/sm2-logo.webp" alt="SM2 Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white font-heading">Health & Aesthetics</h3>
                      <p className="text-primary-300 text-[10px] sm:text-xs tracking-wider">EST. BHUBANESWAR</p>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4 mt-2">
                    <div className="text-center">
                      <p className="text-sm sm:text-lg font-bold text-white">10+</p>
                      <p className="text-[10px] sm:text-xs text-primary-200">Years</p>
                    </div>
                    <div className="w-px bg-white/20" />
                    <div className="text-center">
                      <p className="text-sm sm:text-lg font-bold text-white">5000+</p>
                      <p className="text-[10px] sm:text-xs text-primary-200">Patients</p>
                    </div>
                    <div className="w-px bg-white/20" />
                    <div className="text-center">
                      <p className="text-sm sm:text-lg font-bold text-white">4.9★</p>
                      <p className="text-[10px] sm:text-xs text-primary-200">Rating</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide indicators */}
              <div className="absolute top-4 right-4 flex gap-1">
                {clinicImages.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${i === currentImg ? 'w-5 bg-white' : 'w-1 bg-white/40'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-primary-100 rounded-2xl -z-10" />
            <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-12 sm:w-16 h-12 sm:h-16 bg-accent-light rounded-2xl -z-10" />
          </div>

          {/* Right Content */}
          <div className={`${isInView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-navy-900 mb-4 sm:mb-6">
              Where Expertise Meets <span className="gradient-text">Compassion</span>
            </h2>
            <p className="text-navy-500 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              SM2 Health and Aesthetics is a premier multi-speciality clinic offering comprehensive dental, aesthetic, and general medical care with a strong focus on patient well-being and affordability.
            </p>
            <p className="text-navy-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Located in the heart of Bhubaneswar, our clinic combines cutting-edge technology with personalized care plans. Our team of certified specialists ensures that every patient receives world-class treatment in a warm and welcoming environment.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
                'Patient-First Philosophy',
                'Affordable Excellence',
                'Modern Equipment',
                'Certified Specialists',
              ].map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                    <span className="text-primary-600 text-[10px] sm:text-xs">✓</span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-navy-700">{point}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:-translate-y-0.5 group active:scale-[0.98]"
            >
              Learn More About Us
              <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
