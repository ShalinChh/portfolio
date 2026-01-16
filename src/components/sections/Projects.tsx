"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Real-Time Collab Whiteboard",
    description: "A Figma-style collaborative design tool featuring multi-user object sync, real-time cursors, freehand drawing, and smart masking. Built with complex CRDT state management.",
    tags: ["Next.js 14", "Liveblocks", "Fabric.js", "TypeScript", "Tailwind"],
    links: { demo: "#", code: "#" },
  },
  {
    title: "Real-Time Crypto Trading Deck",
    description: "A high-performance trading dashboard streaming live Binance market data via WebSockets. Features real-time price tickers, dynamic candlestick charts, and sub-millisecond updates.",
    tags: ["Next.js 14", "WebSockets", "Recharts", "Tailwind", "TypeScript"],
    links: { demo: "#", code: "#" },
  },
  {
    title: "AI Voice Neural Interface",
    description: "A futuristic voice-controlled AI assistant ('Jarvis'). Features real-time speech-to-text, OpenAI-powered intelligence with weather awareness, and a reactive canvas-based audio visualizer.",
    tags: ["Next.js 14", "OpenAI API", "Web Speech API", "Tailwind", "Canvas"],
    links: { demo: "#", code: "#" },
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            A selection of my recent work, ranging from full-stack web applications to data analysis tools.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden border-white/5 bg-white/5 hover:border-indigo-500/50 transition-colors group">
                <div className="aspect-video w-full bg-black/50 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                  {index === 0 ? (
                    <img
                      src="/images/whiteboard-thumbnail.png"
                      alt="Whiteboard App"
                      className="w-full h-full object-cover"
                    />
                  ) : index === 1 ? (
                    <img
                      src="/images/crypto-dashboard.png"
                      alt="Crypto Dashboard"
                      className="w-full h-full object-cover"
                    />
                  ) : index === 2 ? (
                    <img
                      src="/images/neural-interface.png"
                      alt="Neural Interface"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    /* Fallback for any future projects */
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-900/40 z-0" />
                  )}


                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="mt-2 text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-indigo-500/10 text-indigo-300 text-xs px-2 py-1 rounded-full border border-indigo-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-3 pt-4">
                  <Button variant="default" size="sm" className="w-full gap-2 bg-indigo-600 hover:bg-indigo-700 text-white" asChild>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" /> Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
