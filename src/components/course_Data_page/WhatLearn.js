import React from "react";
import styles from "../../Assets/Styles/courseDataComponentsStyles/whatLearn.module.css";
function WhatLearn(data) {
  let leftPart = [];
  let rightPart = [];

  for (let i = 0; i <= parseInt(data.allData.overview.length / 2); i++) {
    leftPart.push(
      <p>
        <i className="fa-solid fa-check"></i> {data.allData.overview[i]}
      </p>
    );
  }
  for (
    let i = parseInt(data.allData.overview.length / 2) + 1;
    i < data.allData.overview.length;
    i++
  ) {
    rightPart.push(
      <p>
        <i className="fa-solid fa-check"></i> {data.allData.overview[i]}
      </p>
    );
  }
  return (
    <>
      <div className={styles.WhatLearn}>
        <div className={styles.divL}>
          <p className={styles.head}>What you'll learn</p>
          <div>{leftPart}</div>
        </div>
        <div className={styles.divR}>{rightPart}</div>
      </div>
    </>
  );
}

export default WhatLearn;
