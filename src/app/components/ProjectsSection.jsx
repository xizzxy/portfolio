"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { title } from "process";

const projectsData = [
  {
    id: 8,
    title: "CareerPilot AI (2nd Place)",
    description:
      "AI career-mapping platform that generates personalized roadmaps for students using multi-agent reasoning for resume analysis, skill matching, and recruiter-style feedback. Deployed on Cloud Run + Cloudflare Workers with async pipelines and vector search.",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    tech: ["Python", "FastAPI", "React", "Next.js", "Google Cloud Run", "Cloudflare Workers", "Gemini API"],
    gitUrl: "https://github.com/xizzxy/Sharkbyte2025",
    previewUrl: "https://whatdoidoaftercollege.miami/",
  },
  {
    id: 9,
    title: "NextMove",
    description:
      "AI-powered relocation assistant using parallel agents to recommend housing, jobs, lifestyle, and local activities. Integrated Google Cloud, LinkedIn API, and Mapbox for real-time personalized recommendations and interactive map visualizations.",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    tech: ["FastAPI", "Next.js", "Vertex AI", "Google Places API", "LinkedIn API", "Mapbox"],
    gitUrl: "https://github.com/xizzxy/NextMove",
    previewUrl: "https://devpost.com/software/nextmove",
  },
  {
    id: 10,
    title: "Helios",
    description:
      "Distributed token-bucket rate limiter built in Go with Redis, gRPC, Docker, and Prometheus/Grafana dashboards. Scales to 50k req/sec. Demo available on LinkedIn.",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    tech: ["Go", "Redis", "gRPC", "Docker", "Prometheus", "Grafana"],
    gitUrl: "https://github.com/xizzxy/helios",
    previewUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7369864174081904640/",
  },

  {
    id: 3,
    title: "FitMate",
    description:
      "Virtual gym trainer using computer vision and ML to detect exercise poses and give real-time feedback.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    tech: ["Python", "OpenCV", "Machine Learning", "React"],
    gitUrl: "https://github.com/xizzxy/fitmate",
    previewUrl: "https://github.com/xizzxy/fitmate",
  },
  {
    id: 4,
    title: "BudgetBuddy",
    description:
      "Money management app with automated expense categorization and personalized budget insights.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    tech: ["JavaScript", "Next.js", "LocalStorage"],
    gitUrl: "https://github.com/xizzxy/ruby",
    previewUrl: "https://budgetbudds.netlify.app/",
  },
  {
    id: 5,
    title: "Who's That Pokémon?",
    description:
      "Pokémon guessing game built with HTML, CSS, and JavaScript.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    tech: ["HTML", "CSS", "JavaScript"],
    gitUrl: "https://github.com/xizzxy/who-is-that-pokemon",
    previewUrl: "https://golden-ganache-ddd52b.netlify.app/",
  },
  {
    id: 6,
    title: "Pantry Tracker",
    description:
      "Firebase-powered inventory app with real-time database sync, user auth, and item search.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    tech: ["React", "Firebase Auth", "Firebase Realtime DB"],
    gitUrl: "https://github.com/xizzxy/pantryAPP",
    previewUrl: "https://pantry-app-olive.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const headerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="relative py-16" ref={ref}>
      {/* Subtle gradient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12"
        >
          My Projects
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white flex flex-row justify-center items-center gap-2 py-6"
        >
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </motion.div>
        <ul className="grid md:grid-cols-3 gap-8 md:gap-12 px-4">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tech={project.tech}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
