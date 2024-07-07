/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Link from "next/link";

export function Hero() {
    return (
        <HeroHighlight>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [20, -5, 0] }}
                transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                className="text-2xl md:text-6xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
            >
                <span className="block">Hi, I'm Pieter</span>
                <span className="block mt-2">
                    I'm a{" "}
                    <Highlight className="text-black dark:text-white inline-block">
                        Software Developer
                    </Highlight>
                </span>
                <span className="block mt-4">
                    who loves crafting elegant solutions,
                    <br className="hidden md:inline" /> one line of code at a time.
                </span>
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                className="mt-8"
            >
                <Link
                    href="#projects"
                    className="bg-zinc-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-zinc-800 transition duration-300"
                >
                    View My Work
                </Link>
            </motion.div>
        </HeroHighlight>
    );
}
