import React from "react";
import styles from "../../Assets/Styles/courseDataComponentsStyles/requirements.module.css";
function Requirements(data) {
  let requirementsList = data.allData.requirements.map((item) => {
    return <li>{item}</li>;
  });
  return (
    <div className={styles.mainDiv}>
      <p className={styles.paragraph}>Requirements</p>
      {requirementsList}
    </div>
  );
}

export default Requirements;
