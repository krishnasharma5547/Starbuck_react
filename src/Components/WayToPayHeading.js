import React from "react";

export default function WayToPayHeading(props) {
    var dim = "";
    if (props.img2 === "") {
        dim = " hidden";
    }
    return (
        <>
            {/* <div classNameName="flex flex-col md:flex-row px-4 sm:px-12 space-y-8 md:space-y-0">
          <div classNameName="flex flex-col space-y-2">
            <h1 className="text-xl sm:text-2xl font-bold">{props.num}</h1>
            <p className="text-base sm:text-lg">Pay as you go</p>
          </div>
          <div className="flex flex-row space-x-4 sm:pl-12">
            <div className="sm:min-w-max flex-shrink-0">
              <img
                className="sm:w-32 sm:h-40 w-28 h-36"
                src={props.img}
                alt="Img not found"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-lg sm:text-xl font-primarybold">
                {props.heading}
              </h1>
              <p className="text-base sm:text-lg md:max-w-xs">{props.pera}</p>
            </div>
          </div>

          <div class="flex flex-row space-x-4 sm:pl-12 md:pl-0">
            <div class="sm:min-w-max flex-shrink-0">
              <img
                class="sm:w-32 sm:h-40 w-28 h-36"
                src={props.img2}
                alt="Img not found"
              />
            </div>
            <div class="space-y-4">
              <h1 class="text-lg sm:text-xl font-primarybold">
                {props.heading2}
              </h1>
              <p class="text-base sm:text-lg md:max-w-xs">
                |{props.pera2}
              </p>
            </div>
          </div>
        </div> */}

            <div class="flex flex-col md:flex-row px-4 sm:px-12 space-y-8 md:space-y-0">
                <div class="flex flex-col space-y-2">
                    <h1 class="text-xl sm:text-2xl font-bold whitespace-nowrap">
                        {props.heading}
                    </h1>
                    <p class="text-base sm:text-lg">{props.pera}</p>
                </div>
                <div class="flex flex-row space-x-4 sm:pl-12">
                    <div class="sm:min-w-max flex-shrink-0">
                        <img
                            class="sm:w-32 sm:h-40 w-28 h-36"
                            src={props.img1}
                            alt="Img not found"
                        />
                    </div>
                    <div class="space-y-4">
                        <h1 class="text-lg sm:text-xl font-primarybold">
                            {props.w1_heading}
                        </h1>
                        <p class="text-base sm:text-lg md:max-w-xs">{props.w1_pera}</p>
                    </div>
                </div>
                <div class="flex flex-row space-x-4 sm:pl-12 md:pl-0">
                    <div class={"sm:min-w-max flex-shrink-0" + dim}>
                        <img class="sm:w-32 sm:h-40 w-28 h-36" src={props.img2} alt=""/>
                    </div>
                    <div class="space-y-4">
                        <h1 class="text-lg sm:text-xl font-primarybold">
                            {props.w2_heading}
                        </h1>
                        <p class="text-base sm:text-lg md:max-w-xs">{props.w2_pera}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
