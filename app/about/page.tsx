/* eslint-disable react/no-unescaped-entities */

"use client"

import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from 'framer-motion';

const About = () => {
  const aboutText = "I\'m software developer, I'm on an exciting journey of continuous learning and growth. My background in [Your Previous Field/Study] gives me a unique perspective on problem-solving and user needs. I'm passionate about creating intuitive and impactful digital experiences that make a difference.";

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="mb-12">
          <TextGenerateEffect words={aboutText} className="text-lg md:text-xl text-gray-700 leading-relaxed" />
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">My Journey</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Discovered my passion for coding through [specific event/project]</li>
              <li>Completed online courses in HTML, CSS, and JavaScript basics</li>
              <li>Currently learning React and building projects to apply my skills</li>
              <li>Actively participating in local tech meetups and online coding communities</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">What Drives Me</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>The endless possibilities of technology to solve real-world problems</li>
              <li>The creative aspects of front-end development</li>
              <li>The collaborative nature of the tech community</li>
              <li>The constant opportunity to learn and grow in this ever-evolving field</li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold">
            Let's Connect!
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;