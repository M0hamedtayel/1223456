import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Secure Code Review Tool",
    description: "Automated security code review tool that identifies common vulnerabilities in web applications.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Security", "Automation", "Code Analysis"],
  },
  {
    title: "Web Security Scanner",
    description: "Custom-built web application security scanner for identifying OWASP Top 10 vulnerabilities.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    tags: ["Security", "Web", "Scanning"],
  },
  {
    title: "Vulnerability Reporter",
    description: "Reporting tool for documenting and tracking security vulnerabilities in web applications.",
    image: "https://images.unsplash.com/photo-1563452619267-bc16ef6cecec",
    tags: ["Security", "Reporting", "Documentation"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-secondary/10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden bg-card/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
