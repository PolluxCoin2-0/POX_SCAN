import { SearchBarExpand } from "../../../../components";
import DistributionGraph from "../../../GovernancePage/DistributionGraph";

const RealtimeBlockProduction = () => {
  return (
    <div className="px-12 pb-12">
      <div>
        <SearchBarExpand />
      </div>

      <div>
        <p className=" text-2xl font-bold">Real-Time Block Production</p>
        <div className="flex flex-row justify-between mt-8 w-full">
          <div className="bg-white rounded-2xl w-[70%] shadow-xl h-auto">
            <div className="pt-16 pb-0 w-[80%] flex items-center">
              <DistributionGraph />
            </div>
          </div>

          <div className="flex flex-col ml-7 w-[30%] h-auto">
            <div className="bg-white rounded-xl shadow-xl w-[450px] h-[180px] ">
              <p className="text-lg font-bold pt-7 pl-10 pr-8">About</p>
              <p className="pl-10 pt-1 text-light-gray leading-5 text-md">
                The real-time block production chart
                <br />
                shows the block distribution of Super
                <br /> Super Representatives (SRs), who are obliged to <br /> to
                verify transaction and produces block. <br />
                SRs are elected every 6 hours.
              </p>
            </div>

            <div className="bg-white rounded-xl w-[450px] h-[280px] mt-5 shadow-xl">
              <p className="pt-5 pl-10 text-lg font-bold p-2">Highlights</p>
              <p className="pl-10 pt-1 text-light-gray text-lg">
                In this round 27 SRs have <br />
                produced 6858 blocks with 1 SR(s)
                <br /> missing 1 block(s) until now.
              </p>
              <p className="pl-10 pt-8 text-lg font-bold">
                You may be interested in
              </p>
              <p className="pl-10 pt-1 text-light-gray text-lg">
                SR Votes Distribution Vote
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className=" text-xl font-bold mt-10">List</p>
        <div className="bg-white rounded-md shadow-lg p-10 mt-8">
          <div className="flex flex-row justify-around bg-lightest-gray ml-8 mr-8 pt-2 pb-2 rounded-md text-light-gray">
            <p className=" text-center">Date(UTC)</p>
            <p className="text-center">Block</p>
          </div>

          <div className="flex flex-row justify-around items-center">
            <div className=" text-center">
              <p className="pt-8 ">2024-05-11T00.07;8:35.519Z</p>
              <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
              <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
              <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
              <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
              <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
              <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
              <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
              <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
              <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
              <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
            </div>

            <div className="  text-center">
              <p className="pt-8">64230</p>
              <p className="pt-8">64230</p>
              <p className="pt-8">64230</p>
              <p className="pt-8">64230</p>
              <p className="pt-8">64230</p>
              <p className="pt-8">64230</p>
              <p className="pt-8">64230</p>
              <p className="pt-8">64230</p>
              <p className="pt-8">64230</p>
              <p className="pt-8">64230</p>
              <p className="pt-8">64230</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtimeBlockProduction;
