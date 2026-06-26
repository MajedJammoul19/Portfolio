import React, { useEffect, useRef } from 'react'

function ScrollReveal({ children, direction = 'up', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, delay * 1000)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getRevealClass = () => {
    switch (direction) {
      case 'left': return 'reveal-left'
      case 'right': return 'reveal-right'
      default: return 'reveal'
    }
  }

  return (
    <div ref={ref} className={getRevealClass()} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

export default ScrollReveal