import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(56);

  useEffect(() => {
    if (timeLeft <= 0) {
      // alert('Time is up!');
      
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  return (
    <div>
      <p style={{fontWeight:'600',color:'#000'}}>Time Left: {timeLeft} seconds</p>
    </div>
  );
};

export default Timer;
