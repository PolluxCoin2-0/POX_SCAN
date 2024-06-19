import ParametersProposals from "./ParametersProposals";
import PoxStakingGovernance from "./PoxStakingGovernance";
import SuperRepresentatives from './SuperRepresentatives';
import Votes from "./Votes";


const Governance = () => {
  return (
    <div>
      <ParametersProposals />

      <PoxStakingGovernance />

      <SuperRepresentatives />

      <Votes />
    
    
    </div>
  )
}

export default Governance