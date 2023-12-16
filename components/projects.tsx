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

const Projects = () => {
  const lastClick = useAppSelector(
    (state) => state.activeHeader.timeOfLastClick || 0
  );
  const { ref, inView } = useInView({ threshold: 0.3 });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (inView && Date.now() - lastClick > 1000)
      dispatch(changeHeaderState({ value: "Projects" }));
  }, [inView]);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28"
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
