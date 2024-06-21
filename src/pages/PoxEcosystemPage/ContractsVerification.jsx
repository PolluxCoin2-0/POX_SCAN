import SearchBar from "./SearchBar"
import FileDropzone from "../../components/FileDropzone";
import FormComponent from "../../components/FormComponent";
const ContractsVerification = () => {
  return (
    <div className="bg-light-sky-blue">
      <div>
        <SearchBar />
      </div>

      <div className="">
        <p className="pl-10  pt-8 text-xl font-bold">Contracts Verification</p>

        <div className="bg-white p-16 m-10 rounded-xl">
        <p className="text-light-gray leading-10 text-xl flex text-justify tracking-wider"> 1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever <br/> since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/>
        2. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged <br/> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,<br/>
        3. Agreed with terms & conditions</p>
        </div>
     
      </div>

      <div className="bg-white m-10 rounded-xl">

        <div>
              <FormComponent />
        </div>
        <div>
          <FileDropzone/>
        </div>
      </div>
    </div>
  )
}

export default ContractsVerification