import React from "react";

export default function Location(props) {
  return (
    <div class="hidden md:flex  tracking-wide font-medium text-sm  flex-shrink-0">
      <span class="mt-1 mr-1 sm:mr-5 hover:text-primary-400 cursor-pointer">
        <i class="fas fa-map-marker-alt text-xl mr-2"></i>
        {props.children}
      </span>
    </div>
  );
}
