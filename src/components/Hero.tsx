import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Server,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/IMG_0498 2.jpg";

const Hero = () => {
  const techIcons = [
    { icon: Code, label: "Full-Stack", position: "top-20 right-20" },
    { icon: Database, label: "Database", position: "top-32 left-16" },
    { icon: Server, label: "Backend", position: "bottom-32 right-16" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(195_100%_50%_/_0.05),transparent_70%)]" />

      {/* Floating Tech Icons */}
      {techIcons.map((tech, index) => (
        <div
          key={tech.label}
          className={`absolute hidden lg:block ${tech.position} animate-float`}
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-3 shadow-card hover:shadow-glow transition-all duration-300">
            <tech.icon className="w-6 h-6 text-primary" />
          </div>
        </div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-lg text-primary font-medium pt-6 md:pt-0">
                👋 Hello Mate
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                I'm <span className="text-primary">Tirth Patel</span>
                <br />a{" "}
                <span className="bg-accent-gradient bg-clip-text text-transparent">
                  Backend Developer
                </span>
              </h2>
              <div className="space-y-2 text-lg text-muted-foreground">
                <p>
                  Backend Developer | Practical Problem Solver & Real-World
                  Learner
                </p>
                <p className="max-w-lg">
                  I build fast, secure, and scalable backend systems using
                  Node.js, Express, and MySQL — with lightweight React frontends
                  to showcase project functionality.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/TirthWillLearn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/tirth-k-patel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.tirthdev.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right pb-6 pr-6">
            <div className="relative">
              <div className="absolute inset-0 bg-accent-gradient rounded-2xl blur-2xl opacity-20 animate-glow-pulse" />
              <img
                src={heroImage}
                alt="Tirth Patel - Backend Developer"
                className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-primary/20 object-top"
              />

              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-glow">
                Available for work
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
