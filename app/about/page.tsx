"use client"

import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from 'framer-motion';

const About = () => {
  const aboutText = "Welcome to my world! I'm Pieter Deane, a developer dedicated to crafting exceptional websites and applications. While I don't have a formal computer science background, I've embarked on a journey of continuous learning, diving deep into various programming languages and tools. ...";

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className=" py-20 bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="container w-100 mx-auto max-w-4xl px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-white"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="mb-12">
          <TextGenerateEffect words={aboutText} className="text-lg md:text-xl text-white leading-relaxed" />
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 md:gap-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">My Journey</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Discovered my passion for coding through [specific event/project]</li>
              <li>Completed online courses in HTML, CSS, and JavaScript basics</li>
              <li>Currently learning React and building projects to apply my skills</li>
              <li>Actively participating in local tech meetups and online coding communities</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">What Drives Me</h3>
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
          <Link href="#contact" className="bg-white text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition-colors text-lg font-semibold">
            Let's Connect!
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
