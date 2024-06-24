import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./layout";
import { Nodes, Blocks, Contacts, Accounts, Transaction, Transfer, Data, Home, EncodingConverter, Register, Login, ForgetPassword, Pox, SuperRepresentatives, Votes, PoxStakingGovernance, ParametersProposals, ContractsDeployment, ContractsVerification, BroadcastTransaction, ActiveAccounts} from "./pages";
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
        <Route index element={<Pox />} />
        <Route path="pox" element={<Pox />} />
        <Route path="usdx" element={<Usdx />} />
        </Route>

        {/* Data Routes */}
        <Route path="/data" element={<Data />} />
        
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
        
        <Route path="/activeaccount" element={<ActiveAccounts />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
