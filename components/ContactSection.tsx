"use client"
import { Linkedin, Github, Mail } from "lucide-react"
import { TypewriterText } from "./TypewriterText"

const contactLines = [
  "> Ready to collaborate on the next revolutionary project?",
  "> Let's connect and build the digital future together.",
]

export function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyber-gray/95 to-cyber-light-gray/95 border-t border-cyber-cyan/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-orbitron text-cyber-cyan glow-cyan mb-4">CONTACT INFO</h2>
          <div className="h-1 w-48 bg-gradient-to-r from-transparent via-cyber-magenta to-transparent mx-auto rounded-full" />
        </div>

        <div className="text-center">
          <div className="mb-8 max-w-2xl mx-auto">
            {contactLines.map((line, index) => (
              <TypewriterText
                key={index}
                text={line}
                className="text-gray-300 text-lg leading-relaxed block mb-2"
                speed={30}
                delay={500 + index * 2000}
                showCursor={index === contactLines.length - 1}
                as="p"
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 animate-fadeInUp" style={{ animationDelay: "4s" }}>
            <a
              href="https://www.linkedin.com/in/erick-cedeno-3a5137230"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button px-8 py-4 rounded-lg flex items-center gap-3 text-lg min-w-[180px] justify-center"
            >
              <Linkedin size={20} />
              LINKEDIN
            </a>
            <a
              href="https://github.com/loredounipass"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button-outline px-8 py-4 rounded-lg flex items-center gap-3 text-lg min-w-[180px] justify-center"
            >
              <Github size={20} />
              GITHUB
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&to=erickcedeno558@gmail.com&tf=cm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg flex items-center gap-3 text-lg min-w-[180px] justify-center bg-gradient-to-r from-cyber-magenta to-cyber-orange text-black font-orbitron font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,128,0.5)]"
            >
              <Mail size={20} />
              EMAIL
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
