import React from "react";
import "./subscribe.style.scss";

export const Subscribe = (sections) => {
  return (
    <div class="w-full  bg-gray-300  bg-no-repeat">
      <div class=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
        <div class=" m-0  p-0  text-3xl  text-white  antialiased  text-center">
          Get Our Updates
        </div>
        <div class=" m-0  p-0  text-xl  text-white  antialiased  text-center">
          Find out about events and other news
        </div>
        <div class=" mt-3  flex  flex-row  flex-wrap">
          <input
            type="text"
            class=" text-gray-600  w-2/3  p-2  rounded-l-lg"
            placeholder="john@mail.com"
          />
          <button
            class=" p-2  w-1/3  bg-indigo-400  rounded-r-lg  text-white hover: bg-indigo-300"
            type="button"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
