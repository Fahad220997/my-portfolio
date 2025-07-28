"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools & Others" },
  ]

  const skills = [
    {
      name: "React & Next.js",
      percentage: 90,
      category: "frontend",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "TypeScript",
      percentage: 85,
      category: "frontend",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Node.js & Express",
      percentage: 80,
      category: "backend",
      color: "from-green-500 to-green-600",
    },
    {
      name: "MongoDB",
      percentage: 75,
      category: "backend",
      color: "from-green-600 to-green-700",
    },
    {
      name: "UI/UX Design",
      percentage: 85,
      category: "frontend",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Git & GitHub",
      percentage: 90,
      category: "tools",
      color: "from-gray-600 to-gray-700",
    },
    {
      name: "Docker",
      percentage: 70,
      category: "tools",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "AWS",
      percentage: 65,
      category: "tools",
      color: "from-orange-500 to-orange-600",
    },
  ]

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
          {categories.map((category) => (
            <Badge
              key={category.id}
              variant={activeCategory === category.id ? "default" : "secondary"}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id 
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" 
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Badge>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <Card 
              key={skill.name}
              className="hover-lift glass border-0 shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.percentage}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in-up">
          <Card className="glass border-0 shadow-lg max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm constantly learning and exploring new technologies to stay up-to-date with the latest trends in web development. 
                My passion for clean code and user experience drives me to create efficient, scalable, and beautiful applications.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
} 