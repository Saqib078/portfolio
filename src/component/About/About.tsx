import "./about.css";
import avatar from "../../assets/avatar3.png";

const About = () => {
  return (
    <>
      <div>
      </div>
      <div className="flex justify-center items-center">
        <div className=" w-[70%]">
          <div className="about_head">
            <div className="about_head1 text-[16px] text-[#5982dbe6]">
              <p>01 — About Me</p>
            </div>
            <div className="about_head2 text-[32px] text-[#fff] tracking-[1px]">
              <p>Built at the edge of</p>
            </div>
            <div className="about_head3 text-[48px] text-[#5982dbe6]">
              <p>Design & Code</p>
            </div>
          </div>
          <div className="flex about_content_container w-[100%] items-center">
            <div className="about_content_box w-[55%] mt-[40px]">
              <div className="about_content  text-[18px] text-[#fff] text-justify  tracking-[1px]">
                <p>
                  I'm Syed Saqib Ali, a full-stack developer with 2 years of
                  experience building modern web applications, backed by a
                  B.Tech in Computer Science.I started coding in 11th grade, and
                  that early curiosity grew into real-world experience through
                  an internship at XenonStack and 2 years of professional work
                  at Technovel, where I worked across both frontend and backend
                  systems using technologies like React, Next.js, and Node.js.
                </p>
                <p>
                  {" "}
                  I led the development of a data visualization dashboard that
                  boosted client engagement by 30%, reflecting my focus on
                  building solutions that deliver real impact. I'm now deepening
                  my full-stack expertise, with a growing interest in AI
                  integrations and cloud deployments, aiming to contribute to
                  collaborative teams building meaningful, scalable products.
                </p>
                <p>
                  Building impactful full-stack solutions with clarity and
                  purpose
                </p>
              </div>
            </div>
            <div className=" about_content_box3 flex justify-center w-[35%] p-[20px]">
              <div className="flex flex-col items-center justify-center">
                <div className="about_content_box2">
                  <img src={avatar} alt="" width="100%" />
                </div>
                <div className="about_avatar_name text-center text-[20px]  uppercase pt-[20px]">
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
