import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Code,
  Database,
  Cloud,
  GitBranch,
  Terminal,
  Shield,
  Brain,
  Clock,
  MessageSquare,
  Target,
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Node.js & Express.js", level: 70, icon: Code },
    { name: "MySQL & SQL Queries", level: 60, icon: Database },
    { name: "JWT & Cookie-based Auth", level: 65, icon: Shield },
    { name: "Git & GitHub", level: 60, icon: GitBranch },
    { name: "JavaScript (ES6+)", level: 60, icon: Code },
    { name: "React (API-driven frontend development)", level: 60, icon: Code },
    { name: "Linux CLI", level: 50, icon: Terminal },
    { name: "Postman", level: 85, icon: Target },
    { name: "Web Deployment (Render, Vercel)", level: 60, icon: Cloud },
    { name: "AWS (EC2, RDS)", level: 50, icon: Cloud },
  ];

  const softSkills = [
    { name: "Problem-solving", level: 60, icon: Brain },
    { name: "Self-learning", level: 80, icon: Brain },
    { name: "Communication", level: 60, icon: MessageSquare },
    { name: "Time Management", level: 75, icon: Clock },
  ];

  const SkillCard = ({ skill, index }: { skill: any; index: number }) => (
    <Card
      className="bg-card-gradient border-primary/20 p-6 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center gap-4">
        <div className="bg-primary/10 border border-primary rounded-md p-2 shadow-md">
          <skill.icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-semibold text-base text-foreground">
          {skill.name}
        </h3>
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
                My <span className="text-primary">Skills</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Here's an overview of my technical expertise and soft skills
                that I bring to every project
              </p>
            </div>

            {/* Technical Skills */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="text-primary">Technical</span> Skills
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technicalSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="text-primary">Soft</span> Skills
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {softSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>

            {/* Skills Overview */}
            <Card className="bg-card-gradient border-primary/20 p-8 shadow-card animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Skills Overview
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Backend Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Learning Node.js, Express, and RESTful API development with
                    growing database management knowledge
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Cloud className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Cloud & DevOps</h4>
                  <p className="text-sm text-muted-foreground">
                    Basic knowledge of AWS services, Linux fundamentals, and
                    learning deployment practices
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Continuous Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Committed to learning new technologies and improving
                    development skills with a growth mindset
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

{
  /* Commented out the Proficiency & Progress bar section */
}
{
  /*
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Proficiency</span>
          <span className="text-primary font-medium">{skill.level}%</span>
        </div>
        <Progress value={skill.level} className="h-2" />
      </div>
      */
}
