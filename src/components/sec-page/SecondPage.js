import React from "react";
import Header from "./Header";
import WhatLearn from "./WhatLearn";
import CoursesContent from "./CourseContent";
import Requirements from "./Requirements";
import Description from "./Description";
import Instructor from "./Instructor";
import FeedBack from "./FeedBack";
import Reviews from "./Reviews";
import TopCard from "./TopCard";
import styles from "../../secPageStyles.module.css";
import stylesdesc from "./styles/description.module.css";
function SecondPage(data) {
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

export default SecondPage;
