import React, { useState, useEffect } from 'react'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Handle CV download
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a')
    // Path to CV file in public folder
    link.href = '/cv_professional.docx'
    // Name the file will be saved as
    link.download = 'Majed_Maher_Jammoul_CV.docx'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-1000 px-8 h-17 flex items-center justify-between backdrop-blur-[20px] border-b border-gold/10 transition-all duration-300 ${
          isScrolled 
            ? 'bg-obsidian/95' 
            : 'bg-obsidian/70'
        }`}
      >
        <a href="#hero" className="font-serif text-2xl font-bold text-gold tracking-wider no-underline">
          M<span className="text-ivory font-light">.</span>Dev
        </a>
        
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <a 
              href="#about" 
              className="text-ivory-dim no-underline text-[0.8rem] font-normal tracking-[0.12em] uppercase transition-colors duration-300 hover:text-gold relative 
                after:content-[''] after:absolute after:-bottom-0-5 after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#stack" 
              className="text-ivory-dim no-underline text-[0.8rem] font-normal tracking-[0.12em] uppercase transition-colors duration-300 hover:text-gold relative 
                after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              Stack
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="text-ivory-dim no-underline text-[0.8rem] font-normal tracking-[0.12em] uppercase transition-colors duration-300 hover:text-gold relative 
                after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-ivory-dim no-underline text-[0.8rem] font-normal tracking-[0.12em] uppercase transition-colors duration-300 hover:text-gold relative 
                after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
          </li>
        </ul>
        
        <button 
          onClick={handleDownloadCV}
          className="hidden md:inline-block px-5 py-[0.45rem] border border-gold text-gold no-underline text-[0.75rem] tracking-widest uppercase rounded-[3px] transition-all duration-300 font-medium hover:bg-gold hover:text-obsidian cursor-pointer"
        >
          Download CV
        </button>
        
        <button 
          className="flex flex-col gap-1.25 cursor-pointer border-none bg-transparent p-1 md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Open menu"
        >
          <span className="w-5.5 h-[1.5px] bg-ivory transition-all duration-300 block"></span>
          <span className="w-5.5 h-[1.5px] bg-ivory transition-all duration-300 block"></span>
          <span className="w-5.5 h-[1.5px] bg-ivory transition-all duration-300 block"></span>
        </button>
      </nav>
      
      <div 
        className={`fixed top-17 left-0 right-0 bg-obsidian/97 backdrop-blur-[20px] px-8 py-6 border-b border-gold/10 z-999 flex-col gap-5 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'flex' : 'hidden'
        }`}
      >
        <a 
          href="#about" 
          onClick={closeMobileMenu} 
          className="text-ivory-dim no-underline text-[0.85rem] tracking-widest uppercase py-2 hover:text-gold transition-colors duration-300"
        >
          About
        </a>
        <a 
          href="#stack" 
          onClick={closeMobileMenu} 
          className="text-ivory-dim no-underline text-[0.85rem] tracking-widest uppercase py-2 hover:text-gold transition-colors duration-300"
        >
          Stack
        </a>
        <a 
          href="#projects" 
          onClick={closeMobileMenu} 
          className="text-ivory-dim no-underline text-[0.85rem] tracking-widest uppercase py-2 hover:text-gold transition-colors duration-300"
        >
          Projects
        </a>
        <a 
          href="#contact" 
          onClick={closeMobileMenu} 
          className="text-ivory-dim no-underline text-[0.85rem] tracking-widest uppercase py-2 hover:text-gold transition-colors duration-300"
        >
          Contact
        </a>
        <button 
          onClick={() => {
            handleDownloadCV()
            closeMobileMenu()
          }}
          className="text-ivory-dim no-underline text-[0.85rem] tracking-widest uppercase py-2 hover:text-gold transition-colors duration-300 text-left bg-transparent border-none cursor-pointer"
        >
          Download CV
        </button>
      </div>
    </>
  )
}

export default Navbar