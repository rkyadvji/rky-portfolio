"use client";

import { motion, type Variants } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Contact() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="bg-[#121212] py-24 px-6 md:px-12 relative z-20 border-t border-white/5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-4xl mx-auto flex flex-col items-center"
      >

        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center drop-shadow-lg">
          Contact Me
        </h3>

        <p className="text-white/60 mb-12 text-center max-w-lg text-lg leading-relaxed">
          Feel free to reach out for collaborations or opportunities. Let&apos;s build something great together.
        </p>

        {/* Contact Card */}
        <div className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-14 rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] flex flex-col items-center">

          {/* Contact Details container */}
          <div className="flex flex-col sm:flex-row w-full gap-4 md:gap-6 justify-center mb-10">
            <a
              href="mailto:rkyadvji@gmail.com"
              className="group flex flex-1 items-center justify-center gap-3 px-6 py-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20"
            >
              <Mail size={22} className="text-white/70 group-hover:text-white transition-colors" />
              <span className="text-white/90 font-medium tracking-wide">rkyadvji@gmail.com</span>
            </a>

            <a
              href="tel:+917274836462"
              className="group flex flex-1 items-center justify-center gap-3 px-6 py-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/20"
            >
              <Phone size={22} className="text-white/70 group-hover:text-white transition-colors" />
              <span className="text-white/90 font-medium tracking-wide">+91 7274836462</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="https://github.com/rkyadvji"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-4 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://linkedin.com/in/rkyadvji"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-4 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="https://instagram.com/raushan_yadv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-4 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              <InstagramIcon size={24} />
            </a>
          </div>

          {/* Send Message UI Button */}
          <a
            href="mailto:rkyadvji@gmail.com"
            className="flex items-center gap-3 bg-white text-[#121212] px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
          >
            <Send size={18} />
            Send Message
          </a>

        </div>

      </motion.div>
    </section>
  );
}
