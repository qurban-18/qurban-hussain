"use client";
import { projectsData } from "@/lib/data";
import exp from "constants";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

type TProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: TProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-balck/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] group-even:pl-8 hover:bg-gray-200 transition rounded-lg">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 max-w-[70%] sm:max-w-[50%] h-full flex flex-col group-even:ml-[20rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={tag + index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={"Projects I work on"}
          quality={95}
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-xl h-full object-cover object-left transition 

        group-hover:-translate-x-3
         group-hover:translate-y-3
         group-hover:-rotate-3

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-3
         
         group-hover:scale-[1.04]
         group-even:object-right
         group-even:right-[initial]
         group-even:-left-40"
        />
      </section>
    </motion.div>
  );
};

export default Project;
