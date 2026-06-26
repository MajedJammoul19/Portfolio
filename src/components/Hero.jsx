import React, { useEffect } from 'react'
import cvFile from '../assets/cv_professional.docx' // Import your CV file
import profilePhoto from '../assets/profile-photo.jpg'
function Hero() {
  useEffect(() => {
    const sequence = [
      { id: 'heroEyebrow', delay: 200 },
      { id: 'heroName', delay: 400 },
      { id: 'heroRole', delay: 650 },
      { id: 'heroTagline', delay: 850 },
      { id: 'heroActions', delay: 1050 },
      { id: 'heroSocials', delay: 1250 },
      { id: 'heroImage', delay: 400 },
    ]

    sequence.forEach(({ id, delay }) => {
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.style.opacity = '1'
          element.style.transform = 'none'
          element.style.transition = 'all 0.8s cubic-bezier(0.16,1,0.3,1)'
        }
      }, delay)
    })
  }, [])

  // Handle CV download
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a')
    link.href = cvFile
    link.download = 'Majed_Maher_Jammoul_CV.docx' // The name the file will be saved as
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen flex items-center px-8 md:px-8 relative overflow-hidden" id="hero">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(212,175,55,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(59,111,212,0.04) 0%, transparent 60%)'
      }}></div>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)'
      }}></div>
      
      <div className="max-w-[1100px] mx-auto w-full pt-20 relative z-10">
        {/* Two column layout for text and image */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left side - Text content */}
          <div className="flex-1">
            <div id="heroEyebrow" className="inline-flex items-center gap-3 text-[0.72rem] tracking-[0.25em] uppercase text-gold mb-6">
              <span className="w-[30px] h-px bg-gold/50"></span>
              Available for Opportunities
              <span className="w-[30px] h-px bg-gold/50"></span>
            </div>
            
            <h1 id="heroName" className="font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.02em] mb-4">
              <div>
                <span className="shimmer-text">
                  Majed
                </span>
              </div>
              <div className="text-gold/25 text-[0.85em]">Jammoul</div>
            </h1>
            
            <div id="heroRole" className="text-[clamp(1rem,2vw,1.4rem)] text-gold font-serif font-light tracking-[0.05em] mb-6">
              MERN Stack Developer &amp; Software Architect
            </div>
            
            <p id="heroTagline" className="max-w-[520px] text-[0.95rem] text-ivory-dim leading-relaxed mb-10 font-light">
              Crafting scalable, high-performance web applications with MongoDB, 
              Express.js, React, and Node.js. Transforming complex problems into 
              elegant digital experiences.
            </p>
            
            <div id="heroActions" className="flex gap-4 items-center flex-wrap">
              <button onClick={handleDownloadCV} className="btn-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </button>
              <a href="#contact" className="btn-outline">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                Contact Me
              </a>
            </div>
            
            <div id="heroSocials" className="flex gap-5 mt-8">
              <a href="https://github.com/MajedJammoul19" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center no-underline text-ivory-dim transition-all duration-300 hover:border-gold hover:text-gold hover:scale-110 hover:rotate-[5deg]" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/majed-jammoul/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center no-underline text-ivory-dim transition-all duration-300 hover:border-gold hover:text-gold hover:scale-110 hover:rotate-[5deg]" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div id="heroImage" className="flex-1 flex justify-center items-center opacity-0">
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl animate-pulse"></div>
              
              {/* Image container with border glow */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gold/30 shadow-[0_0_60px_rgba(212,175,55,0.15)]">
                {/* Replace the src with your image path */}
                <img 
                  src={profilePhoto}
                  alt="Majed Jammoul" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient for effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent"></div>
              </div>
              
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border border-gold/10 animate-spin-slow"></div>
              <div className="absolute -inset-8 rounded-full border border-gold/5 animate-spin-slower"></div>
              
              {/* Small decorative dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gold/40"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-gold/30"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero