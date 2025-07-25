import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, Plug, Cloud, Code, ArrowRight } from "lucide-react";

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
      description:
        "Assist with cloud setup (AWS) and basic Linux server deployment",
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
      title: "Basic Full-Stack Development",
      description: "Small-scale full-stack app building using React + Node.js",
      features: [
        "React Frontend Development",
        "State Management",
        "API Integration",
        "Responsive Design",
        "End-to-end Testing",
      ],
    },
  ];

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                My <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I offer comprehensive backend development services to help bring
                your ideas to life
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="flex flex-col justify-between bg-card-gradient border-primary/20 p-8 shadow-card hover:shadow-glow transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary/10 group-hover:border-primary/40"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2 italic">
                    Feature coming soon
                  </p>
                </Card>
              ))}
            </div>

            {/* Process Section */}
            <Card className="bg-card-gradient border-primary/20 p-8 shadow-card animate-fade-in">
              <h3 className="text-2xl font-bold mb-8 text-center">
                My Development Process
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    desc: "Understanding your requirements and goals",
                  },
                  {
                    step: "02",
                    title: "Planning",
                    desc: "Architecture design and technology selection",
                  },
                  {
                    step: "03",
                    title: "Development",
                    desc: "Clean, efficient code with best practices",
                  },
                  {
                    step: "04",
                    title: "Deployment",
                    desc: "Testing, optimization, and going live",
                  },
                ].map((process, index) => (
                  <div key={process.step} className="text-center">
                    <div className="bg-primary/10 text-primary font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      {process.step}
                    </div>
                    <h4 className="font-semibold mb-2">{process.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {process.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* CTA */}
            <div className="text-center mt-16 animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss your requirements and build something amazing
                together. I'm here to help turn your ideas into reality.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="/contact">Start a Project</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
