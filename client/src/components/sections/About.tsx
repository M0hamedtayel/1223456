import { motion } from "framer-motion";
import { Shield, Code, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    name: "Security First",
    description: "Expert in vulnerability assessment and penetration testing",
    icon: Shield,
  },
  {
    name: "Technical Expertise",
    description: "Proficient in multiple programming languages and security tools",
    icon: Code,
  },
  {
    name: "Ethical Hacking",
    description: "Certified ethical hacker with a focus on responsible disclosure",
    icon: Lock,
  },
];

export default function About() {
  return (
    <section id="about" className="bg-secondary/10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-16">
            With over 5 years of experience in cybersecurity, I specialize in identifying and remediating web
            application vulnerabilities to help organizations maintain their security posture.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.name} className="bg-card/50">
                <CardContent className="pt-6">
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
