import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "./layout";
import { Home, Nodes, Blocks, Contacts, Accounts, Transaction, Transfer, Pox1, PoxPrice, PoxSupply, PoxMarketCap, PoxGenerated, PoxStaked, ProtocolRevenue, EnergyConsumption, 
  BandwidthConsumption, ResourceCosts, AverageBlockSize, Network, OnchainDataSize, RealtimeBlockProduction, SrVotesDistribution, EncodingConverter, Register, Login, ForgetPassword,
   Pox, SuperRepresentatives, Votes, PoxStakingGovernance, ParametersProposals, ContractsDeployment, ContractsVerification, BroadcastTransaction, Account, TotalAccounts, ActiveAccounts,
  NewAccounts, PoxHolders, Transaction1, TransactionTrend, CumulativeTransactions, Contracts, ContractCalls, TopContracts, Accounts1, Tokens2, Contracts2, Error,} from "./pages";
import Usdx from "./pages/TokenPage/Usdx";

const AppRoutes = () => {
  const location = useLocation();
  const hideSidebar = location.pathname === "/" || location.pathname === "/Home";

  return (
    <div className="app-bg">
      <Navbar />
      {hideSidebar ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      ) : (
        <Sidebar>
          <Routes>
            {/* Blockchain Routes */}
            <Route path="/blockchain">
              <Route index element={<Nodes />} />
              <Route path="nodes" element={<Nodes />} />
              <Route path="blocks" element={<Blocks />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="accounts" element={<Accounts />} />
              <Route path="transactions" element={<Transaction />} />
              <Route path="transfer" element={<Transfer />} />
            </Route>

            {/* Tokens Routes */}
            <Route path="/tokens">
              <Route index element={<Pox />} />
              <Route path="pox" element={<Pox />} />
              <Route path="usdx" element={<Usdx />} />
            </Route>

            {/* Data Routes */}
            <Route path="/data">
            <Route index element={<PoxSupply />} />
            <Route path="poxsupply" >
            <Route index element={<PoxSupply />} />
            <Route path="pox/poxprice" element={<PoxPrice />} />
            <Route path="pox/poxsupply" element={<PoxSupply />} />
            <Route path="pox/poxmarketcap" element={<PoxMarketCap />} />
            <Route path="pox/poxgenerated/burned" element={<PoxGenerated />} />
            <Route path="pox/poxstaked" element={<PoxStaked />} />
            <Route path="network" element={<Network />} />
            <Route path="network/protocolrevenue" element={<ProtocolRevenue />} />
            <Route path="network/energyconsumption" element={<EnergyConsumption />} />
            <Route path="network/bandwidthconsumption" element={<BandwidthConsumption />} />
            <Route path="network/resourcecosts" element={<ResourceCosts />} />
            <Route path="network/averageblocksize" element={<AverageBlockSize />} />
            <Route path="network/on-chaindatasize" element={<OnchainDataSize />} />
            <Route path="network/real-timeblockproduction" element={<RealtimeBlockProduction />} />
            <Route path="network/srvotesdistribution" element={<SrVotesDistribution />} />
            <Route path="accounts" element={<Account />} />
            <Route path="accounts/totalaccounts" element={<TotalAccounts />} />
            <Route path="accounts/activeaccounts" element={<ActiveAccounts />} />
            <Route path="accounts/newaccounts" element={<NewAccounts />} />
            <Route path="accounts/poxholders" element={<PoxHolders />} />
            <Route path="transaction1" element={<Transaction1 />} />
            <Route path="transactions/transactiontrend" element={<TransactionTrend />} />
            <Route path="transactions/cumulativetransactions" element={<CumulativeTransactions />} />
            <Route path="contracts" element={<Contracts />} />
            <Route path="contracts/contractcalls" element={<ContractCalls/>} />
            <Route path="contracts/topcontracts" element={<TopContracts/>} />
            </Route>

            <Route path="ranking">
            <Route index element={<Accounts1 />} />
            <Route path="accounts" element={<Accounts1/>} />
            <Route path="tokens" element={<Tokens2/>} />
            <Route path="contracts" element={<Contracts2/>} />
            </Route>
            </Route>


            <Route path="/pox1" element={<Pox1 />} />


            {/* Governance */}
            <Route path="/governance">
              <Route index element={<SuperRepresentatives />} />
              <Route path="superrepresentatives" element={<SuperRepresentatives />} />
              <Route path="parametersproposals" element={<ParametersProposals />} />
              <Route path="poxstakinggovernance" element={<PoxStakingGovernance />} />
              <Route path="votes" element={<Votes />} />
            </Route>

            {/* Pox Ecosystem */}
            <Route path="/poxecosystem">
              <Route index element={<ContractsDeployment />} />
              <Route path="contractsdeployment" element={<ContractsDeployment />} />
              <Route path="contractsverification" element={<ContractsVerification />} />
              <Route path="encodingconverter" element={<EncodingConverter />} />  
              <Route path="broadcasttransaction" element={<BroadcastTransaction />} />
            </Route>

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />

            <Route path="/error" element ={<Error/> } />
          </Routes>
        </Sidebar>
      )}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
