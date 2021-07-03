import React from "react";
import bc from "../images/bc.jpg";
import back from "../images/back.png";
import ImportantText from "./ImportantText";
import Button from "./Button";

export default function HeroSection() {
  let link = "#";
  return (
    <div class="flex md:flex-row flex-col mb-24 bg-back lg:mt-28 -z-1">
      <div class="px-12 py-9  text-center md:text-normal md:mt-56 md:text-justify">
        <h1 class="font-bold text-gray-800 text-4xl">FREE COFFEE</h1>
        <h1 class="font-bold text-gray-800 text-4xl">IS A TAP AWAY</h1>
        <p class="text-xl font-medium mt-4 mb-8">
          Join now to start earning Rewards.
        </p>
       <Button link="#" classes="bg-primary-400 text-white font-medium text-base">join now</Button>
        <p class="text-xl font-medium mt-8">
          Or <ImportantText> Join in the app </ImportantText> for the best
          experience
        </p>
      </div>
      <div class="w-full flex-1 ">
        <img src={back} class="hidden md:block h-screen w-full" alt="" />
        <img src={bc} className="md:hidden w-full max-h-96 h-1/3" alt="" />
      </div>
    </div>
  );
}
