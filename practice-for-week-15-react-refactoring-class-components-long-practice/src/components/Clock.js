import React, { useEffect } from 'react';
import { useState } from 'react';

export const ClockToggle = ({toggleClock}) => {
  // render () {
    return (
      <button 
        type="button"
        className="clock-toggle" 
        onClick={toggleClock}
      >
        Toggle Clock
      </button>
    )

} 

const Clock = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     time: new Date(),
  //   };
  // }
  const [time, setTime] = useState(new Date());
  // const [intervalId, setIntervalId] = useState(null);
  
  // componentDidMount() {
  //   this.interval = setInterval(tick, 1000);
  // }

  useEffect(() => {
    const intervalId = setInterval(tick, 1000);
    // setIntervalId(setInterval(tick, 1000));
    // return (() => {
      // console.log("Clearing Clock interval!")
      // clearInterval(intervalId);
    // })
  }, []);
  
  // componentWillUnmount() {
  //   console.log("Clearing Clock interval!")
  //   clearInterval(this.interval);
  // }

  // useEffect(() => {
  //   console.log("Clearing Clock interval!")
  //   clearInterval(intervalId);
  // })
  
  const tick = () => {
    setTime(new Date());
  }

  console.log(time);
  console.log(time.getHours(), "time get hours");
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  hours = (hours < 10) ? `0${hours}` : hours;
  minutes = (minutes < 10) ? `0${minutes}` : minutes;
  seconds = (seconds < 10) ? `0${seconds}` : seconds;

  const timezone = time
    .toTimeString() // Form: "14:39:07 GMT-0600 (PDT)"
    .replace(/[^A-Z]/g, "") // Strip out all but capitals
    .slice(3); // Eliminate initial GMT

  return (
    <section className="clock-section">
      <h1>Clock</h1>
      <div className='clock'>
        <p>
          <span>
            Time:
          </span>
          <span>
            {hours}:{minutes}:{seconds} {timezone}
          </span>
        </p>
        <p>
          <span>
            Date: 
          </span>
          <span>
            {time.toDateString()}
          </span>
        </p>
      </div>
    </section>
  );
}

export default Clock;