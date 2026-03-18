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
          <div className="max-w-5xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About <span className="text-primary">Me</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Backend-focused developer building scalable APIs and reliable
                systems.
              </p>
            </div>

            {/* Profile + Bio */}
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
              {/* Image */}
              <div>
                <img
                  src={heroImage}
                  alt="Tirth Patel"
                  className="w-full max-w-xs mx-auto rounded-xl shadow-md border border-border"
                />
              </div>

              {/* Bio */}
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <h2 className="text-2xl font-semibold text-primary">
                  Hi, I'm Tirth Patel
                </h2>

                <p>
                  I’m a backend developer focused on building scalable APIs and
                  reliable server-side systems using Node.js, Express, and SQL
                  databases.
                </p>

                <p>
                  I’ve built production-style applications involving
                  authentication, transactions, concurrency control, and
                  optimized database queries. My focus is on writing clean,
                  maintainable code and solving real-world backend problems.
                </p>

                <p>
                  While I can build frontend interfaces when required, my core
                  interest lies in backend architecture, system design, and data
                  handling.
                </p>
              </div>
            </div>

            {/* Education */}
            <Card className="border border-border p-6 mb-14 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-1">Education</h3>
                  <h4 className="text-lg font-medium text-primary">
                    Bachelor of Computer Applications (BCA)
                  </h4>
                  <p className="text-muted-foreground">Computer Science</p>

                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Hinduja College, Mumbai
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      2024
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Stats (fixed) */}
            <div className="grid md:grid-cols-3 gap-5 mb-14">
              {[
                { label: "Backend Projects", value: "3+" },
                { label: "APIs Built", value: "15+" },
                {
                  label: "Core Concepts",
                  value: "Auth, Transactions, Concurrency",
                },
              ].map((stat) => (
                <Card
                  key={stat.label}
                  className="border border-border p-5 text-center shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">
                Let’s Build Something
              </h3>
              <p className="text-muted-foreground mb-5 max-w-xl mx-auto">
                Open to backend roles and opportunities where I can build
                scalable systems and improve as an engineer.
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

export default About;
