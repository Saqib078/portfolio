import Meteor from "../animation/Metero";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <div className=" relative  overflow-hidden">
        <Meteor />
        <div className="h-[90vh] w-full items-center flex justify-center ">
          <div className="w-[60%]">
            <div className="hero_context1 text-[17px] text-[#8A2BE2]">
              <p>Hi , my name is</p>
            </div>
            <div className="hero_context2 text-[60px] text-[#5982dbe6]">
              <p>Syed Saqib Ali</p>
            </div>
            <div className="hero_context3 text-[65px]  bg-gradient-to-r from-[#5982DB] to-[#8A2BE2] bg-clip-text text-transparent">
              <p>I turn ideas into reality.</p>
            </div>
            <div className="hero_context4 text-justify text-[22px] text-[#5982dbe6]">
              <p>
                I am a <span> Software Engineer</span> with strong{" "}
                <span> problem-solving skills</span>, specializing in creating
                exceptional digital experiences. With expertise in both{" "}
                <span>front-end and back-end development</span>, I work with a
                diverse range of technologies, including{" "}
                <span> traditional web applications</span>, and I am actively
                exploring <span> Web3 technologies</span>. I enjoy solving
                challenging projects that drive <span> innovation</span> and
                deliver high-quality results. Through my JOB, I developed my
                ability to collaborate effectively and translate{" "}
                <span> ideas into functional solutions</span>. I actively seek
                dynamic projects where I can contribute to pushing the
                boundaries of technology and drive
                <span> impactful innovation</span>.
              </p>
            </div>
            <div className="button_resume flex mt-[25px]">
                <p>Check Out My Resume</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
