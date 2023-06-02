import React from "react";
import Buttons from "./UI/Buttons";

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl text-ellipsis subpixel-antialiased text-amber-600 md:text-6xl lg:text-6xl tracking-wide  font-alfa-slab-one">
        Welcome to Julie's Cabin
      </h1>
      <div className="flex flex-row justify-end mt-10 space-x-4">
        <Buttons title="Login"></Buttons>
        <Buttons title="Sign up"></Buttons>
      </div>
    </div>
  );
};

export default Welcome;
