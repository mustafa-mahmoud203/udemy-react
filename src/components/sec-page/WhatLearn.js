import React from "react";
import styles from "./styles/whatLearn.module.css";
function WhatLearn(data) {
  let arr1 = [];
  let arr2 = [];

  for (
    let i = 0;
    i <= parseInt(data.allData.overview.length / 2);
    i++
  ) {
    arr1.push(
      <p>
        <i className="fa-solid fa-check"></i>{" "}
        {data.allData.overview[i]}
      </p>
    );
  }
  for (
    let i = parseInt(data.allData.overview.length / 2) + 1;
    i < data.allData.overview.length;
    i++
  ) {
    arr2.push(
      <p>
        <i className="fa-solid fa-check"></i>{" "}
        {data.allData.overview[i]}
      </p>
    );
  }
  return (
    <>
      <div className={styles.WhatLearn}>
        <div className={styles.divL}>
          <p className={styles.head}>What you'll learn</p>
          <div>{arr1}</div>
        </div>
        <div className={styles.divR}>{arr2}</div>
      </div>
    </>
  );
}

export default WhatLearn;
