"use client";
import React, { useRef } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, tech, index = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.08, ease: "easeOut" }}
    >
      <div className="group h-full transition-all duration-300 hover:scale-[1.02]">
        <div
          className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 backdrop-blur-sm">
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transition-all duration-300 hover:scale-110"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white transition-colors duration-300" />
            </Link>
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link transition-all duration-300 hover:scale-110"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white transition-colors duration-300" />
            </Link>
          </div>
        </div>
        <div className="text-white rounded-b-xl glass-premium hover:shadow-glow-hover transition-all duration-300 py-6 px-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {tech?.map((item) => (
              <span
                key={item}
                className="text-xs bg-[#262626]/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 hover:bg-[#303030]/60 transition-all duration-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.li>
  );
};

export default ProjectCard;
