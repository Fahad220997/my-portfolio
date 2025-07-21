"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
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

  if (loading) return <div className="text-center py-10">Loading...</div>

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Project Image */}
              <div className="aspect-video relative">
                <Image 
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }}
                />
              </div>

              {/* Project Content */}
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech: string) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={techColors[tech as keyof typeof techColors] || "bg-gray-100 text-gray-800"}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">View Project</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
