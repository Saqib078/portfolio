import technovel from "../../assets/technovel_logo.BAt5es0h.png";
import Xenon from "../../assets/Xenonstack.png";
import "./experience.css";

const Experience = () => {
  const companyDetails: string[] = [
    "Developed and optimized responsive, cross-browser interfaces using ReactJS, JavaScript, HTML5, and CSS3, enhancing usability and performance across devices.",
    "Integrated real-time data synchronization and secure authentication using Firebase, while managing MySQL databases to ensure reliable and scalable functionality.",
    "Deployed multiple applications via Firebase Hosting, Hostinger, cPanel and traditional servers, ensuring seamless performance and broad accessibility.",
  ];

  const companyDetails2: string[] = [
    "Delivered practical assignments and contributed to multiple mini-projects, strengthening foundations in software development andanalytical problem-solving.",
    "Collaborated with cross-functional teams on frontend development using ReactJS, delivering responsive, user-friendly interfaces that improved usability across multiple devices.",
  ];

  const companyDetails3: string[] = [
    "Initiated my software engineering journey during B.Tech by actively exploring web development and programming fundamentals through self-learning and structured online courses.",
    "Built a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React.js by working on multiple personal and guided projects.",
  ];
  return (
    <>
      <div className="flex justify-center pt-[60px] bg-[#0d0d1a]">
        <div className="about_head w-[70%] pb-[10px]">
          <div className="about_head1 text-[16px] text-[#5982dbe6]">
            <p>04 — Career</p>
          </div>
          <div className="about_head2 text-[32px] text-[#fff] tracking-[1px]">
            <p>Building my path</p>
          </div>
          <div className="about_head3 text-[48px] text-[#5982dbe6]">
            <p>Through Experience</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-[100%] bg-[#0d0d1a] pb-[50px]">
        <div className="w-[60%]">
          <div className="flex">
            <div className="relative flex flex-col items-center mr-6 mt-[130px]">
              {/* 💥 Pataka Dot */}
              <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 shadow-lg"></span>
              </span>

              {/* 📏 Animated Line */}
              <span
                className="w-[2px] h-full bg-blue-500 mt-1 origin-top animate-growLine"
                style={{ animationDelay: "1s" }}
              ></span>
            </div>
            <div className="bg-[#ffffff14] rounded-[20px] py-[20px] px-[40px] m-[40px] mt-[90px] mb-[95px]">
              <div className="flex justify-between text-white p-[20px]">
                <div className="flex items-center">
                  <div className="w-[150px] py-[20px] bg-white p-[10px] rounded-[10px]">
                    <img src={technovel} alt="" width="100%" />
                  </div>
                  <div className="pl-[20px]">
                    <div className="flex pb-[4px] items-end ">
                      <div className="text-[22px] company_name font-extrabold">
                        <p>Technovel</p>
                      </div>
                      <div className="text-[14px] text-gray-400 p-[5px] company_link">
                        <a href="https://technovel.in/">(Technovel.in)</a>
                      </div>
                    </div>
                    <div className="company_position text-[20px] text-gray-300 uppercase">
                      <p>
                        Associate Software Engineer{" "}
                        <span className="before:content-['•'] before:mr-2 text-white text-[14px] text-gray-500 pl-[10px]">
                          Full Time
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="company_date text-[20px] text-gray-300 uppercase">
                  <p>july 2023 - feb 2026</p>
                </div>
              </div>
              <div className="flex justify-center">
                <hr className="w-[95%]" />
              </div>
              <div className="p-5 details_company">
                <ul className="list-disc pl-5">
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
            <div className="relative flex flex-col items-center mr-6">
              {/* 💥 Pataka Dot */}
              <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 shadow-lg"></span>
              </span>

              {/* 📏 Animated Line */}
              <span
                className="w-[2px] h-full bg-blue-500 mt-1 origin-top animate-growLine"
                style={{ animationDelay: "5s" }}
              ></span>
            </div>
            <div className="bg-[#ffffff14] rounded-[20px] py-[20px] px-[40px] m-[40px] mt-0">
              <div className="flex justify-between text-white p-[20px]">
                <div className="flex items-center">
                  <div className="w-[90px] bg-white p-[10px] rounded-[10px]">
                    <img src={Xenon} alt="" width="100%" />
                  </div>
                  <div className="pl-[20px]">
                    <div className="flex pb-[4px] items-end ">
                      <div className="text-[22px] company_name font-extrabold">
                        <p>XenonStack</p>
                      </div>
                      <div className="text-[14px] text-gray-400 p-[5px] company_link">
                        <a href="https://www.xenonstack.com/">(xenonstack.com)</a>
                      </div>
                    </div>
                    <div className="company_position text-[20px] text-gray-300 uppercase">
                      <p>
                        Associate Software Engineer- Trainee
                        <span className="before:content-['•'] before:mr-2 text-white text-[14px] text-gray-500 pl-[10px]">
                          Remote
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="company_date text-[20px] text-gray-300 uppercase">
                  <p>feb 2023 - April 2023</p>
                </div>
              </div>
              <div className="flex justify-center">
                <hr className="w-[95%]" />
              </div>
              <div className="p-5 details_company">
                <ul className="list-disc pl-5">
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
            <div className="relative flex flex-col items-center mr-6">
              {/* 💥 Pataka Dot */}
              <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-gray-500 shadow-lg"></span>
              </span>
            </div>
            <div className="bg-[#ffffff14] rounded-[20px] py-[20px] px-[40px] m-[40px] mt-0">
              <div className="flex justify-between text-white p-[20px]">
                <div className="flex items-center">
                  <div className="pl-[20px]">
                    <div className="flex pb-[4px] items-end ">
                      <div className="text-[22px] company_name font-extrabold">
                        <p>Initiated my software engineering journey</p>
                      </div>
                    </div>
                    <div className="company_position text-[20px] text-gray-300 uppercase">
                      <p>
                       INDEPENDENT LEARNING & INTERNSHIPS
                      </p>
                    </div>
                  </div>
                </div>
                <div className="company_date text-[20px] text-gray-300 uppercase">
                  <p>2020 - 2023</p>
                </div>
              </div>
              <div className="flex justify-center">
                <hr className="w-[95%]" />
              </div>
              <div className="p-5 details_company">
                <ul className="list-disc pl-5">
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
