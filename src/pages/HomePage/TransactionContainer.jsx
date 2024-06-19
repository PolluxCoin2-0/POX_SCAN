
const TransactionContainer = () => {
  return (
   <>
         <p className="font-bold text-lg">Transactions</p>
         <div className="rounded-2xl shadow-2xl mx-6 my-4 px-6">
          <div>

          <div>
            <p>TransactionId</p>
            <p>time secs ago</p>
          </div>

          <div>
            <div>
              <p>From</p>
              <p>To</p>
            </div>

            <div>
              <p>FromID</p>
              <p>ToID</p>
              <div>tags map</div>
            </div>

          </div>

          <div>
            <p>0 POX</p>
          </div>
          </div>
         </div>
   </>
  )
}

export default TransactionContainer