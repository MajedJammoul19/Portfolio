import React from 'react'
import ScrollReveal from './ScrollReveal'

const projects = [
  {
    title: 'Clinics Booking System',
    description: 'A comprehensive clinic appointment booking platform with real-time availability, dynamic scheduling, and advanced search filtering by specialty. Features reusable React components, client-side form validation, and a responsive interface for seamless patient-doctor connections.',
    badge: 'Full Stack',
    tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'Vite'],
    color: 'rgba(212,175,55,0.2)',
    liveLink: 'https://doctor-appointment-app-flame-sigma.vercel.app/',
    githubLink: 'https://github.com/MajedJammoul19/doctor-appointment-app.git'
  },
  {
    title: 'Connext',
    description: 'A full-featured social media platform with secure authentication, image upload capabilities, post management, and real-time content updates. Built with Redux Toolkit for global state management and Appwrite for backend services and cloud storage integration.',
    badge: 'Full Stack',
    tags: ['React.js', 'Redux Toolkit', 'Node.js', 'Appwrite', 'Tailwind CSS'],
    color: 'rgba(59,111,212,0.2)',
    liveLink: 'https://social-media-mu-khaki.vercel.app/',
    githubLink: 'https://github.com/MajedJammoul19/Social-media.git'
  },
  {
    title: 'QuickShow',
    description: 'A full-stack cinema booking platform featuring secure authentication with Clerk, protected routes, and real-time seat selection. Includes responsive movie browsing, booking management, pagination, loading states, and robust error handling for a smooth user experience.',
    badge: 'Full Stack',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Clerk'],
    color: 'rgba(26,138,106,0.25)',
    liveLink: 'https://cinema-booking-website-five.vercel.app/',
    githubLink: 'https://github.com/MajedJammoul19/Cinema-Booking-website.git'
  },
  {
    title: 'Poultry Farm Management System',
    description: 'A full-stack MERN management system with JWT authentication, refresh token support, and role-based authorization. Implements CRUD operations, PDF document export, search and filtering capabilities, responsive dashboards, form validation, protected routes, and centralized error handling.',
    badge: 'Full Stack',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    color: 'rgba(139,26,26,0.25)',
    liveLink: '#',
    githubLink: 'https://github.com/MajedJammoul19/poultry.git'
  },
]

function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-inner">
        <ScrollReveal>
          <div className="section-label">03 — Featured Work</div>
          <h2 className="section-title">
            Selected <span className="gold">Projects</span>
          </h2>
          <div className="divider"></div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="project-card">
                <div className="h-47.5 overflow-hidden relative bg-obsidian-3">
                  <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center font-serif text-[3rem] font-bold tracking-[-0.02em] relative" style={{ color: project.color }}>
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.06)_1px,transparent_1px)] bg-position-[25px_25px]"></div>
                      {project.title.split(' ')[0].toUpperCase()}
                    </div>
                  </div>
                  <span className="absolute top-4 right-4 px-3 py-1 bg-gold/15 border border-gold/30 rounded-[20px] text-[0.65rem] tracking-widest uppercase text-gold">
                    {project.badge}
                  </span>
                </div>
                <div className="p-6">
                  <div className="font-serif text-[1.3rem] font-bold text-ivory mb-2">{project.title}</div>
                  <p className="text-[0.85rem] text-ivory-muted leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 border border-gold/20 rounded-[20px] text-[0.68rem] text-gold font-mono tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a target="_blank" 
                        rel="noopener noreferrer" 
                         href={project.liveLink} className="flex-1 py-2.5 bg-gold text-obsidian border-none text-[0.72rem] tracking-widest uppercase font-semibold cursor-pointer rounded-sm no-underline flex items-center justify-center gap-1.5 transition-all duration-300 hover:bg-gold-light hover:-translate-y-px">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </a>
                    <a target="_blank" 
                      rel="noopener noreferrer"
                       href={project.githubLink} className="flex-1 py-2.5 bg-transparent text-ivory-dim border border-ivory/15 text-[0.72rem] tracking-widest uppercase font-medium cursor-pointer rounded-sm no-underline flex items-center justify-center gap-1.5 transition-all duration-300 hover:border-gold hover:text-gold">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6"/>
                        <polyline points="8 6 2 12 8 18"/>
                      </svg>
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects