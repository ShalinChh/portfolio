"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/nature.png"
                    alt="Nature Background"
                    className="h-full w-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
            </div>

            {/* Background Gradients (Overlaying the image slightly for effect) */}
            <div className="absolute -top-24 -left-20 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px] z-0" />
            <div className="absolute top-40 right-0 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[100px] z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-indigo-300 backdrop-blur-sm"
                    >
                        <span className="mr-2 flex h-2 w-2 rounded-full bg-indigo-500 relative">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                        </span>
                        Available for Summer 2026 Internships
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mb-8 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 pb-4"
                    >
                        Hey, I'm Shalin.
                        <br />
                        <span className="text-4xl md:text-6xl lg:text-7xl block mt-2">
                            Structuring Chaos into <span className="text-indigo-500">Code.</span>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
                    >
                        I'm a third-year Computer Science student at <strong>Toronto Metropolitan University</strong>. I build intelligent, pixel-perfect web applications that solve real-world problems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col gap-4 sm:flex-row"
                    >
                        <Button variant="premium" size="lg" className="gap-2" asChild>
                            <a href="#projects">
                                View Projects <ArrowRight className="h-4 w-4" />
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-sm"
            >
                <span>Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="h-10 w-[1px] bg-gradient-to-b from-transparent via-indigo-500 to-transparent"
                />
            </motion.div>
        </section>
    );
}
