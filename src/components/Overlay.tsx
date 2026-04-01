"use client";

import { motion, type Variants } from "framer-motion";
import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

export default function Overlay() {

  // Clean scroll-driven fade-in logic
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="w-full relative z-10 pointer-events-none">

      {/* SECTION 1: RAUSHAN - HERO */}
      <section className="h-screen w-full flex flex-col items-center justify-center p-6 md:p-12 pt-[120px] md:pt-[160px]">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col items-center justify-center gap-2 sm:gap-4 pointer-events-auto"
        >
          {/* Main Heading */}
          <h1
            className="font-black text-white tracking-tight text-center drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1 }}
          >
            RAUSHAN
          </h1>

          {/* Professional Tagline */}
          <p
            className="text-white/40 font-medium text-center max-w-xl tracking-wide drop-shadow-md"
            style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.25rem)" }}
          >
            I build scalable web applications using modern technologies.
          </p>

          {/* Typing Animation Showcase */}
          <div
            className="text-white font-bold text-center tracking-widest uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] h-[1.5em]"
            style={{ fontSize: "clamp(0.85rem, 1.2vw, 1rem)" }}
          >
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "React Developer", "Problem Solver"],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
                cursor: "|"
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* SECTION 3: SKILLS & EXPERTISE (Bottom-Right) */}
      <section className="h-screen w-full flex flex-col justify-end items-end p-6 md:p-12 pb-24 md:pb-16 max-w-7xl mx-auto">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="text-left md:text-right max-w-[280px] md:max-w-md w-full pointer-events-auto"
        >
          <h2
            className="font-bold text-white leading-tight mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
            style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}
          >
            SKILLS {"&"} EXPERTISE.
          </h2>
          <p
            className="text-white/80 font-light drop-shadow-md leading-relaxed"
            style={{ fontSize: "clamp(0.85rem, 1.25vw, 1rem)" }}
          >
            Languages: C++, Java, Python, JavaScript <br />
            Frontend: React.js, CSS, HTML <br />
            Backend: Node.js
          </p>
        </motion.div>
      </section>

    </div>
  );
}
