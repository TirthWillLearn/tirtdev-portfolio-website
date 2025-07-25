import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import heroImage from "@/assets/IMG_0498 2.jpg";

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto">
            {" "}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-primary">Me</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Learn more about my journey, background, and passion for backend
                development
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Profile Image */}
              <div className="relative animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent-gradient rounded-2xl blur-2xl opacity-20" />
                  <img
                    src={heroImage}
                    alt="Tirth Patel"
                    className="relative z-10 w-full max-w-sm mx-auto rounded-2xl shadow-2xl border border-primary/20"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-6 animate-slide-in-right">
                <h2 className="text-3xl font-bold text-primary">
                  Hi, I'm Tirth!
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I'm a backend-focused web developer with a strong interest
                    in building scalable, reliable server-side applications. My
                    expertise lies in Node.js, Express, and working with
                    relational databases like MySQL. I enjoy writing clean code,
                    designing efficient APIs, and solving real-world problems
                    through backend logic.
                  </p>
                  <p>
                    While my main focus is backend development, I also build
                    simple frontends when needed to support full-stack projects
                    and bring ideas to life. I'm constantly learning, exploring
                    new technologies, and sharpening my skills through hands-on
                    projects.
                  </p>
                  <p>
                    Outside of coding, I enjoy diving into system design, open
                    source contributions, and cloud infrastructure — always
                    curious about how things work under the hood.
                  </p>
                </div>
              </div>
            </div>
            {/* Education */}
            <Card className="bg-card-gradient border-primary/20 p-8 mb-16 animate-fade-in shadow-card">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Education</h3>
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-primary">
                      Bachelor of Computer Applications (BCA)
                    </h4>
                    <p className="text-muted-foreground">Computer Science</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        YCMOU Open University – Hinduja College, Mumbai
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Graduated 2024
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                { label: "Years Learning", value: "1+" },
                { label: "Projects Built", value: "3+" },
                { label: "Technologies", value: "5+" },
              ].map((stat, index) => (
                <Card
                  key={stat.label}
                  className="bg-card-gradient border-primary/20 p-6 text-center shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
            {/* CTA */}
            <div className="text-center animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to work on new projects and collaborate with
                fellow developers. Let's build something amazing together!
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="/contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
