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
      value: "Available on request",
      href: null,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let's <span className="text-primary">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to build something amazing together? I'm always excited to
                work on new projects and collaborate with fellow developers.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-card-gradient border-primary/20 p-8 shadow-card animate-fade-in">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Your Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Tirth Patel"
                        className="bg-secondary/50 border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tirth@example.com"
                        className="bg-secondary/50 border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project Inquiry"
                      className="bg-secondary/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-secondary/50 border-primary/20 focus:border-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                  >
                    Send Message
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    (Note: This form is currently non-functional. Please reach
                    out via GitHub or LinkedIn.)
                  </p>
                </form>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Links */}
                <Card className="bg-card-gradient border-primary/20 p-8 shadow-card animate-slide-in-right">
                  <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => (
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
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors text-sm"
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
                <Card
                  className="bg-card-gradient border-primary/20 p-8 shadow-card animate-slide-in-right"
                  style={{ animationDelay: "0.1s" }}
                >
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
                        Open to opportunities in the near future
                      </span>
                    </div>
                  </div>
                </Card>

                {/* Call to Action */}
                <Card
                  className="bg-accent-gradient p-8 text-center shadow-glow animate-slide-in-right"
                  style={{ animationDelay: "0.2s" }}
                >
                  <h3 className="text-xl font-bold mb-2 text-accent-foreground">
                    Let's Build Something Together
                  </h3>
                  <p className="text-accent-foreground/80 mb-4 text-sm">
                    I'm always open to discussing new opportunities and
                    interesting projects.
                  </p>
                  <Button
                    variant="premium"
                    size="sm"
                    className="hover:bg-black/30 hover:scale-105 hover:shadow-lg transition-all duration-9999"
                  >
                    {" "}
                    Schedule a Call
                  </Button>
                  <p className="text-accent-foreground/80 mt-3  text-sm">
                    (Scheduling feature coming soon — reach out via GitHub or
                    LinkedIn.)
                  </p>
                </Card>
              </div>
            </div>

            {/* FAQ Section */}
            <Card className="bg-card-gradient border-primary/20 p-8 shadow-card mt-16 animate-fade-in">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Frequently Asked Questions
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    question: "What's your typical response time?",
                    answer:
                      "I usually respond within a day or two, depending on availability.",
                  },
                  {
                    question: "Do you work with international clients?",
                    answer:
                      "I'm just starting out, but I'm open to working with clients globally in the future.",
                  },
                  {
                    question: "What's your preferred project size?",
                    answer:
                      "I'm currently focused on small to medium-sized projects that help me build real-world experience.",
                  },
                  {
                    question: "Do you provide ongoing support?",
                    answer:
                      "At this stage, I don’t offer formal support services — this site is mainly to showcase my skills and growth.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-primary">
                      {faq.question}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
