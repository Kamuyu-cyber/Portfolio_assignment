import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import Image from "next/image"
import WorkExperience from "./components/WorkExperience"
import Testimonials from "./components/Testimonials"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-purple-950">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Kamuyu</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <Button variant="outline" className="ml-auto">
            Resume
          </Button>
        </div>
      </header>

      <main className="container px-4 md:px-6 bg-blue-100">
        <section id="about" className="py-12 md:py-24 bg-purple-950">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Hero image - on the left */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 z-10 rounded-lg"></div>
                  <Image
                    src="/profile.jpg"
                    alt="Hero image"
                    fill
                    className="object-cover bg-color-blue"
                    priority
                  />
                </div>
              </div>

              {/* Text content - on the right */}
              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Full Stack Developer</h1>
                  <p className="text-gray-500 md:text-xl dark:text-gray-400">
                  Building digital experiences with modern technologies and elegant solutions to complex problems. I specialize in HTML, CSS, JavaScript, and UI/UX design, crafting intuitive and data-driven applications. My work blends functionality with aesthetics to enhance user experiences. Explore my portfolio to see my projects in action.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="https://github.com" target="_blank">
                    <Button variant="outline" size="icon">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com" target="_blank">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://twitter.com" target="_blank">
                    <Button variant="outline" size="icon">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                  <Link href="mailto:hello@example.com">
                    <Button variant="outline" size="icon">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WorkExperience />

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Data Analytics"
                description="Data analytics platforms allowing users to upload, process, visualize, and analyze large datasets through interactive, customizable dashboards."
                image="/analytics1.png"
                link="https://github.com"
                tags={["SQL", "Power BI", "Python"]}
              />
              <ProjectCard
                title="Website Applications"
                description="Dynamic, data-driven web applications with intuitive interfaces, real-time processing, seamless integrations, and secure access. Focuses mainly on performance, usability, and user-centric design."
                image="/website2.jpeg"
                link="https://github.com"
                tags={["React", "NodeJS", "REST"]}
              />
              <ProjectCard
                title="UI / UX"
                description="UI/UX designs that enable users to create, prototype, and refine intuitive digital experiences with interactive tools and real-time collaboration. It ensures consistency, accessibility, and secure role-based access for streamlined design workflows."
                image="/uiux1.png"
                link="https://github.com"
                tags={["Figma", "Framer", "TailwindCSS"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

      <Testimonials />

        <section id="contact" className="py-12 md:py-24 lg:py-32 bg-purple-950">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 kamuyu.dev. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

