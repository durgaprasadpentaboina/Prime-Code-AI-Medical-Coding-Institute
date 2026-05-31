import React, { useEffect, useState } from "react";
import "./MouseHeartbeat.css";

const MouseHeartbeat = () => {
  const [waves, setWaves] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      const newWave = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setWaves((prev) => [...prev.slice(-8), newWave]);

      setTimeout(() => {
        setWaves((prev) =>
          prev.filter((wave) => wave.id !== newWave.id)
        );
      }, 1200);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      {waves.map((wave) => (
        <div
          key={wave.id}
          className="heartbeat-wave"
          style={{
            left: wave.x,
            top: wave.y,
          }}
        />
      ))}
    </>
  );
};

export default MouseHeartbeat;