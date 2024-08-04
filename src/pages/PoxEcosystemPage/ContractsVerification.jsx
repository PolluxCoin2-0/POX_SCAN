import SearchBarExpand from "../../components/SearchBarExpand";
import FileDropzone from "../../components/FileDropzone";
import FormComponent from "../../components/FormComponent";

const ContractsVerification = () => {
  const handleFileUpload = (file) => {
    console.log("File uploaded:", file);
    // You can handle the file upload process here, like sending it to a server
  };

  return (
    <div className=" px-12 pb-12">
      <div>
        <SearchBarExpand />
      </div>

      <div className="">
        <p className="  pt-8 text-2xl font-bold">Contracts Verification</p>

        <div className="bg-white  p-8 mt-8 rounded-xl shadow-lg">
          <p className="text-light-gray leading-10 text-lg flex text-justify tracking-wider pb-2">
            1. Contract verification is the matching of the smart contract code
            you write with the smart contract code posted on the blockchain
            network to check the
            <br />
            authenticity and transparency of the smart contract.You can validate
            your smart contract on Polluxcoin by uploading the smart contract
            file.
          </p>

          <p className="text-light-gray leading-10 text-lg flex text-justify tracking-wider pb-2">
            2. Polluxcoin respects the ownership of the developers (or the
            owner) of the source code. We are morally as well as legally
            obligated to ensure that the code <br />
            will only be used within the service we provide.
          </p>

          <p className="text-light-gray leading-10 text-lg flex text-justify tracking-wider">
            3. Please go to Source Code Terms of Use for specific terms.
          </p>
        </div>
      </div>

      <div className="bg-white  rounded-xl">
        <div>
          <FormComponent />
        </div>

        <div className="bg-white  rounded-xl shadow-xl ">
          <FileDropzone onFileUpload={handleFileUpload} />
        </div>
      </div>
    </div>
  );
};

export default ContractsVerification;
