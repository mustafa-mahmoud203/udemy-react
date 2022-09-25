import React, { useState } from "react";
import styles from "../../Assets/Styles/courseDataComponentsStyles/courseContent.module.css";
import Accordion from "react-bootstrap/Accordion";

function CoursesContent(data) {
  let check = data.allData.content.length > 10;

  const getFirstTenItems = () => {
    let arrLength =
      data.allData.content.length <= 10 ? data.allData.content.length : 10;
    let firstItems = [];
    for (let i = 0; i < arrLength; i++) {
      let allAccordionBody = [];
      for (let j = 0; j < data.allData.content[i][1].length; j++) {
        let val = (
          <div className={styles.AccordionBodyItems}>
            <div className={styles.circleVideo}>
              <i className={`fa-solid fa-play ${styles.PlayIcon}`}></i>
            </div>
            <div>{data.allData.content[i][1][j]}</div>
          </div>
        );
        allAccordionBody.push(val);
      }
      let val = (
        <Accordion.Item eventKey={i}>
          <Accordion.Header>{data.allData.content[i][0][0]}</Accordion.Header>
          <Accordion.Body>{allAccordionBody}</Accordion.Body>
        </Accordion.Item>
      );
      firstItems.push(val);
    }
    return firstItems;
  };

  const getMoreItem = () => {
    let moreItems = [];
    for (let i = 10; i < data.allData.content.length && check; i++) {
      let allAccordionBody = [];
      for (let j = 0; j < data.allData.content[i][1].length; j++) {
        let val = (
          <div className={styles.AccordionBodyItems}>
            <div className={styles.circleVideo}>
              <i className={`fa-solid fa-play ${styles.PlayIcon}`}></i>
            </div>
            <div>{data.allData.content[i][1][j]}</div>
          </div>
        );
        allAccordionBody.push(val);
      }
      let val = (
        <Accordion.Item eventKey={i}>
          <Accordion.Header>{data.allData.content[i][0][0]}</Accordion.Header>
          <Accordion.Body>{allAccordionBody}</Accordion.Body>
        </Accordion.Item>
      );
      moreItems.push(val);
    }
    return moreItems;
  };

  const [more, setmore] = useState(false);
  const changeMoreItem = () => {
    setmore((e) => !e);
  };

  const BtnVal = ["Expand", "Collapse "];
  const [val, chngeval] = useState(0);

  const changeBtnVal = () => {
    val == 0 ? chngeval((e) => e + 1) : chngeval((e) => e - 1)
  };
  return (
    <>
      <p className={styles.courseContentHead}>Course content</p>

      <div className={styles.mainDiv}>
        <p className={styles.numLectures}>
          {data.allData.sectionsCount} sections{" "}
          <i className={`fa-solid fa-circle ${styles.dot}`}></i>{" "}
          {data.allData.lecturesCount} lectures{" "}
          <i className={`fa-solid fa-circle ${styles.dot}`}></i>{" "}
          {data.allData.totalLength} total length
        </p>
        <button className={styles.expandLecturesBtn} onClick={changeBtnVal}>
          {BtnVal[val]} all sections
        </button>
      </div>
      <Accordion className={styles.accordionStyle}>
        {getFirstTenItems()}

        {more && getMoreItem()}
      </Accordion>

      <button
        className={`${styles.moreItemBtn} ${more && styles.moreItemBtnHide} ${
          !check && styles.moreItemBtnHide
        }`}
        onClick={changeMoreItem}
      >
        {data.allData.content.length - 10} more sections
      </button>
    </>
  );
}
//15 sections • 146 lectures • 14h 42m total length
export default CoursesContent;
