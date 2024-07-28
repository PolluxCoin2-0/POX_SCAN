import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    // Define the target time (replace with your desired date and time)
    const targetDate = new Date('2024-12-31T23:59:59');
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-start justify-center w-full gap-3 count-down-main ">
      <div className="timer w-2">
        <div>
          <h3 className="countdown-element hours  font-semibold text-md text-indigo-600 ">
            {String(timeLeft.hours).padStart(2, '0')}
          </h3>
        </div>
        {/* <p className="text-sm font-normal text-gray-900 mt-1 text-center w-full">hours</p> */}
      </div>
      <h3 className=" font-semibold text-md text-gray-900">:</h3>

      <div className="timer w-2 ">
        <div>
          <h3 className="countdown-element minutes font-semibold text-md text-indigo-600 ">
            {String(timeLeft.minutes).padStart(2, '0')}
          </h3>
        </div>
        {/* <p className="text-sm font-normal text-gray-900 mt-1 text-center w-full">minutes</p> */}
      </div>
      <h3 className=" font-semibold text-md text-gray-900">:</h3>

      <div className="timer w-2">
        <div>
          <h3 className="countdown-element seconds  font-semibold text-md text-indigo-600 ">
            {String(timeLeft.seconds).padStart(2, '0')}
          </h3>
        </div>
        {/* <p className="text-sm font-normal text-gray-900 mt-1 text-center w-full">seconds</p> */}
      </div>
    </div>
  );
};

export default CountdownTimer;
