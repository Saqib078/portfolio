import technovel from "../../assets/technovel_logo.BAt5es0h.png";
import Xenon from "../../assets/Xenonstack.png";
import "./experience.css";

const Experience = () => {
  const companyDetails: string[] = [
    "Developed and deployed 15+ scalable web applications using NextJs ,ReactJs, JavaScript, HTML5, CSS3, NodeJs, ExpressJs and Firebase, ensuring responsive, cross-browser performance and real-time data synchronization with secure authentication.",
    "Designed and maintained backend systems with Mongoose, MySQL, integrating efficient APIs and deploying applications via Firebase Hosting, Hostinger, Cpanel and traditional servers for reliable and scalable delivery.",
    "Collaborated in Agile environments (sprint planning, stand-ups, retrospectives), using Git/GitHub and tools like VS Code, Postman, and MySQL Workbench to maintain high-quality code and streamline development workflows.",
  ];

  const companyDetails2: string[] = [
    "Delivered practical assignments and contributed to multiple mini-projects, strengthening core software development skills and analytical problem-solving.",
    "Collaborated with cross-functional teams on frontend development using ReactJS, delivering responsive, user-friendly interfaces that improved usability across multiple devices.",
  ];

  const companyDetails3: string[] = [
    "Initiated my software engineering journey during B.Tech by actively exploring web development and programming fundamentals through self-learning and structured online courses.",
    "Built a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React.js by working on multiple personal and guided projects.",
  ];
  return (
    <>
      <div className="flex justify-center pt-[60px] bg-[#0d0d1a]">
        <div className="about_head max-[950px]:w-[90%] max-[1400px]:w-[80%] w-[70%] pb-[10px]">
          <div className="about_head1 max-[500px]:text-[10px] max-[650px]:text-[11px] max-[1250px]:text-[12px] max-[1650px]:text-[14px] text-[16px] text-[#5982dbe6]">
            <p>04 — Career</p>
          </div>
          <div className="about_head2  max-[500px]:text-[18px] max-[650px]:text-[20px] max-[850px]:text-[22px] max-[1250px]:text-[24px] max-[1650px]:text-[28px] text-[32px] text-[#fff] tracking-[1px]">
            <p>Building my path</p>
          </div>
          <div className="about_head3 max-[500px]:text-[23px] max-[650px]:text-[26px] max-[850px]:text-[29px] max-[1250px]:text-[32px] max-[1650px]:text-[38px] text-[48px] text-[#5982dbe6]">
            <p>Through Experience</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-[100%] bg-[#0d0d1a] pb-[50px]">
        <div className="max-[700px]:w-[90%] max-[1090px]:w-[80%] max-[1450px]:w-[70%] w-[65%]">
          <div className="flex">
            <div className="relative flex flex-col items-center mr-[24px] max-[700px]:mr-[12px] max-[700px]:mt-[90px] mt-[130px]">
              {/* 💥 Pataka Dot */}
              <span className="relative flex max-[700px]:h-2 max-[700px]:w-2 h-4 w-4">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full max-[700px]:h-2 max-[700px]:w-2 h-4 w-4 bg-blue-500 shadow-lg"></span>
              </span>

              {/* 📏 Animated Line */}
              <span
                className="w-[1px] h-full bg-blue-500 mt-1 origin-top animate-growLine"
                style={{ animationDelay: "1s" }}
              ></span>
            </div>
            <div className="bg-[#ffffff14] rounded-[20px] max-[820px]:py-[5px] max-[820px]:px-[10px] max-[1150px]:px-[20px] py-[20px] px-[40px] m-[40px] max-[820px]:m-[5px] max-[820px]:mt-[50px] max-[820px]:mb-[45px] mt-[90px] mb-[95px]">
              <div className="flex max-[960px]:flex-col justify-between text-white max-[1150px]:p-[10px] p-[20px]">
                <div className="flex max-[600px]:flex-col max-[600px]:items-start items-center">
                  <div className="max-[850px]:w-[75px] max-[1450px]:w-[85px] max-[1720px]:w-[100px] w-[150px] py-[20px] bg-white p-[10px] rounded-[10px]">
                    <img src={technovel} alt="" width="100%" />
                  </div>
                  <div className="max-[700px]:pl-[10px] pl-[20px]">
                    <div className="flex pb-[4px] items-end ">
                      <div className=" max-[1450px]:text-[16px] max-[1720px]:text-[19px] text-[22px] company_name font-extrabold">
                        <p>Technovel</p>
                      </div>
                      <div className="max-[1450px]:text-[10px] max-[1720px]:text-[12px] text-[14px] text-gray-400 p-[5px] company_link">
                        <a href="https://technovel.in/">(Technovel.in)</a>
                      </div>
                    </div>
                    <div className="company_position max-[1450px]:text-[13px] max-[1720px]:text-[16px] text-[20px] text-gray-300 uppercase">
                      <p>
                        Associate Software Engineer{" "}
                        <span className="before:content-['•'] before:mr-2 text-white max-[1720px]:text-[12px] text-[14px] text-gray-500 pl-[10px]">
                          Full Time
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="company_date max-[600px]:pl-[10px] max-[960px]:pl-[110px] max-[1450px]:text-[13px] max-[1720px]:text-[16px] text-[20px] text-gray-300 uppercase">
                  <p>july 2023 - feb 2026</p>
                </div>
              </div>
              <div className="flex justify-center">
                <hr className="w-[95%]" />
              </div>
              <div className="p-5 max-[700px]:p-2 details_company">
                <ul className="list-disc max-[700px]:pl-2 pl-5">
                  {companyDetails.map((item, index) => (
                    <li
                      key={index}
                      className="text-gray-300 leading-relaxed hover:text-white transition-all duration-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="relative flex flex-col items-center mr-6 max-[700px]:mr-[12px]">
              {/* 💥 Pataka Dot */}
              <span className="relative flex h-4 w-4 max-[700px]:h-2 max-[700px]:w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full max-[700px]:h-2 max-[700px]:w-2 h-4 w-4 bg-blue-500 shadow-lg"></span>
              </span>

              {/* 📏 Animated Line */}
              <span
                className="max-[700px]:w-[1px] w-[2px] h-full bg-blue-500 mt-1 origin-top animate-growLine"
                style={{ animationDelay: "5s" }}
              ></span>
            </div>
            <div className="bg-[#ffffff14] rounded-[20px] py-[20px] max-[820px]:py-[5px] max-[820px]:px-[10px] max-[1150px]:px-[20px] px-[40px] max-[820px]:m-[5px] max-[820px]:mb-[55px] m-[40px] mt-0">
              <div className="flex max-[960px]:flex-col justify-between text-white p-[20px]">
                <div className="flex max-[600px]:flex-col max-[600px]:items-start items-center">
                  <div className="max-[1720px]:w-[70px] w-[90px] bg-white p-[10px] rounded-[10px]">
                    <img src={Xenon} alt="" width="100%" />
                  </div>
                  <div className="max-[600px]:pl-[5px] pl-[20px]">
                    <div className="flex pb-[4px] items-end">
                      <div className="max-[1450px]:text-[16px] max-[1720px]:text-[18px] text-[22px] company_name font-extrabold">
                        <p>XenonStack</p>
                      </div>
                      <div className="max-[1450px]:text-[10px] max-[1720px]:text-[12px] text-[14px] text-gray-400 p-[5px] company_link">
                        <a href="https://www.xenonstack.com/">
                          (xenonstack.com)
                        </a>
                      </div>
                    </div>
                    <div className="company_position max-[1450px]:text-[13px] max-[1720px]:text-[16px] text-[20px] text-gray-300 uppercase">
                      <p>
                        Associate Software Engineer- Trainee
                        <span className="before:content-['•'] before:mr-2 text-white max-[1720px]:text-[12px] text-[14px] text-gray-500 pl-[10px]">
                          Remote
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="company_date max-[600px]:pl-[10px] max-[960px]:pl-[90px] max-[1450px]:text-[13px] max-[1720px]:text-[16px] text-[20px] text-gray-300 uppercase">
                  <p>feb 2023 - April 2023</p>
                </div>
              </div>
              <div className="flex justify-center">
                <hr className="w-[95%]" />
              </div>
              <div className="max-[700px]:p-2 p-5 details_company">
                <ul className="list-disc pl-5 max-[700px]:pl-2">
                  {companyDetails2.map((item, index) => (
                    <li
                      key={index}
                      className="text-gray-300 leading-relaxed hover:text-white transition-all duration-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="relative flex flex-col items-center mr-[24px] max-[820px]:mr-[10px]">
              {/* 💥 Pataka Dot */}
              <span className="relative flex h-4 w-4 max-[700px]:h-2 max-[700px]:w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full max-[700px]:h-2 max-[700px]:w-2 h-4 w-4 bg-gray-500 shadow-lg"></span>
              </span>
            </div>
            <div className="bg-[#ffffff14] rounded-[20px] py-[20px] max-[820px]:py-[5px] max-[820px]:px-[10px] max-[1150px]:px-[20px] px-[40px] m-[40px] max-[820px]:m-[10px] max-[820px]:ml-[20px] mt-0">
              <div className="flex max-[960px]:flex-col justify-between text-white p-[20px]">
                <div className="flex items-center">
                  <div className="pl-[20px]">
                    <div className="flex pb-[4px] items-end ">
                      <div className="max-[1450px]:text-[16px] max-[1720px]:text-[19px] text-[22px] company_name font-extrabold">
                        <p>Initiated my software engineering journey</p>
                      </div>
                    </div>
                    <div className="company_position max-[1450px]:text-[13px] max-[1720px]:text-[16px] text-[20px] text-gray-300 uppercase">
                      <p>INDEPENDENT LEARNING & INTERNSHIPS</p>
                    </div>
                  </div>
                </div>
                <div className="company_date max-[960px]:pl-[20px] max-[1450px]:text-[13px] max-[1720px]:text-[16px] text-[20px] text-gray-300 uppercase">
                  <p>2020 - 2023</p>
                </div>
              </div>
              <div className="flex justify-center">
                <hr className="w-[95%]" />
              </div>
              <div className="max-[700px]:p-2 p-5 details_company">
                <ul className="list-disc max-[700px]:pl-2 pl-5">
                  {companyDetails3.map((item, index) => (
                    <li
                      key={index}
                      className="text-gray-300 leading-relaxed hover:text-white transition-all duration-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
