import LogoWithText from "../assets/Logowithtext.png"; 
import { PiCopyright } from "react-icons/pi";
 
const Footer = () => {
  return (
    <div className="bg-black text-white py-12 flex flex-row items-start justify-around">
      {/* First column */}
      <div>
        <img src={LogoWithText} alt="" />
        <p className="pt-8 pb-1">Follow Us on Social Media:</p>
        <p className="flex items-center">
        <span className="mr-1">Copyright</span>
        <PiCopyright className="mr-1" /> 
        <span>2024 Polluxcoin</span>
      </p>
      </div>

      {/* Second column */}
      <div>
        <p className="text-2xl pb-8">Polluxcoin Ecosystem</p>
        <li className="list-none">
          <ul>Polluxcoin network</ul>
          <ul className="py-1">Wallet</ul>
          <ul>Extension</ul>
        </li>
      </div>

      {/* Third column */}
      <div>
        <p className="text-2xl pb-8">Developer</p>
        <li className="list-none">
          <ul>Developer Hub</ul>
          <ul className="py-1">Github</ul>
          <ul className="pb-1">Java-pox</ul>
          <ul>Github Docs</ul>
        </li>
      </div>

      {/* Fourth column */}
      <div>
        <p className="text-2xl pb-8">About Us</p>
        <li className="list-none">
          <ul>Privacy Policy</ul>
          <ul className="pt-1">Terms of Service</ul>
        </li>
      </div>

    </div>
  )
}

export default Footer