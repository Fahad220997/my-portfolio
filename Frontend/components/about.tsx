"use client";

import Image from "next/image"

export default function About() {
  const skills = [
    { name: "React & Next.js", percentage: 90 },
    { name: "TypeScript", percentage: 85 },
    { name: "UI/UX Design", percentage: 80 },
    { name: "Node.js", percentage: 75 },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions that bridge the gap
            between design and technology. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8">
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects,
                or enjoying a good cup of coffee while sketching out ideas for my next project.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div>
            <Image
              src="/profile.jpg"
              alt="Fahad Zeb"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
