import { Fragment } from "react";

interface loginGiftsProps {
  getTunas: string;
  joinCommmunity: string;
  getCabin: string;
  joinCabinWithFriends: string;
  helppets: string;
}

const Logingifts = ({
  getTunas,
  getCabin,
  joinCabinWithFriends,
  joinCommmunity,
  helppets,
}: loginGiftsProps) => {
  return (
    <Fragment>
      <div className="grid grid-cols-3 gap-x-3 gap-y-2 mt-10 text-center">
        <div className="col-span-2 rounded-full w-auto bg-purple-600 text-center  font-bold py-2 px-4">
          {getTunas}
        </div>
        <div className="col-span-1 rounded-full w-auto bg-purple-600 text-center font-bold py-2 px-4">
          {getCabin}
        </div>
        <div className="rounded-full w-auto bg-purple-600 text-center font-bold py-2 px-4">
          {joinCabinWithFriends}
        </div>
        <div className="rounded-full w-auto bg-purple-600 text-center font-bold py-2 px-4">
          {joinCommmunity}
        </div>
        <div className="rounded-full w-aut bg-emerald-500 text-center border-4 border-pink-400 font-bold py-2 px-4">
          {helppets}
        </div>
      </div>
    </Fragment>
  );
};

export default Logingifts;
