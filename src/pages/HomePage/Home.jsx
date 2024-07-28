import BlockContainer from "./BlockContainer";
import StableCoinContainer from "./StableCoinContainer";
import TransactionContainer from "./TransactionContainer";
import TrendingSearch from "./TrendingSearch";
import TvlContainer from "./TvlContainer";

const Home = () => {
 
  return (
    <div className="px-4 md:px-4 lg:px-4 xl:px-8 2xl:px-12">
      {/* First Row >> Trending Search */}
      <TrendingSearch/>

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