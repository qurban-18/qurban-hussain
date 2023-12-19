"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll } from "framer-motion";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeHeaderState } from "@/redux/features/activeHeader.slice";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section
      ref={ref}
      className="mb-28 w-full max-w-[45rem] scroll-mt-28 mx-auto"
      id="projects"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div className="">
        {projectsData.map((project, index) => (
          <React.Fragment key={index + project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
