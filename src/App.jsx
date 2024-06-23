import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./layout";
import { Blockchain, Data, Governance, Home, PoxEcosystem, Register, Login, ForgetPassword, Tokens, Pox, SuperRepresentatives, Votes, PoxStakingGovernance, ParametersProposals, ContractsDeployment, ContractsVerification, BroadcastTransaction, ActiveAccounts} from "./pages";
import Usdx from "./pages/TokenPage/Usdx";
import Pox from "./pages/TokenPage/Pox";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/tokens">
        <Route index element={<Pox />} />
        <Route path="pox" element={<Pox />} />
        <Route path="usdx" element={<Usdx />} />
        </Route>
        <Route path="/data" element={<Data />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/poxecosystem" element={<PoxEcosystem />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/forgetpassword" element={<ForgetPassword/>} />
        <Route path="/represents" element={<SuperRepresentatives/>} />
        <Route path="/vote" element={<Votes/>} />
        <Route path="/poxstake" element={<PoxStakingGovernance />} />
        <Route path="/parameter" element={<ParametersProposals/>} />
        <Route path="/contractdeploy" element= {<ContractsDeployment/>} />
        <Route path="/contractverify" element ={<ContractsVerification/> } />
        <Route path="/broadcast" element ={<BroadcastTransaction/>} />
        <Route path="/activeaccount" element={<ActiveAccounts />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
