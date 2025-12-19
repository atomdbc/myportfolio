"use client";
import { motion } from "framer-motion";
import { Cpu, Zap, Triangle, Orbit, ShieldCheck, Flame } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-mars-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4">
        
        {/* SECTION HEADER */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 max-w-3xl"
        >
            <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-mars-red rounded-full animate-pulse" />
                <span className="text-mars-red font-mono text-xs tracking-widest uppercase">Operating System</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                I do not write code. <br />
                I reduce <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Entropy.</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed font-light border-l-2 border-white/10 pl-6">
                Most engineers are decorators; they add layers of complexity to existing messes. 
                I am an architect. I strip problems down to their fundamental physics and rebuild them for pure efficiency. 
                Reality is a dataset, and I am here to rewrite the schema.
            </p>
        </motion.div>

        {/* THE THREE LAWS (GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* LAW 1: FIRST PRINCIPLES */}
            <LawCard 
                icon={Triangle} 
                title="First Principles" 
                subtitle="The Physics of Code"
                delay={0.1}
            >
                <p>
                    I reject "best practices" if they are inefficient. I do not ask "How is it usually done?" 
                    I ask <strong className="text-white">"What are the immutable constraints?"</strong>
                    <br /><br />
                    Whether building ZK Proofs or AI Agents, I start from zero. No assumptions. No bloat. Just the raw math required to solve the problem.
                </p>
            </LawCard>

            {/* LAW 2: VELOCITY */}
            <LawCard 
                icon={Zap} 
                title="Escape Velocity" 
                subtitle="Speed is a moat"
                delay={0.2}
            >
                <p>
                    In the market, slow is dead. I code with aggressive urgency. 
                    While others are holding meetings, I am shipping to production.
                    <br /><br />
                    My workflow is optimized for <strong className="text-white">high-frequency output</strong>. 
                    I don't wait for permission. I deploy, I break, I fix, I scale.
                </p>
            </LawCard>

            {/* LAW 3: ANTI-FRAGILITY */}
            <LawCard 
                icon={ShieldCheck} 
                title="Anti-Fragility" 
                subtitle="Chaos is fuel"
                delay={0.3}
            >
                <p>
                    Systems fail. Servers crash. APIs break.
                    I build software that expects chaos.
                    <br /><br />
                    I engineer redundancy and self-healing into the DNA of the application. 
                    A system that breaks under pressure is useless. 
                    <strong className="text-white">I build systems that get stronger when stressed.</strong>
                </p>
            </LawCard>

        </div>

        {/* THE FINAL DECLARATION */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 p-8 md:p-12 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden text-center"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mars-red via-orange-500 to-mars-red" />
            <Orbit className="w-16 h-16 text-gray-600 mx-auto mb-6 opacity-50" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                "I am not looking for a job. I am looking for a mission."
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
                If you are solving a trivial problem, do not contact me. 
                If you are trying to change the trajectory of the future, I am ready to build.
            </p>
        </motion.div>

      </div>
    </section>
  );
}

// Sub-component for the cards
function LawCard({ icon: Icon, title, subtitle, children, delay }: any) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="bg-[#0a0a0a] border border-white/10 p-8 rounded-xl hover:border-mars-red/30 transition-colors group"
        >
            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-mars-red/10 transition-colors">
                <Icon className="text-gray-300 group-hover:text-mars-red transition-colors" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <div className="text-xs font-mono text-mars-red mb-6 uppercase tracking-wider">{subtitle}</div>
            <div className="text-gray-400 text-sm leading-relaxed">
                {children}
            </div>
        </motion.div>
    )
}