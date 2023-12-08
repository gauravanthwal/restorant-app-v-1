"use client";
import React, { useState } from "react";

const Notification = () => {
  const [showNotification, setShowNotification] = useState(true);

  const hideNotification = () => {
    setShowNotification(false);
  };
  if (showNotification) {
    return (
      <div className="h-12 bg-red-500 text-white px-4 py-2  text-sm md:text-base cursor-pointer">
        <p className="text-center">Free delivery for all orders over $50. Order your food now!</p>
        <button className="absolute top-3 right-3" onClick={hideNotification}>X</button>
      </div>
    );
  }
};

export default Notification;
