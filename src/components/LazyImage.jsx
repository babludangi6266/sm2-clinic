import { useState, useRef, useEffect } from 'react'

export default function LazyImage({ src, alt, className = '', ...props }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    if (imgRef.current) observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [])

  if (hasError) {
    return (
      <div
        ref={imgRef}
        className={`bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center ${className}`}
        {...props}
      >
        <div className="text-center p-4">
          <span className="text-4xl block mb-2">🏥</span>
          <span className="text-sm text-primary-700 font-medium">SM2 Health</span>
        </div>
      </div>
    )
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} {...props}>
      {/* Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-navy-100 to-primary-50 animate-pulse" />
      )}

      {/* Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
      )}
    </div>
  )
}
