import React, { useState } from "react";
import LockScreen from "./LockScreen";
import Timer from "./Timer";

const App = () => {
  const [isLocked, setIsLocked] = useState(false);
  const [lockTime, setLockTime] = useState(0);

  return (
    <div className="App">
      {isLocked ? (
        <LockScreen lockTime={lockTime} onUnlock={() => setIsLocked(false)} />
      ) : (
        <Timer onSetLock={(time) => { setLockTime(time); setIsLocked(true); }} />
      )}
    </div>
  );
};

export default App;
