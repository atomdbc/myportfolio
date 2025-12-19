"use client";
import { motion } from "framer-motion";
import { 
  Code2, Globe, Cpu, Terminal, Layers, Database, 
  ShieldCheck, Zap, Server, Container, Lock, Workflow 
} from "lucide-react";

// 1. THE CORE MODULES (Big Cards)
const coreModules = [
  {
    title: "AI Engineering",
    description: "RAG Pipelines, Agents, Fine-tuning",
    icon: Cpu,
    color: "text-purple-400",
    border: "hover:border-purple-500/50",
    bg: "hover:bg-purple-500/10"
  },
  {
    title: "Full-Stack Velocity",
    description: "Next.js 14, TypeScript, Tailwind",
    icon: Globe,
    color: "text-blue-400",
    border: "hover:border-blue-500/50",
    bg: "hover:bg-blue-500/10"
  },
  {
    title: "System Architecture",
    description: "Microservices, Docker, Event Buses",
    icon: Server,
    color: "text-green-400",
    border: "hover:border-green-500/50",
    bg: "hover:bg-green-500/10"
  },
  {
    title: "Cryptography",
    description: "ZK-SNARKs, Solidity, Web3",
    icon: Lock,
    color: "text-mars-red",
    border: "hover:border-mars-red/50",
    bg: "hover:bg-mars-red/10"
  },
];

// 2. THE INFINITE STREAM (Scrolling List)
const toolStream = [
  "Python", "FastAPI", "PostgreSQL", "Redis", "AWS Lambda", 
  "Google Gemini", "LangChain", "Framer Motion", "Stripe", 
  "Supabase", "Git", "CI/CD", "Linux", "Nginx", "Prisma"
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-black relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />

      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4">
             <div className="w-2 h-2 bg-mars-red rounded-full animate-pulse" />
             <span className="text-mars-red font-mono text-xs tracking-widest uppercase">System Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I do not subscribe to one dogma. I use the right weapon for the war.
            <br />
            Currently deployed stack configuration:
          </p>
        </motion.div>

        {/* 1. CORE MODULES BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {coreModules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 transition-all duration-300 group ${module.border} ${module.bg}`}
            >
              <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <module.icon className={`w-6 h-6 ${module.color}`} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{module.title}</h3>
              <p className="text-sm text-gray-500 font-mono">{module.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 2. INFINITE MARQUEE */}
        <div className="relative w-full overflow-hidden border-y border-white/5 bg-white/5 py-10">
            {/* The Gradient Fade on sides */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
            
            <div className="flex">
                <motion.div 
                    className="flex gap-12 pr-12 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{ 
                        repeat: Infinity, 
                        ease: "linear", 
                        duration: 20 // Adjust speed here
                    }}
                >
                    {[...toolStream, ...toolStream, ...toolStream].map((tool, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-400 font-mono text-lg font-bold uppercase tracking-wider">
                            <Zap size={16} className="text-mars-red" />
                            {tool}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
        
        {/* Status Footer */}
        <div className="mt-4 flex justify-between items-center text-[10px] text-gray-600 font-mono uppercase">
            <div>Memory: 32GB Allocated</div>
            <div>Latency: 12ms</div>
        </div>

      </div>
    </section>
  );
}