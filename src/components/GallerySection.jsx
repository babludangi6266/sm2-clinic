import { useState, useRef } from 'react'
import { FiX, FiChevronLeft, FiChevronRight, FiPlay, FiAward, FiImage, FiVideo } from 'react-icons/fi'
import { useInView } from '../hooks/useInView'
import { galleryImages, galleryVideos, awardImages } from '../data/media'
import LazyImage from './LazyImage'

const tabs = [
  { id: 'gallery', label: 'Gallery', icon: FiImage },
  { id: 'awards', label: 'Awards & Certificates', icon: FiAward },
  { id: 'videos', label: 'Videos', icon: FiVideo },
]

export default function GallerySection() {
  const [ref, isInView] = useInView({ threshold: 0.05 })
  const [activeTab, setActiveTab] = useState('gallery')
  const [lightbox, setLightbox] = useState({ open: false, index: 0, type: 'gallery' })

  const openLightbox = (index, type) => {
    setLightbox({ open: true, index, type })
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightbox({ ...lightbox, open: false })
    document.body.style.overflow = ''
  }

  const getItems = () => {
    if (lightbox.type === 'awards') return awardImages
    return galleryImages
  }

  const navigateLightbox = (dir) => {
    const items = getItems()
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + dir + items.length) % items.length,
    }))
  }

  return (
    <>
      <section id="gallery" className="section-padding bg-[#f8fafb]" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className={`text-center max-w-3xl mx-auto mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-medium rounded-full mb-4">
              Media
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-navy-900 mb-4">
              Our <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-lg text-navy-500">
              A glimpse into our clinic, achievements, and the care we provide.
            </p>
          </div>

          {/* Tabs */}
          <div className={`flex justify-center gap-2 mb-10 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                      : 'bg-white text-navy-600 border border-navy-200 hover:bg-primary-50 hover:text-primary-700'
                  }`}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Gallery Grid */}
          {activeTab === 'gallery' && (
            <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index, 'gallery')}
                  className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${
                    // Make first and every 5th item span 2 columns on larger screens
                    index % 5 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                  }`}
                >
                  <LazyImage
                    src={img.src}
                    alt={img.alt}
                    className={`w-full ${index % 5 === 0 ? 'aspect-square' : 'aspect-[4/3]'}`}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">View</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Awards Grid */}
          {activeTab === 'awards' && (
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              {awardImages.map((award, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index, 'awards')}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-navy-100/50 card-hover text-left"
                >
                  <LazyImage
                    src={award.src}
                    alt={award.title}
                    className="w-full aspect-[4/3]"
                  />
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <FiAward className="text-accent" size={18} />
                      <span className="text-xs text-primary-600 font-medium uppercase tracking-wider">
                        Achievement
                      </span>
                    </div>
                    <h3 className="font-bold text-navy-900">{award.title}</h3>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          )}

          {/* Videos Grid */}
          {activeTab === 'videos' && (
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              {galleryVideos.map((video, index) => (
                <VideoCard key={index} video={video} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox.open && (
        <Lightbox
          items={getItems()}
          currentIndex={lightbox.index}
          onClose={closeLightbox}
          onNext={() => navigateLightbox(1)}
          onPrev={() => navigateLightbox(-1)}
        />
      )}
    </>
  )
}

function VideoCard({ video }) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="relative bg-navy-900 rounded-2xl overflow-hidden shadow-xl group">
      <video
        ref={videoRef}
        src={video.src}
        className="w-full aspect-video object-cover"
        preload="metadata"
        playsInline
        onEnded={() => setIsPlaying(false)}
        onClick={togglePlay}
      />
      {/* Play overlay */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex flex-col items-center justify-center bg-navy-900/40 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-navy-900/50"
        >
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
            <FiPlay className="text-white text-2xl ml-1" />
          </div>
          <span className="text-white font-medium text-sm">{video.title}</span>
        </button>
      )}
    </div>
  )
}

function Lightbox({ items, currentIndex, onClose, onNext, onPrev }) {
  const item = items[currentIndex]

  return (
    <div
      className="fixed inset-0 z-[100] bg-navy-900/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <FiX size={24} />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-5 text-white/60 text-sm">
        {currentIndex + 1} / {items.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
        aria-label="Previous"
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
        aria-label="Next"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Image */}
      <div
        className="max-w-5xl max-h-[85vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt || item.title || ''}
          className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
        />
        {item.title && (
          <p className="text-white text-center mt-4 font-medium">{item.title}</p>
        )}
      </div>
    </div>
  )
}
