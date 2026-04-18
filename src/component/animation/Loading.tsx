import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function Loading() {
  const progress = useMotionValue(0);

  // ✅ replace interpolate with useTransform
  const strokeDashoffset = useTransform(progress, [0, 100], [283, 0]);

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 3,
      ease: "easeInOut",
      onUpdate: (latest) => {
        setDisplay(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [progress]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-32 h-32">
        
        {/* Background */}
        <div className="absolute inset-0 rounded-full bg-white shadow-lg" />

        {/* SVG */}
        <motion.svg className="absolute inset-0" viewBox="0 0 100 100">
          {/* Track */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />

          {/* Progress */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="#2563eb"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="283"
            style={{ strokeDashoffset }}
          />
        </motion.svg>

        {/* Number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-semibold text-blue-600">
            {display}%
          </span>
        </div>
      </div>
    </div>
  );
}