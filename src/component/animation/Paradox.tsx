"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import pic1 from "../../assets/Screenshot (164).png";
import pic2 from "../../assets/Screenshot (166).png";
import pic3 from "../../assets/Screenshot (167).png";
import pic4 from "../../assets/mobile_screen (1).jpeg";
import pic5 from "../../assets/mobile_screen (2).jpeg";
import pic6 from "../../assets/mobile_screen (3).jpeg";

const TOTAL = 3;

const Card = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  const { scrollYProgress } = useScroll();

  let start = 0;
  let end = 0;

  if (index === 0) {
    start = (index + 1) / TOTAL;
    end = (index + 1.5) / TOTAL;
  } else {
    start = (index + 0.3) / TOTAL;
    end = (index + 1) / TOTAL;
  }
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.6]);
  const filter = useTransform(
    scale,
    (s) => `blur(${Math.max(0, (1 - s) * 15)}px)`,
  );

  return (
    <div className="mx-[20px] w-[90vw] h-[100vh] bg-transparent flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ scale, filter }}
        className="w-full h-full flex items-center justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default function Paradox() {
  return (
    <div className="h-[300vh]">
      <div className="sticky top-0 max-[920px]:h-[90vh] h-[100vh] flex items-center justify-center z-[10]">
        <Card index={0}>
          <div className="w-full h-full flex items-center justify-center text-2xl">
            <div className="w-full h-full overflow-hidden rounded-2xl hidden min-[921px]:block">
              <img
                src={pic1}
                alt=""
                width="100%"
                height="100%"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-full overflow-hidden hidden rounded-2xl hidden max-[920px]:block">
              <img src={pic4} alt="" width="100%" />
            </div>
          </div>
        </Card>
      </div>

      <div className="sticky top-0 max-[920px]:h-[90vh] h-[100vh] flex items-center justify-center z-[20]">
        <Card index={1}>
          <div className="w-full h-full flex items-center justify-center text-2xl">
            <div className="w-full h-full overflow-hidden rounded-2xl hidden min-[921px]:block">
              <img
                src={pic2}
                alt=""
                width="100%"
                height="100%"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-full overflow-hidden rounded-2xl hidden max-[920px]:block">
              <img src={pic5} alt="" width="100%" />
            </div>
          </div>
        </Card>
      </div>

      <div className="sticky top-0 max-[920px]:h-[90vh] h-[100vh] flex items-center justify-center z-[30]">
        <Card index={2}>
          <div className="w-full h-full flex items-center justify-center text-2xl">
            <div className="w-full h-full overflow-hidden rounded-2xl hidden min-[921px]:block">
              <img src={pic3} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="w-full h-full overflow-hidden rounded-2xl hidden max-[920px]:block">
              <img src={pic6} alt="" className="w-full" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
