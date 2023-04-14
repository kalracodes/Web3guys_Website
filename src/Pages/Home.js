import React from "react";
import Homepage2 from "../components/homepage2/homepage2.jsx";
import Homepage1 from "../assets/homepage1.webp"
export const Home = () => {
  return (
    <div className="HomePage">
      {/* <div className="homepage-comp1">
        <img src={Homepage1} alt="" />
      </div> */}
      <div className="homepage-comp2">
        <Homepage2/>
      </div>
    </div>
  );
};
