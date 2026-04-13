import { RiExternalLinkLine } from "react-icons/ri";
import { LiaFileDownloadSolid } from "react-icons/lia";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <div className="flex justify-center items-center my-[140px] ">
        {/* Contact links  */}
        <div className="w-[40%]">
          <div className="about_head w-[80%] pb-[10px]">
            <div className="about_head1 text-[16px] text-[#5982dbe6]">
              <p>05 — Contact</p>
            </div>
            <div className="about_head2 text-[32px] text-[#fff] tracking-[1px]">
              <p>Get in touch</p>
            </div>
            <div className="about_head3 text-[48px] text-[#5982dbe6]">
              <p>Let’s work together</p>
            </div>
            <div className="contact_content">
              <p className="text-[16px] text-gray-400 w-[100%] text-justify">
                Although I am Always open for any new opportunities, my inbox is
                open. Whether you have a question or just want to say hi, I will
                try my best to get back to you!
              </p>
            </div>
          </div>
          <div className="contact_gmail mt-[40px] mb-[80px]">
            <a
              href=""
              className="text-white flex justify-between items-center w-[70%] border-b border-gray pb-2 hover:text-blue-300 hover:border-blue-300"
            >
              <p className="text-[24px]">replysaqib123@gmail.com</p>
              <p className="">
                <RiExternalLinkLine size="20px" />
              </p>
            </a>
          </div>
          <div className="contact_links_container">
            <a
              href=""
              className="contact_connect_link flex justify-between items-start w-[70%] border-b border-gray pb-2"
            >
              <p>Github</p>
              <p>
                <RiExternalLinkLine />
              </p>
            </a>

            <a
              href=""
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
              href=""
              className="contact_connect_link flex justify-between items-start w-[70%] border-b border-gray pb-2"
            >
              <p>Resume</p>
              <p>
                <LiaFileDownloadSolid />
              </p>
            </a>
            <a
              href=""
              className="contact_connect_link flex justify-between items-start w-[70%] border-b border-gray pb-2"
            >
              <p>Cover Page</p>
              <p>
                <LiaFileDownloadSolid />
              </p>
            </a>
          </div>
        </div>
        {/* Form */}
        <div className="w-[40%] bg-transparent border border-blue-500/40 rounded-2xl px-[30px] py-[40px] backdrop-blur-md h-fit">
          {/* Name */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full bg-transparent border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full bg-transparent border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <textarea
              rows={4}
              placeholder="Your Message..."
              className="w-full bg-transparent border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition resize-none"
            ></textarea>
          </div>
          <div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all duration-300">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
