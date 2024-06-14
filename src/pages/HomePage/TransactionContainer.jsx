import { IoIosArrowForward } from "react-icons/io";
import { Transactions } from "../../data/HomePageData";

const TransactionContainer = () => {
  return (
    <>
      <div className="flex justify-between">
        <p className="font-medium text-xl">Transactions</p>
        <p>More <IoIosArrowForward /> </p>
      </div>

      <div className="shadow-xl">

        {Transactions.map((transaction, idx) => {
          return (
            <>
              {/* FIrst column */}
              <div>
                <p>{transaction?.transactionId}</p>
                <p>{transaction?.time} secs ago</p>
              </div>

              {/* Second column */}
              <div>
                <div>
                  <p>From</p>
                  <p>To</p>
                </div>

                <div>
                  <p>{transaction?.from}</p>
                  <p>{transaction?.to}</p>
                </div>

                <div>
                  {transaction?.tags.map((tag,idx)=>{
                    return (
                      <>
                      <p>{tag}</p>
                      </>
                    )
                  })}
                </div>
              </div>

              {/* Third column */}
              <div>
                <p>{transaction?.pox} POX</p>
                <p className="bg-green px-2 py-1">Transfer</p>
              </div>
            </>
          )
        })}

      </div>
    </>
  )
}

export default TransactionContainer