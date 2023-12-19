import { changeHeaderState } from "@/redux/features/activeHeader.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "@/lib/types";

export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75
) => {
  const lastClick =
    useAppSelector((state) => state.activeHeader.timeOfLastClick) || 0;
  const dispatch = useAppDispatch();

  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (inView && Date.now() - lastClick > 1000)
      dispatch(changeHeaderState({ value: sectionName }));
  }, [inView, lastClick]);

  return { ref };
};
