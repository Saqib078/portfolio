import "./about.css";
import avatar from "../../assets/avatar3.png";

const About = () => {
  return (
    <>
      <div></div>
      <div className="flex justify-center items-center mt-[70px] mb-[90px]">
        <div className="max-[950px]:w-[90%] max-[1400px]:w-[80%] w-[70%]">
          <div className="about_head">
            <div className="about_head1 max-[500px]:text-[10px] max-[650px]:text-[11px] max-[1250px]:text-[12px] max-[1650px]:text-[14px] text-[16px] text-[#5982dbe6]">
              <p>01 — About Me</p>
            </div>
            <div className="about_head2 max-[500px]:text-[18px] max-[650px]:text-[20px] max-[850px]:text-[22px] max-[1250px]:text-[24px] max-[1650px]:text-[28px] text-[32px] text-[#fff] tracking-[1px]">
              <p>Built at the edge of</p>
            </div>
            <div className="about_head3 max-[500px]:text-[23px] max-[650px]:text-[26px] max-[850px]:text-[29px] max-[1250px]:text-[32px] max-[1650px]:text-[38px] text-[48px] text-[#5982dbe6]">
              <p>Design & Code</p>
            </div>
          </div>
          <div className="flex max-[720px]:flex-col-reverse about_content_container w-[100%] items-center">
            <div className="about_content_box max-[720px]:w-[90%] max-[950px]:w-[60%] w-[55%] mt-[40px]">
              <div className="about_content max-[720px]:text-[13px] max-[850px]:text-[11px] max-[1250px]:text-[13px] max-[1650px]:text-[15px] text-[18px] text-justify tracking-[2px]">
                <p className="pb-[10px]">
                  I'm Syed Saqib Ali, a <span>full-stack developer</span> with 2
                  years of experience building modern web applications, backed
                  by a <span>B.Tech in Computer Science</span>.I started coding
                  in 11th grade, and that early curiosity grew into real-world
                  experience through an internship at <span>XenonStack</span>{" "}
                  and 2 years of professional work at <span>Technovel</span>,
                  where I worked across both frontend and backend systems using
                  technologies like <span>React, Next.js, and Node.js</span>.
                </p>
                <p className="pb-[10px]">
                  {" "}
                  I led the development of a data visualization dashboard that
                  boosted client engagement by 30%, reflecting my focus on
                  building solutions that deliver real impact. I'm now deepening
                  my full-stack expertise, with a growing interest in{" "}
                  <span>AI integrations</span> and{" "}
                  <span>cloud deployments</span>, aiming to contribute to
                  collaborative teams building meaningful, scalable products.
                </p>
                <p>
                  Building impactful full-stack solutions with clarity and
                  purpose
                </p>
              </div>
            </div>
            <div className="about_content_box3 max-[720px]:mt-[30px] flex justify-center max-[720px]:w-[80%] max-[950px]:w-[40%] w-[35%] p-[20px]">
              <div className="flex flex-col items-center justify-center">
                <div className="about_content_box2">
                  <img src={avatar} alt="" width="100%" />
                </div>
                <div className="about_avatar_name text-center max-[720px]:text-[16px] max-[850px]:text-[12px] max-[1250px]:text-[15px] max-[1650px]:text-[18px] text-[20px] uppercase pt-[20px]">
                  <p className="text-[#5982dbe6] tracking-[2px]">
                    Syed Saqib Ali
                  </p>
                  <p className="text-[#8b5cf6]">Full-Stack Developer</p>
                  <p className="text-green-500">Open to work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
