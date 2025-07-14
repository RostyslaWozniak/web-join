import { MotionWrapper } from "@/components/motion-wrapper";
import { AnimatePresence } from "framer-motion";

export function FormAnimateWrapper({
  children,
  show,
}: {
  children: React.ReactNode;
  show: boolean;
}) {
  return (
    <AnimatePresence>
      {show && (
        <MotionWrapper
          animate={"animate"}
          initial={"initial"}
          exit={"exit"}
          variants={formAnimationVariants}
          className="space-y-4 md:space-y-8"
        >
          {children}
        </MotionWrapper>
      )}
    </AnimatePresence>
  );
}

const formAnimationVariants = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -100, opacity: 0 },
};
