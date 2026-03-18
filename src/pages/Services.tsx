import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, Plug, Cloud, Code } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Backend Development",
      description:
        "Custom REST APIs, database integration, authentication systems",
      features: [
        "RESTful API Development",
        "Database Design & Integration",
        "JWT & Cookie Authentication",
        "Security Implementation",
        "Performance Optimization",
      ],
    },
    {
      icon: Plug,
      title: "API Integration",
      description: "Connect with third-party APIs or build internal services",
      features: [
        "Third-party API Integration",
        "Webhook Implementation",
        "Data Synchronization",
        "API Documentation",
        "Error Handling & Monitoring",
      ],
    },
    {
      icon: Cloud,
      title: "Deployment Support",
      description: "Assist with cloud setup (AWS) and Linux-based deployment",
      features: [
        "AWS EC2 Setup",
        "Linux Server Configuration",
        "Database Deployment",
        "SSL Certificate Setup",
        "Basic DevOps Support",
      ],
    },
    {
      icon: Code,
      title: "Full-Stack Support (When Needed)",
      description:
        "Build minimal frontend interfaces to support backend systems",
      features: [
        "React Frontend Integration",
        "API Integration",
        "Basic UI Development",
        "End-to-end Flow Setup",
      ],
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
                What I <span className="text-primary">Can Build</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Backend-focused capabilities for building scalable and reliable
                systems
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-14">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="bg-card-gradient border border-border p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Process */}
            <Card className="border border-border p-8 shadow-sm mb-14">
              <h3 className="text-xl font-semibold mb-6 text-center">
                How I Work
              </h3>

              <div className="grid md:grid-cols-4 gap-6 text-center">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    desc: "Understand requirements",
                  },
                  {
                    step: "02",
                    title: "Planning",
                    desc: "Design system architecture",
                  },
                  {
                    step: "03",
                    title: "Development",
                    desc: "Write clean backend code",
                  },
                  { step: "04", title: "Deployment", desc: "Test and deploy" },
                ].map((p) => (
                  <div key={p.step}>
                    <div className="bg-primary/10 text-primary font-semibold w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                      {p.step}
                    </div>
                    <h4 className="font-medium">{p.title}</h4>
                    <p className="text-xs text-muted-foreground">{p.desc}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">
                Let’s Build Something
              </h3>
              <p className="text-muted-foreground mb-5 max-w-xl mx-auto">
                Open to backend roles and collaboration opportunities.
              </p>
              <Button size="lg" asChild>
                <a href="/contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
