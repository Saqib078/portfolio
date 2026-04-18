import { RiExternalLinkLine } from "react-icons/ri";
import { LiaFileDownloadSolid } from "react-icons/lia";
import "./contact.css";

import Resume from "../../assets/Resume_replysaqib123@gmail.pdf";
const Contact = () => {

  const handleDownload = () => {
    // download trigger
    const link = document.createElement("a");
    link.href = Resume; // 👈 apna resume path yaha daalo
    link.download = "My_Resume.pdf";
    link.click();


  };

  return (
    <>
      <div className="flex max-[760px]:flex-col justify-center items-center my-[140px] w-[100%]">
        {/* Contact links  */}
        <div className="max-[760px]:w-[85%] max-[1250px]:w-[45%] w-[40%]">
          <div className="about_head w-[80%] pb-[10px]">
            <div className="about_head1 max-[500px]:text-[10px] max-[650px]:text-[11px] max-[1250px]:text-[12px] max-[1650px]:text-[14px] text-[16px] text-[#5982dbe6]">
              <p>05 — Contact</p>
            </div>
            <div className="about_head2 max-[500px]:text-[18px] max-[650px]:text-[20px] max-[850px]:text-[22px] max-[1250px]:text-[24px] max-[1650px]:text-[28px] text-[32px] text-[#fff] tracking-[1px]">
              <p>Get in touch</p>
            </div>
            <div className="about_head3 max-[500px]:text-[23px] max-[650px]:text-[26px] max-[850px]:text-[29px] max-[1250px]:text-[32px] max-[1650px]:text-[38px] text-[48px] text-[#5982dbe6]">
              <p>Let’s work together</p>
            </div>
            <div className="contact_content">
              <p className="max-[500px]:text-[11px] max-[650px]:text-[12px] max-[850px]:text-[13px] max-[1250px]:text-[14px] max-[1650px]:text-[15px] text-[16px] text-gray-400 w-[100%] text-justify">
                Although I am Always open for any new opportunities, my inbox is
                open. Whether you have a question or just want to say hi, I will
                try my best to get back to you!
              </p>
            </div>
          </div>
          <div className="contact_gmail mt-[40px] mb-[80px]">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=replysaqib123@gmail.com&su=Regarding%20Opportunity&body=Hello%20Saqib,%0A%0AI%20would%20like%20to%20connect%20with%20you."
              className="text-white flex justify-between items-center w-[70%] border-b border-gray pb-2 hover:text-blue-300 hover:border-blue-300"
            >
              <p className="max-[850px]:text-[16px] max-[1450px]:text-[20px] max-[1650px]:text-[22px] text-[24px]">
                replysaqib123@gmail.com
              </p>
              <p className="">
                <RiExternalLinkLine size="20px" />
              </p>
            </a>
          </div>
          <div className="contact_links_container max-[760px]:pb-[60px]">
            <a
              href="https://github.com/Saqib078"
              target="__blank"
              className="contact_connect_link flex justify-between items-start w-[70%] border-b border-gray pb-2"
            >
              <p>Github</p>
              <p>
                <RiExternalLinkLine />
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/syed-saqib-ali-9b2033234"
              target="__blank"
              className="contact_connect_link flex justify-between items-start w-[70%] border-b border-gray pb-2"
            >
              <p>LinkedIn</p>
              <p>
                <RiExternalLinkLine />
              </p>
            </a>
            <a
              href=""
              className="contact_connect_link flex justify-between items-start w-[70%] border-b border-gray pb-2"
            >
              <p>Other Portfolio</p>
              <p>
                <RiExternalLinkLine />
              </p>
            </a>
            <a
              onClick={handleDownload}
              href="#Resume"
              className="contact_connect_link flex justify-between items-start w-[70%] border-b border-gray pb-2"
            >
              <p>Resume</p>
              <p>
                <LiaFileDownloadSolid />
              </p>
            </a>
            {/* <a
              href=""
              className="contact_connect_link flex justify-between items-start w-[70%] border-b border-gray pb-2"
            >
              <p>Cover Page</p>
              <p>
                <LiaFileDownloadSolid />
              </p>
            </a> */}
          </div>
        </div>
        {/* Form */}
        <div className="max-[760px]:w-[85%] max-[1250px]:w-[45%] w-[40%] bg-transparent border border-blue-500/40 rounded-2xl px-[30px] py-[40px] backdrop-blur-md h-fit">
          {/* Name */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="text-[13px] w-full bg-transparent border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="text-[13px] w-full bg-transparent border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <textarea
              rows={4}
              placeholder="Your Message..."
              className="text-[13px] w-full bg-transparent border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition resize-none"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <div className="button_resume">
              <p className="text-[12px] w-full bg-blue-500 text-white py-[10px] px-[25px] rounded-lg font-semibold transition-all duration-300 ">
                Send Message
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
