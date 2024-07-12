import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { Footer, Navbar, Sidebar } from "./layout";
import {
  Home,
  AccountDetailPage,
  TransactionDetailPage,
  Nodes,
  Blocks,
  Contacts,
  Accounts,
  Transaction,
  Transfer,
  Pox1,
  PoxPrice,
  PoxSupply,
  PoxMarketCap,
  PoxGenerated,
  PoxStaked,
  ProtocolRevenue,
  EnergyConsumption,
  BandwidthConsumption,
  ResourceCosts,
  AverageBlockSize,
  Network,
  OnchainDataSize,
  RealtimeBlockProduction,
  SrVotesDistribution,
  EncodingConverter,
  Register,
  Login,
  ForgetPassword,
  Pox,
  SuperRepresentatives,
  Votes,
  PoxStakingGovernance,
  ParametersProposals,
  ContractsDeployment,
  ContractsVerification,
  BroadcastTransaction,
  Account,
  TotalAccounts,
  ActiveAccounts,
  NewAccounts,
  PoxHolders,
  Transaction1,
  TransactionTrend,
  CumulativeTransactions,
  Contracts,
  ContractCalls,
  TopContracts,
  Accounts1,
  Tokens2,
  Contracts2,
  Error,
  NewPassword,
  ConnectWallet,
} from "./pages";
import Usdx from "./pages/TokenPage/Usdx";

const routesArray = [
  "/",
  "/home",
  "/account/details",
  "/transaction/details",
  "/register",
  "/login",
  "/forgetpassword",
  "/newpassword",
  "/connectwallet",
  "/blockchain",
  "/blockchain/nodes",
  "/blockchain/blocks",
  "/blockchain/contacts",
  "/blockchain/accounts",
  "/blockchain/transactions",
  "/blockchain/transfer",
  "/tokens",
  "/tokens/pox",
  "/tokens/usdx",
  "/data",
  "/data/poxsupply",
  "/data/poxsupply/pox",
  "/data/poxsupply/pox/poxprice",
  "/data/poxsupply/pox/poxsupply",
  "/data/poxsupply/pox/poxmarketcap",
  "/data/poxsupply/pox/poxgenerated/burned",
  "/data/poxsupply/pox/poxstaked",
  "/data/poxsupply/network",
  "/data/poxsupply/network/protocolrevenue",
  "/data/poxsupply/network/energyconsumption",
  "/data/poxsupply/network/bandwidthconsumption",
  "/data/poxsupply/network/resourcecosts",
  "/data/poxsupply/network/averageblocksize",
  "/data/poxsupply/network/on-chaindatasize",
  "/data/poxsupply/network/real-timeblockproduction",
  "/data/poxsupply/network/srvotesdistribution",
  "/data/poxsupply/accounts",
  "/data/poxsupply/accounts/totalaccounts",
  "/data/poxsupply/accounts/activeaccounts",
  "/data/poxsupply/accounts/newaccounts",
  "/data/poxsupply/accounts/poxholders",
  "/data/poxsupply/transactions",
  "/data/poxsupply/transactions/transactiontrend",
  "/data/poxsupply/transactions/cumulativetransactions",
  "/data/poxsupply/contracts",
  "/data/poxsupply/contracts/contractcalls",
  "/data/poxsupply/contracts/topcontracts",
  "/data/ranking/accounts",
  "/data/ranking/tokens",
  "/data/ranking/contracts",
  "/governance",
  "/governance/superrepresentatives",
  "/governance/parametersproposals",
  "/governance/poxstakinggovernance",
  "/governance/votes",
  "/poxecosystem",
  "/poxecosystem/contractsdeployment",
  "/poxecosystem/contractsverification",
  "/poxecosystem/encodingconverter",
  "/poxecosystem/broadcasttransaction",
];

const AppRoutes = () => {
  const location = useLocation();
  const hideSidebar =
    location.pathname === "/" ||
    location.pathname === "/Home" ||
    location.pathname === "/connectwallet" ||
    location.pathname === "/connectwallet2" ||
    location.pathname === "/login" ||
    location.pathname === "/forgetpassword" ||
    location.pathname === "/newpassword" ||
    location.pathname === "/register" ||
    location.pathname === "/error";

  const isValidRoutes = routesArray
    .map((route) => route.toLowerCase())
    .includes(location.pathname.toLowerCase());

  return (
    <div className="app-bg">
      <Navbar />
      {
        // eslint-disable-next-line no-constant-condition
        isValidRoutes ? (
          <>
            {hideSidebar ? (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgetpassword" element={<ForgetPassword />} />
                <Route path="/newpassword" element={<NewPassword />} />
                <Route path="/connectwallet" element={<ConnectWallet />} />
              </Routes>
            ) : (
              <Sidebar>
                <Routes>
                <Route path="/account/details" element={<AccountDetailPage/>} />
                <Route path="/transaction/details" element ={<TransactionDetailPage/>} />
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
                    <Route path="poxsupply">
                      <Route index element={<PoxSupply />} />
                      <Route path="pox" element={<Pox1/>}/>
                      <Route path="pox/poxprice" element={<PoxPrice />} />
                      <Route path="pox/poxsupply" element={<PoxSupply />} />
                      <Route path="pox/poxmarketcap" element={<PoxMarketCap />}/>
                      <Route path="pox/poxgenerated/burned" element={<PoxGenerated />}/>
                      <Route path="pox/poxstaked" element={<PoxStaked />} />
                      <Route path="network" element={<Network />} />
                      <Route path="network/protocolrevenue" element={<ProtocolRevenue />}/>
                      <Route path="network/energyconsumption" element={<EnergyConsumption />}/>
                      <Route path="network/bandwidthconsumption" element={<BandwidthConsumption />}/>
                      <Route path="network/resourcecosts" element={<ResourceCosts />}/>
                      <Route path="network/averageblocksize" element={<AverageBlockSize />}/>
                      <Route path="network/on-chaindatasize" element={<OnchainDataSize />}/>
                      <Route path="network/real-timeblockproduction" element={<RealtimeBlockProduction />}/>
                      <Route path="network/srvotesdistribution" element={<SrVotesDistribution />}/>
                      <Route path="accounts" element={<Account />} />
                      <Route path="accounts/totalaccounts" element={<TotalAccounts />}/>
                      <Route path="accounts/activeaccounts" element={<ActiveAccounts />}/>
                      <Route path="accounts/newaccounts" element={<NewAccounts />}/>
                      <Route path="accounts/poxholders" element={<PoxHolders />}/>
                      <Route path="transactions" element={<Transaction1 />} />
                      <Route path="transactions/transactiontrend" element={<TransactionTrend />}/>
                      <Route path="transactions/cumulativetransactions" element={<CumulativeTransactions />}/>
                      <Route path="contracts" element={<Contracts />} />
                      <Route path="contracts/contractcalls" element={<ContractCalls />}/>
                      <Route path="contracts/topcontracts" element={<TopContracts />}/>
                    </Route>

                    <Route path="ranking">
                      <Route index element={<Accounts1 />} />
                      <Route path="accounts" element={<Accounts1 />} />
                      <Route path="tokens" element={<Tokens2 />} />
                      <Route path="contracts" element={<Contracts2 />} />
                    </Route>
                  </Route>

                  {/* Governance */}
                  <Route path="/governance">
                    <Route index element={<SuperRepresentatives />} />
                    <Route path="superrepresentatives" element={<SuperRepresentatives />}/>
                    <Route path="parametersproposals" element={<ParametersProposals />}/>
                    <Route path="poxstakinggovernance" element={<PoxStakingGovernance />}/>
                    <Route path="votes" element={<Votes />} />
                  </Route>

                  {/* Pox Ecosystem */}
                  <Route path="/poxecosystem">
                    <Route index element={<ContractsDeployment />} />
                    <Route path="contractsdeployment" element={<ContractsDeployment />}/>
                    <Route path="contractsverification" element={<ContractsVerification />}/>
                    <Route path="encodingconverter" element={<EncodingConverter />}/>
                    <Route path="broadcasttransaction" element={<BroadcastTransaction />}/>
                  </Route>
                </Routes>
              </Sidebar>
            )}
          </>
        ) : (
          <Routes>
            <Route path="*" element={<Error />} />
          </Routes>
        )
      }
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
