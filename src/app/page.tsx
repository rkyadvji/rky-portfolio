import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FeaturedProject from "@/components/FeaturedProject";
import GithubStats from "@/components/GithubStats";

export default function Home() {
  return (
    <main id="home" className="relative bg-[#121212] min-h-screen">
      <Navbar />

      {/* Natural container for the 3-section scroll sequence (approx 300vh controlled by Overlay) */}
      <div className="relative w-full z-0">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Content below the scroll sequence */}
      <About />
      <FeaturedProject />
      <Projects />
      <GithubStats />
      <Contact />

      {/* Global Footer */}
      <footer className="bg-[#121212] pb-10 flex justify-center text-white/40 text-sm z-20 relative">
        <p>© {new Date().getFullYear()} Raushan Kumar Yadav. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
