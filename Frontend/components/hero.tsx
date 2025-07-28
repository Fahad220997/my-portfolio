import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Profile Image with Animation */}
          <div className="mb-8 relative group">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Image
                src="/fahad.jpg"
                alt="Fahad Zeb"
                width={200}
                height={200}
                className="relative mx-auto rounded-full border-4 border-white shadow-2xl transition-transform duration-300 hover:scale-105 hover:rotate-2"
              />
            </div>
          </div>

          {/* Main Heading with Typewriter Effect */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">Fahad Zeb</span>
          </h1>

          {/* Animated Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Full Stack Developer & UI/UX Designer passionate about creating beautiful, functional web experiences that
            <span className="text-blue-600 font-semibold"> make a difference</span> in people's lives.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Link href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              <a href="/Fahadzeb-resume.pdf.pdf" download className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in-up">
            <Link
              href="https://github.com/Fahad220997"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 p-2 rounded-full hover:bg-blue-50"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 p-2 rounded-full hover:bg-blue-50"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:Fahadzeb1500@gmail.com"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 p-2 rounded-full hover:bg-blue-50"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
