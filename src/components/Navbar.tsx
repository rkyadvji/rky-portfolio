"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] w-[90%] md:w-auto flex justify-center">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex items-center justify-center gap-4 md:gap-10 px-6 md:px-12 py-3 md:py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
      >
        <a href="#home" className="text-[10px] sm:text-xs md:text-sm font-semibold text-white/70 hover:text-white uppercase tracking-widest transition-colors drop-shadow-md">Home</a>
        <a href="#about" className="text-[10px] sm:text-xs md:text-sm font-semibold text-white/70 hover:text-white uppercase tracking-widest transition-colors drop-shadow-md">About</a>
        <a href="#projects" className="text-[10px] sm:text-xs md:text-sm font-semibold text-white/70 hover:text-white uppercase tracking-widest transition-colors drop-shadow-md">Projects</a>
        <a href="#contact" className="text-[10px] sm:text-xs md:text-sm font-semibold text-white/70 hover:text-white uppercase tracking-widest transition-colors drop-shadow-md">Contact</a>
      </motion.nav>
    </div>
  );
}
