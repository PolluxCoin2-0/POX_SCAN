import { useEffect, useState } from "react";
import { getRankingAccountDayOneData } from "../../../utils/axios/Data";
import { shortenString } from "../../../utils/shortenString";

const AmountTable = ({ title, amountTableData }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRankingAccountDayOneData();
        setData(data?.message);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
  <p className="text-2xl font-bold pb-8 pt-8">{title}</p>
  <div className="bg-white rounded-xl pt-6 pl-10 pr-10 pb-10">
    <div className="flex flex-row justify-around bg-lightest-gray p-2 rounded-lg">
      <p className="text-light-gray w-[10%]">Rank</p>
      <p className="text-light-gray w-[40%]">Account</p>
      <p className="text-light-gray w-[25%]">Amount</p>
      <p className="text-light-gray w-[25%]">Percentage</p>
    </div>

    {amountTableData?.map &&
      amountTableData?.map((param, index) => {
        return (
          <div key={index} className="flex flex-row justify-around p-5 border-b-2 border-b-lightest-gray">
            <p className="w-[10%]">{index + 1}</p>
            <p className="w-[40%]">
              {param?.fromAddress &&
                shortenString(param?.fromAddress, 10)}
            </p>
            <p className="w-[25%]">{param?.totalAssetAmount}</p>
            <p className="w-[25%]">{param?.percentage.toFixed(2)}%</p>
          </div>
        );
      })}
  </div>
</>

  );
};

const TransactionTable = ({
  title,
  tableDataArray
}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRankingAccountDayOneData();

        setData(data?.message);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
  <p className="text-2xl font-bold pb-8 pt-8">{title}</p>
  <div className="bg-white rounded-xl pt-6 pl-10 pr-10 pb-10">
    <div className="flex flex-row justify-around bg-lightest-gray p-2 rounded-lg">
      <p className="text-light-gray w-[10%]">Rank</p>
      <p className="text-light-gray w-[40%]">Account</p>
      <p className="text-light-gray w-[25%]">Txn Count</p>
      <p className="text-light-gray w-[25%]">Percentage</p>
    </div>

    {tableDataArray?.map &&
      tableDataArray?.map((param, index) => {
        return (
          <div key={index} className="flex flex-row justify-around p-5 border-b-2 border-b-lightest-gray">
            <p className="w-[10%]">{index + 1}</p>
            <p className="w-[40%]">{param?.fromAddress && shortenString(param?.fromAddress, 10)}</p>
            <p className="w-[25%]">{param?.transactionCount ?? '-'}</p>
            <p className="w-[25%]">{param?.percentage ? param?.percentage.toFixed(2) + '%' : '-'}</p>
          </div>
        );
      })}
  </div>
</>

  );
};

const AccountDay1 = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRankingAccountDayOneData();

        setData(data?.message);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="flex felx-row justify-between w-full">
        <div className="w-[49%]">
          <AmountTable title="Top Accounts sent by POX Transfer Volume" 
          amountTableData={data?.topAccounts}/>
        </div>

        <div className="w-[49%] ">
          <TransactionTable
            title="Top Accounts Received by POX Transfer Volume"
            tableDataArray ={data?.topRecAddresses}
          />
        </div>
      </div>

      <div className="flex flex-row justify-between w-full">
        <div className="w-[49%]">
          <TransactionTable 
          title="Top Accounts sent by POX Transfer Count" 
          tableDataArray={data?.topAddresses} />
        </div>

        <div className="w-[49%]">
          <AmountTable title="Top Accounts Received by POX Transfer Count" 
          amountTableData={data?.topRecAccounts} />
        </div>
      </div>
    </div>
  );
};

export default AccountDay1;
