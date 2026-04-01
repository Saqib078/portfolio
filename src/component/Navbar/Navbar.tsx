import { useState } from "react";
import Logo from "../../assets/Logo_S.png";
import "./navbar.css";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("");

  const handleClick = (id: string) => {
    setActive(id);
  };

  return (
    <div className="navbar_menu flex justify-center ">
      <div className="w-[80%] m-[10px] bg-[#14142a] py-[5px] px-[20px] rounded-3xl flex justify-between items-center">
        <div>
          <img src={Logo} alt="" width="100%" className="w-[80px]" />
        </div>
        <div className="menu">
          <ul className="flex">
            <li>
              <a
                href="#About"
                onClick={() => handleClick("About")}
                className={active === "About" ? "active" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Skills"
                onClick={() => handleClick("Skills")}
                className={active === "Skills" ? "active" : ""}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#Experience"
                onClick={() => handleClick("Experience")}
                className={active === "Experience" ? "active" : ""}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#Work"
                onClick={() => handleClick("Work")}
                className={active === "Work" ? "active" : ""}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                onClick={() => handleClick("Contact")}
                className={active === "Contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#Blog"
                onClick={() => handleClick("Blog")}
                className={active === "Blog" ? "active" : ""}
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="let_but">
          <div className="let_but_inner">
            <p>
              <a
                href="#letstalk"
                onClick={() => handleClick("letstalk")}
                className={`py-[10px] px-[35px] rounded-2xl border-[2px] shadow-[0_5px_15px_rgba(99,179,237,0.4)] ${
                  active === "letstalk" ? "active_letstalk" : ""
                }`}
              >
                <span>Let's talk</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
