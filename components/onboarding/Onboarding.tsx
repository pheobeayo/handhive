import React, { Dispatch, SetStateAction, useState } from "react";
import Splash from "./Splash";
import Signin from "./Signin";

type Props = {
  onboarded: boolean;
  setOnboarded: Dispatch<SetStateAction<boolean>>;
};

const Onboarding = ({ onboarded, setOnboarded }: Props) => {
  const [timePassed, setTimePassed] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 5000); //For a little delay

  const handleSubmit = () => {
    setOnboarded(true);
  };

 

  const handleShowProfile = () => {
    setShowProfile(true);
  };
  return (
    <>
      {!timePassed && <Splash />}
      {timePassed && (
        <div className="h-auto bg-[#F5F5F5]">
          {!showProfile && <Signin  />}
         
          
        </div>
      )}
    </>
  );
};

export default Onboarding;