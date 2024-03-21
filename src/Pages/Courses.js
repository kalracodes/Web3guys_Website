import { Footer } from "../components/footer/footer.jsx";
import Course from "../components/course/course.jsx";
import frame1 from "../assets/frame1.png";
import frame2 from "../assets/frame2.png";
import starsBg from "../assets/stars-bg@2x.png";
import React, { useEffect } from "react";
import Rellax from "rellax";
import { motion } from "framer-motion"
import "./Courses.css"

export const Courses = () => {
  useEffect(() => {
    new Rellax(".frame1", {
      speed: 7,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    new Rellax(".frame2", {
      speed: 3,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);
  return (
    <>
    <div className="App">
      <div className="Hero-section">
        <div className="text">
          <span className="text-1">COMPLETE</span>
          <motion.div
            transition={{ delay: 0.4 }}
            initial={{ opacity: 0, translateX: -20 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-2">STRUCTURED</span>
          </motion.div>
          <span className="text-3">COURSES</span>
        </div>
        <div className="frames">
          <img src={frame1} className="frame1" />
          <img src={frame2} className="frame2" />
        </div>
      </div>
      <div className="CustomerStar">
					<img class="stars-bg-webchange" alt="" src={starsBg} />
				</div>
      </div>

    <div>
    <motion.div
              transition={{ delay: 0.4 }}
              initial={{ opacity: 0, translateY: -20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
            >
      {/* <HeaderCourse/> */}
      <Course/>
      <Footer/>
      </motion.div>
    </div>
    </>
  );
};

