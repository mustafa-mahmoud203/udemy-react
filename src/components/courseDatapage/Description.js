import React from "react";
import styles from "../../Assets/Styles/courseDataComponentsStyles/description.module.css";
import { useState } from "react";
function Description(data) {
  const getDesc = () => {
    let text = "";
    data.allData.description.forEach((item) => {
      text += item;
      text += " ";
    });
    return text;
  };
  const [val, chngeval] = useState(0);

  const changeBtnVal = () => {
    val == 0 ? chngeval((e) => e + 1) : chngeval((e) => e - 1);
  };
const check=getDesc().length <250
  let dot =( !val&& !check)? "..." : " ";
  const list = ["Show more", "Show less"];
  const listIcons = [
    <i class="fa-solid fa-caret-down"></i>,
    <i class="fa-solid fa-caret-up"></i>,
  ];



  return (
    <>
      <div className={styles.mainDiv}>
        <span className={styles.Desc}>
          {getDesc().substring(0, 250)}
          {dot}
        </span>{" "}
        <span className={`${styles.Desc} ${!val && styles.fullDescHaid}`}>
          {getDesc().substring(250, getDesc().length - 1)}
        </span>{" "}
        <button className={`${styles.btn} ${check&&styles.btnHaid}`} onClick={changeBtnVal}>
          {list[val]} {listIcons[val]}
        </button>
      </div>
    </>
  );
}

export default Description;
