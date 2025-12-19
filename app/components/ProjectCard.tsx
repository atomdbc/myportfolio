"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Lock } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  category: "AI" | "CRYPTO" | "BACKEND" | "TOOL";
  demoLink?: string;
  repoLink?: string;
  index: number;
}

// 1. High-quality, reliable Unsplash IDs (The "Long" URLs)
// These are specific photos chosen to look good in dark mode.
const CATEGORY_IMAGES = {
  AI: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop", // AI Brain/Network
  CRYPTO: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1200&auto=format&fit=crop", // Blockchain/Matrix
  BACKEND: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=1200&auto=format&fit=crop", // Server Racks
  TOOL: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop", // Mechanical/Tools
};

// A fallback gradient in case the external image fails entirely
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop";

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  category,
  demoLink,
  repoLink,
  index,
}: ProjectProps) {
  
  // 2. Logic to determine initial image source
  const initialImage = image || CATEGORY_IMAGES[category] || FALLBACK_IMAGE;
  const [imgSrc, setImgSrc] = useState(initialImage);

  // Update state if props change
  useEffect(() => {
    setImgSrc(image || CATEGORY_IMAGES[category] || FALLBACK_IMAGE);
  }, [image, category]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-xl overflow-hidden bg-[#111] border border-white/10 hover:border-mars-red/50 transition-all duration-500 flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(204,0,0,0.1)]"
    >
      {/* Image Header */}
      <div className="relative h-48 w-full overflow-hidden border-b border-white/5 bg-[#1a1a1a]">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-500 z-10" />

        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // 3. Fallback logic if the specific URL breaks
          onError={() => setImgSrc(FALLBACK_IMAGE)}
          priority={index < 2} // Load first 2 images immediately for LCP
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-2 py-1 text-[10px] font-bold bg-black/80 backdrop-blur border border-white/10 text-white rounded uppercase tracking-widest">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow relative">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-mars-red transition-colors">
            {title}
          </h3>

          {/* Links Section */}
          <div className="flex gap-3 z-20">
            {repoLink ? (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <Github size={18} />
              </a>
            ) : (
              <div className="text-gray-600 p-2 cursor-not-allowed" title="Private Repo">
                <Lock size={18} />
              </div>
            )}

            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow font-light">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mt-auto border-t border-white/5 pt-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-[10px] font-mono text-gray-400 border border-white/10 rounded bg-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}