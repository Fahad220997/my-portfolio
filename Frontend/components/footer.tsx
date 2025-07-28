import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Fahad220997",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/fahad-zeb-637b4b1a4",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:Fahadzeb1500@gmail.com",
      label: "Email",
    },
  ]

  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Fahad Zeb</h3>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer & UI/UX Designer passionate about creating beautiful, functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <p className="text-gray-300 mb-2">Fahadzeb1500@gmail.com</p>
            <p className="text-gray-300 mb-4">Abbottabad Pakistan</p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 p-2 rounded-full hover:bg-white/10"
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Fahad Zeb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
