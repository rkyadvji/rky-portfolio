"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import Image from "next/image";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

export default function FeaturedProject() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="bg-[#121212] py-24 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col gap-8"
        >
          <div className="flex items-center gap-3 mb-4">
             <Star className="text-yellow-500 fill-yellow-500" size={20} />
             <span className="text-sm font-semibold tracking-widest text-white/50 uppercase">Featured Project</span>
          </div>

          <div className="group relative glass-panel rounded-[32px] border border-white/10 bg-white/5 overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 md:p-10">
              {/* Image Side */}
              <div className="w-full md:w-1/2 flex justify-center overflow-hidden rounded-[16px] shadow-2xl">
                <div className="relative w-full max-w-[500px] aspect-video md:aspect-square overflow-hidden transition-transform duration-500 group-hover:scale-[1.03]">
                  <Image 
                    src="/JusticeBot.png"
                    alt="JusticeBot Preview"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    JusticeBot – <br/> AI Legal Assistant
                </h3>
                <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-10">
                    JusticeBot is a sophisticated AI-powered chatbot designed to democratize legal information. It helps users navigate complex legal queries in a simple, conversational and accessible way, narrowing the gap between citizens and legal aid.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://justicebot-legal-assistant.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-[#121212] font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a 
                    href="https://github.com/rkyadvji/justicebot-legal-assistant" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                  >
                    <GithubIcon size={18} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
