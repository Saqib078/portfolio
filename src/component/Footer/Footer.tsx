import './footer.css';
const Footer: React.FC = () => {
  return (
    <div className="footer_full flex justify-center py-[20px]">
      <div className="flex justify-between w-[80%] p-[20px] items-center">
        <div>
          <p className="flex footer_content text-[#7070a0] text-[14px] tracking-[1px] uppercase items-center">
            <span className='text-[20px] mr-[5px]'>&#169;</span> Syed Saqib Ali. crafted with precision.{" "}
            <span className='footer_content_ship lowercase italic text-[28px] p-[5px] text-[rgba(255,255,255,0.12)]'>always shipping</span>
          </p>
        </div>
        <div>
          <a href="#About" className='footer_button text-[18px] border-[1px] border-[#7070a0] rounded-3xl text-[#7070a0] pl-[15px] pr-[35px] py-[8px] uppercase'>
            {" "}
            <span className='text-[20px] m-[10px]'>&#8593;</span>Back to top
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
