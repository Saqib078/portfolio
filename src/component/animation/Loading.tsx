import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import './metero.css';

export default function Loading() {
  const progress = useMotionValue(0);
  const width = useTransform(progress, (v) => `${v}%`);

  const [display, setDisplay] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 3,
      ease: "easeInOut",
      onUpdate: (latest) => {
        setDisplay(Math.floor(latest));
      },
      onComplete: () => {
        setDone(true);
      },
    });

    return () => controls.stop();
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gray-100">
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <motion.div
          className="loading_text absolute top-1/2 -translate-y-1/2 whitespace-nowrap max-[550px]:text-[60px] max-[750px]:text-[80px] max-[950px]:text-[100px] text-[120px] font-bold text-[#080810]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        >
          FRONTEND DEVELOPER &nbsp; FRONTEND DEVELOPER &nbsp; FRONTEND DEVELOPER
        </motion.div>
      </div>
      {/* STEP 1: Loader */}
      {!done && (
        <div className="flex items-center justify-center h-full">
          <div className="relative w-80 h-12 bg-white rounded-full overflow-hidden shadow-md">
            <motion.div
              className="absolute left-0 top-0 h-full bg-[#080810]"
              style={{ width }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-semibold text-[#5982dbe6]">
                {display}%
              </span>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: Expand to full screen */}
      {done && (
        <motion.div
          initial={{ scale: 0.2, borderRadius: "999px" }}
          animate={{ scale: 20, borderRadius: "0px" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-80 h-12 bg-[#080810] -translate-x-1/2 -translate-y-1/2"
        />
      )}

      {/* STEP 3: Welcome Text */}
      {done && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="loading_text absolute inset-0 flex items-center justify-center"
        >
          <h1 className="loading_text  text-[#5982dbe6] text-4xl">Welcome to My Portfolio</h1>
        </motion.div>
      )}
    </div>
  );
}
