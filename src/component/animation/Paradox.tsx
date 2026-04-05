import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  { title: "Div 1", bg: "from-blue-500 to-blue-600", accent: "bg-blue-400/20" },
  {
    title: "Div 2",
    bg: "from-purple-500 to-purple-600",
    accent: "bg-purple-400/20",
  },
  { title: "Div 3", bg: "from-pink-500 to-pink-600", accent: "bg-pink-400/20" },
];

interface CardProps {
  card: (typeof cards)[number];
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

const AnimatedCard = ({ card, index, total, scrollYProgress }: CardProps) => {
  const isLast = index === total - 1;

  const segment = 1 / total; // 0.333
  const blurStart = segment * (index + 1); // Div1=0.33, Div2=0.66, Div3=1.0
  const blurEnd = Math.min(1, blurStart + segment); // Div1=0.66, Div2=1.00

  // Same 2-keyframe range for ALL cards — no sectionStart involved.
  // This means Div1 behaves EXACTLY like Div2 and Div3:
  //   - stays at scale=1, blur=0 until blurStart
  //   - then animates to scale=0.75, blur=10px by blurEnd
  const scale = useTransform(
    scrollYProgress,
    [blurStart, blurEnd],
    isLast ? [1, 1] : [1, 0.75],
  );

  const opacity = useTransform(
    scrollYProgress,
    [blurStart, blurEnd],
    isLast ? [1, 1] : [1, 0.4],
  );

  const y = useTransform(
    scrollYProgress,
    [blurStart, blurEnd],
    isLast ? [0, 0] : [0, -30],
  );

  const filter = useTransform(
    scrollYProgress,
    [blurStart, blurEnd],
    isLast ? ["blur(0px)", "blur(0px)"] : ["blur(0px)", "blur(10px)"],
  );

  return (
    <section
      className="h-screen sticky top-0 flex items-center justify-center"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale, opacity, y, filter }}
        className={`
          relative w-[90%] max-w-3xl h-[80vh] md:h-[85vh]
          bg-gradient-to-br ${card.bg}
          rounded-3xl shadow-2xl overflow-hidden
          flex items-center justify-center
        `}
      >
        <div
          className={`absolute w-64 h-64 rounded-full ${card.accent}
            -top-10 -right-10 blur-2xl pointer-events-none`}
        />
        <div className="relative text-center text-white select-none">
          <p className="text-sm font-medium uppercase tracking-widest opacity-70 mb-2">
            Section {index + 1}
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            {card.title}
          </h2>
          <p className="mt-4 text-white/60 text-sm md:text-base max-w-xs mx-auto">
            Scroll down to see the next card stack on top.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

const Paradox = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="relative">
      <div ref={containerRef} className="relative h-[300vh]">
        {cards.map((card, index) => (
          <AnimatedCard
            key={index}
            card={card}
            index={index}
            total={cards.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
};

export default Paradox;
