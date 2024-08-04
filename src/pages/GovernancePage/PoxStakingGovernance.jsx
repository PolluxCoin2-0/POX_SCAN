
import SearchBarExapnd from "../../components/SearchBarExpand";
import GovStack from "../../assets/Govstack.png";
import GovPox from "../../assets/Govpox.png";
import Poximg from "../../assets/PoxImg.png";
import justLend from "../../assets/justland.png";
import iconPledge from "../../assets/iconpledge.png";
import iconPower from "../../assets/power.png";
import iconReward from "../../assets/Reward.png";
import icon from "../../assets/icon.png";
import svg from "../../assets/SVG.png";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ExponentialGraph from "../../components/ExponentialGraph";
import { useState } from "react";
import { LuCircle } from "react-icons/lu";
import { IoMdArrowDropright } from "react-icons/io";
import VoteImg from "../../assets/SVG3.png";
import SecureImg from "../../assets/SVG1.png";
import RewardImg from "../../assets/Rewards.png";

const PoxStakingGovernance = () => {
  const [inputValue, setInputValue] = useState(10000);

  const handleInputChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      value = Math.round(value / 1) * 1; // Ensure the value is a multiple of 1000
      setInputValue(value);
    }
  };

  const handleStep = (step) => {
    setInputValue((prevValue) => prevValue + step);
  };
  return (
    <div className="px-12 pb-12">
      <div>
        <SearchBarExapnd />
      </div>

      <div className="flex flex-row justify-around  bg-white rounded-2xl shadow-2xl">
        <div className="w-[40%] pt-10">
          <p className="text-4xl font-bold mt-10 ">POX STAKING GOVERNANCE</p>

          <p className="pt-4 mt-10 text-lg font-bold">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s
          </p>
          <div></div>
          <div className="flex items-center pt-20 space-x-16 font-semibold">
            <Link to="/connectwallet">
              <div className="flex items-center space-x-4 bg-dark-yellow py-3 px-6 rounded-xl cursor-pointer">
                <button>Connect Wallet</button>
                <FaArrowRightLong />
              </div>
            </Link>

            <div className="flex items-center space-x-4 bg-dark-yellow py-3 px-6 rounded-xl cursor-pointer">
              <button>Stake</button>
              <FaArrowRightLong />
            </div>
          </div>
        </div>

        <div className=" w-[40%] py-5 mt-10 flex justify-end items-center">
          <img
            src={GovStack}
            alt="governance pox img"
            className="w-[455] h-[377] "
          />
        </div>
      </div>

      <div className=" flex flex-row space-x-8 justify-evenly w-full py-12">
        <div className="bg-white py-7 px-20  w-[25%] rounded-2xl shadow-xl">
          <p className=" text-md text-light-gray">Total POX staked</p>
          <p className="text-2xl font-bold pt-3">6,2345,7853,009</p>
        </div>

        <div className="bg-white py-7 px-20 w-[25%] rounded-2xl shadow-xl">
          <p className=" text-md text-light-gray">POX Staking Rate</p>
          <p className="text-2xl font-bold pt-3">52.52%</p>
        </div>

        <div className="bg-white py-7 px-20  w-[25%] rounded-2xl shadow-xl">
          <p className=" text-md text-light-gray text-nowrap">
            Total POX Reward Distribution
          </p>
          <p className="text-2xl font-bold pt-3">6,2345,7853,00</p>
        </div>

        <div className="bg-white py-7 px-20 w-[25%] rounded-2xl shadow-xl ">
          <p className=" text-md text-light-gray">Highest APY</p>
          <p className="text-2xl font-bold pt-3">4.15%</p>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full pt-10">
        <div className="w-[50%] mt-16 ">
          <img src={GovPox} alt="alt image" className="" />
        </div>

        <div className=" w-[50%]">
          <p className="font-bold text-3xl">Governance Model</p>
          <p className="text-lg font-bold text-light-gray pt-4">
            Open, transparent and all on-chain
          </p>

          <div>
            <div>
              <div className="flex flex-row items-center pt-5">
                <p className="">
                  <img src={VoteImg} alt="vote image" size={32} />
                </p>
                <p className="text-xl font-bold w-[40%] pl-2">
                  Vote in Elections
                </p>
              </div>

              <p className="text-md text-light-gray text-wrap pl-9 pt-2">
                POX, the native token of Pollux, can be staked by its holders to
                obtain Pollux Power <br />
                which is used as votes in on-chain elections. The 27 most-voted{" "}
                <br />
                candidates will be responsible for producing blocks and packing
                <br />
                transactions as Pollux's witnesses.
              </p>
            </div>

            <div>
              <div className="flex flex-row items-center pt-5">
                <p>
                  <img src={SecureImg} alt="secure-image" />
                </p>
                <p className="text-xl font-bold w-[40%] pl-2">
                  Source the Network
                </p>
              </div>

              <p className="text-md text-light-gray w-[80%] pl-9 pt-2">
                {" "}
                Secure the Network Pollux is a DPoS network where Super
                Representatives (SRs) <br />
                are responsible for record-keeping and validating transactions.
                In the case of <br />
                an inefficient or unavailable SR, voters can switch over their
                votes to a <br />
                better node to ensure network security.
              </p>
            </div>

            <div>
              <div className="flex flex-row items-center pt-5">
                <p>
                  <img src={RewardImg} alt="reward-image" />
                </p>
                <p className="text-xl font-bold w-[40%] pl-2">
                  Share Block Rewards
                </p>
              </div>

              <p className="text-md text-light-gray w-[80%] pl-9 pt-2">
                {" "}
                Pollux has designed an incentive model to ensure the
                blockchain's <br />
                security and efficiency. Witnesses who have successfully
                produced a <br />
                block will receive POX rewards in return, which will then be
                distributed to <br />
                their voters according to a configured ratio.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" text-center ">
          <p className="font-bold text-4xl pt-11">Contribute to Governance</p>
          <p className="text-md text-light-gray pt-4">
            Get voting rewards and free resources in return
          </p>
        </div>

        <p className="text-lg font-bold py-7">
          A More Flexible and Efficient Staking Method
        </p>

        <div className="flex flex-row justify-between w-full">
          <div className=" bg-white px-10 pt-10 rounded-2xl shadow-xl  w-[60%]">
            <p className="font-bold text-xl">Get Pox for Governance</p>
            <p className="text-light-gray pt-2">
              By staking pox, you can obtain POX power which can be used to vote
              for SRS you <br /> support and earn rewards.
            </p>

            <div className="">
              <div className="flex flex-row justify-around pt-14">
                <div>
                  <img src={iconPledge} alt="lock icon" className="" />

                  <p className="font-semibold">Stake POX</p>
                </div>

                <div className=" text-center">
                  <div className="font-semibold">Get POX power</div>
                  <div className="flex flex-row items-center">
                    <p>
                      <LuCircle />
                    </p>
                    <p className="border-[1px] w-[300px]"></p>
                    <p className="flex justify-start">
                      <IoMdArrowDropright size={28} />
                    </p>
                  </div>
                </div>

                <div>
                  <img src={iconPower} alt=" power icon" className=" " />
                  <p className="font-semibold">POX Power</p>
                </div>
              </div>

              <div className="flex flex-row justify-between pt-20">
                <div className="ml-6">
                  <img src={iconPower} alt="" className="pl-7 text-left" />

                  <p className="pl-7 font-semibold">POX power</p>
                </div>

                <div className="text-center">
                  <div className="font-semibold">
                    Vote for SRS and get voting rewards
                  </div>
                  <div className="flex flex-row items-center">
                    <p>
                      <LuCircle />
                    </p>
                    <p className="border-[1px] w-[300px]"></p>
                    <p className="flex justify-start">
                      <IoMdArrowDropright size={28} />
                    </p>
                  </div>
                </div>

                <div className="mr-6">
                  <img src={iconReward} alt="" className=" " />
                  <p className="font-semibold">Voting Rewards</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row  bg-white justify-evenly ml-5 rounded-2xl shadow-xl px-5 pb-10 w-[40%]">
            <div className="w-[40%] ">
              <p className=" pt-10 text-xl font-bold">
                Get resources for free Transaction
              </p>
              <p className="pt-8 text-light-gray leading-7">
                By staking POX, you can obtain free resources on the network to
                cover the fee of transaction. The resources used will
                dynamically recover to the original amoung after a certain
                period.
              </p>

              <div className=" pl-28 ">
                <img src={icon} alt="icon image " />
              </div>

              <HiArrowUpRight size={20} className="cursor-default mt-16" />
            </div>

            <div className="w-[40%] items-start ">
              <p className=" pt-10 text-xl font-bold">
                Delegate Idle Resources to Others
              </p>
              <p className="pt-8 text-light-gray leading-6">
                You my delegate idle resources to others and can reclaim the
                resources anytime.
              </p>

              <div className=" mt-24 pl-28 ">
                <img src={svg} alt=" " />
              </div>

              <HiArrowUpRight size={20} className="cursor-pointer mt-16" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-12">
        <p className="pb-6 text-2xl font-bold ">
          Calculate your Staking Rewards
        </p>

        <div className=" bg-white rounded-2xl shadow-xl">
          <div className="flex flex-row justify-between items-center p-10 w-full">
            <div className="flex flex-col justify-start w-[35%] ">
              <p className=" font-bold text-xl "> I want to stake</p>
              <div className="flex flex-row justify-between items-center border-[1px] rounded-lg w-full px-4 py-1 mt-6 ">
                {/* <p className="font-bold">{inputValue}</p> */}
                <input
                  type="number"
                  value={inputValue}
                  onChange={handleInputChange}
                  step="1"
                  className="focus:outline-none"
                />

                <div className="flex flex-row items-center space-x-2">
                  <img src={Poximg} alt="pox img" className="w-[18] h-[18]" />
                  <p className="font-bold">POX</p>
                </div>
              </div>
              <p className="mt-6 font-bold">
                Est. Rewards{" "}
                <span className="text-light-brown text-xl pl-1">431.00</span>
              </p>
            </div>

            <div className=" w-[35%] mr-52">
              <div className="w-[700px] h-[200px] pt-5 flex justify-start">
                <ExponentialGraph />
              </div>
            </div>
          </div>

          <div>
            <p className="px-8 text-light-gray">
              * The estimated POX reward here are calculated based on the
              staking duration selected and the POX amount entered. The actual
              API and POX rewards may vary.
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <button className="bg-dark-yellow py-2 px-32 font-bold rounded-md text-black cursor-pointer flex flex-row mb-10">
              <p>Stake Now </p>
              <p className="pt-1 pl-2 font-bold">
                <IoIosArrowForward />
              </p>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl flex flex-row justify-between">
        <div className="p-16">
          <p className="font-bold text-xl">Stake POX on JustLend DAO</p>
          <p className="pt-5 ">
            <span className="">Easy Staking</span> Stake POX to get sPOX
            directly
          </p>
          <p className="pt-5">
            <span>Higher Yields</span> Staking API consist of voting API and
            Energy rental API.
          </p>
          <p className="pt-5">
            <span>Safe & Reliable</span> DAO governance and contract audit
            ensure your asset security together
          </p>
          <button className="bg-dark-yellow py-2 px-32 font-bold rounded-md text-black cursor-pointer mt-10 ">
            Go to JustLend DAO
          </button>
        </div>

        <div>
          <img src={justLend} alt="justlend image" className="p-10" />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default PoxStakingGovernance;
