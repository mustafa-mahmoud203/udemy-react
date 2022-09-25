import React from "react";
import Header from "../components/course_Data_page/Header";
import WhatLearn from "../components/course_Data_page/WhatLearn";
import CoursesContent from "../components/course_Data_page/CourseContent";
import Requirements from "../components/course_Data_page/Requirements";
import Description from "../components/course_Data_page/Description";
import Instructor from "../components/course_Data_page/Instructors";
import FeedBack from "../components/course_Data_page/FeedBack";
import Reviews from "../components/course_Data_page/Reviews";
import TopCard from "../components/course_Data_page/TopCard";
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
