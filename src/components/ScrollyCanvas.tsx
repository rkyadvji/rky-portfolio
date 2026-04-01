"use client";

import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameCount = 120; // 0 to 119
  
  // Use a derived value to trigger canvas updates
  const currentFrame = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 0; i < frameCount; i++) {
        const img = new window.Image();
        const indexStr = i.toString().padStart(3, '0');
        img.src = `/sequence/frame_${indexStr}_delay-0.066s.png`;
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;
    const canvas = canvasRef.current;
    
    // Use alpha: false for better performance if bg is opaque
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const render = () => {
      const frameIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.floor(currentFrame.get()))
      );

      const img = images[frameIndex];

      if (img && img.complete) {
        // Calculate object-fit: cover logic manually on canvas
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        let drawWidth, drawHeight;
        let xOffset = 0, yOffset = 0;

        if (canvasRatio > imgRatio) {
           drawWidth = canvas.width;
           drawHeight = canvas.width / imgRatio;
           yOffset = (canvas.height - drawHeight) / 2;
        } else {
           drawHeight = canvas.height;
           drawWidth = canvas.height * imgRatio;
           xOffset = (canvas.width - drawWidth) / 2;
        }

        // Background clears via drawing opaque rect or just trusting cover
        ctx.fillStyle = "#121212";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.drawImage(img, xOffset, yOffset, drawWidth, drawHeight);
      }
    };

    const unsubscribe = currentFrame.on('change', render);

    // Initial render setup
    if (images[0] && images[0].complete) {
      render();
    } else if (images[0]) {
      images[0].onload = render;
    }

    return () => unsubscribe();
  }, [images, currentFrame]);

  useEffect(() => {
    // Handle resize
    const resizeCanvas = () => {
       if (canvasRef.current) {
          canvasRef.current.width = window.innerWidth;
          canvasRef.current.height = window.innerHeight;
          // Trigger a re-render
          currentFrame.set(currentFrame.get());
       }
    };
    resizeCanvas(); // Init size
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [currentFrame]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#121212]">
        <canvas ref={canvasRef} className="block w-full h-full" />
        {/* Semi-transparent gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/30 via-transparent to-[#121212]" />
      </div>
    </div>
  );
}
