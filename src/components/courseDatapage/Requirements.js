import React from "react";
import styles from "../../Assets/Styles/courseDataComponentsStyles/requirements.module.css";
function Requirements(data) {
  let ListVal = [];
  for (let i = 0; i < data.allData.requirements.length; i++) {
    let val = <li>{data.allData.requirements[i]}</li>;
    ListVal.push(val);
  }

  return (
    <div className={styles.mainDiv}>
      <p className={styles.paragraph}>Requirements</p>
      {ListVal}
    </div>
  );
}

export default Requirements;
