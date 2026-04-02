import { useEffect, useEffectEvent, useRef, useState } from "react";
import Logo from "../../assets/Logo_S.png";
import "./navbar.css";
import { useLocation } from "react-router";

type StyleType = {
  left: number;
  width: number;
};

const Navbar = () => {
  const location   = useLocation();
  const [style, setStyle] = useState<StyleType>({ left: 0, width: 0 });
  const [active, setActive] = useState<string>(location.hash.replace("#", "") || "About" );


  const listRef = useRef<HTMLUListElement | null>(null);

  const moveIndicator = (el: HTMLElement) => {
    setStyle({
      left: el.offsetLeft ,
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
    "Skills",
    "Experience",
    "Work",
    "Contact",
    "Blog",
  ];

  return (
    <div className="navbar_menu flex justify-center ">
      <div className="max-[1350px]:w-[85%] max-[1150px]:w-[90%] max-[850px]:w-[95%] w-[80%] mt-[10px] bg-[#14142a] max-[1150px]:py-[3px] py-[5px] max-[1150px]:px-[15px] px-[20px] rounded-3xl flex justify-between items-center">
        <div>
          <img src={Logo} alt="" width="100%" className="w-[80px] max-[1650px]:w-[70px] max-[1350px]:w-[60px] max-[1150px]:w-[50px]" />
        </div>

        <div className="menu">
          <span
            className="indicator"
            style={{
              left: style.left,
              width: style.width,
            }}
          />

          <ul
            ref={listRef}
            className="flex"
            onMouseLeave={() => {
              const index = menuItems.indexOf(active);
              const el = listRef.current?.children[index]?.querySelector(
                "a",
              ) as HTMLElement | null;

              if (el) moveIndicator(el);
            }}
          >
            {menuItems.map((item) => (
              <li key={item} >
                <a
                  href={`#${item}`}
                  onClick={() => setActive(item)}
                  onMouseEnter={(e) => {
                    moveIndicator(e.currentTarget as HTMLElement);
                  }}
                  className={`${
                    active === item ? "active" : ""
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="let_but">
          <div className="let_but_inner mt-[5px]">
            <p className="">
              <a
                href="#letstalk"
                onClick={() => setActive("letstalk")}
                className={`py-[10px] px-[35px] rounded-2xl border-[2px] ${
                  active === "letstalk" ? "active_letstalk" : ""
                }`}
              >
                <span className="m-[0px] p-[0px]">Let's talk</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
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
