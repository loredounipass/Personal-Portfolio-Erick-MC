"use client"
import { experiences } from "../data/portfolioData"
import { TypewriterText } from "./TypewriterText"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

export function ExperienceSection() {
  return (
    <div className="max-w-6xl mx-auto mb-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold font-orbitron text-cyan-500 text-shadow-cyan mb-2">PROYECTOS</h2>
        <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="h-full relative animate-slideInRight border-gray-700/50 bg-gradient-to-br from-gray-900/90 to-gray-800/90"
            style={{
              animationDelay: `${index * 0.2}s`,
              animationFillMode: "both",
            }}
          >
            <Badge
              className={`absolute -top-2 right-5 px-3 py-1 text-xs font-bold font-orbitron text-black animate-pulse ${exp.status === "ACTIVE" ? "bg-green-400 shadow-green-400/50" : "bg-pink-500 shadow-pink-500/50"
                } shadow-lg`}
            >
              {exp.status}
            </Badge>

            <CardContent className="pt-8 p-6">
              <p className="font-roboto-mono text-cyan-500 text-sm mb-2 text-shadow-cyan">{exp.period}</p>
              <TypewriterText
                text={exp.title}
                variant="h6"
                component="h3"
                speed={40}
                delay={1000 + index * 500}
                showCursor={false}
                className="font-orbitron font-bold text-white mb-4"
              />
              <p className="text-gray-300 font-roboto-mono leading-relaxed text-sm">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
