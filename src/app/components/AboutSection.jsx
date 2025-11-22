"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

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

        <li>Florida Atlantic University - Expected 2026
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

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I'm a Software Engineering student focused on building AI-driven and distributed systems. I enjoy designing fast, reliable backends, experimenting with multi-agent architectures, and shipping projects that solve real problems. I've built tools like a distributed rate-limiter, a relocation assistant powered by parallel agents, and CareerPilot AI — a platform that generates personalized career roadmaps for students. I love learning new technologies, working with ambitious teams, and bringing ideas to life.
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
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
