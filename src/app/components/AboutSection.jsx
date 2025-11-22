"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python, Go, C#, Java, JavaScript/TypeScript</li>
        <li>FastAPI, Flask, .NET, Node.js</li>
        <li>React, Next.js, Tailwind</li>
        <li>Redis, SQL, gRPC, REST APIs</li>
        <li>Docker, CI/CD, Cloud Run</li>
        <li>OpenAI APIs, Vertex AI, Cloudflare Workers</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">

        <li>Major: Computer Science - Minor: AI
        </li>
        <li>Florida Atlantic University - Expected May 2027
</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>IBM Data Science (Coursera, February 2024)</li>
        <li> Machine Learning Specialization (DeepLearning.AI)</li>

      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white relative py-16 overflow-hidden" id="about" ref={ref}>
      {/* Magenta glowing orb behind About image */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] glow-orb-pink blur-3xl opacity-25 rounded-full pointer-events-none"></div>

      {/* Subtle blue accent */}
      <div className="absolute right-10 bottom-10 w-[350px] h-[350px] glow-orb-blue blur-3xl opacity-20 rounded-full pointer-events-none"></div>

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : { opacity: 0, x: -50, filter: "blur(10px)" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl blur-2xl"></div>
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="About section image"
            className="rounded-xl relative z-10 shadow-glow-pink"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-bold text-white mb-4"
          >
            About Me
          </motion.h2>
          <p className="text-base lg:text-lg">
          I&apos;m a Software Engineering student who loves building fast, reliable systems and AI-powered tools. I enjoy designing clean backends, experimenting with multi-agent workflows, and shipping projects that solve real problems. Recently, I&apos;ve built tools like a distributed rate-limiter, an AI relocation assistant, and CareerPilot AI, which won 2nd place at Sharkbyte 2025.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
