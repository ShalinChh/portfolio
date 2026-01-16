"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Languages",
        skills: ["Python", "JavaScript", "Java", "SQL", "HTML/CSS", "TypeScript"],
    },
    {
        title: "Frameworks & Libraries",
        skills: ["React.js", "Next.js", "Node.js", "Tailwind CSS"],
    },
    {
        title: "Tools & Platforms",
        skills: ["Git", "Docker", "Firebase", "Figma", "Jira", "Notion", "TablePlus", "Retool"],
    },
];

export function About() {
    return (
        <section id="about" className="py-24 relative bg-black/20">
            <div className="container mx-auto px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-6 mb-6">
                            <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 overflow-hidden rounded-full border-2 border-indigo-500/30 shadow-lg bg-neutral-900">
                                <img
                                    src="/main.jpg"
                                    alt="Shalin Chhetri"
                                    className="object-cover w-full h-full"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                        (e.target as HTMLImageElement).parentElement!.innerText = "SC";
                                        (e.target as HTMLImageElement).parentElement!.className += " flex items-center justify-center text-3xl font-bold text-gray-500";
                                    }}
                                />
                            </div>
                            <h2 className="text-3xl font-bold md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                About Me
                            </h2>
                        </div>
                        <div className="space-y-4 text-muted-foreground text-lg">
                            <p>
                                Hey there! 👋 I'm <strong>Shalin Chhetri</strong>, a Computer Science student at TMU who loves building things that feel alive on the web.
                            </p>
                            <p>
                                I believe code should be fun, fast, and functional. Whether I'm engineering a real-time collaboration engine or training a voice AI to chat about the weather, I live for that "aha!" moment when a complex abstract idea turns into a seamless user experience.
                            </p>
                            <p>
                                When I'm not shipping code, I'm usually chasing adrenaline—carving down snowy mountains on my snowboard 🏂, or competing on the soccer field. I bring that same energy to engineering: fast-paced, resilient, and always playing for the team.
                            </p>
                        </div>

                        {/* Snowboarding Highlight */}
                        <div className="mt-8 relative hidden md:block group">
                            <div className="absolute -top-12 -right-4 md:-right-10 flex flex-col items-center animate-pulse">
                                <span className="text-indigo-400 font-handwriting text-xl -rotate-12 mb-2">Me snowboarding!</span>
                                <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-indigo-400 rotate-12">
                                    <path d="M10 10 C 20 5, 40 20, 30 40l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="relative w-full h-96 overflow-hidden rounded-2xl border border-white/10 bg-white/5 rotate-2 hover:rotate-0 transition-transform duration-300">
                                <img
                                    src="/me.jpg"
                                    alt="Snowboarding"
                                    className="object-cover object-[50%_70%] w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        {skillCategories.map((category, idx) => (
                            <div key={category.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                                <h3 className="mb-4 text-lg font-semibold text-white">{category.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, index) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: (idx * 0.1) + (index * 0.05) }}
                                            className="rounded-md bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 text-sm text-indigo-200"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
