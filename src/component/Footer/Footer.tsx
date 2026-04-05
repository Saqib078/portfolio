import "./footer.css";
const Footer = () => {
  return (
    <div className="footer_full flex justify-center py-[20px]">
      <div className="flex max-[720px]:justify-center justify-between max-[1350px]:w-[90%] w-[80%] p-[20px] items-center">
        <div>
          <p className="footer_content flex text-[#7070a0] max-[720px]:text-[7px] max-[1050px]:text-[10px] max-[1350px]:text-[11px] max-[1650px]:text-[12px] text-[14px] tracking-[1px] uppercase items-center">
            <span className="max-[720px]:text-[7px] max-[1050px]:text-[10px] max-[1350px]:text-[12px] max-[1650px]:text-[14px] text-[17px] mr-[5px]">&#169;</span> Syed Saqib Ali.
            crafted with precision.{" "}
            <span className="footer_content_ship lowercase italic max-[720px]:text-[12px] max-[1050px]:text-[18px] max-[1350px]:text-[20px] max-[1650px]:text-[24px] text-[28px] p-[5px] text-[rgba(255,255,255,0.12)]">
              always shipping
            </span>
          </p>
        </div>
        <div className="max-[720px]:hidden">
          <a
            href="#About"
            className="footer_button max-[1050px]:text-[10px] max-[1350px]:text-[12px] max-[1650px]:text-[14px] text-[18px] border-[1px] border-[#7070a0] rounded-3xl text-[#7070a0] pl-[15px] max-[1050px]:pr-[23px] pr-[35px] max-[1050px]:py-[5px] max-[1350px]:py-[6px] max-[1650px]:py-[8px] uppercase"
          >
            {" "}
            <span className="max-[1050px]:text-[10px] max-[1650px]:text-[20px] m-[10px]">
              &#8593;
            </span>
            Back to tops
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
