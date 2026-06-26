import React from 'react'

function Footer() {
  return (
    <footer className="px-8 py-10 border-t border-gold/10 text-center">
      <div className="max-w-275 mx-auto flex justify-between items-center flex-wrap gap-4">
        <p className="text-[0.78rem] text-ivory-muted">
          © 2024 <span className="text-gold">Alexandre Dubois</span>. Designed &amp; built with precision.
        </p>
        <div className="flex gap-6">
          <a href="#about" className="text-[0.72rem] text-ivory-muted no-underline tracking-[0.08em] uppercase transition-colors duration-300 hover:text-gold">About</a>
          <a href="#stack" className="text-[0.72rem] text-ivory-muted no-underline tracking-[0.08em] uppercase transition-colors duration-300 hover:text-gold">Stack</a>
          <a href="#projects" className="text-[0.72rem] text-ivory-muted no-underline tracking-[0.08em] uppercase transition-colors duration-300 hover:text-gold">Projects</a>
          <a href="#contact" className="text-[0.72rem] text-ivory-muted no-underline tracking-[0.08em] uppercase transition-colors duration-300 hover:text-gold">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer