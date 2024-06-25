import PieChartComp from "../../components/PieChartComp";
import BlockContainer from "./BlockContainer";
import StableCoinContainer from "./StableCoinContainer";
import TransactionContainer from "./TransactionContainer";
import TrendingSearch from "./TrendingSearch";
import TvlContainer from "./TvlContainer";

const Home = () => {
  return (
    <div className="bg-light-sky-blue px-12">
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