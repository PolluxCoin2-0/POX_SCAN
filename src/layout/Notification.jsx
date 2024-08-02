import { useEffect, useState } from "react";
import PoxImg from "../assets/PoxImg.png";
import { getNotificationMessageData } from "../utils/axios/Home";
import { formatTimeInAlphabet } from "../utils/formatTimeInAlphabet";

const Notification = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNotificationMessageData();
        console.log(data);

        setData(data?.message);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <div className="bg-white rounded-xl shadow-xl mt-[480px] w-[300px] p-5 ">
        <div className="flex flex-row space-x-4 items-center ">
          <div>
            <img src={PoxImg} alt="pox image" className="w-[40px]" />
          </div>
          <div>
            <p className="text-sm font-semibold">{data?.[0]?.message}</p>
            <p className="text-sm text-light-gray">
              {data?.[0]?.createdAt &&
                formatTimeInAlphabet(data?.[0]?.createdAt)}
            </p>
          </div>
        </div>

        <div className="flex flex-row space-x-4 mt-6">
          <div>
            <img src={PoxImg} alt="pox image" className="w-[40px]" />
          </div>
          <div>
            <p className="text-sm font-semibold">{data?.[1]?.message}</p>
            <p className="text-sm text-light-gray">
              {data?.[1]?.createdAt &&
                formatTimeInAlphabet(data?.[1]?.createdAt)}
            </p>
          </div>
        </div>

        <div className="flex flex-row space-x-4 mt-6">
          <div>
            <img src={PoxImg} alt="pox image" className="w-[40px]" />
          </div>
          <div>
            <p className="text-sm font-semibold">{data?.[2]?.message}</p>
            <p className="text-sm text-light-gray">
              {data?.[2]?.createdAt &&
                formatTimeInAlphabet(data?.[2]?.createdAt)}
            </p>
          </div>
        </div>

        <div className="flex flex-row space-x-4 mt-6">
          <div>
            <img src={PoxImg} alt="pox image" className="w-[40px]" />
          </div>
          <div>
            <p className="text-sm font-semibold">{data?.[3]?.message}</p>
            <p className="text-sm text-light-gray">
              {data?.[3]?.createdAt &&
                formatTimeInAlphabet(data?.[3]?.createdAt)}
            </p>
          </div>
        </div>

        <div className="flex flex-row space-x-4 mt-6">
          <div>
            <img src={PoxImg} alt="pox image" className="w-[65px]" />
          </div>
          <div>
            <p className="text-sm font-semibold flex justify-end">
              {data?.[4]?.message}
            </p>
            <p className="text-sm text-light-gray">
              {data?.[4]?.createdAt &&
                formatTimeInAlphabet(data?.[4]?.createdAt)}
            </p>
          </div>
        </div>

        <div className="flex flex-row space-x-4 mt-6">
          <div>
            <img src={PoxImg} alt="pox image" className="w-[40px]" />
          </div>
          <div>
            <p className="text-sm font-semibold">{data?.[5]?.message}</p>
            <p className="text-sm text-light-gray">
              {data?.[5]?.createdAt &&
                formatTimeInAlphabet(data?.[5]?.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
