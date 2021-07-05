import React from "react";
import glassImage from "../images/025.png";

export default function SectionWays() {
  let link = "#";
  return (
      <>
        <div className="flex flex-col w-full ">
          <div className="flex flex-col m-auto pt-12 pb-8 md:mt-12  bg-secoundary-100 w-full shadow-2xl space-y-8">
            <div className="block m-auto w-full">
              <h1 className="text-center text-3xl font-bold">
                Get your favorites for free
              </h1>
            </div>
            <div>
              <ul className="list-none block text-center font-bold text-2xl mt-8 space-x-12">
                <li className="inline-block">
                  <a href={link}>
                    25<i className="fas fa-star text-star text-xs"></i>
                  </a>
                </li>
                <li className="inline-block">
                  <a href={link}>
                    50<i className="fas fa-star text-star text-xs"></i>
                  </a>
                </li>
                <li className="inline-block">
                  <a href={link}>
                    150<i className="fas fa-star text-star text-xs"></i>
                  </a>
                </li>
                <li className="inline-block">
                  <a href={link}>
                    200<i className="fas fa-star text-star text-xs"></i>
                  </a>
                </li>
                <li className="inline-block">
                  <a href={link}>
                    400<i className="fas fa-star text-star text-xs"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
              className="relative flex flex-col sm:flex-row w-full  bg-secoundary-200 py-2   xl:px-48 justify-center items-center space-y-6 md:h-80 -z-1">
            <div className="flex flex-shrink-0">
              <img
                  className="md:max-h-80 h-60 max-w-sm"
                  src={glassImage}
                  alt=""
              />
            </div>
            <div className="flex flex-col space-y-6 px-4 sm:px-0 py-8 sm:py-12">
              <h1 className="text-3xl my-auto font-semibold text-center sm:text-justify ">
                Customize your drink
              </h1>
              <p className="text-lg text-center sm:text-justify ">
                Make your drink just right with an extra espresso shot, dairy
                substitute or a dash of your favorite syrup.
              </p>
            </div>
          </div>
        </div>
      </>
  );
}
