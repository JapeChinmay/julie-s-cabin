import React, { Fragment } from "react";
import Buttons from "./UI/Buttons";
import Logingifts from "./UI/Login-gifts/login-gifts";

const Welcome: React.FC = () => {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl text-ellipsis subpixel-antialiased  mb-5  bg-gradient-to-r from-white via-purple-300 to-purple-400  text-transparent bg-clip-text  md:text-6xl lg:text-6xl tracking-wide ">
          Welcome to Julie's Cabin
        </h1>
        <div className=" grid grid-cols-2 gap-4 mt-3 ">
          <Buttons title="Login"></Buttons>
          <Buttons title="Sign up"></Buttons>
        </div>

        <Logingifts
          joinCabinWithFriends="Join Cabin with friends"
          getTunas="Get 10 Tunas Upon login 😽"
          getCabin="Get cabin for your cat"
          joinCommmunity="Join Community"
          helppets="Help pets💗"
        />
      </div>
    </Fragment>
  );
};

export default Welcome;
