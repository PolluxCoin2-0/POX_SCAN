import { useEffect, useState } from "react";
import FrameImg from "../../assets/Frame.png";

const Error = () => {
  const [displayText, setDisplayText] = useState("");
  const message = "Paage Not Found !";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < message.length) {
        setDisplayText((prev) => prev + message.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100); // Adjust speed of typing here (in milliseconds)

    return () => clearInterval(timer);
  }, [message]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <p className="text-4xl font-bold pb-10 text-darker-blue">
        <span className="typewriter">{displayText}</span>
      </p>
      <img src={FrameImg} alt="Error Illustration" className="w-1/2 max-w-md" />
    </div>
  );
};

export default Error;
