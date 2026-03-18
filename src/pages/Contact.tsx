import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  ExternalLink,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/TirthWillLearn",
      href: "https://github.com/TirthWillLearn",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/tirth-k-patel",
      href: "https://linkedin.com/in/tirth-k-patel",
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      value: "You're already on my portfolio website.",
      href: null,
    },
    {
      icon: Mail,
      label: "Email",
      value: "Reach out via LinkedIn or GitHub",
      href: null,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let's <span className="text-primary">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Open to backend roles and meaningful opportunities. Feel free to
                reach out.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card className="bg-card-gradient border-primary/20 p-8 shadow-card animate-fade-in">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" />
                    <Input placeholder="Email Address" />
                  </div>

                  <Input placeholder="Subject" />

                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={6}
                  />

                  <Button variant="hero" size="lg" className="w-full">
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Prefer LinkedIn or GitHub for faster response.
                  </p>
                </form>
              </Card>

              {/* Right Side */}
              <div className="space-y-8">
                {/* Get in Touch */}
                <Card className="bg-card-gradient border-primary/20 p-8 shadow-card animate-slide-in-right">
                  <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

                  <div className="space-y-6">
                    {contactInfo.map((contact) => (
                      <div
                        key={contact.label}
                        className="flex items-center gap-4"
                      >
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <contact.icon className="w-5 h-5 text-primary" />
                        </div>

                        <div className="flex-1">
                          <h4 className="font-semibold">{contact.label}</h4>

                          {contact.href ? (
                            <a
                              href={contact.href}
                              target="_blank"
                              className="text-muted-foreground hover:text-primary text-sm"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <span className="text-muted-foreground text-sm">
                              {contact.value}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Quick Info */}
                <Card className="bg-card-gradient border-primary/20 p-8 shadow-card">
                  <h3 className="text-xl font-bold mb-4">Quick Info</h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">
                        Mumbai, India
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">
                        Open to backend developer roles
                      </span>
                    </div>
                  </div>
                </Card>

                {/* CTA */}
                <Card className="bg-accent-gradient p-8 text-center shadow-glow">
                  <h3 className="text-xl font-bold mb-2 text-accent-foreground">
                    Let’s Build Something Meaningful
                  </h3>

                  <p className="text-accent-foreground/80 mb-4 text-sm">
                    Open to collaborating on backend systems and real-world
                    projects.
                  </p>

                  <Button variant="premium" size="sm">
                    Reach Out
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
