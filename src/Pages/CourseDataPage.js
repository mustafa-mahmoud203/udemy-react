import React from "react";
import Header from "../components/courseDatapage/Header";
import WhatLearn from "../components/courseDatapage/WhatLearn";
import CoursesContent from "../components/courseDatapage/CourseContent";
import Requirements from "../components/courseDatapage/Requirements";
import Description from "../components/courseDatapage/Description";
import Instructor from "../components/courseDatapage/Instructors";
import FeedBack from "../components/courseDatapage/FeedBack";
import Reviews from "../components/courseDatapage/Reviews";
import TopCard from "../components/courseDatapage/TopCard";
import styles from "../Assets/Styles/courseDataPageStyles.module.css";
import stylesdesc from "../Assets/Styles/courseDataComponentsStyles/description.module.css";
import { useLocation } from "react-router-dom";
function CourseDataPage() {
  const location = useLocation();
  const course = location.state;

  return (
    <>
      <div className="secondPage">
        <Header allData={course} />
        <TopCard allData={course}></TopCard>
        <div className={styles.secondPageBody}>
          <WhatLearn allData={course} />
          <CoursesContent allData={course} />
          <Requirements allData={course} />
          <p className={`${stylesdesc.title}`}>Description</p>
          <Description allData={course} />
          <Instructor allData={course} />
          <FeedBack allData={course} />
          <Reviews allData={course}></Reviews>
        </div>
      </div>
    </>
  );
}

export default CourseDataPage;
