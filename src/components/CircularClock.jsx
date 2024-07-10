import  { useState, useEffect } from 'react';

const CircularClock = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const currentHour = now.getHours() % 12; // Convert to 12-hour format
      const currentMinute = now.getMinutes();

      setHour(currentHour);
      setMinute(currentMinute);
    };

    // Update clock every second
    const interval = setInterval(updateClock, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-40 h-40 relative">
      {/* Hour hand */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-yellow-400"
        style={{ width: '4px', height: '50px', transform: `rotate(${(hour / 12) * 360}deg)` }}
      >
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-yellow-400 font-bold">
          {hour}
        </span>
      </div>

      {/* Minute hand */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-white"
        style={{ width: '2px', height: '80px', transform: `rotate(${(minute / 60) * 360}deg)` }}
      >
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white font-bold">
          {minute}
        </span>
      </div>
    </div>
  );
};

export default CircularClock;
