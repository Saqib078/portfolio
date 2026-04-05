import { useEffect } from "react";
import "./slide.css";
type SlideProps = {
  openclose: boolean;
  setOpenclose: React.Dispatch<React.SetStateAction<boolean>>;
};

const Slide = ({ openclose, setOpenclose }: SlideProps) => {
    console.log(document.querySelector('.sidebar'))
  useEffect(() => {
    if (openclose) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openclose]);

  return (
    <div className={`slide_container ${openclose ? "open" : ""}`}>
      <div className="absolute inset-0" onClick={() => setOpenclose(false)} />
      {/* <div
        className={`slide_container flex w-full h-full z-40 bg-[#08081085] absolute top-0 bottom-0 ${
          openclose ? "open" : ""
        }`}
      > */}
      <div className="flex w-full h-full">
        <div className="max-[500px]:w-[20%] w-[30%]" />
        <div className="sidebar max-[500px]:w-[80%] w-[70%] h-full bg-[#14142a]">
          <div className="Menu_list_slide pt-[15vh]">
            <ul className="max-[500px]:pl-[10%] pl-[15%]">
              <li className="mb-[10px]">
                <a href="#About" onClick={() => setOpenclose(false)}>
                  About
                </a>
              </li>
              <li className="mb-[10px]">
                <a href="#Skills" onClick={() => setOpenclose(false)}>
                  Skills
                </a>
              </li>
              <li className="mb-[10px]">
                <a href="#Experience" onClick={() => setOpenclose(false)}>
                  Experience
                </a>
              </li>
              <li className="mb-[10px]">
                <a href="#Work" onClick={() => setOpenclose(false)}>
                  Work
                </a>
              </li>
              <li className="mb-[10px]">
                <a href="#Contact" onClick={() => setOpenclose(false)}>
                  Contact
                </a>
              </li>
              <li className="mb-[10px]">
                <a href="#Blog" onClick={() => setOpenclose(false)}>
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
