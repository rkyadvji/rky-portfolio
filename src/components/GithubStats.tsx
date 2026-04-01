"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, GitBranch, Cpu, Terminal, ArrowRight } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

export default function GithubStats() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const GITHUB_ACTIVITY = [
    {
      label: "Total Projects",
      value: "15+",
      description: "Repositories and active projects on GitHub.",
      icon: <Code2 size={24} className="text-blue-400" />
    },
    {
      label: "Contributions",
      value: "100+",
      description: "Commits and push activity in the last year.",
      icon: <GitBranch size={24} className="text-green-400" />
    }
  ];

  const TECH_STACK = [
    { name: "React", level: "Expert" },
    { name: "Node.js", level: "Advanced" },
    { name: "Python", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Java", level: "Intermediate" },
    { name: "AIML", level: "Learning" }
  ];

  return (
    <section className="bg-[#121212] py-24 px-6 md:px-12 relative z-20 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="flex flex-col gap-12"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
               <h3 className="text-sm font-semibold tracking-widest text-white/50 uppercase">Developer Hub</h3>
               <h2 className="text-3xl md:text-5xl font-bold text-white">GitHub Activity {"&"} Tech</h2>
            </div>
            
            <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/rkyadvji" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-[#121212] font-bold text-sm tracking-widest uppercase transition-all shadow-xl"
            >
              <GithubIcon size={18} /> View GitHub Profile <ArrowRight size={16} />
            </motion.a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stats Cards Column */}
            <div className="lg:col-span-1 flex flex-col gap-8">
              {GITHUB_ACTIVITY.map((stat, i) => (
                <motion.div 
                    key={i} 
                    variants={itemVariants} 
                    className="glass-panel p-8 rounded-3xl border border-white/10 bg-white/5 relative overflow-hidden group"
                >
                    <div className="relative z-10">
                        <div className="mb-4 inline-flex p-3 rounded-xl bg-white/5 border border-white/10">
                            {stat.icon}
                        </div>
                        <h4 className="text-4xl font-bold text-white mb-2">{stat.value}</h4>
                        <p className="text-lg font-semibold text-white/90 mb-2">{stat.label}</p>
                        <p className="text-sm text-white/50 leading-relaxed">{stat.description}</p>
                    </div>
                    {/* Decorative gradient */}
                    <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-white/5 rounded-full blur-3xl transition-all duration-500 group-hover:bg-blue-500/10" />
                </motion.div>
              ))}
            </div>

            {/* Tech Stack Column */}
            <motion.div 
                variants={itemVariants} 
                className="lg:col-span-2 glass-panel p-10 rounded-3xl border border-white/10 bg-white/5 relative overflow-hidden"
            >
                <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-8">
                        <Terminal className="text-purple-400" size={24} />
                        <h3 className="text-2xl font-bold text-white">Core Technologies</h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {TECH_STACK.map((tech, i) => (
                            <div key={i} className="flex flex-col gap-2 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
                                <span className="text-sm text-white/40 uppercase tracking-tighter">Skill</span>
                                <span className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{tech.name}</span>
                                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mt-2">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: tech.level === "Expert" ? "90%" : tech.level === "Advanced" ? "75%" : tech.level === "Intermediate" ? "50%" : "30%" }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="h-full bg-blue-500/50"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="mt-10 text-white/40 text-sm leading-relaxed max-w-xl">
                        Regularly contributing to various open-source initiatives and working on personal projects focusing on web performance, 3D animations, and AI-driven solutions.
                    </p>
                </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
