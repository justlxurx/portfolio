import React, { useEffect, useState } from "react";
import s from "./Countdown.module.scss";

interface CountdownProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  return (
    <div className={s.countdown}>
      {Object.keys(timeLeft).map((interval, index) => (
        <div className={s.countdown__item} key={index}>
          <p className={s.countdown__itemLabel}>{interval}</p>
          <p className={s.countdown__itemValue}>
            {formatTime(timeLeft[interval])}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
