import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Clock = () => {
  const [time, setTime] = useState('');

  function madeClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    setTime(`${hours}:${minutes}:${seconds}`);
  }

  useEffect(() => {
    setInterval(madeClock, 1000);
  }, [time]);

  return (
    <div>
      <TimeNow>{time}</TimeNow>
    </div>
  );
};

export default Clock;

const TimeNow = styled.p`
  text-align: center;
  font-size: 1.4em;
  font-weight: bold;
`;
