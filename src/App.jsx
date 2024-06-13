import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./layout";
import { Blockchain, Data, Governance, Home, PoxEcosystem, Tokens } from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/tokens" element={<Tokens />} />
        <Route path="/data" element={<Data />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/poxecosystem" element={<PoxEcosystem />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
