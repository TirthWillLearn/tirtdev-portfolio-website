import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink, Database, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import heroImage from "@/assets/IMG_0498 2.jpg";

const Hero = () => {
  const techIcons = [
    { icon: Database, label: "Database", position: "top-28 left-16" },
    { icon: Server, label: "Backend", position: "bottom-28 right-16" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Softer Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-70" />

      {/* Floating Icons (reduced) */}
      {techIcons.map((tech, index) => (
        <div
          key={tech.label}
          className={`absolute hidden lg:block ${tech.position}`}
        >
          <div className="bg-card/40 border border-border rounded-md p-2 shadow-sm">
            <tech.icon className="w-5 h-5 text-primary" />
          </div>
        </div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-sm text-primary font-medium">👋 Hello</h1>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              I'm <span className="text-primary">Tirth Patel</span>
              <br />
              <span className="text-foreground">Backend Developer</span>
            </h2>

            {/* Typewriter (fixed content) */}
            <div className="text-lg text-muted-foreground font-medium">
              <Typewriter
                words={[
                  "Building scalable APIs",
                  "Handling transactions & concurrency",
                  "Designing reliable backend systems",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </div>

            <p className="max-w-lg text-muted-foreground">
              I build backend systems using Node.js, Express, and SQL databases
              — focusing on performance, data consistency, and clean
              architecture.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" asChild>
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact</Link>
              </Button>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/TirthWillLearn" target="_blank">
                  <Github className="w-5 h-5" />
                </a>
              </Button>

              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/tirth-k-patel" target="_blank">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>

              <Button
                variant="ghost"
                className="flex items-center gap-2"
                asChild
              >
                <Link to="/resume">
                  Resume
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image (reduced glow) */}
          <div className="relative">
            <img
              src={heroImage}
              alt="Tirth Patel"
              className="w-full max-w-sm mx-auto rounded-xl shadow-md border border-border"
            />

            <div className="absolute -bottom-3 -right-3 bg-primary text-white px-3 py-1 rounded-full text-xs shadow-sm">
              Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
