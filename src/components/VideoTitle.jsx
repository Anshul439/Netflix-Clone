import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-10 md:px-[75px] absolute text-white bg-gradient-to-r from-black">
      <div>
        <h1 className="text-2xl md:text-6xl font-bold w-1/3 md:mb-8">{title}</h1>
      </div>
      <p className="hidden lg:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black py-1 md:py-3 px-8 text-xl  rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-400 text-white px-8 py-3 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-40">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;