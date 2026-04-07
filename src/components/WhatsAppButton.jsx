import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918917592963?text=Hi,%20I%20want%20to%20book%20an%20appointment%20at%20SM2%20Health%20and%20Aesthetics"
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-float"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse Ring */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
        {/* Button */}
        <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:shadow-xl group-hover:shadow-green-500/40 group-hover:scale-110 transition-all duration-300">
          <FaWhatsapp className="text-white text-2xl" />
        </div>
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-navy-900 text-white text-sm rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
          Chat with us
          <div className="absolute top-full right-5 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-navy-900" />
        </div>
      </div>
    </a>
  )
}
