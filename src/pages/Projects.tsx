import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Shield, Zap, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Multi-Vendor Order Management API",
      description:
        "A scalable backend API for a multi-vendor system supporting buyers and sellers. Implements secure authentication, transactional order processing, and optimized SQL queries to handle concurrent operations and large datasets.",
      techStack: [
        "Node.js",
        "Express",
        "TypeScript",
        "PostgreSQL",
        "JWT",
        "Docker",
      ],
      features: [
        "JWT Authentication & Role-Based Access (Buyer/Seller)",
        "Order Creation with SQL Transactions for Data Consistency",
        "Row-level Locking (SELECT FOR UPDATE) to Prevent Race Conditions",
        "Pagination, Filtering, and Sorting for Scalable APIs",
        "Optimized Queries using JOINs to Avoid N+1 Problems",
        "Global Error Handling, Validation & Rate Limiting",
        "Dockerized Backend & Cloud Deployment (Render)",
      ],
      githubUrl: "https://github.com/TirthWillLearn/Order-Management-API",
      liveUrl: "https://order-management-api-ruqo.onrender.com",
    },
    {
      id: 2,
      title: "Bookstore API",
      description:
        "A RESTful backend API for managing books, users, and reviews with secure authentication and scalable architecture. Supports role-based access control, cloud database integration, and optional AI-assisted search features.",
      techStack: ["Node.js", "Express", "MySQL", "JWT", "Stripe", "AWS RDS"],
      features: [
        "JWT Authentication & Role-Based Access Control (RBAC)",
        "Book Catalog with Ratings & Reviews System",
        "Cloud-hosted MySQL Database (AWS RDS)",
        "Secure Payment Integration with Stripe",
        "Optional AI-assisted Search (Experimental)",
      ],
      githubUrl: "https://github.com/TirthWillLearn/bookstore-api",
      liveUrl: "https://bookstore-api-czay.onrender.com",
    },
    {
      id: 3,
      title: "Job Portal API",
      description:
        "A backend API for job seekers and employers supporting job listings, applications, and role-based authentication. Built with guidance and iterative improvements, focusing on API design and backend workflows.",
      techStack: ["Node.js", "Express.js", "MySQL", "JWT", "REST API"],
      features: [
        "User Authentication & Role-Based Access (Employer / Candidate)",
        "Job Listings and Application Management APIs",
        "Search and Filtering Endpoints",
        "Basic AI-assisted job filtering (experimental)",
      ],
      githubUrl: "https://github.com/TirthWillLearn/job-portal-api",
      liveUrl: null,
    },
  ];

  const ProjectCard = ({ project }: { project: any }) => {
    return (
      <Card className="border border-border p-6 shadow-sm hover:shadow-md transition flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-semibold text-primary mb-2">
          {project.title}
        </h3>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.techStack.map((tech: string) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Key Highlights:</h4>
          <ul className="space-y-1">
            {project.features.map((feature: string, i: number) => (
              <li key={i} className="text-xs text-muted-foreground flex gap-2">
                <span className="text-primary">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <a href={project.githubUrl} target="_blank">
              Code
            </a>
          </Button>

          {project.liveUrl && (
            <Button size="sm" className="flex-1" asChild>
              <a href={project.liveUrl} target="_blank">
                Live
              </a>
            </Button>
          )}
        </div>
      </Card>
    );
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                My <span className="text-primary">Projects</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Backend projects focused on API design, scalability, and system
                reliability.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-14">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* What I Build */}
            <Card className="border border-border p-8 shadow-sm mb-14">
              <h3 className="text-xl font-semibold mb-6 text-center">
                What I Build
              </h3>

              <div className="grid md:grid-cols-3 gap-6 text-center">
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
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title}>
                      <div className="bg-primary/10 p-4 rounded-lg w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* CTA */}
            <Card className="border border-border p-8 text-center shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                More Projects Coming Soon
              </h3>
              <p className="text-muted-foreground mb-5 max-w-xl mx-auto">
                I'm constantly building and improving backend systems. Check my
                GitHub for latest work.
              </p>

              <div className="flex justify-center gap-3">
                <Button variant="outline" asChild>
                  <a href="https://github.com/TirthWillLearn" target="_blank">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>

                <Button asChild>
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
