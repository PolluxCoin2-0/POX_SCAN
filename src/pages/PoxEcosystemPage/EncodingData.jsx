import {FaRegCopy} from "react-icons/fa6";

const EncodingData = () => {
  return (
    <div>
    <p className="text-2xl font-bold pb-10">Encoding Converter</p>
    
    <div className="bg-white rounded-lg pb-48">
      <div className="flex flex-row justify-around  space-x-2 pt-12">
        <p className="text-lg font-bold  rounded-md  px-8 py-2">Pollux- EVM Address</p>
        <p className="text-lg font-bold  rounded-md  px-8  py-2">Base64 Encode /Decode</p>
        <p className="text-lg font-bold  rounded-md px-8  py-2">Base58 Check Encode / Decode</p>
        <p className="text-lg font-bold  rounded-md  px-8  py-2">Public Key - Address</p>
        <p className="text-lg font-bold  rounded-md px-8  py-2">Private Key - Public Key & Address</p>
      </div>


      <div className="flex flex-row justify-around pt-14 items-center">
        <div>
             <p className="text-lg font-bold pb-5">Pollux Address</p> 
           
            <textarea
            id="exampleTextarea"
            rows="12"
            cols={66}
            className="shadow appearance-none border-text-bg-gray border-[1px] rounded-xl w-full px-6 py-4  text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            placeholder="Enter one or  more POLLUX addresses with each address on a separate line, starting with the letter P "
            > </textarea>

            <div className="flex flex-row justify-end items-center -mt-9 mr-4">
                <FaRegCopy className="text-light-gray"/> 
                <p className="text-light-gray pl-1">copy</p>
            </div>
        
        </div>

        <div className="flex flex-col ">
        <button className="bg-dark-yellow py-2  font-bold rounded-lg text-black cursor-pointer mt-14 " > Convert  </button>
        <button className="bg-white py-2  font-bold rounded-lg text-black border-2 cursor-pointer mt-5 " > Convert </button>
        <button className="bg-white py-2 px-16 font-bold rounded-lg text-black border-2 cursor-pointer mt-5  " > Reset </button>
        </div>
        <div>
            <p className="text-lg font-bold pb-5">Ethereum Virtual Machine[EVM] Address</p>
            <textarea
            id="exampleTextarea"
            rows="12"
            cols={66}
            className="shadow appearance-none border-text-bg-gray border-[1px] rounded-xl w-full px-6 py-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            placeholder="Enter one or  more EVM addresses with each address on a separate line, starting with 0x"
            ></textarea>

                 <div className="flex flex-row justify-end items-center -mt-9 mr-4">
                <FaRegCopy className="text-light-gray"/> 
                <p className="text-light-gray pl-1">copy</p>
            </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default EncodingData
