import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    title: "Understanding Cross-Site Scripting (XSS)",
    date: "March 5, 2025",
    description: "Learn about XSS attacks and how to prevent them in your web applications",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    tags: ["Security", "Web", "XSS"],
  },
  {
    title: "SQL Injection Prevention Guide",
    date: "March 5, 2025",
    description: "A comprehensive guide to preventing SQL injection attacks",
    image: "https://images.unsplash.com/photo-1568027763595-ef293f388029",
    tags: ["Security", "Database", "SQL Injection"],
  },
  {
    title: "Secure Code Review Best Practices",
    date: "March 5, 2025",
    description: "Learn the essential practices for conducting effective security code reviews",
    image: "https://images.unsplash.com/photo-1590494165264-1ebe3602eb80",
    tags: ["Security", "Code Review", "Best Practices"],
  },
];

export default function Blog() {
  return (
    <section id="blog">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">Latest Articles</h2>
          <p className="text-center text-muted-foreground mb-12">
            Insights and tutorials on web security, vulnerability research, and ethical hacking
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.title} className="overflow-hidden bg-card/50">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
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
