import { useInView } from '../hooks/useInView'
import { treatments } from '../data/services'

export default function TreatmentsGrid() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="treatments" className="section-padding bg-[#f8fafb]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-10 sm:mb-16 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-4">
            Treatments
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-heading text-navy-900 mb-3 sm:mb-4">
            Treatments We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-sm sm:text-lg text-navy-500">
            A comprehensive range of dental and medical treatments tailored to your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 sm:gap-4 lg:gap-5">
          {treatments.map((treatment, index) => (
            <div
              key={treatment.name}
              className={`group relative bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-5 text-center border border-navy-100/50 card-hover cursor-default ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {/* Hover bg */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <span className="text-2xl sm:text-3xl mb-2 sm:mb-3 block group-hover:scale-125 transition-transform duration-300">
                  {treatment.icon}
                </span>
                <p className="text-[11px] sm:text-sm font-semibold text-navy-800 group-hover:text-white transition-colors duration-300 leading-tight">
                  {treatment.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
