
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, ExternalLink, Heart, Sparkles, Code, Palette, MessageCircle } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "🌸 E-Commerce Beauty Store",
      description: "A responsive beauty store with stunning product galleries and smooth checkout flow",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      image: "/placeholder.svg"
    },
    {
      title: "✨ Task Management Dashboard",
      description: "Intuitive dashboard for managing daily tasks with drag-and-drop functionality",
      tech: ["React", "CSS Grid", "Local Storage"],
      image: "/placeholder.svg"
    },
    {
      title: "💕 Wedding Planning Website",
      description: "Elegant website for wedding planners with booking system and gallery",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "/placeholder.svg"
    }
  ];

  const techStack = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
    design: ["Figma", "Adobe Illustrator", "Wireframing", "Prototyping"],
    soft: ["Creative Thinking", "Attention to Detail", "Communication", "Problem Solving"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-pink-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-pink-50/90 backdrop-blur-md z-50 border-b border-pink-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-pink-800">Priya Sharma</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-pink-700 hover:text-pink-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-pink-700 hover:text-pink-900 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-pink-700 hover:text-pink-900 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-pink-700 hover:text-pink-900 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-pink-100 to-pink-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-pink-900 mb-6 leading-tight">
              Hi, I'm <span className="text-pink-600">Priya</span> —
            </h1>
            <h2 className="text-2xl md:text-3xl text-pink-800 mb-8 font-light">
              a Front-End Developer & UI/UX Designer who codes with creativity.
            </h2>
            <p className="text-lg text-pink-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              B.Tech CSE student with a passion for aesthetic and functional design. 
              I bring websites to life using code, creativity, and color.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Heart className="w-5 h-5 mr-2" />
              Let's Work Together
            </Button>
            <Button 
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="border-pink-400 bg-pink-50 text-pink-700 hover:bg-pink-100 px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              See My Projects
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-pink-50 to-pink-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pink-900 mb-4">About Me ✨</h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-pink-800 leading-relaxed">
                I'm currently pursuing B.Tech in Computer Science & Engineering. 
                My world spins around beautiful interfaces, intuitive user experiences, 
                and bringing creative ideas to life with clean, elegant code.
              </p>
              <p className="text-lg text-pink-800 leading-relaxed">
                When I'm not coding, you'll find me sketching UI concepts, exploring 
                the latest design trends, or adding that perfect touch of color to make 
                digital experiences truly memorable.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-pink-900 mb-4">What I Love:</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-pink-200 text-pink-800 hover:bg-pink-300">🎨 UI/UX Design</Badge>
                  <Badge className="bg-pink-200 text-pink-800 hover:bg-pink-300">💻 Clean Code</Badge>
                  <Badge className="bg-pink-200 text-pink-800 hover:bg-pink-300">🌸 Aesthetic Details</Badge>
                  <Badge className="bg-pink-200 text-pink-800 hover:bg-pink-300">✨ User Experience</Badge>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full mx-auto shadow-2xl">
                <div className="absolute inset-4 bg-pink-50 rounded-full flex items-center justify-center">
                  <span className="text-6xl">👩‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-br from-pink-100 to-pink-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pink-900 mb-4">My Projects 💫</h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
            <p className="text-lg text-pink-800 mt-6">Here are some of my favorite creations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-pink-200 bg-pink-50/90 backdrop-blur-sm">
                <div className="aspect-video bg-gradient-to-br from-pink-200 to-pink-300 rounded-t-lg flex items-center justify-center">
                  <span className="text-4xl">📸</span>
                  <span className="ml-2 text-pink-700">Image placeholder</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-pink-900 mb-3">{project.title}</h3>
                  <p className="text-pink-700 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-pink-100 text-pink-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full border-pink-400 text-pink-700 hover:bg-pink-100">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-br from-pink-50 to-pink-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pink-900 mb-4">Skills & Expertise 🚀</h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-pink-200 bg-pink-50/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-pink-700" />
                </div>
                <h3 className="text-xl font-semibold text-pink-900 mb-4">🖥️ Front-End Development</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {techStack.frontend.map((skill, index) => (
                    <Badge key={index} className="bg-pink-100 text-pink-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-pink-200 bg-pink-50/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-pink-700" />
                </div>
                <h3 className="text-xl font-semibold text-pink-900 mb-4">🎨 UI/UX & Design</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {techStack.design.map((skill, index) => (
                    <Badge key={index} className="bg-pink-100 text-pink-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-pink-200 bg-pink-50/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-pink-700" />
                </div>
                <h3 className="text-xl font-semibold text-pink-900 mb-4">✨ Soft Skills</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {techStack.soft.map((skill, index) => (
                    <Badge key={index} className="bg-pink-100 text-pink-800">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-pink-100 to-pink-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pink-900 mb-4">Let's Create Something Beautiful Together 💌</h2>
            <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
            <p className="text-lg text-pink-800 mt-6">Have a project in mind? I'd love to hear from you!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-pink-900 mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-pink-700" />
                  </div>
                  <div>
                    <p className="text-pink-900 font-medium">Email</p>
                    <p className="text-pink-700">priya.sharma@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-pink-700" />
                  </div>
                  <div>
                    <p className="text-pink-900 font-medium">LinkedIn</p>
                    <p className="text-pink-700">linkedin.com/in/priyasharma</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
                    <Github className="w-6 h-6 text-pink-700" />
                  </div>
                  <div>
                    <p className="text-pink-900 font-medium">GitHub</p>
                    <p className="text-pink-700">github.com/priyasharma</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-pink-200 bg-pink-50/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-pink-900 mb-2">Name</label>
                    <Input className="border-pink-300 focus:border-pink-500 bg-pink-50" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-pink-900 mb-2">Email</label>
                    <Input type="email" className="border-pink-300 focus:border-pink-500 bg-pink-50" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-pink-900 mb-2">Message</label>
                    <Textarea className="border-pink-300 focus:border-pink-500 min-h-32 bg-pink-50" placeholder="Tell me about your project..." />
                  </div>
                  <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                    <Heart className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-br from-pink-200 to-pink-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-pink-900 mb-2">Priya Sharma</h3>
            <p className="text-pink-800 italic">Crafting web dreams with code & charm.</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Mail className="w-6 h-6 text-pink-700" />
            </a>
            <a href="#" className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Linkedin className="w-6 h-6 text-pink-700" />
            </a>
            <a href="#" className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <Github className="w-6 h-6 text-pink-700" />
            </a>
          </div>
          
          <div className="border-t border-pink-400 pt-8">
            <p className="text-pink-800">© 2024 Priya Sharma. Made with 💕 and lots of code.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
