import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./layout";
import { Home, Nodes, Blocks, Contacts, Accounts, Transaction, Transfer, Data, Pox1, PoxPrice, PoxSupply, PoxMarketCap, PoxGenerated, PoxStaked, ProtocolRevenue, EnergyConsumption, 
  BandwidthConsumption, ResourceCosts, AverageBlockSize, Network, OnchainDataSize, RealtimeBlockProduction, SrVotesDistribution, EncodingConverter, Register, Login, ForgetPassword,
   Pox, SuperRepresentatives, Votes, PoxStakingGovernance, ParametersProposals, ContractsDeployment, ContractsVerification, BroadcastTransaction, Account, TotalAccounts, ActiveAccounts,
  NewAccounts, PoxHolders, Transaction1, TransactionTrend, CumulativeTransactions, Contracts,} from "./pages";
import Usdx from "./pages/TokenPage/Usdx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
         

        {/* Blockchain Routes */}
        <Route path="/blockchain">
        <Route index element ={<Nodes/>} />
        <Route path="nodes" element={<Nodes/>} />
        <Route path="blocks" element={<Blocks/>} />
        <Route path="contact" element={<Contacts/>} />
        <Route path="accounts" element={<Accounts/>} />
        <Route path="transaction" element={<Transaction/>} />
        <Route path="transfer" element={<Transfer/>} />
        </Route>
       
       {/* Tokens Routes */}
        <Route path="/tokens">
        <Route index element={<Pox/>} />
        <Route path="pox" element={<Pox />} />
        <Route path="usdx" element={<Usdx />} />
        </Route>

        {/* Data Routes */}
        <Route path="/data" element={<Data />} />
        <Route path="/pox1" element ={<Pox1/>} />
        <Route path="/poxprice" element={<PoxPrice/>} />
        <Route path="/poxsupply" element ={<PoxSupply/> } />
        <Route path="/poxmarket" element={<PoxMarketCap />} />
        <Route path="/poxgenerated" element={<PoxGenerated/>} />
        <Route path="/poxstaked" element={<PoxStaked/>} />
        <Route path="/protocolrevenue" element={<ProtocolRevenue/>} />
        <Route path="/energyconsume" element={<EnergyConsumption/>} />
        <Route path="/bandwidthconsume" element ={<BandwidthConsumption/>} />
        <Route path="/resourcecost" element={<ResourceCosts/>} />
        <Route path="/averageblock" element={<AverageBlockSize/>} />
        <Route path="/onchaindata" element ={<OnchainDataSize/>} />
        <Route path="/realtimeblock" element ={<RealtimeBlockProduction/>} />
        <Route path="/srvotedistribution" element={<SrVotesDistribution/>} />
        <Route path="/network" element={<Network/>} />

        
        {/* Governance */}
        <Route path="/governance">
        <Route index element={<SuperRepresentatives/>} />
        <Route path="parameter" element={<ParametersProposals/>} />
        <Route path="poxstake" element={<PoxStakingGovernance />} />
        <Route path="represents" element={<SuperRepresentatives/>} />
        <Route path="vote" element={<Votes/>} />
        </Route>
       
       {/* Pox Ecosystem */}
        <Route path="/poxecosystem">
        <Route index element={<ContractsDeployment />} />
        <Route path="contractverify" element ={<ContractsVerification/> } />
        <Route path="contractdeploy" element= {<ContractsDeployment/>} />
        <Route path="broadcast" element ={<BroadcastTransaction/>} />
        <Route path="encoding" element={<EncodingConverter/>} />
        </Route>

        
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgetpassword" element={<ForgetPassword/>} />
        
        <Route path="/account" element={<Account />} />
        <Route path="/totalaccount" element ={<TotalAccounts />} />
        <Route path="/activeaccount" element={<ActiveAccounts />} />
        <Route path="/newaccount" element={<NewAccounts/>} />
        <Route path="/poxholders" element ={<PoxHolders/>} />
        <Route path="/transaction1" element={<Transaction1/>} />
        <Route path="/transactiontrend" element={<TransactionTrend/>} />
        <Route path="/cumulativetransactions" element={<CumulativeTransactions/>} />
        <Route path="/contract" element ={<Contracts/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
