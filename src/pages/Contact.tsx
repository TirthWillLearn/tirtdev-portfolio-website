import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Clock } from "lucide-react";

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
      icon: Mail,
      label: "Email",
      value: "Reach out via LinkedIn or GitHub",
      href: null,
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
                Let’s <span className="text-primary">Connect</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Open to backend roles and opportunities. Feel free to reach out.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Form (still non-functional but cleaner) */}
              <Card className="border border-border p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Email Address" />
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Message..." rows={5} />

                  <Button className="w-full">Send Message</Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Contact via GitHub or LinkedIn for faster response.
                  </p>
                </form>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="border border-border p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Contact Links</h3>

                  <div className="space-y-4">
                    {contactInfo.map((contact) => (
                      <div
                        key={contact.label}
                        className="flex items-center gap-3"
                      >
                        <contact.icon className="w-5 h-5 text-primary" />
                        {contact.href ? (
                          <a
                            href={contact.href}
                            target="_blank"
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <span className="text-sm text-muted-foreground">
                            {contact.value}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Info */}
                <Card className="border border-border p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3">Quick Info</h3>

                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Mumbai, India
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Open to backend roles
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-14">
              <h3 className="text-xl font-semibold mb-3">
                Let’s Build Something
              </h3>
              <p className="text-muted-foreground mb-4">
                Interested in working together? Reach out anytime.
              </p>

              <Button asChild>
                <a href="https://github.com/TirthWillLearn" target="_blank">
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
<Card className="border border-border p-8 shadow-sm mt-16">
  <h3 className="text-xl font-semibold mb-6 text-center">Common Questions</h3>

  <div className="grid md:grid-cols-2 gap-6">
    {[
      {
        question: "What kind of roles are you looking for?",
        answer:
          "I’m currently looking for backend developer roles where I can work on APIs, databases, and scalable systems.",
      },
      {
        question: "What technologies do you work with?",
        answer:
          "I primarily work with Node.js, Express, PostgreSQL/MySQL, and build RESTful APIs with authentication and database optimization.",
      },
      {
        question: "Can you handle real-world backend problems?",
        answer:
          "Yes — I’ve built projects involving authentication, transactions, concurrency control, and optimized queries to simulate production scenarios.",
      },
      {
        question: "How can I contact you?",
        answer:
          "You can reach out via LinkedIn or GitHub for faster communication.",
      },
    ].map((faq, index) => (
      <div key={index} className="space-y-2">
        <h4 className="font-medium text-primary">{faq.question}</h4>
        <p className="text-sm text-muted-foreground">{faq.answer}</p>
      </div>
    ))}
  </div>
</Card>;
export default Contact;
