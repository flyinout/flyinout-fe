import { motion } from "framer-motion";

export function SectionHeading({ children }) {
  return (
    <motion.h1
      whileHover={{  scale: 1.05  }}
      className="mt-2 sm:mt-4 text-primary text-xl font-extrabold md:text-4xl"
    >
      {children}
    </motion.h1>
  );
}

export function SectionSubHeading({ children }) {
  return (
    <motion.p
      whileHover={{  scale: 1.1  }}
      className="mt-2 sm:mt-4 text-secondary md:text-xl max-w-2xl shadow-sm"
    >
      {children}
    </motion.p>
  );
}
