import { Code, Database, Cloud, Shield, Globe, Terminal } from "lucide-react"

export const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React", "React Native", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Material UI", "Tailwind CSS"],
    color: "#00ffff",
  },
  {
    title: "Backend Development",
    icon: Terminal,
    skills: ["Node.js", "Express.js", "Nest.js", "RESTful APIs", "GraphQL", "RPC", "Postman"],
    color: "#ff0080",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "SQL", "PostgreSQL", "MySQL", "Redis"],
    color: "#00ff41",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Google Cloud", "Serverless", "Docker", "Cloudflare", "CI/CD", "Digital Ocean", "Kubernetes"],
    color: "#ffff00",
  },
  {
    title: "Blockchain & Web3",
    icon: Code,
    skills: ["Web3.js", "Smart Contracts", "DeFi", "Solidity", "EVM", "Hardhat", "Truffle"],
    color: "#ff6600",
  },
  {
    title: "Security & Networking",
    icon: Shield,
    skills: ["Cloudflare", "SSL/TLS", "Nginx", "Apache", "DNS", "Firewalls", "VPN", "SSH", "HTTPS", "HTTP/2", "HTTP/3", "WebSockets", "RESTful APIs", "GraphQL", "RPC", "Sockets", "Cors"],
    color: "#ff0080",
  },
]

export const experiences = [
  {
    title: "Cosmogle (Full Stack App)",

    description: "Cosmogle is a chill random video chat app similar to omagle where you can connect face-to-face with total strangers — no accounts, no drama, just hit start and vibe. It’s like Omegle but self-made, using WebRTC and Socket.IO to handle real-time video, audio, and text chat smoothly.",
    url: "https://github.com/loredounipass/cosmogle",
    status: "COMPLETED" as const,
    technologies: ["React", "Tailwind CSS", "Node.js", "TypeScript", "WebRTC", "Socket.IO", "Express.js", "Docker"],
  },
  {
    title: "Saferide-Web (Full Stack App)",

    description: "This project is a web application for a transportation service, built with Next.js and a variety of modern technologies to deliver a smooth and robust user experience.",
    url: "https://github.com/loredounipass/Saferide-web",
    status: "COMPLETED" as const,
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "TypeScript", "Socket.IO", "PostgreSQL", "Google Maps API"],
  },
  {
    title: "Chat AI Web (Full Stack App)",

    description: "This project implements a sophisticated chat interface powered by a Python-based AI model real-time communication, robust frontend performance, while leveraging Python and Keras for intelligent response generation.",
    url: "https://github.com/loredounipass/Chat-AI-Web",
    status: "COMPLETED" as const,
    technologies: ["Next.js", "Tailwind CSS", "Radix UI", "Node.js", "TypeScript", "Python", "Keras", "TensorFlow", "Flask"],
  },

  {
    title: "Video-Play-DeepPlay (Full Stack App)",

    description: "DeepPlay is a video streaming platform where users can upload, watch, rate, and comment on videos.",
    url: "https://github.com/Erick-MC-Cedeno/Video-Play-DeepPlay",
    status: "COMPLETED" as const,
    technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
  },
  {
    title: "Crypto Wallet (Full Stack App)",

    description:
      "This is a local demo focused on facilitating secure and efficient transfers on the Ethereum network using smart contracts. It provides a hands-on approach to blockchain transactions, making it easi…",
    url: "https://github.com/Erick-MC-Cedeno/Crypto-Wallet",
    status: "COMPLETED" as const,
    technologies: ["NestJs", "React", "NodeJs", "Web3Js", "Solidity"],
  },
  {
    title: "SafeRide (Mobile App)",

    description:
      "The Ryde or Uber-clone is a React Native-based mobile application that mimics the core functionalities of ride-hailing services like Uber. The project focuses on building a robust and user-friendly…",
    url: "https://github.com/Erick-MC-Cedeno/SafeRide",
    status: "COMPLETED" as const,
    technologies: ["React Native", "NEON", "TypeScript", "RESTful APIs"],
  },
]
