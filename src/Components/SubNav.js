import React from "react";

export default function SubNav() {
  let link = "#;";
  return (
    <div
      class="flex flex-row justify-between bg-primary-500 px-8 md:px-24 xl:fixed
        xl:top-24 z-10 md:sticky md:top-0 right-0 left-0"
    >
      <h3 className="text-white font-bold uppercase text-sm tracking-widest leading-10 mt-1 flex-shrink">
        Starbucks<span className="text-xs "><sup>&reg;</sup></span> Rewards
      </h3>
      <a
        className="my-auto md:hidden border border-yellow-200 rounded-full text-white font-normal px-6 h-8 flex-shrink-0"
        href={link}
      >
        Join in the App
      </a>
    </div>
  );
}
