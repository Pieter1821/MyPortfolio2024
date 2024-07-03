"use client";
import { motion } from "framer-motion";


import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
export function Hero() {
    return (
        <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-3xl md:text-5xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          <span className="block">Hi, I'm Pieter
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
          </span>
        </motion.h1>
      </HeroHighlight>
    );
}
