import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ScrollReveal from './ScrollReveal'

function Contact() {
  const form = useRef()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  })

  // Get values from environment variables
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setIsError(false)

    // Check if environment variables are set
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables are not set!')
      setIsError(true)
      setIsLoading(false)
      return
    }

    // Send email using EmailJS
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully!', result.text)
        setIsSubmitted(true)
        setIsLoading(false)
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            message: ''
          })
        }, 3000)
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text)
        setIsError(true)
        setIsLoading(false)
        setTimeout(() => setIsError(false), 5000)
      })
  }

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--obsidian-2)' }}>
      <div className="section-inner">
        <ScrollReveal>
          <div className="section-label justify-center">04 — Get in Touch</div>
          <h2 className="section-title text-center">
            Let's Build Something<br />
            <span className="gold">Extraordinary</span>
          </h2>
          <div className="divider mx-auto my-6"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 items-start">
          <ScrollReveal direction="left">
            <p className="text-[0.92rem] leading-[1.9] mb-8" style={{ color: 'var(--ivory-dim)' }}>
              I'm currently open to new opportunities — whether it's a full-time role, 
              a contract project, or a technical consultation. Let's discuss how I can 
              bring value to your team.
            </p>
            
            <div className="flex flex-col gap-4">
              <a href="mailto:majdjammoul89@gmail.com" className="contact-method">
                <div className="w-9 h-9 border border-gold/20 rounded-full flex items-center justify-center text-gold shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="text-[0.82rem]">
                  <div className="text-[0.65rem] tracking-widest uppercase mb-0.5" style={{ color: 'var(--ivory-muted)' }}>Email</div>
                  majdjammoul89@gmail.com
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/majed-jammoul/" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="w-9 h-9 border border-gold/20 rounded-full flex items-center justify-center text-gold shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="text-[0.82rem]">
                  <div className="text-[0.65rem] tracking-widest uppercase mb-0.5" style={{ color: 'var(--ivory-muted)' }}>LinkedIn</div>
                  linkedin.com/in/majed-jammoul/
                </div>
              </a>
              
              <a href="https://github.com/MajedJammoul19" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="w-9 h-9 border border-gold/20 rounded-full flex items-center justify-center text-gold shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </div>
                <div className="text-[0.82rem]">
                  <div className="text-[0.65rem] tracking-widest uppercase mb-0.5" style={{ color: 'var(--ivory-muted)' }}>GitHub</div>
                  github.com/MajedJammoul19
                </div>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <form ref={form} className="p-10 border border-gold/15 rounded-lg backdrop-blur-[20px]" style={{ background: 'rgba(255,255,255,0.02)' }} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block text-[0.68rem] tracking-[0.15em] uppercase font-medium" style={{ color: 'var(--ivory-muted)' }}>First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-[0.85rem] border border-gold/12 rounded-sm text-ivory text-[0.9rem] font-sans transition-all duration-300 outline-none focus:border-gold/50 focus:shadow-[0_0_0_3px_rgba(212,175,55,0.08)]" 
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                    placeholder="John" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[0.68rem] tracking-[0.15em] uppercase font-medium" style={{ color: 'var(--ivory-muted)' }}>Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-[0.85rem] border border-gold/12 rounded-sm text-ivory text-[0.9rem] font-sans transition-all duration-300 outline-none focus:border-gold/50 focus:shadow-[0_0_0_3px_rgba(212,175,55,0.08)]" 
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                    placeholder="Smith" 
                  />
                </div>
              </div>
              
              <div className="space-y-1.5 mt-5">
                <label className="block text-[0.68rem] tracking-[0.15em] uppercase font-medium" style={{ color: 'var(--ivory-muted)' }}>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-[0.85rem] border border-gold/12 rounded-sm text-ivory text-[0.9rem] font-sans transition-all duration-300 outline-none focus:border-gold/50 focus:shadow-[0_0_0_3px_rgba(212,175,55,0.08)]" 
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                  placeholder="john@company.com" 
                />
              </div>
              
              <div className="space-y-1.5 mt-5">
                <label className="block text-[0.68rem] tracking-[0.15em] uppercase font-medium" style={{ color: 'var(--ivory-muted)' }}>Company / Role</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-[0.85rem] border border-gold/12 rounded-sm text-ivory text-[0.9rem] font-sans transition-all duration-300 outline-none focus:border-gold/50 focus:shadow-[0_0_0_3px_rgba(212,175,55,0.08)]" 
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                  placeholder="Acme Corp — Engineering Manager" 
                />
              </div>
              
              <div className="space-y-1.5 mt-5">
                <label className="block text-[0.68rem] tracking-[0.15em] uppercase font-medium" style={{ color: 'var(--ivory-muted)' }}>Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-[0.85rem] border border-gold/12 rounded-sm text-ivory text-[0.9rem] font-sans transition-all duration-300 outline-none resize-y min-h-30 leading-relaxed focus:border-gold/50 focus:shadow-[0_0_0_3px_rgba(212,175,55,0.08)]" 
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                  placeholder="Tell me about your project, timeline, and how I can help..."
                ></textarea>
              </div>
              
              {isError && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded text-red-400 text-sm">
                  Failed to send message. Please try again or contact me directly via email.
                </div>
              )}
              
              <button 
                type="submit" 
                className={`w-full py-[0.9rem] text-obsidian border-none text-[0.78rem] tracking-[0.15em] uppercase font-bold cursor-pointer rounded-sm font-sans transition-all duration-300 mt-5 flex items-center justify-center gap-2 ${
                  isSubmitted ? 'text-white' : ''
                }`}
                style={{ 
                  background: isSubmitted ? 'var(--accent-emerald)' : 'var(--gold)',
                  color: isSubmitted ? 'white' : 'var(--obsidian)'
                }}
                disabled={isSubmitted || isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default Contact