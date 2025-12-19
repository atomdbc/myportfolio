"use client";
import { Code2 } from "lucide-react";
import ProjectCard from "./ProjectCard";

// THE DATA VAULT
const projects = [
  {
    title: "Picly.art (Production)",
    description: "Flagship Generative AI Platform. Engineered a serverless image segmentation pipeline using Google Gemini Flash 2.5 and Next.js. Handles real-time AI agent workflows for automated design.",
    tags: ["Next.js", "FastAPI", "Gemini 2.5", "AWS"],
    category: "AI",
    image: "/logo.webp", // Your screenshot
    demoLink: "https://picly.art",
    repoLink: undefined, // Private repo?
  },
  {
    title: "ZK-SNARKs Verifier",
    description: "Privacy-preserving authentication system. Implemented Zero-Knowledge Proof circuits using zk-SNARKs to verify computation validity without revealing underlying data inputs. A deep dive into trustless cryptography.",
    tags: ["Rust", "Solidity", "Cryptography", "Circom"],
    category: "CRYPTO",
    repoLink: "https://github.com/atomdbc/zk-proof-integration", // Verify this link
  },
  {
    title: "E2E Encrypted Protocol",
    description: "Standalone secure messaging architecture. Built a custom implementation of end-to-end encryption using Node.js WebSockets and primitive crypto packages. No third-party auth dependencies.",
    tags: ["Node.js", "WebSockets", "Diffie-Hellman", "Socket.io"],
    category: "BACKEND",
    repoLink: "https://github.com/atomdbc/encrypted-chat", // Verify this link
  },
  {
    title: "Social Infrastructure API",
    description: "High-concurrency backend for a multimedia social platform. Features complex database schema design, JWT authentication, and real-time media streaming capabilities.",
    tags: ["Express", "MongoDB", "Redis", "System Design"],
    category: "BACKEND",
    repoLink: "https://github.com/atomdbc/social-backend", // Verify this link
  },
  {
    title: "NLP Journaling Engine",
    description: "AI-driven sentiment analysis tool. Uses Natural Language Processing to analyze user journal entries and generate context-aware therapeutic responses via LLM integration.",
    tags: ["Python", "NLP", "OpenAI API", "React"],
    category: "AI",
    repoLink: "https://github.com/atomdbc/memomate", // Verify this link
  },
  {
    title: "Crypto Asset Tracker",
    description: "Real-time financial data pipeline. A resilient Discord bot architecture that fetches, normalizes, and broadcasts live Bitcoin pricing data via external APIs with 99.9% uptime.",
    tags: ["Discord.js", "REST APIs", "Node.js", "FinTech"],
    category: "TOOL",
    repoLink: "https://github.com/atomdbc/discord-bot-btc-fetch",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-mars-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-mars-red to-orange-600">Architectures</span>
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg">
              I don't just write scripts. I build resilient, scalable systems. 
              Here is the proof of work.
            </p>
          </div>
          
          <a 
            href="https://github.com/atomdbc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white border-b border-mars-red pb-1 hover:text-mars-red transition-colors"
          >
            <Code2 size={20} />
            <span>View all repositories</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            // @ts-ignore
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}