import { animate, motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the reverse index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6; // total number of steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render the stairs */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            delay: reverseIndex(index) * 0.1,
            duration: 0.4,
            // type: "tween",
            ease: "easeInOut",
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;
