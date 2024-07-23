import React, { useEffect, useState } from 'react';

const HollowCircleTimer = () => {
  const WORK_TIME = 25 * 60; // 25 minutes in seconds

  const [timeRemaining, setTimeRemaining] = useState(WORK_TIME); // initial time for work session

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime > 0) return prevTime - 1;
        else return 0; // Ensure the timer stops at 00:00:00
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours} : ${minutes} : ${secs}`;
  };

  const getBorderColor = () => {
    const factor = timeRemaining / WORK_TIME;
    const startColor = { r: 255, g: 210, b: 0 }; // yellow
    const endColor = { r: 145, g: 151, b: 157 }; // gray

    const interpolate = (start, end, factor) => {
      return Math.round(start + (end - start) * (1 - factor));
    };

    const r = interpolate(startColor.r, endColor.r, factor);
    const g = interpolate(startColor.g, endColor.g, factor);
    const b = interpolate(startColor.b, endColor.b, factor);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const calculateProgress = () => {
    return (timeRemaining / WORK_TIME) * 100;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="relative flex items-center justify-center w-48 h-48">
        <svg className="absolute w-full h-full">
          <circle
            className="text-[#E0E4E8]"
            stroke="currentColor"
            strokeWidth="16"
            fill="transparent"
            r="72"
            cx="96"
            cy="96"
          />
          <circle
            className="text-yellow-500"
            stroke={getBorderColor()}
            strokeWidth="16"
            fill="transparent"
            r="72"
            cx="96"
            cy="96"
            strokeDasharray="453"
            strokeDashoffset={453 - (453 * calculateProgress()) / 100}
            transform="rotate(-90 96 96)"
          />
        </svg>
        <div className="absolute text-lg font-bold text-yellow-500 text-center">
          {formatTime(timeRemaining)}
          <p className="text-[#91979D]">Next Round</p>
        </div>
      </div>
    </div>
  );
};

export default HollowCircleTimer;
