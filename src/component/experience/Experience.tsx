import technovel from "../../assets/technovel_logo.BAt5es0h.png";
import Xenon from "../../assets/Xenonstack.png";
import "./experience.css";

const Experience = () => {
  const companyDetails: string[] = [
    "Developed and optimized responsive, cross-browser interfaces using ReactJS, JavaScript, HTML5, and CSS3, enhancing usability and performance across devices.",
    "Integrated real-time data synchronization and secure authentication using Firebase, while managing MySQL databases to ensure reliable and scalable functionality.",
    "Deployed multiple applications via Firebase Hosting, Hostinger, cPanel and traditional servers, ensuring seamless performance and broad accessibility.",
    "Delivered 15+ projects and actively contributed to team-based coding challenges, strengthening problem-solving skills and fostering collaboration. Applied Agile methodologies including stand-ups, sprint planning, and retrospectives, maintaining clean, high-quality code with Git and GitHub.",
    "Leveraged tools such as VS Code, Postman, npm/yarn, Firebase Console, and MySQL Workbench to streamline workflows.",
    "Enhanced communication, adaptability, and teamwork by collaborating with mentors and cross-functional teams, contributing to a productive work environment.",
  ];

  const companyDetails2: string[] = [
    "Delivered practical assignments and contributed to multiple mini-projects, strengthening foundations in software development andanalytical problem-solving.",
    "Collaborated with cross-functional teams on frontend development using ReactJS, delivering responsive, user-friendly interfaces that improved usability across multiple devices.",
    "Integrated backend services with Firebase and maintained version control with Git, applying Agile methodologies to ensure structured, efficient, and reliable workflows.",
    "Enhanced adaptability, teamwork, and technical proficiency through hands-on experience with modern tools in collaborative development environments.",
  ];
  return (
    <>
      <div className="flex justify-center w-[100%]">
        <div className="w-[60%]">
          <div className="flex">
            <div className="relative flex flex-col items-center mr-6 mt-[130px]">
              {/* 💥 Pataka Dot */}
              <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 shadow-lg"></span>
              </span>

              {/* 📏 Animated Line */}
              <span className="w-[2px] h-full bg-blue-500 mt-1 origin-top animate-growLine"  style={{ animationDelay: "1s" }}></span>
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
                        <a href="">(Technovel.in)</a>
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
              <span className="w-[2px] h-full bg-blue-500 mt-1 origin-top animate-growLine"  style={{ animationDelay: "5s" }}></span>
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
                        <a href="">(xenonstack.com)</a>
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
        </div>
      </div>
    </>
  );
};

export default Experience;
