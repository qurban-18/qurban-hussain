import { experiencesData } from "@/lib/data";
import React from "react";
import { useInView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceItem = (item: (typeof experiencesData)[number]) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return;
  <React.Fragment>
    <VerticalTimelineElement
      contentStyle={{
        background: "#f3f4f6",
      }}
      icon={item.icon}
      visible={inView} // Use inView to control the animation
    >
      <h3 className="">{item.title}</h3>
      <p className="">{item.location}</p>
      <p className="">{item.description}</p>
    </VerticalTimelineElement>
  </React.Fragment>;
};

export default ExperienceItem;
