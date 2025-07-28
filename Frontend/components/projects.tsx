"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
    fetch(`${apiUrl}/api/projects`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch projects")
        return res.json()
      })
      .then((data) => {
        setProjects(
          data.map((project: any, idx: number) => ({
            id: project._id || idx,
            title: project.title || "Untitled",
            description: project.description || "No description",
            image: project.image || "/placeholder.svg?height=200&width=350",
            technologies: project.tags || [],
            link: project.link || "#",
          }))
        )
        setLoading(false)
      })
      .catch((err) => {
        setError("Could not load projects from backend.")
        setLoading(false)
        setProjects([])
      })
  }, [])

  const techColors = {
    "Next.js": "bg-blue-100 text-blue-800",
    "Node.js": "bg-green-100 text-green-800",
    MongoDB: "bg-purple-100 text-purple-800",
    Stripe: "bg-indigo-100 text-indigo-800",
    React: "bg-blue-100 text-blue-800",
    Firebase: "bg-yellow-100 text-yellow-800",
    "Socket.io": "bg-red-100 text-red-800",
    "Material-UI": "bg-pink-100 text-pink-800",
    "Vue.js": "bg-green-100 text-green-800",
    "API Integration": "bg-orange-100 text-orange-800",
    "Chart.js": "bg-purple-100 text-purple-800",
    Tailwind: "bg-cyan-100 text-cyan-800",
  }

  if (loading) return (
    <div className="text-center py-20">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      <p className="mt-4 text-gray-600">Loading projects...</p>
    </div>
  )

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover-lift glass border-0 shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image with Overlay */}
              <div className="aspect-video relative group">
                <Image 
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                    <Github className="h-3 w-3 mr-1" />
                    View Code
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <CardHeader className="pb-3">
                <CardTitle className="text-xl hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech: string) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`${techColors[tech as keyof typeof techColors] || "bg-gray-100 text-gray-800"} hover:scale-105 transition-transform duration-200`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <a
                  href={project.link && project.link !== "#" ? project.link : `https://github.com/Fahad220997`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                    <span className="flex items-center gap-2">
                      View Project
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
