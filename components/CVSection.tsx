"use client"

import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Download, Eye, FileText, Github, Linkedin } from "lucide-react"

export const CVSection = () => {
  const handleDownload = () => {
    // The PDF file is in the public directory for Next.js to serve it statically
    const link = document.createElement('a')
    link.href = '/Erick Cedeno.pdf'
    link.download = 'Erick_Cedeno_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleView = () => {
    // Open PDF in a new window/tab with proper content type
    fetch('/Erick Cedeno.pdf')
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob)
        window.open(url, '_blank')
        // Clean up the URL after the window is opened
        setTimeout(() => window.URL.revokeObjectURL(url), 100)
      })
      .catch(error => {
        console.error('Error opening PDF:', error)
        // Fallback to direct opening if fetch fails
        window.open('/Erick Cedeno.pdf', '_blank')
      })
  }

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-cyber-green bg-clip-text text-transparent">
            DOWNLOAD MY CURRICULUM
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyber-cyan to-cyber-magenta mx-auto rounded-full mb-6" />
          <p className="text-cyber-cyan/80 font-roboto-mono text-lg max-w-2xl mx-auto">
            Download my complete professional profile and explore my technical expertise
          </p>
        </div>

        <Card className="bg-gradient-to-br from-cyber-dark/90 via-purple-950/30 to-cyan-950/30 border-2 border-cyber-cyan/20 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* CV Preview */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <FileText className="w-8 h-8 text-cyber-cyan" />
                  <h3 className="text-2xl font-orbitron font-bold text-cyber-cyan">Erick Cedeno - CV</h3>
                </div>

                <div className="mt-6 p-4 bg-cyber-dark/50 rounded-lg border border-cyber-cyan/20">
                  <p className="text-cyber-cyan/90 font-roboto-mono text-sm">
                    <strong>Software Engineer</strong> specialized in MERN stack with 5+ years of experience in
                    full-stack development, UX/UI design, and cloud technologies.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 min-w-[200px]">
                <Button
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-cyber-cyan to-cyan-400 hover:from-cyan-400 hover:to-cyber-cyan text-cyber-dark font-orbitron font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>

                <Button
                  onClick={handleView}
                  variant="outline"
                  className="border-2 border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta hover:text-cyber-dark font-orbitron font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-magenta-500/25 bg-transparent"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  View in Browser
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 pt-6 border-t border-cyber-cyan/20">
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/loredounipass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyber-cyan/80 hover:text-cyber-cyan transition-colors font-roboto-mono text-sm"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/erick-cedeno-3a5137230/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyber-cyan/80 hover:text-cyber-cyan transition-colors font-roboto-mono text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
