import React, { useState } from "react";

const Timer = ({ onSetLock }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
    onSetLock(totalMinutes);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Set Lock Timer:
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          placeholder="Hours"
          min="0"
        />
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          placeholder="Minutes"
          min="0"
        />
      </label>
      <button type="submit">Lock</button>
    </form>
  );
};

export default Timer;
