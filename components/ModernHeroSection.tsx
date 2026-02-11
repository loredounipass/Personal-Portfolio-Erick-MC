"use client"
import { Mail, Eye, Code, Rocket, Shield, Cloud } from "lucide-react"
import { GlitchText } from "./GlitchText"
import { TypewriterText } from "./TypewriterText"
import { HexagonGrid } from "./HexagonGrid"

const stats = [
  { icon: Code, value: "21", label: "Projects", color: "#00ffff" },
  { icon: Rocket, value: "6+", label: "Yrs Exp.", color: "#ff0080" },
  { icon: Shield, value: "100%", label: "Security", color: "#00ff41" },
  { icon: Cloud, value: "24/7", label: "Available", color: "#ffff00" },
]

export function ModernHeroSection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-cyber-gradient py-20 sm:py-0">
      <HexagonGrid />

      {/* Floating Elements */}
      <div className="absolute top-1/5 right-1/10 w-48 h-48 border-2 border-cyber-cyan/20 rounded-full animate-float hidden sm:block">
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 border border-cyber-magenta/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-float"
          style={{ animationDuration: "4s", animationDirection: "reverse" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          <div className="lg:col-span-2 text-center lg:text-center">
            <div className="mb-12 max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black gradient-text mb-8 font-orbitron leading-tight">
                ERICK MC CEDENO
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <div className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-cyber-cyan/20 to-cyber-magenta/20 border border-cyber-cyan/40 rounded-full backdrop-blur-cyber">
                  <span className="font-orbitron text-cyber-cyan glow-cyan tracking-wider text-base sm:text-lg whitespace-nowrap">
                    SOFTWARE DEVELOPER
                  </span>
                </div>
                <div className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-cyber-magenta/20 to-cyber-green/20 border border-cyber-magenta/40 rounded-full backdrop-blur-cyber">
                  <span className="font-orbitron text-cyber-magenta glow-magenta tracking-wide text-base sm:text-lg whitespace-nowrap">
                    FULL STACK DEV
                  </span>
                </div>
              </div>

              <div className="mb-10 max-w-2xl mx-auto">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed px-4 sm:px-6">
                  Digital solutions architect specializing in MERN/MEAN ecosystems, blockchain and cybersecurity. Transforming ideas into technological realities of the future.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
                <a
                  href="/contacto"
                  className="w-full sm:w-auto cyber-button px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center justify-center gap-3 text-base sm:text-lg"
                >
                  <Mail size={20} />
                  CONTACT
                </a>
                <a
                  href="https://github.com/loredounipass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto cyber-button-outline px-6 sm:px-8 py-3 sm:py-4 rounded-lg flex items-center justify-center gap-3 text-base sm:text-lg"
                >
                  <Eye size={20} />
                  PROJECTS
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div
                    key={index}
                    className="cyber-card p-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div
                        className="p-3 rounded-lg border"
                        style={{
                          background: `linear-gradient(45deg, ${stat.color}22, transparent)`,
                          borderColor: `${stat.color}44`,
                        }}
                      >
                        <IconComponent
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          style={{
                            color: stat.color,
                            filter: `drop-shadow(0 0 8px ${stat.color})`,
                          }}
                        />
                      </div>
                      <div>
                        <div
                          className="text-xl sm:text-2xl font-bold font-orbitron mb-1"
                          style={{
                            color: stat.color,
                            textShadow: `0 0 10px ${stat.color}`,
                          }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-gray-400 font-roboto-mono text-sm">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
