import SearchBarExpand from "../../components/SearchBarExpand";
import EncodingData from "./EncodingData";

const EncodingConverter = () => {
  return (
    <div className="px-12 pb-12">
      <div>
        <SearchBarExpand />
      </div>

       <div>
        <EncodingData />
       </div>
       
    </div>
  )
}

export default EncodingConverter;