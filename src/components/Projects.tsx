"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const PROJECTS = [
  {
    title: "JusticeBot – Legal Assistant",
    description: "AI-powered legal assistant chatbot built to help citizens understand their legal rights.",
    live: "https://justicebot-legal-assistant.netlify.app/",
    github: "https://github.com/rkyadvji/justicebot-legal-assistant",
    image: "/JusticeBot.png",
  },
  {
    title: "Notes Saver App (PasteApp)",
    description: "A React-based productivity tool that helps you save, organize and manage your notes efficiently.",
    live: "https://paste-app-five-tan.vercel.app/",
    github: "https://github.com/rkyadvji/PasteApp",
    image: "/NotesApp.png",
  },
  {
    title: "Personal Portfolio",
    description: "A premium interactive portfolio built with Next.js, Framer Motion and 3D animations.",
    live: "https://cool-tapioca-3bfca3.netlify.app/",
    github: "https://github.com/rkyadvji/portfolio",
    image: "/Portfolio.png",
  }
];

export default function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="bg-[#121212] py-24 px-4 md:px-12 z-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            <h3 className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-16">
            All Projects
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
                <motion.div 
                    key={i} 
                    variants={itemVariants}
                    className="group flex flex-col glass-panel overflow-hidden transition-all duration-500 hover:border-white/30 hover:shadow-[0_10px_40px_rgba(255,255,255,0.08)] border border-white/10 rounded-2xl bg-white/5"
                >
                {/* Thumbnail Image */}
                <div className="relative w-full h-[200px] overflow-hidden rounded-t-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Meta Content */}
                <div className="p-8 flex flex-col flex-1 justify-between items-start">
                    <div className="w-full">
                    <h4 className="text-2xl font-semibold text-white mb-4">
                        {project.title}
                    </h4>
                    <p className="text-sm text-white/60 font-light leading-relaxed mb-10">
                        {project.description}
                    </p>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex w-full items-center gap-4 mt-auto pt-4 border-t border-white/10">
                        <a 
                            href={project.live} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-[#121212] font-semibold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:bg-white/90"
                        >
                            <ExternalLink size={14} /> LIVE DEMO
                        </a>
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                        >
                            <GithubIcon size={18} />
                        </a>
                    </div>
                </div>
                </motion.div>
            ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
}
