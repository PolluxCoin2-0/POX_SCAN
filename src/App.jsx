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
  BlockDetailPage,
  ProducerDetailPage,
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
  CommitteeProposalPage,
  TokenDetailPage,
} from "./pages";
import Usdx from "./pages/TokenPage/Usdx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const routesArray = [
  "/",
  "/home",
  "/transactiondetails/*",
  "/accountdetails/*",
  "/transaction/details",
  "/register",
  "/login",
  "/forgetpassword",
  "/newpassword",
  "/connectwallet",
  "/blockchain",
  "/blockchain/nodes",
  "/blockchain/blocks",
  "/blockdetailpage/*",
  "/producerdetailpage/*",
  "/tokendetailpage/*",
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
  "/data/ranking",
  "/data/ranking/accounts",
  "/data/ranking/tokens",
  "/data/ranking/contracts",
  "/governance",
  "/governance/superrepresentatives",
  "/governance/parametersproposals",
  "/governance/parameters",
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
  const hideSidebarRoutes = [
    "/",
    "/home",
    "/transactiondetails/*",
  "/accountdetails/*",
  "/tokendetailpage/*",
  "/blockdetailpage/*",
  "/producerdetailpage/*",
  "/tokendetailpage",
    "/connectwallet",
    "/connectwallet2",
    "/login",
    "/forgetpassword",
    "/newpassword",
    "/register",
    "/error",
    "/governance/parameters"
  ];

  const isValidRoute = (route, pathname) => {
    if (route.includes('*')) {
      const regex = new RegExp('^' + route.replace('*', '.*') + '$');
      return regex.test(pathname.toLowerCase());
    }
    return route.toLowerCase() === pathname.toLowerCase();
  };

  const hideSidebar = hideSidebarRoutes.some((route) => isValidRoute(route, location.pathname));
  const isValidRoutes = routesArray.some((route) => isValidRoute(route, location.pathname));

  return (
    <div className="app-bg">
      <Navbar />
      {
        // eslint-disable-next-line no-constant-condition
        isValidRoutes ? (
          <>
            <ToastContainer 
          position="top-right"
          autoClose={3000} 
          theme="dark" 
          newestOnTop={true}
          pauseOnFocusLoss
           toastClassName="custom-toast"
          />
            {hideSidebar ? (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/transactiondetails/:id" element={<TransactionDetailPage/>} />
                <Route path="/accountdetails/:id" element={<AccountDetailPage/>} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgetpassword" element={<ForgetPassword />} />
                <Route path="/newpassword" element={<NewPassword />} />
                    <Route path="/governance/parameters" element={<CommitteeProposalPage />} />
                    <Route path="/connectwallet" element={<ConnectWallet />} />

                    <Route path="/blockdetailpage/:id" element={<BlockDetailPage />} />
                    <Route path="/producerdetailpage/:id"  element={<ProducerDetailPage/>} />
                    <Route path="/tokendetailpage/:id"  element={<TokenDetailPage />} />
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
