"use client"
import { Button } from "./ui/button"
import { Download, Eye, FileText, Github, Linkedin, Sparkles } from "lucide-react"

export const CVSection = () => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/Erick Cedeno.pdf'
    link.download = 'Erick_Cedeno_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleView = () => {
    fetch('/Erick Cedeno.pdf')
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob)
        window.open(url, '_blank')
        setTimeout(() => window.URL.revokeObjectURL(url), 100)
      })
      .catch(error => {
        console.error('Error opening PDF:', error)
        window.open('/Erick Cedeno.pdf', '_blank')
      })
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-cyber-dark via-purple-950/20 to-cyan-950/20">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-cyan/10 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyber-magenta/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-cyber-cyan animate-pulse" />
            <span className="text-cyber-cyan font-roboto-mono text-sm tracking-wider">RESUME</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron gradient-text mb-4">
            DOWNLOAD MY CURRICULUM
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent mx-auto rounded-full" />
          <p className="text-gray-400 font-roboto-mono text-base mt-4 max-w-xl mx-auto">
            Download my complete professional profile and explore my technical expertise
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/20 via-cyber-magenta/20 to-cyber-green/20 rounded-3xl blur-xl opacity-50" />
          
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-cyber-green" />
            
            <div className="p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-cyber-cyan/20 to-cyber-magenta/20 border border-cyber-cyan/30">
                      <FileText className="w-6 h-6 text-cyber-cyan" />
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-white">Erick Cedeno - CV</h3>
                  </div>

                  <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <p className="text-gray-300 font-roboto-mono text-sm">
                      <strong className="text-cyber-cyan">Software Engineer</strong> specialized in MERN stack with 6+ years of experience in
                      full-stack development, UX/UI design, and cloud technologies.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full sm:w-auto">
                  <Button
                    onClick={handleDownload}
                    className="w-full sm:w-auto group px-6 py-3 bg-gradient-to-r from-cyber-cyan to-cyber-magenta rounded-xl font-orbitron font-bold text-black hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5 group-hover:animate-bounce" />
                    Download CV
                  </Button>

                  <Button
                    onClick={handleView}
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta hover:text-black font-orbitron font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    View in Browser
                  </Button>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="https://github.com/loredounipass"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-cyber-cyan transition-colors font-roboto-mono text-sm hover:scale-105 transition-transform"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/erick-cedeno-3a5137230/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-cyber-cyan transition-colors font-roboto-mono text-sm hover:scale-105 transition-transform"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
