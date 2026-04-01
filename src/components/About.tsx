"use client";

import { motion, type Variants } from "framer-motion";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="bg-[#121212] py-24 md:py-32 px-6 md:px-12 relative z-20 border-t border-white/5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <h3 className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-8">
          About Me
        </h3>

        <div className="space-y-6 text-lg md:text-xl text-white/80 font-light leading-relaxed">
          <p>
            I am a Final year Computer Science Engineering (AIML) student passionate about building real-world applications and solving problems through technology.
          </p>
          <p>
            I specialize in Full Stack Development with hands-on experience in React, JavaScript, and Python, and I am currently expanding my skills in Java and Node.js.
          </p>
          <p>
            I have built projects like:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white/90 font-medium">
            <li>JusticeBot &ndash; AI-powered legal assistant chatbot</li>
            <li>Notes Saver App &ndash; React-based productivity tool</li>
            <li>Personal Portfolio Website</li>
          </ul>
          <p>
            I am also interested in Data Analytics and have worked on an e-commerce research project analyzing customer purchase patterns.
          </p>
          <p>
            I am actively looking for opportunities to apply my skills, learn from industry experience, and grow as a developer.
          </p>
          <p className="pt-4 font-medium text-white/90">
            &#128231; Let’s connect and collaborate!
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold uppercase tracking-widest text-xs transition-all duration-300 hover:bg-white hover:text-[#121212] hover:scale-105 pointer-events-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
