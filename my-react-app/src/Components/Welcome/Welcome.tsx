import React, { Fragment } from "react";
import Buttons from "./UI/Buttons";
import Logingifts from "./UI/Login-gifts/login-gifts";
import { useNavigate } from "react-router-dom";

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (buttonType: string) => {
    if (buttonType === "login") {
      navigate("/login");
    } else if (buttonType === "signup") {
      navigate("/signup");
    }
  };

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl text-ellipsis subpixel-antialiased  mb-5  bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400  text-transparent bg-clip-text  md:text-6xl lg:text-6xl tracking-wide ">
          Welcome to Julie's Cabin
        </h1>
        <div className="grid grid-cols-2 gap-4 mt-3">
          <Buttons
            title="Login"
            type="button"
            onClick={() => handleClick("login")}
          />
          <Buttons
            title="Signup"
            type="button"
            onClick={() => handleClick("signup")}
          />
        </div>

        <Logingifts
          joinCabinWithFriends="Join Cabin with friends"
          getTunas="Get 10 Tunas Upon signup 😽"
          getCabin="Get cabin for your cat"
          joinCommmunity="Join Community"
          helppets="Help pets💗"
        />
      </div>
    </Fragment>
  );
};

export default Welcome;
