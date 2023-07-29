import React from "react";
import GigHeader from "../components/Gigs/GigHeader";

// import GigsListing from "../components/GigsListing";

const gigs = () => {
  return (
    <div>
      <div className="video-container relative z-0">
        <video src={"/genback.mp4"} autoPlay loop muted id="myVideo" />
      </div>
      <div className="flex-col items-center justify-start bg-black absolute z-10">
        <GigHeader />
      </div>
    </div>
  );
};

export default gigs;
