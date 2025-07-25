import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  ExternalLink,
  Database,
  Shield,
  Zap,
  Brain,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Bookstore API",
      description:
        "A secure RESTful API with user authentication, Stripe payments, and smart recommendations via Google AI. Features comprehensive user management, book catalog, and intelligent recommendation system.",
      image: "/api/placeholder/400/250",
      techStack: [
        "Node.js",
        "Express",
        "MySQL",
        "Stripe",
        "JWT",
        "Cookies",
        "Google AI",
      ],
      features: [
        "JWT & Cookie Authentication",
        "Stripe Payment Integration",
        "AI-powered Recommendations",
        "Secure User Management",
      ],
      githubUrl: "https://github.com/TirthWillLearn/bookstore-api",
      liveUrl: null,
      icon: Database,
    },
    {
      id: 2,
      title: "Job Portal API",
      description:
        "A comprehensive backend system for job seekers and employers with robust authentication and AI-based job filtering. Includes advanced search capabilities and user role management.",
      image: "/api/placeholder/400/250",
      techStack: ["Node.js", "Express", "MySQL", "JWT", "Cookies", "Google AI"],
      features: [
        "Multi-role Authentication",
        "AI Job Filtering",
        "Advanced Search API",
        "Application Management",
      ],
      githubUrl: "https://github.com/TirthWillLearn/job-portal-api",
      liveUrl: null,
      icon: Shield,
    },
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <Card
      className="bg-card-gradient border-primary/20 overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 group animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Image/Icon */}
      <div className="relative h-48 bg-secondary/50 flex items-center justify-center">
        <div className="bg-primary/10 p-6 rounded-full">
          <project.icon className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Key Features:</h4>
          <div className="space-y-1">
            {project.features.map((feature: string, featureIndex: number) => (
              <div key={featureIndex} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-xs text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="font-semibold text-sm mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
          {project.liveUrl && (
            <Button variant="default" size="sm" className="flex-1" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                My <span className="text-primary">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Here are some of the backend projects I've built, showcasing my
                skills in API development and system architecture
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            {/* What I Build Section */}
            <Card className="bg-card-gradient border-primary/20 p-8 shadow-card animate-fade-in mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">
                What I Build
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Zap,
                    title: "Performance-First APIs",
                    description:
                      "Fast, optimized backend systems built for scale and reliability",
                  },
                  {
                    icon: Shield,
                    title: "Security-Focused",
                    description:
                      "Robust authentication, data protection, and secure coding practices",
                  },
                  {
                    icon: Brain,
                    title: "AI Integration",
                    description:
                      "Smart features powered by modern AI services and machine learning",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="text-center">
                    <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* More Projects Coming */}
            <Card className="bg-card-gradient border-primary/20 p-8 text-center shadow-card animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">
                More Projects Coming Soon
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm constantly working on new projects and exploring
                cutting-edge technologies. Follow my GitHub to stay updated with
                my latest work.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/TirthWillLearn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub Profile
                  </a>
                </Button>
                <Button variant="hero" asChild>
                  <a href="/contact">Work With Me</a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
