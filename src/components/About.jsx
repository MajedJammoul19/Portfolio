import React from 'react'
import ScrollReveal from './ScrollReveal'

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="section-label">01 — About Me</div>
            <h2 className="section-title">
              Crafting Code<br />with <span className="gold">Purpose</span>
            </h2>
            <div className="divider"></div>
            <div className="text-ivory-dim leading-[1.9] space-y-4 text-[0.95rem]">
              <p>
                I'm a full-stack MERN developer with 5+ years of experience building 
                production-grade web applications. My expertise spans from architecting 
                scalable RESTful APIs to crafting pixel-perfect, performant React interfaces.
              </p>
              <p>
                I'm passionate about clean architecture, developer experience, and the 
                intersection of performance and design. Every project I deliver is built 
                with long-term maintainability and scalability in mind.
              </p>
              <p>
                When I'm not writing code, I contribute to open-source projects and 
                write technical articles on modern web development patterns.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-5 border border-gold/15 rounded-DEFAULT bg-white/3 backdrop-blur-[10px]">
                <div className="font-serif text-[2.2rem] font-bold text-gold leading-none">1+</div>
                <div className="text-[0.72rem] text-ivory-muted tracking-widest uppercase mt-1">Years Experience</div>
              </div>
              <div className="p-5 border border-gold/15 rounded-DEFAULT bg-white/3 backdrop-blur-[10px]">
                <div className="font-serif text-[2.2rem] font-bold text-gold leading-none">5+</div>
                <div className="text-[0.72rem] text-ivory-muted tracking-widest uppercase mt-1">Projects Shipped</div>
              </div>
              <div className="p-5 border border-gold/15 rounded-DEFAULT bg-white/3 backdrop-blur-[10px]">
                <div className="font-serif text-[2.2rem] font-bold text-gold leading-none">1+</div>
                <div className="text-[0.72rem] text-ivory-muted tracking-widest uppercase mt-1">Happy Clients</div>
              </div>
              <div className="p-5 border border-gold/15 rounded-DEFAULT bg-white/3 backdrop-blur-[10px]">
                <div className="font-serif text-[2.2rem] font-bold text-gold leading-none">99%</div>
                <div className="text-[0.72rem] text-ivory-muted tracking-widest uppercase mt-1">Uptime Average</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative h-95 rounded-lg overflow-hidden border border-gold/15 bg-obsidian-3">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="font-mono text-[0.78rem] leading-loose text-ivory-muted p-8 w-full">
                  <pre>
                    <code>
                      <span className="code-comment">// developer.profile.js</span>
                      {'\n\n'}
                      <span className="code-keyword">const</span> <span className="code-fn">developer</span> = {'{'}
                      {'\n  '}
                      <span className="code-string">name</span>: <span className="code-string">"Majed Jammoul"</span>,
                      {'\n  '}
                      <span className="code-string">role</span>: <span className="code-string">"MERN Stack Developer"</span>,
                      {'\n  '}
                      
                      <span className="code-string">stack</span>: [
                      {'\n    '}
                      <span className="code-string">"MongoDB"</span>, <span className="code-string">"Express"</span>,
                      {'\n    '}
                      <span className="code-string">"React"</span>, <span className="code-string">"Node.js"</span>
                      {'\n  ],\n\n  '}
                      <span className="code-string">passions</span>: [
                      {'\n    '}
                      <span className="code-string">"Clean Architecture"</span>,
                      {'\n    '}
                      <span className="code-string">"Performance"</span>,
                      {'\n    '}
                     
                      <span className="code-string">available</span>: <span className="code-keyword">true</span>,
                      {'\n}'}
                    </code>
                  </pre>
                </div>
              </div>
              <div className="absolute -bottom-7.5 left-1/2 -translate-x-1/2 w-50 h-50 bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_70%)] pointer-events-none"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default About