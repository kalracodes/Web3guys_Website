import React from "react";
import Homepage2 from "../components/homepage2/homepage2.jsx";
import Homepage1 from "../components/homepage1/homepage1.jsx"
import { Footer } from "../components/footer/Footer-home";
export const Home = () => {
  return (
    <div className="HomePage">
      <div className="homepage-comp1">
        <Homepage1/>
      </div>
      {/* <div className="homepage-comp2">
        <Homepage2/>
      </div> */}
      {/* <Footer/> */}
    </div>
  );
};
