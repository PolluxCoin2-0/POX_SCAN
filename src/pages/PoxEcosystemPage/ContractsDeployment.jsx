import SearchBar from "./SearchBar";
import FileDropzone from "../../components/FileDropzone.jsx";

const ContractsDeployment = () => {
  return (
    <div className="bg-light-sky-blue">

      <div>
        <SearchBar />
      </div>

      <div className="m-12 mb-10">
        <p className="text-xl font-bold">Contracts  Deployment</p>
        
          <p className="bg-white rounded-lg px-6 py-4 mt-8 text-light-gray leading-10  text-lg tracking-wider text-center">Contract Deployment Means Publishing Your Smart Contract Code To A Blockchain Network. You Can Compile And Deploy Smart Contract On TRONSCAN By<br/>
            Uploading Smart Contract Files. Note That Contract Deployment Consumes A Certain Amount Of TRX, Please Ensure That Your Account Balance is Sufficient.
          </p>
        
      </div>

      <div className="bg-white m-12 rounded-xl p-8 ">
        <FileDropzone />
      </div>
    </div>
  )
}

export default ContractsDeployment