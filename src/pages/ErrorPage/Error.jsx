import FrameImg from "../../assets/Frame.png";

const Error = () => {
  return (
       
       <div className="flex flex-col items-center justify-center h-screen">
       <p className="text-3xl font-bold pb-10 text-darker-blue">Page Not Found</p>
      <img src={FrameImg}
      alt=""
      className=""
      />
       </div>
   
  )
}

export default Error
