import React from "react";
import logo from "../images/logo.PNG";
import Button from "./Button";
import SubNav from "./SubNav.js";
import Location from "./Location";

import HeroSection from '../Components/HeroSection';

export default function Navbar() {
  let link = "#";
  return (
    <nav>
      <div className="flex justify-between bg-white px-4 md:px-12 py-4 flex-shrink-0 xl:fixed xl:top-0 w-full z-10">
        <div className="flex">
          <img
            className="inline-block w-15 h-16 cursor-pointer"
            src={logo}
            alt="Brand Logo"
          />
          <div className="hidden md:block flex-shrink-0">
            <ul className="list-none mx-8 mt-4.5 space-x-4 md:space-x-6 tracking-widest font-primarybold text-sm flex-shrink-0">
              <li className="inline hover:text-primary-400">
                <a className="" href={link}>
                  MENU
                </a>
              </li>
              <li className="inline hover:text-primary-400 py-9 border-b-8 border-primary">
                <a href={link}>REWARD</a>
              </li>
              <li className="inline hover:text-primary-400">
                <a href={link}>GIFT CARD</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-4">
          <Location>Find a Store</Location>
          <div className="flex space-x-4 mt-1">
            <Button
                liink="#"
                classes="hidden md:flex border-black bg-white font-medium text-base flex-shrink-0 whitespace-nowrap"
            >
              Sign Up
            </Button>

            <Button
                link="#"
                classes="hidden md:flex bg-black text-white font-medium text-base flex-shrink-0 whitespace-nowrap"
            >
              Join now
            </Button>
            <div class="md:hidden text-3xl">
              <i class="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </div>

      <SubNav />

      <HeroSection />
    </nav>
  );
}
