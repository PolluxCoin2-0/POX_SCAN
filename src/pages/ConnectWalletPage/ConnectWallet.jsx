import PolinkImg from "../../assets/PoxscanImage.png";
import Ledger from "../../assets/Ledger.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNetwork, setWalletAddress } from "../../redux/slice/walletSlice";
import { toast } from "react-toastify";

const ConnectWallet = () => {
  const dispatch = useDispatch();
const walletAddress = useSelector((state)=>state.wallet.address);

  async function getPolinkweb() {
   if(walletAddress){
    return toast.error("Wallet is already connected");
   }

    var obj = setInterval(async () => {
      if (window.pox) {
        clearInterval(obj);
        const detailsData = JSON.stringify(await window.pox.getDetails());
        const parsedDetailsObject = JSON.parse(detailsData);
        console.log(parsedDetailsObject)
        dispatch(setWalletAddress(parsedDetailsObject[1].data?.wallet_address));
        dispatch(setNetwork(parsedDetailsObject[1].data?.Network));
      }
    }, 1000);
  }

  return (
    <div className="h-screen bg-[#132847] flex justify-center items-center ">
      <div className="w-[50%] border-[1px] border-light-gray rounded-2xl text-center py-14 bg-[#293A4F] flex flex-col items-center">
        <p className="text-white font-semibold text-3xl">
          Select Connection Method
        </p>
        <div className="flex space-x-10 justify-around py-12 w-3/5">
          <div className="bg-white flex items-center space-x-4 rounded-lg px-8 py-3 cursor-pointer min-w-fit hover:bg-lightest-gray">
            <img src={PolinkImg} alt="polink" className="w-12" />
            <p className="font-semibold text-3xl whitespace-nowrap ">Pox Link</p>
          </div>

          <div className="bg-white flex items-center space-x-4 rounded-lg px-8 py-3 cursor-pointer min-w-fit hover:bg-lightest-gray">
            <img src={Ledger} alt="ledger" className="w-24" />
            <p className="font-semibold text-3xl">Ledger</p>
          </div>
        </div>
        <button className="bg-dark-yellow px-28 py-3 rounded-lg font-bold text-xl" onClick={getPolinkweb}>
          Connect
        </button>
        <div className="text-white pt-12 leading-8 font-light">
          <p>
            Choosing to Connect indicates that you have accepted Terms of
            Service Privacy Policy
          </p>
          <p>
            If you haven’t installed PoxLink, please install first, then refresh
            the page and try again . Install Now
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
