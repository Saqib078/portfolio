import Meteor from "../animation/Metero";
import "./hero.css";
import { useEffect, useState } from "react";
import Resume from "../../assets/Resume_replysaqib123@gmail.pdf";

const texts = [
  "I turn ideas into reality.",
  "I build modern web experiences.",
  "I create clean & scalable code.",
];
const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    // download trigger
    const link = document.createElement("a");
    link.href = Resume; // 👈 apna resume path yaha daalo
    link.download = "My_Resume.pdf";
    link.click();

    setDownloaded(true);
  };

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000); // 🔥 pause after complete

      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  return (
    <>
      <div className="relative overflow-hidden">
        <Meteor />
        <div className="max-[720px]:h-[75vh] h-[90vh] w-full items-center flex justify-center ">
          <div className="max-[720px]:w-[82%]  max-[1450px]:w-[72%] w-[60%]">
            <div className="hero_context1 max-[720px]:text-[9px] max-[950px]:text-[10px] max-[1250px]:text-[12px] max-[1650px]:text-[15px] text-[17px] text-[#8A2BE2]">
              <p>Hi , my name is</p>
            </div>
            <div className="hero_context2 max-[560px]:text-[24px] max-[720px]:text-[28px] max-[950px]:text-[35px] max-[1250px]:text-[40px] max-[1650px]:text-[50px] text-[70px] text-[#5982dbe6]">
              <p>Syed Saqib Ali</p>
            </div>
            <div className="hero_context3 max-[950px]:h-[35px] max-[1250px]:h-[40px] max-[1650px]:h-[50px] h-[65px] max-[560px]:text-[20px] max-[720px]:text-[20px] max-[950px]:text-[24px] max-[1250px]:text-[28px] max-[1650px]:text-[32px] text-[45px] bg-gradient-to-r from-[#5982DB] to-[#8A2BE2] bg-clip-text text-transparent">
              <p>
                {displayText}
                <span className="cursor">|</span>
              </p>
            </div>
            <div className="hero_context4 text-justify max-[720px]:text-[14px] max-[1250px]:text-[15px] max-[1650px]:text-[17px] text-[22px] text-[#5982dbe6]">
              <p>
                I am a <span> Software Engineer</span> with strong{" "}
                <span> problem-solving skills</span>, specializing in creating
                exceptional digital experiences. With expertise in both{" "}
                <span>front-end and back-end development</span>, I work with a
                diverse range of technologies, including{" "}
                <span> traditional web applications</span>, and I am actively
                exploring <span> Web3 technologies</span>.
              </p>
            </div>
            <div className="button_resume flex mt-[25px]">
              <p
                onClick={handleDownload}
                className={`relative overflow-hidden transition-all duration-500`}
              >
                <span
                  className={`transition-all duration-500 ${
                    downloaded ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Check Out My Resume
                </span>

                <span
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    downloaded ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                >
                  ✅ Downloaded
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
