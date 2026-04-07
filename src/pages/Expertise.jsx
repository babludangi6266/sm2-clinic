import { useState } from 'react'
import { FaTooth, FaStethoscope, FaSpa, FaChevronDown, FaChevronUp, FaCheck } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'
import { dentalExpertise, generalMedicine, treatments } from '../data/services'
import { expertiseImages } from '../data/media'
import LazyImage from '../components/LazyImage'

const tabs = [
  { id: 'dental', label: 'Dental Expertise', icon: FaTooth },
  { id: 'medicine', label: 'General Medicine', icon: FaStethoscope },
  { id: 'treatments', label: 'All Treatments', icon: FaSpa },
]

export default function Expertise() {
  const [activeTab, setActiveTab] = useState('dental')
  const [ref, isInView] = useInView({ threshold: 0.05 })

  return (
    <main>
      {/* Hero Banner with Expertise Image */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900" />

        {/* Background Image that changes with tab */}
        {Object.entries(expertiseImages).map(([key, src]) => (
          <img
            key={key}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              activeTab === key ? 'opacity-20' : 'opacity-0'
            }`}
          />
        ))}

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full filter blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-300 text-sm font-medium rounded-full mb-4 border border-white/10">
            Our Expertise
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-4">
            Specialized <span className="gradient-text-gold">Healthcare</span>
          </h1>
          <p className="text-sm sm:text-lg text-navy-200 max-w-2xl mx-auto">
            Comprehensive dental, medical, and aesthetic services delivered by certified specialists with years of experience.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-16 lg:top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-navy-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-2 sm:py-3 scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary-50 text-primary-700 shadow-sm'
                      : 'text-navy-500 hover:text-navy-700 hover:bg-navy-50'
                  }`}
                >
                  <Icon size={14} />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Content with Side Image */}
      <section className="section-padding bg-[#f8fafb]" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left: Expertise Image – changes with tab */}
            <div className="lg:col-span-1 order-first">
              <div className="lg:sticky lg:top-36">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-[3/4]">
                  {Object.entries(expertiseImages).map(([key, src]) => (
                    <img
                      key={key}
                      src={src}
                      alt={`${key} expertise`}
                      loading="lazy"
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                        activeTab === key ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      }`}
                    />
                  ))}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <div className="glass-dark rounded-xl p-3 sm:p-4">
                      <p className="text-white font-bold text-sm sm:text-base font-heading">
                        {activeTab === 'dental' && 'Dental Care'}
                        {activeTab === 'medicine' && 'General Medicine'}
                        {activeTab === 'treatments' && 'Skin & Aesthetics'}
                      </p>
                      <p className="text-primary-300 text-[10px] sm:text-xs mt-0.5">
                        SM2 Health & Aesthetics
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick CTA below image */}
                <a
                  href="https://calendly.com/sharmisthabolt007/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full mt-4 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Book Consultation <FiArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-2">
              {activeTab === 'dental' && <DentalSection isInView={isInView} />}
              {activeTab === 'medicine' && <MedicineSection isInView={isInView} />}
              {activeTab === 'treatments' && <TreatmentsSection isInView={isInView} />}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-4">Need Expert Consultation?</h2>
          <p className="text-primary-100 mb-6 sm:mb-8 text-sm sm:text-lg">
            Our specialists are ready to help you with personalized treatment plans.
          </p>
          <a
            href="https://calendly.com/sharmisthabolt007/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Book Appointment <FiArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  )
}

function DentalSection({ isInView }) {
  return (
    <div className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900 mb-3 sm:mb-4">
          Dental <span className="gradient-text">Expertise</span>
        </h2>
        <p className="text-sm sm:text-base text-navy-500 max-w-2xl">
          Our dental team brings specialized expertise in a wide range of oral health disciplines, from routine care to complex surgical procedures.
        </p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {dentalExpertise.map((item, index) => (
          <AccordionItem key={item.name} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}

function MedicineSection({ isInView }) {
  return (
    <div className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900 mb-3 sm:mb-4">
          General Medicine <span className="gradient-text">Services</span>
        </h2>
        <p className="text-sm sm:text-base text-navy-500 max-w-2xl">
          Comprehensive medical care covering diagnostics, chronic disease management, infectious disease treatment, and preventive health.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-5">
        {generalMedicine.map((item, index) => (
          <div
            key={item.name}
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-navy-100/50 card-hover"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-3 mb-2 sm:mb-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-navy-100 flex items-center justify-center shrink-0 mt-0.5">
                <FaStethoscope className="text-navy-600 text-xs sm:text-sm" />
              </div>
              <h3 className="font-bold text-navy-900 text-sm sm:text-base">{item.name}</h3>
            </div>
            <p className="text-xs sm:text-sm text-navy-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function TreatmentsSection({ isInView }) {
  return (
    <div className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900 mb-3 sm:mb-4">
          All <span className="gradient-text">Treatments</span>
        </h2>
        <p className="text-sm sm:text-base text-navy-500 max-w-2xl">
          Browse our complete list of dental treatments, each delivered with precision care and modern techniques.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
        {treatments.map((treatment, index) => (
          <div
            key={treatment.name}
            className="group flex items-center gap-3 sm:gap-4 bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-navy-100/50 card-hover"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <span className="text-2xl sm:text-3xl group-hover:scale-125 transition-transform duration-300">{treatment.icon}</span>
            <div>
              <h3 className="font-semibold text-navy-900 text-xs sm:text-sm">{treatment.name}</h3>
              <p className="text-[10px] sm:text-xs text-primary-600 capitalize">{treatment.category}</p>
            </div>
            <FaCheck className="ml-auto text-primary-400 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  )
}

function AccordionItem({ item, index }) {
  const [isOpen, setIsOpen] = useState(index === 0)

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl border border-navy-100/50 overflow-hidden card-hover">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
            <FaTooth className="text-primary-600 text-sm" />
          </div>
          <h3 className="text-sm sm:text-lg font-bold text-navy-900">{item.name}</h3>
        </div>
        {isOpen ? (
          <FaChevronUp className="text-navy-400 shrink-0 text-sm" />
        ) : (
          <FaChevronDown className="text-navy-400 shrink-0 text-sm" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-navy-500 text-xs sm:text-base leading-relaxed pl-14 sm:pl-20">{item.desc}</p>
      </div>
    </div>
  )
}
