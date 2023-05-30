import React from "react";

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl text-ellipsis subpixel-antialiased text-amber-600 md:text-6xl lg:text-6xl tracking-wide">
        Welcome to Julie's Cabin
      </h1>
      <div className="flex flex-row justify-end mt-10 space-x-4">
        <button className="w-40 bg-amber-500 rounded-lg">Log in</button>
        <button className="w-40 bg-amber-500 rounded-lg">Sign up</button>
      </div>
    </div>
  );
};

export default Welcome;
