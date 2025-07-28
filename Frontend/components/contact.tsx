"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage("Message sent successfully! I'll get back to you soon.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitMessage("Failed to send message. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Fahadzeb1500@gmail.com",
      href: "mailto:Fahadzeb1500@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 320 9886214",
      href: "tel:+923209886214",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Abbottabad Pakistan",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Fahad220997",
      username: "github.com/Fahad220997",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fahad-zeb-637b4b1a4",
      username: "linkedin.com/in/fahad-zeb-637b4b1a4",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={info.label} className="flex items-center p-4 rounded-lg hover-lift glass transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mr-4">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                    {info.href.startsWith("http") || info.href.startsWith("mailto") || info.href.startsWith("tel") ? (
                      <Link href={info.href} className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">
                        {info.value}
                      </Link>
                    ) : (
                      <span className="text-gray-700 font-semibold">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <div key={social.label} className="flex items-center p-3 rounded-lg hover-lift glass transition-all duration-300" style={{ animationDelay: `${(index + 3) * 0.1}s` }}>
                    <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mr-3">
                      <social.icon className="h-4 w-4" />
                    </div>
                    <Link
                      href={social.href}
                      className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.username}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="animate-slide-in-right glass border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold gradient-text">Send me a message</CardTitle>
              <CardDescription className="text-gray-600">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello!"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="border-2 border-gray-200 focus:border-blue-500 transition-colors duration-300 resize-none"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <div className="w-full">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group" 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      Send Message
                    </span>
                  )}
                </Button>
                {submitMessage && (
                  <div className={`mt-3 p-3 rounded-lg flex items-center gap-2 ${
                    submitMessage.includes("successfully") 
                      ? "bg-green-50 text-green-700 border border-green-200" 
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}>
                    {submitMessage.includes("successfully") ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <div className="h-4 w-4 rounded-full border-2 border-red-500 border-t-transparent animate-spin"></div>
                    )}
                    <span className="text-sm font-medium">{submitMessage}</span>
                  </div>
                )}
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
