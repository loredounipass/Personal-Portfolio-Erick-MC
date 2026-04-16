"use client"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { GraduationCap, Award, Calendar, Clock } from "lucide-react"

export function EducationSection() {
  const certificates = [
    {
      id: 1,
      title: "Responsive Web Design",
      provider: "freeCodeCamp",
      date: "January 23, 2024",
      hours: "~300 hours",
      image: "/certificates/freecodecamp-cert.png",
      skills: ["HTML5", "CSS3", "Responsive Design", "Accessibility"],
      color: "cyan",
    },
    {
      id: 2,
      title: "Professional Cloud Developer",
      provider: "Google Cloud",
      date: "March 23, 2025",
      expiry: "March 23, 2028",
      image: "/certificates/google-cloud-cert.png",
      skills: ["Cloud Architecture", "GCP", "DevOps", "Microservices"],
      color: "green",
    },
    {
      id: 3,
      title: "Legacy JavaScript Algorithms and Data Structures V8",
      provider: "Freecodecamp",
      date: "Apr 2026",
      expiry: "Expires Jan 2027",
      image: "/certificates/Javasscript-cert.png",
      skills: ["JavaScript (ES6+)", "Algorithms", "Data Structures", "Functional Programming", "Fetch API", "Asynchronous JavaScript"],
      color: "green",
    },
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-green rounded-full blur-3xl animate-pulse-glow animation-delay-1000" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-cyber-cyan" />
            <GraduationCap className="w-8 h-8 text-cyber-cyan glow-cyan" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-cyber-cyan" />
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            EDUCATION & CERTIFICATIONS
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-roboto-mono">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div key={cert.id} className="animate-fade-in-up group" style={{ animationDelay: `${index * 200}ms` }}>
              <Card className="cyber-card group h-full">
                <CardContent className="p-6">
                  {/* Certificate Image */}
                  <div className="relative mb-6 overflow-hidden rounded-lg border border-cyber-cyan/20 max-w-md mx-auto">
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-48 object-contain bg-white/5 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Certificate Info */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-orbitron font-bold text-white glow-cyan mb-2">{cert.title}</h3>
                        <p className="text-cyber-cyan font-semibold text-lg">{cert.provider}</p>
                      </div>
                      <Award className={`w-6 h-6 ${cert.color === "cyan" ? "text-cyber-cyan" : "text-cyber-green"}`} />
                    </div>

                    {/* Date and Duration */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Issued: {cert.date}</span>
                      </div>
                      {cert.hours && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{cert.hours}</span>
                        </div>
                      )}
                      {cert.expiry && (
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Expires: {cert.expiry}</span>
                        </div>
                      )}
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className={`
                            ${cert.color === "cyan"
                              ? "border-cyber-cyan/50 text-cyber-cyan bg-cyber-cyan/10"
                              : "border-cyber-green/50 text-cyber-green bg-cyber-green/10"
                            }
                            hover:scale-105 transition-transform duration-200
                          `}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="cyber-card p-6">
              <div className="text-3xl font-orbitron font-bold text-cyber-cyan glow-cyan mb-2">2+</div>
              <div className="text-gray-300 font-roboto-mono">Professional Certifications</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-orbitron font-bold text-cyber-magenta glow-magenta mb-2">5+</div>
              <div className="text-gray-300 font-roboto-mono">Years of Experience</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-orbitron font-bold text-cyber-yellow glow-yellow mb-2">2025</div>
              <div className="text-gray-300 font-roboto-mono">Latest Certification</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
