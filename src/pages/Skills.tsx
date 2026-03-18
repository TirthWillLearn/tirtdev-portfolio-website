import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Code, Database, Cloud, GitBranch, Shield, Brain } from "lucide-react";

const Skills = () => {
  const skillGroups = [
    {
      title: "Backend",
      icon: Code,
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "Role-Based Access Control",
      ],
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        "PostgreSQL",
        "MySQL",
        "SQL Transactions",
        "Query Optimization",
        "Pagination",
      ],
    },
    {
      title: "Core Concepts",
      icon: Shield,
      skills: [
        "Authentication & Authorization",
        "Concurrency Control",
        "Database Design",
        "API Design",
      ],
    },
    {
      title: "Languages",
      icon: Code,
      skills: ["TypeScript", "JavaScript (ES6+)", "SQL"],
    },
    {
      title: "Cloud & Deployment",
      icon: Cloud,
      skills: ["Docker", "AWS EC2", "AWS RDS", "Render"],
    },
    {
      title: "Tools",
      icon: GitBranch,
      skills: ["Git", "Postman", "Linux"],
    },
    {
      title: "Mindset",
      icon: Brain,
      skills: ["Problem Solving", "Self Learning", "Time Management"],
    },
  ];

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                My <span className="text-primary">Skills</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Backend-focused technologies and concepts I use to build
                scalable systems.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillGroups.map((group, index) => (
                <Card
                  key={index}
                  className="border border-border p-5 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <group.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-base">{group.title}</h3>
                  </div>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {group.skills.map((skill, i) => (
                      <li key={i}>• {skill}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            {/* Backend Thinking Section */}
            <Card className="border border-border p-8 shadow-sm mt-12">
              <h3 className="text-xl font-semibold mb-6 text-center">
                How I Think as a Backend Developer
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">API Design</h4>
                  <p className="text-muted-foreground">
                    Designed RESTful APIs with proper route structure, status
                    codes, and separation of concerns using controllers and
                    services.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Database Queries</h4>
                  <p className="text-muted-foreground">
                    Wrote optimized SQL queries with joins, filtering, and
                    pagination.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Transactions</h4>
                  <p className="text-muted-foreground">
                    Used transactions to ensure atomic operations during order
                    processing.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Concurrency Control</h4>
                  <p className="text-muted-foreground">
                    Prevented race conditions using SELECT FOR UPDATE.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Authentication</h4>
                  <p className="text-muted-foreground">
                    Implemented JWT-based authentication and role-based access
                    control.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Error Handling</h4>
                  <p className="text-muted-foreground">
                    Built centralized error handling middleware for consistent
                    responses.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Performance</h4>
                  <p className="text-muted-foreground">
                    Improved performance using pagination and query
                    optimization.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Deployment</h4>
                  <p className="text-muted-foreground">
                    Deployed apps using Docker, AWS (EC2, RDS), and Render.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">API Testing</h4>
                  <p className="text-muted-foreground">
                    Tested endpoints using Postman for edge cases and
                    validation.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
