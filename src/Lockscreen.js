import React, { useEffect, useState } from "react";

// 임시 이미지 URL을 사용합니다.
const sealUnderwater = "https://via.placeholder.com/200?text=Underwater+Seal";
const sealSurface = "https://via.placeholder.com/200?text=Surface+Seal";

const LockScreen = ({ lockTime, onUnlock }) => {
  const [timeRemaining, setTimeRemaining] = useState(lockTime * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onUnlock();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [lockTime, onUnlock]);

  const getSealImage = () => {
    const totalSeconds = lockTime * 60;
    const percentage = 1 - timeRemaining / totalSeconds;
    return percentage < 0.5 ? sealUnderwater : sealSurface;
  };

  return (
    <div className="lock-screen" style={{ textAlign: "center", padding: "50px" }}>
      <h1>DeepDive</h1>
      <img src={getSealImage()} alt="Seal" style={{ width: "200px", height: "200px" }} />
      <p>
        Time Remaining: {Math.floor(timeRemaining / 60)}:
        {timeRemaining % 60 < 10 ? `0${timeRemaining % 60}` : timeRemaining % 60}
      </p>
      <p>The phone is locked. Only calls and texts are allowed.</p>
    </div>
  );
};

export default LockScreen;
