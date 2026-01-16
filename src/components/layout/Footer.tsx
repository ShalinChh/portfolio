"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black/20 backdrop-blur-sm py-12">
            <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-2">
                    <Link href="/" className="text-xl font-bold tracking-tighter">
                        Portfolio<span className="text-indigo-500">.</span>
                    </Link>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">

                    <Link href="https://www.linkedin.com/in/shalin-chhetri-44b055289" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href="mailto:shalin.chhetri101@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Mail className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
