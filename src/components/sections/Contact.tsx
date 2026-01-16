"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <h2 className="mb-6 text-3xl font-bold md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Let's work together
                    </h2>
                    <p className="mb-8 text-xl text-muted-foreground">
                        Have a project in mind or just want to say hi? I'm always open to discussing new projects,
                        creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="premium" size="lg" className="gap-2 px-8" asChild>
                            <a href="mailto:shalin.chhetri101@gmail.com">
                                <Mail className="w-5 h-5" /> Send me an email
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
