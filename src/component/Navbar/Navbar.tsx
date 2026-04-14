import { useEffect, useEffectEvent, useRef, useState } from "react";
import { TfiAlignCenter } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";
import Logo from "../../assets/Logo_S.png";
import "./navbar.css";
import { useLocation } from "react-router";
import Slide from "../slider/Slide";

type StyleType = {
  left: number;
  width: number;
};

const Navbar = () => {
  const location = useLocation();
  const [Swidth, setSwidth] = useState<number>(window.innerWidth);
  const [openclose, setOpenclose] = useState<boolean>(false);

  useEffect(() => {
    window.onresize = () => setSwidth(window.innerWidth);
  }, []);

  const [hovered, setHovered] = useState(false);
  const [style, setStyle] = useState<StyleType>({ left: 0, width: 0 });
  const [active, setActive] = useState<string>(
    location.hash.replace("#", "") || "About",
  );

  const listRef = useRef<HTMLUListElement | null>(null);

  const moveIndicator = (el: HTMLElement) => {
    setStyle({
      left: el.offsetLeft,
      width: el.offsetWidth,
    });
  };

  const updateIndicator = useEffectEvent(() => {
    const index = menuItems.indexOf(active);

    const el = listRef.current?.children[index]?.querySelector(
      "a",
    ) as HTMLElement | null;

    if (el) moveIndicator(el);
  });

  useEffect(() => {
    updateIndicator();
  }, []);

  const menuItems: string[] = [
    "About",
    "Work",
    "Skills",
    "Experience",
    "Contact",
    "Blog",
  ];

  return (
    <>
      <div className="navbar_menu flex justify-center ">
        <div className="max-[1350px]:w-[85%] max-[1150px]:w-[90%] max-[850px]:w-[95%] w-[80%] mt-[10px] bg-[#14142a] max-[1150px]:py-[3px] py-[5px] max-[1150px]:px-[15px] px-[20px] rounded-3xl flex justify-between items-center">
          <div>
            <img
              src={Logo}
              alt=""
              width="100%"
              className="w-[80px] max-[1650px]:w-[70px] max-[1350px]:w-[60px] max-[1150px]:w-[50px]"
            />
          </div>
          {Swidth > 720 && (
            <div className="menu">
              <span
                className="indicator"
                style={{
                  left: style.left,
                  width: style.width,
                  opacity: hovered || active ? 1 : 0,
                }}
              />

              <ul
                ref={listRef}
                className="flex"
                onMouseLeave={() => {
                  setHovered(false);

                  if (!active) return;

                  const index = menuItems.indexOf(active);
                  const el = listRef.current?.children[index]?.querySelector(
                    "a",
                  ) as HTMLElement | null;

                  if (el) moveIndicator(el);
                }}
              >
                {menuItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      onClick={() => setActive(item)}
                      onMouseEnter={(e) => {
                        setHovered(true);
                        moveIndicator(e.currentTarget as HTMLElement);
                      }}
                      className={`${active === item ? "active" : ""}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="let_but flex items-center">
            <div className="let_but_inner mt-[5px]">
              <p className="">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=replysaqib123@gmail.com&su=Regarding%20Opportunity&body=Hello%20Saqib,%0A%0AI%20would%20like%20to%20connect%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`py-[10px] px-[35px] rounded-2xl border-[2px] ${
                    active === "letstalk" ? "active_letstalk" : ""
                  }`}
                >
                  <span className="m-[0px] p-[0px]">Let's talk</span>
                </a>
              </p>
            </div>
            {Swidth < 720 && (
              <div>
                <div className="ml-[10px] relative z-50">
                  {openclose ? (
                    <RxCross1
                      color="#8b5cf6"
                      size="20px"
                      cursor="pointer"
                      className="icon"
                      onClick={() => {
                        setOpenclose(!openclose);
                      }}
                    />
                  ) : (
                    <TfiAlignCenter
                      color="#8b5cf6"
                      size="20px"
                      cursor="pointer"
                      className="icon"
                      onClick={() => {
                        setOpenclose(!openclose);
                      }}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        {" "}
        <Slide openclose={openclose} setOpenclose={setOpenclose} />
      </div>
    </>
  );
};

export default Navbar;

// ----------------------------
// useEffect(() => {
//   const index = menuItems.indexOf(active);
//   const el = listRef.current?.children[index]?.querySelector(
//     "a",
//   ) as HTMLElement | null;

//   if (el) moveIndicator(el);
// }, [active]);
