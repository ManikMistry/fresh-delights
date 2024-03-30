import React from "react";
import ReactConfetti from "react-confetti";

const PlacedOrder = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <p className="text-3xl font-bold text-green-600">
          Thanks for shopping with us!
        </p>
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
        />
        <a href="/" className=" text-sm text-green-300">Return to home</a>
        <span className="text-2xl animate-bounce">&#127881;</span>
      </div>
    </div>
  );
};

export default PlacedOrder;
