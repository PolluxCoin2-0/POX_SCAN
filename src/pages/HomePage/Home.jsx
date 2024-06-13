import BlockContainer from "./BlockContainer";
import StableCoinContainer from "./StableCoinContainer";
import TransactionContainer from "./TransactionContainer";
import TvlContainer from "./TvlContainer";

const Home = () => {
  return (
    <div>
      {/* First Row >> Trending Search */}
      <div>
        <div></div>
        <div></div>
      </div>

      {/* Second Row >> Blocks */}
      <BlockContainer/>

      {/*Third Row >> Transactions */}
      <TransactionContainer/>

      {/*Fourth Row >> TVL */}
      <TvlContainer/>

      {/* Fifth Row >> StableCoins */}
      <StableCoinContainer/>
    </div>
  )
}

export default Home