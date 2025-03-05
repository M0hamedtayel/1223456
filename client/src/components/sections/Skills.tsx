import { motion } from "framer-motion";

const skills = [
  { name: "Web Application Security", level: 95 },
  { name: "Vulnerability Assessment", level: 90 },
  { name: "SQL Injection", level: 85 },
  { name: "XSS & CSRF", level: 88 },
  { name: "Security Automation", level: 80 },
  { name: "Network Security", level: 85 },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <p className="text-center text-muted-foreground mb-16">
            Specialized expertise in web security testing and vulnerability assessment
          </p>

          <div className="max-w-3xl mx-auto space-y-8">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
