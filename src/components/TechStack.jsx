import React, { useState } from 'react'
import ScrollReveal from './ScrollReveal'

function TechStack() {
  const [activeTab, setActiveTab] = useState('frontend')

  const tabs = {
    frontend: {
      label: 'Frontend',
      skills: [
        { icon: '⚛️', name: 'React.js', level: 95 },
        { icon: '🔷', name: 'TypeScript', level: 88 },
        { icon: '🎨', name: 'Tailwind CSS', level: 92 },
        { icon: '🔀', name: 'Redux', level: 85 },
        { icon: '🎭', name: 'Framer Motion', level: 80 },
        
      ]
    },
    backend: {
      label: 'Backend',
      skills: [
        { icon: '🟢', name: 'Node.js', level: 95 },
        { icon: '🚂', name: 'Express.js', level: 93 },
        { icon: '🔗', name: 'GraphQL', level: 82 },
        { icon: '🔐', name: 'JWT / OAuth', level: 88 },
        { icon: '🌐', name: 'REST APIs', level: 97 },
        { icon: '🔌', name: 'WebSockets', level: 80 },
        
      ]
    },
    database: {
      label: 'Database',
      skills: [
        { icon: '🍃', name: 'MongoDB', level: 95 },
        { icon: '🦭', name: 'MySQL', level: 80 },
        { icon: '🔷', name: 'Mongoose', level: 92 },
        
      ]
    },
    tools: {
      label: 'Tools & DevOps',
      skills: [
        { icon: '🌀', name: 'Git / GitHub', level: 97 },
        { icon: '📦', name: 'Webpack/Vite', level: 85 },
        { icon: '🚀', name: 'Vercel/Netlify', level: 90 },
        { icon: '🚀', name: 'Render', level: 90 },
        
      ]
    }
  }

  return (
    <section id="stack" className="section-padding bg-obsidian-2">
      <div className="section-inner">
        <ScrollReveal>
          <div className="section-label">02 — Tech Stack</div>
          <h2 className="section-title">
            Tools of the <span className="gold">Trade</span>
          </h2>
          <div className="divider"></div>
        </ScrollReveal>

        <div className="flex gap-0 mb-12 border-b border-gold/10 flex-wrap">
          {Object.entries(tabs).map(([key, tab]) => (
            <button
              key={key}
              className={`px-6 py-3 bg-none border-none border-b-2 transition-all duration-300 text-[0.78rem] tracking-widest uppercase font-sans -mb-px font-medium ${
                activeTab === key 
                  ? 'text-gold border-gold' 
                  : 'text-ivory-muted border-transparent hover:text-ivory'
              }`}
              onClick={() => setActiveTab(key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4 animate-fadeUp">
          {tabs[activeTab].skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <span className="text-[1.8rem] block mb-2">{skill.icon}</span>
              <div className="text-[0.78rem] text-ivory-dim tracking-wider font-medium">{skill.name}</div>
              <div className="h-0-5 bg-gold/15 rounded-[1px] mt-3 overflow-hidden">
                <div 
                  className="h-full bg-linear-to-r from-gold to-gold-light rounded-[1px] transition-all duration-800"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack