import SearchBarExpand from "../../components/SearchBarExpand.jsx";
import FileDropzone from "../../components/FileDropzone.jsx";

const ContractsDeployment = () => {
  return (
    <div className=" px-12 pb-20">
      <div>
        <SearchBarExpand />
      </div>

      <div className=" mb-10">
        <p className="text-2xl font-bold">Contracts Deployment</p>

        <p className="bg-white rounded-lg px-3  py-4 mt-8 text-light-gray leading-10  text-lg tracking-wider text-justify">
          Contract Deployment Means Publishing Your Smart Contract Code To A
          Blockchain Network. You Can Compile And Deploy Smart Contract On
          TRONSCAN By
          <br />
          Uploading Smart Contract Files. Note That Contract Deployment Consumes
          A Certain Amount Of TRX, Please Ensure That Your Account Balance is
          Sufficient.
        </p>
      </div>

      <div className="bg-white  rounded-xl p-8 ">
        <FileDropzone />
      </div>
    </div>
  );
};

export default ContractsDeployment;
