"use client";
import React from "react";
import Countdown from "react-countdown";

const endingdate = new Date("2023-09-25");
const date = Date.now() + 9000 ** 2;
const CountDown = () => {
  return (
    <Countdown
      className="font-bold text-5xl text-yellow-300"
      date={date}
    />
  );
};

export default CountDown;
