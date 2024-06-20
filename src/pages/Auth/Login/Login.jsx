import AuthPic from "../../../assets/Authpic.png";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center px-12 py-5 w-full bg-darkest-blue ">
      <div className="flex flex-col items-center w-1/2">
       <p className="text-9xl font-bold text-white pb-4">SIGN UP</p>
       <img src={AuthPic}
       alt="authorization image"
       className="w-100 h-96"
       />
      </div>

      <div className="w-1/2 flex justify-center">
      <LoginForm/>
      </div>
      
    </div>
  )
}

export default Login
