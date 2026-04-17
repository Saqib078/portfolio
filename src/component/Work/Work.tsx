import Paradox from "../animation/Paradox";

const Work = () => {
  return (
    <>
      <div className="flex justify-center bg-[#0d0d1a] pt-[90px]">
        <div className="max-[950px]:w-[90%] max-[1400px]:w-[80%] w-[70%]">
          <div className="about_head">
            <div className="about_head1 max-[500px]:text-[10px] max-[650px]:text-[11px] max-[1250px]:text-[12px] max-[1650px]:text-[14px] text-[16px] text-[#5982dbe6]">
              <p>02 — Selected Work</p>
            </div>
            <div className="about_head2 max-[500px]:text-[18px] max-[650px]:text-[20px] max-[850px]:text-[22px] max-[1250px]:text-[24px] max-[1650px]:text-[28px] text-[32px] text-[#fff] tracking-[1px]">
              <p>Projects that</p>
            </div>
            <div className="about_head3 max-[500px]:text-[23px] max-[650px]:text-[26px] max-[850px]:text-[29px] max-[1250px]:text-[32px] max-[1650px]:text-[38px] text-[48px] text-[#5982dbe6]">
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
