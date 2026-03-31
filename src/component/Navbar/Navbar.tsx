import Logo from '../../assets/Logo_S.png';
import "./navbar.css"
const Navbar : React.FC = () => {
  return (
    <div className='navbar_menu flex justify-center '>
        <div className='w-[80%] m-[10px] bg-[#14142a] py-[5px] px-[20px] rounded-3xl flex justify-between items-center'>
            <div><img src={Logo} alt="" width="100%" className='w-[80px]'/></div>
            <div className='menu'>
                <ul className='flex'>
                    <li>About</li>
                    <li>SKills</li>
                    <li>Experience</li>
                    <li>Work</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='let_but'>
                <div className='let_but_inner'>
                    <button className='py-[5px] px-[25px] rounded-2xl border-[2px]'>Let's talk</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar


