import SearchBar from "./SearchBar"

const BroadcastTransaction = () => {
  return (
    <div className="bg-light-sky-blue ">

      <div>
        <SearchBar/>
      </div>

      <div>
        <p>Broadcast Transaction</p>
        <div>
          <p>Broadcast Raw Transaction</p>
          <p>This page allows you to paste a signed raw Transaction in Hex Format</p>
        </div>
      </div>

      <div></div>
    </div>
  )
}

export default BroadcastTransaction