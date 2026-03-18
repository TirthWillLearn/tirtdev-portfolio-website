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
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(195_100%_50%_/_0.05),transparent_70%)]" />

      {/* Floating Icons */}
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <h1 className="text-lg text-primary font-medium pt-6 md:pt-0">
              👋 Hello Mate
            </h1>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              I'm <span className="text-primary">Tirth Patel</span>
              <br />
              <span className="bg-accent-gradient bg-clip-text text-transparent">
                Backend Developer
              </span>
            </h2>

            {/* Typewriter */}
            <div>
              <span className="bg-accent-gradient bg-clip-text text-transparent font-semibold text-xl md:text-xl tracking-wide leading-relaxed">
                <Typewriter
                  words={[
                    "Building scalable APIs",
                    "Handling transactions & concurrency",
                    "Optimizing SQL queries",
                    "Implementing secure authentication & RBAC",
                    "Designing reliable backend systems",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </div>

            {/* Description */}
            <p className="max-w-lg text-muted-foreground text-base md:text-lg leading-relaxed">
              I build fast, secure, and scalable backend systems using Node.js,
              Express, and SQL databases — focusing on performance, data
              consistency, and clean architecture.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
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
                className="h-10 px-4 flex items-center gap-2"
                asChild
              >
                <Link to="/resume">
                  View Resume
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative pb-6 pr-6">
            <div className="relative">
              {/* Glow (controlled) */}
              <div className="absolute inset-0 bg-accent-gradient rounded-2xl blur-2xl opacity-20 animate-glow-pulse" />

              {/* Image */}
              <img
                src={heroImage}
                alt="Tirth Patel"
                className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-primary/20 object-top"
              />

              {/* Badge FIXED */}
              <div className="absolute bottom-4 right-4 z-20 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-md">
                Available for work
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
