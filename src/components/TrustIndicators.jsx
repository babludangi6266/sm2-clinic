import { useCountUp } from '../hooks/useInView'
import { FaTooth, FaUserMd, FaAward, FaSmile } from 'react-icons/fa'

const stats = [
  { icon: FaTooth, value: 10, suffix: '+', label: 'Years of Experience', color: 'text-primary-500' },
  { icon: FaSmile, value: 5000, suffix: '+', label: 'Happy Patients', color: 'text-accent' },
  { icon: FaUserMd, value: 2, suffix: '', label: 'Expert Doctors', color: 'text-primary-600' },
  { icon: FaAward, value: 15, suffix: '+', label: 'Certifications', color: 'text-navy-600' },
]

export default function TrustIndicators() {
  return (
    <section className="relative bg-[#f8fafb] py-10 sm:py-14 lg:py-16 px-4" id="trust-indicators">
      <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, index }) {
  const [ref, count] = useCountUp(stat.value, 2000)
  const Icon = stat.icon

  return (
    <div
      ref={ref}
      className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500 border border-navy-100/50 card-hover"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Hover Gradient */}
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary-50 ${stat.color} mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="text-base sm:text-2xl" />
        </div>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 mb-0.5 sm:mb-1">
          {count}{stat.suffix}
        </p>
        <p className="text-[10px] sm:text-sm text-navy-500 font-medium">{stat.label}</p>
      </div>
    </div>
  )
}
