import Paradox from "../animation/Paradox";

const Work = () => {
  return (
    <>
      <div className="flex justify-center bg-[#0d0d1a] pt-[90px]">
        <div className=" w-[70%]">
          <div className="about_head">
            <div className="about_head1 text-[16px] text-[#5982dbe6]">
              <p>02 — Selected Work</p>
            </div>
            <div className="about_head2 text-[32px] text-[#fff] tracking-[1px]">
              <p>Projects that</p>
            </div>
            <div className="about_head3 text-[48px] text-[#5982dbe6]">
              <p>Moved the Needle</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0d0d1a] pt-[70px] pb-[90px]">
        <Paradox />
      </div>
    </>
  );
};

export default Work;
