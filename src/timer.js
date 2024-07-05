// useEffect: This Hook lets you perform side effects in your component, such as fetching data or updating the DOM. It runs after the component 
// renders.


import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Timer: {time}s</div>;
}

export default Timer;
