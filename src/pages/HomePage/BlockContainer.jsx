import { Blocks } from "../../data/HomePageData";

const BlockContainer = () => {
  return (
    <>
      <p className="font-bold text-lg">Blocks</p>
      <div className="w-full flex flex-wrap justify-center">
        {Blocks.map((block, idx) => {
          return (
            <div key={idx} className="w-[20%] shadow-lg rounded-2xl py-4 px-8 m-4">
              <div className="flex flex-row justify-between">
                <p className="font-semibold">#{block?.HashValue}</p>
                <p className="text-light-gray border-light-gray border-[1px] py-1 px-4 rounded-md">{"Block Producer..  >"}</p>
              </div>
              <div className="flex flex-row justify-between pb-6">
                <p className="text-light-gray text-base">{block?.timing} secs ago</p>
                <p className=" font-semibold">{block?.Txns} Txns</p>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div>
                  <p className="text-light-gray">Reward</p>
                  <p className=" font-semibold">{block?.Reward} TRX</p>
                </div>
                <p className=" font-semibold">🔥 {block?.TRX} TRX</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlockContainer;
