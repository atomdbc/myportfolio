"use client";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Terminal, Mail, Code2, Layers, User, Cpu, Globe, Folder, FileCode } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Initializing Sovereign Protocol...\n> Loading Neural Interface...\n> Accessing User: Samuel Lemikan\n> Status: READY FOR DEPLOYMENT";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 py-10 bg-black">
      
      {/* 1. DYNAMIC BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mars-red/10 blur-[120px] rounded-full -z-10" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl z-10"
      >
        {/* 2. THE ULTIMATE MAC WINDOW */}
        <div className="bg-[#0f0f0f]/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden relative flex flex-col md:flex-row h-auto md:h-[550px]">
            
            {/* A. THE SIDEBAR (Finder Style) */}
            <div className="hidden md:flex w-64 bg-[#161616] border-r border-white/5 flex-col p-4">
                {/* Traffic Lights */}
                <div className="flex gap-2 mb-8">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" /> 
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" /> 
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" /> 
                </div>
                
                {/* Sidebar Menu */}
                <div className="space-y-6">
                    <div>
                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2 pl-2">Favorites</div>
                        <div className="space-y-1">
                            <SidebarItem icon={User} label="Bio" active />
                            <SidebarItem icon={Layers} label="Projects" onClick={() => scrollToSection('projects')} />
                            <SidebarItem icon={Code2} label="Stack" onClick={() => scrollToSection('tech-stack')} />
                        </div>
                    </div>
                    <div>
                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2 pl-2">iCloud</div>
                        <div className="space-y-1">
                            <SidebarItem icon={Folder} label="Documents" />
                            <SidebarItem icon={FileCode} label="Source Code" />
                        </div>
                    </div>
                </div>
                
                {/* Status at bottom */}
                <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-[10px] text-gray-400">Server Online</span>
                    </div>
                </div>
            </div>

            {/* B. MAIN CONTENT AREA */}
            <div className="flex-1 flex flex-col bg-black/40 relative">
                
                {/* Mobile Title Bar (Only visible on phone) */}
                <div className="md:hidden h-10 bg-[#1a1a1a] border-b border-white/5 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>

                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                    
                    {/* Background Grid inside window */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] -z-10" />

                    <div className="flex flex-col md:flex-row gap-8 items-center">
                         {/* Headshot with Status Ring */}
                        <div className="relative group shrink-0">
                             <div className="absolute -inset-1 bg-gradient-to-r from-mars-red to-orange-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500" />
                             <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-white/10 p-1 bg-black relative z-10">
                                <div className="w-full h-full rounded-full overflow-hidden relative">
                                    <Image 
                                        src="/headshot.webp" 
                                        alt="Samuel Lemikan" 
                                        fill 
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                             </div>
                             <div className="absolute bottom-2 right-2 bg-black rounded-full p-1 z-20 border border-white/10">
                                <div className="w-3 h-3 bg-green-500 rounded-full" />
                             </div>
                        </div>

                        {/* Text Content */}
                        <div className="text-center md:text-left space-y-4">
                            <div className="font-mono text-xs text-mars-red tracking-widest bg-mars-red/10 px-2 py-1 rounded inline-block border border-mars-red/20">
                                v3.0 // SYSTEM_ARCHITECT
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                                Samuel Lemikan
                            </h1>
                            <p className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed">
                                Full-Stack Engineer specializing in <span className="text-white font-medium">AI Agents</span> and <span className="text-white font-medium">Scalable Systems</span>. 
                                I don't just write code; I engineer outcomes.
                            </p>
                            
                            {/* Terminal Output Box */}
                            <div className="mt-4 bg-black/80 rounded-lg p-3 border border-white/10 font-mono text-xs text-green-400 text-left w-full max-w-md shadow-inner">
                                <pre className="whitespace-pre-wrap">{text}<span className="animate-pulse">_</span></pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Action Bar inside Window */}
                <div className="h-16 bg-[#161616] border-t border-white/5 flex items-center justify-between px-6">
                    <div className="flex gap-4 text-xs text-gray-500 font-mono">
                        <span className="flex items-center gap-1"><Cpu size={12}/> CPU: 12%</span>
                        <span className="flex items-center gap-1"><Globe size={12}/> NET: 1Gbps</span>
                    </div>
                    <a 
                        href="mailto:sam@picly.art" 
                        className="bg-white text-black px-6 py-2 rounded-md text-sm font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
                    >
                        <Mail size={14} /> Hire Engineer
                    </a>
                </div>
            </div>
        </div>

        {/* 3. THE MAGNIFYING DOCK */}
        <div className="flex justify-center mt-8">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 flex gap-4 items-end shadow-2xl">
                <DockIcon icon={Layers} label="Projects" onClick={() => scrollToSection('projects')} />
                <DockIcon icon={Code2} label="Stack" onClick={() => scrollToSection('tech-stack')} />
                <DockIcon icon={User} label="About" onClick={() => scrollToSection('about')} /> {/* Ensure About.tsx has id="about" */}
                <div className="w-[1px] h-8 bg-white/10 mx-2 self-center" />
                <DockIcon icon={Mail} label="Contact" onClick={() => scrollToSection('contact')} />
            </div>
        </div>

      </motion.div>
    </section>
  );
}

// Sub-components for cleaner code
function SidebarItem({ icon: Icon, label, active = false, onClick }: any) {
    return (
        <button 
            onClick={onClick}
            className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-xs font-medium transition-colors ${
                active ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
        >
            <Icon size={14} />
            {label}
        </button>
    )
}

function DockIcon({ icon: Icon, label, onClick }: any) {
    return (
        <button 
            onClick={onClick}
            className="group relative flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-2"
        >
            <div className="p-3 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/10 rounded-xl shadow-lg group-hover:scale-110 group-hover:shadow-mars-red/20 transition-all">
                <Icon size={24} className="text-gray-300 group-hover:text-white" />
            </div>
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-gray-400 bg-black/80 px-2 py-1 rounded border border-white/10 whitespace-nowrap">
                {label}
            </span>
            {/* Active Dot */}
            <div className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-mars-red transition-colors" />
        </button>
    )
}