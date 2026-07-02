import React, { useState, useEffect } from 'react'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [goldLink, setGoldLink] = useState(null)

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

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv_professional.docx'
    link.download = 'Majed_Maher_Jammoul_CV.docx'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navLinks = [
    { key: 'about', href: '#about', label: 'About' },
    { key: 'stack', href: '#stack', label: 'Stack' },
    { key: 'projects', href: '#projects', label: 'Projects' },
    { key: 'contact', href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] px-4 sm:px-8 h-[4.25rem] flex items-center justify-between backdrop-blur-[20px] border-b border-[#D4AF37]/10 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0a]/95'
            : 'bg-[#0a0a0a]/70'
        }`}
      >
        <a href="#hero" className="font-serif text-2xl font-bold text-[#D4AF37] tracking-wider no-underline">
          M<span className="text-[#fdfdfd] font-light">.</span>Dev
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map(({ key, href, label }) => (
            <li key={key}>
              <a
                href={href}
                onMouseEnter={() => setGoldLink(key)}
                onClick={() => setGoldLink(key)}
                style={{ color: goldLink === key ? '#D4AF37' : undefined }}
                className="text-[#c9c9c9] no-underline text-[0.8rem] font-normal tracking-[0.12em] uppercase transition-colors duration-300 relative 
                  after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-px after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Download CV Button */}
        <button
          onClick={handleDownloadCV}
          className="hidden md:inline-block px-5 py-[0.45rem] border border-[#D4AF37] text-[#D4AF37] no-underline text-[0.75rem] tracking-widest uppercase rounded-[3px] transition-all duration-300 font-medium hover:bg-[#D4AF37] hover:text-[#0a0a0a] cursor-pointer"
        >
          Download CV
        </button>

        <button
          className="flex flex-col gap-1.5 cursor-pointer border-none bg-transparent p-2 md:hidden z-50"
          onClick={toggleMobileMenu}
          aria-label="Open menu"
        >
          {/* Line 1 */}
          <span className={`w-6 h-0.5 bg-[#D4AF37] transition-all duration-300 block ${
            isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}></span>
          {/* Line 2 */}
          <span className={`w-6 h-0.5 bg-[#D4AF37] transition-all duration-300 block ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}></span>
          {/* Line 3 */}
          <span className={`w-6 h-0.5 bg-[#D4AF37] transition-all duration-300 block ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[4.25rem] left-0 right-0 bg-[#0a0a0a]/97 backdrop-blur-[20px] px-8 py-6 border-b border-[#D4AF37]/10 z-[999] flex-col gap-5 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'flex' : 'hidden'
        }`}
      >
        {navLinks.map(({ key, href, label }) => (
          <a
            key={key}
            href={href}
            onMouseEnter={() => setGoldLink(key)}
            onClick={() => {
              setGoldLink(key)
              closeMobileMenu()
            }}
            style={{ color: goldLink === key ? '#D4AF37' : undefined }}
            className="text-[#c9c9c9] no-underline text-[0.85rem] tracking-widest uppercase py-2 transition-colors duration-300 hover:text-[#D4AF37]"
          >
            {label}
          </a>
        ))}
        <button
          onClick={() => {
            handleDownloadCV()
            closeMobileMenu()
          }}
          className="text-[#c9c9c9] no-underline text-[0.85rem] tracking-widest uppercase py-2 hover:text-[#D4AF37] transition-colors duration-300 text-left bg-transparent border-none cursor-pointer"
        >
          Download CV
        </button>
      </div>
    </>
  )
}

export default Navbar
