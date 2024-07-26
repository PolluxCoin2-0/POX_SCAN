import SearchBarExpand from "../../components/SearchBarExpand.jsx";
import FileDropzone from "../../components/FileDropzone.jsx";

const ContractsDeployment = () => {
  const handleFileUpload = (file) => {
    console.log('File uploaded:', file);
    // You can handle the file upload process here, like sending it to a server
  };
  
  return (
    <div className=" px-12 pb-12">
      <div>
        <SearchBarExpand />
      </div>

      <div className=" mb-10">
        <p className="text-2xl font-bold">Contracts Deployment</p>

        <p className="bg-white rounded-xl shadow-lg px-3  py-4 mt-8 text-light-gray leading-10  text-lg tracking-wider text-justify">
          Contract Deployment Means Publishing Your Smart Contract Code To A
          Blockchain Network. You Can Compile And Deploy Smart Contract On
          TRONSCAN By
          <br />
          Uploading Smart Contract Files. Note That Contract Deployment Consumes
          A Certain Amount Of TRX, Please Ensure That Your Account Balance is
          Sufficient.
        </p>
      </div>

      <div className="bg-white  rounded-xl shadow-xl p-8 ">
        <FileDropzone onFileUpload={handleFileUpload} />
      </div>
    </div>
  );
};

export default ContractsDeployment;
