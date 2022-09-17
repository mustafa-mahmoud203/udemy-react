import React from "react";
import Header from "../components/courseDatapage/Header";
import WhatLearn from "../components/courseDatapage/WhatLearn";
import CoursesContent from "../components/courseDatapage/CourseContent";
import Requirements from "../components/courseDatapage/Requirements";
import Description from "../components/courseDatapage/Description";
import Instructor from "../components/courseDatapage/Instructor";
import FeedBack from "../components/courseDatapage/FeedBack";
import Reviews from "../components/courseDatapage/Reviews";
import TopCard from "../components/courseDatapage/TopCard";
import styles from "../Assets/Styles/courseDataPageStyles.module.css";
import stylesdesc from "../Assets/Styles/courseDataComponentsStyles/description.module.css";
function CourseDataPage(data) {
  return (
    <>
      <div className="secondPage">
        <Header allData={data.allData} />
        <TopCard allData={data.allData}></TopCard>
        <div className={styles.secondPageBody}>
          <WhatLearn allData={data.allData} />
          <CoursesContent allData={data.allData} />
          <Requirements allData={data.allData} />
          <p className={`${stylesdesc.title}`}>Description</p>
          <Description allData={data.allData} />
          <Instructor allData={data.allData} />
          <FeedBack allData={data.allData} />
          <Reviews allData={data.allData}></Reviews>
        </div>
      </div>
    </>
  );
}

export default CourseDataPage;
