import LogoWithText from "../assets/Logowithtext.png";
import { PiCopyright } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-black text-white py-12 px-4 flex flex-col md:flex-row items-start justify-evenly">
      {/* First column */}
      <div className="mb-8 md:mb-0">
        <img src={LogoWithText} alt="Logo" />
        <p className="pt-8 pb-1">Follow Us on Social Media:</p>
        <p className="flex items-center">
          <span className="mr-1">Copyright</span>
          <PiCopyright className="mr-1" />
          <span>2024 Polluxcoin</span>
        </p>
      </div>

      {/* Second column */}
      <div className="mb-8 md:mb-0">
        <p className="text-2xl pb-8">Polluxcoin Ecosystem</p>
        <ul className="list-none">
          <li className="pb-1">Polluxcoin network</li>
          <li className="pb-1">Wallet</li>
          <li>Extension</li>
        </ul>
      </div>

      {/* Third column */}
      <div className="mb-8 md:mb-0">
        <p className="text-2xl pb-8">Developer</p>
        <ul className="list-none">
          <li className="pb-1">Developer Hub</li>
          <li className="pb-1">Github</li>
          <li className="pb-1">Java-pox</li>
          <li>Github Docs</li>
        </ul>
      </div>

      {/* Fourth column */}
      <div>
        <p className="text-2xl pb-8">About Us</p>
        <ul className="list-none">
          <li className="pb-1">Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
