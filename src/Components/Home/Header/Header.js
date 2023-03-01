import gearImage from "./gearImage.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Kena from '../../../assets/kena.png'

function Header() {
  return (
    <div className="shadow-lg" style={{backgroundImage: `url(${Kena})`, backgroundSize: 'con', backgroundRepeat: 'no-repeat' , height: 520}}>
     <div className="con">
    <div className="flex items-center mt-20 leading-[76px] text-[#4879F5]" >
    
      <div className="w-[50%] flex flex-col justify-center pl-[108px]">
        <p className="text-[80px] mb-4">We are a Company with Great Service</p>
        <Link className="border-2 pl-[15px]  text-[#4879F5] border-[#4879F5] w-[25%] font-[24px] rounded-[8px] hover:text-white hover:bg-[#4879F5] cursor-pointer">
          Get started <FontAwesomeIcon icon="arrow-right" />
        </Link>
      </div>
      <div>
        <img src={gearImage} alt="gearImage" />
      </div>
    </div>
  </div>
  </div>
  );
}

export default Header;
