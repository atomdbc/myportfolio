"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, Copy, Check, FileText, Award, ArrowUpRight, Terminal } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "sam@picly.art"; // Your business email

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden border-t border-white/5">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Header - The Signal */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-mono tracking-widest uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Channel Open
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-mars-red to-orange-600">Protocol.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                I do not just fill a seat. I accelerate the mission.
                <br />
                If you are ready to engineer the future, transmit your signal.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            
            {/* CARD 1: DIRECT UPLINK (Email) */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 hover:border-mars-red/30 transition-colors group flex flex-col justify-between"
            >
                <div>
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-mars-red/10 transition-colors">
                        <Mail className="text-gray-300 group-hover:text-mars-red" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Direct Uplink</h3>
                    <p className="text-gray-400 text-sm mb-8">
                        Direct line to the command center. Expect a response within 24 hours.
                    </p>
                </div>

                <div className="bg-black border border-white/10 rounded-lg p-2 flex items-center justify-between group-hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-3 px-2">
                        <Terminal size={16} className="text-green-500" />
                        <span className="font-mono text-gray-300 text-sm md:text-base">{email}</span>
                    </div>
                    <div className="flex gap-2">
                        <button 
                            onClick={copyToClipboard}
                            className="p-2 hover:bg-white/10 rounded text-gray-400 hover:text-white transition-colors relative"
                            title="Copy to Clipboard"
                        >
                            {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                        </button>
                        <a 
                            href={`mailto:${email}`}
                            className="p-2 bg-white text-black rounded font-bold hover:bg-gray-200 transition-colors"
                            title="Open Mail App"
                        >
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* CARD 2: THE DOSSIER (Resume) */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-colors group flex flex-col justify-between"
            >
                <div>
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-colors">
                        <FileText className="text-gray-300 group-hover:text-blue-400" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">The Dossier</h3>
                    <p className="text-gray-400 text-sm mb-8">
                        Full technical specifications, mission history, and clearance credentials.
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <a 
                        href="https://bit.ly/4cAtCg2" // Your Resume
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white py-3 rounded-lg font-mono text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                    >
                        <FileText size={16} />
                        DOWNLOAD_CV_V3.PDF
                    </a>
                    <a 
                        href="https://drive.google.com/file/d/1f41bkQoXSy9Ad8tFgEdIZWmtXef3GQlW/view" // ALX Cert
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-transparent hover:bg-white/5 border border-transparent hover:border-white/10 text-gray-400 hover:text-white py-2 rounded-lg font-mono text-xs flex items-center justify-center gap-2 transition-all"
                    >
                        <Award size={14} />
                        VERIFY_ALX_CERTIFICATION
                    </a>
                </div>
            </motion.div>
        </div>

        {/* FREQUENCY CHANNELS (Socials) */}
        <div className="border-t border-white/10 pt-12">
            <div className="text-center mb-8">
                <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">Encrypted Frequencies</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                <SocialLink href="https://www.linkedin.com/in/samuellemikan/" icon={Linkedin} label="LinkedIn" />
                <SocialLink href="https://github.com/atomdbc" icon={Github} label="GitHub" />
                <SocialLink href="https://x.com/picoIsbuilding" icon={Twitter} label="X (Twitter)" />
            </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-20 text-center border-t border-white/5 pt-8">
            <div className="flex flex-col items-center gap-2">
                <p className="text-gray-600 text-sm">
                    © {new Date().getFullYear()} Samuel Lemikan. Engineered in Lagos.
                </p>
                <div className="flex items-center gap-2 text-[10px] text-gray-700 font-mono uppercase">
                    <span>Next.js 14</span>
                    <span className="text-mars-red">•</span>
                    <span>Tailwind</span>
                    <span className="text-mars-red">•</span>
                    <span>Vercel</span>
                </div>
            </div>
        </footer>

      </div>
    </section>
  );
}

function SocialLink({ href, icon: Icon, label }: any) {
    return (
        <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#0a0a0a] border border-white/5 rounded-full hover:border-mars-red/50 hover:bg-mars-red/5 transition-all group"
        >
            <Icon size={18} className="text-gray-400 group-hover:text-mars-red transition-colors" />
            <span className="text-gray-300 font-mono text-sm group-hover:text-white">{label}</span>
        </a>
    )
}