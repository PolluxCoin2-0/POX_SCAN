import SearchBarExpand from "../../components/SearchBarExpand"
import FileDropzone from "../../components/FileDropzone";
import FormComponent from "../../components/FormComponent";

const ContractsVerification = () => {

  const handleFileUpload = (file) => {
    console.log('File uploaded:', file);
    // You can handle the file upload process here, like sending it to a server
  };

  return (
    <div className=" px-12 pb-12">
      <div>
        <SearchBarExpand />
      </div>

      <div className="">
        <p className="  pt-8 text-2xl font-bold">Contracts Verification</p>

        <div className="bg-white  p-8 mt-8 rounded-xl">
        <p className="text-light-gray leading-10 text-lg flex text-justify tracking-wider"> 1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever <br/> since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/>
        2. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged <br/> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,<br/>
        3. Agreed with terms & conditions</p>
        </div>
     
      </div>

      <div className="bg-white  rounded-xl">

        <div >
              <FormComponent />
        </div>

          <div className="bg-white  rounded-xl  ">
        <FileDropzone onFileUpload={handleFileUpload} />
      </div>
      </div>
    </div>
  )
}

export default ContractsVerification