import React from "react";
import styles from "./styles/header.module.css";

import Stars from "./Stars";
function Header(data) {
  let courseData = data.allData;
 
  const getInstructors = () => {
    let instructor = [];
    courseData.instructor.forEach((item) => {
      let val = (
        <span className={`Created-by ${styles.CreatedBy}`}>
          {", "}
          {item.name}
        </span>
      );
      instructor.push(val);
    });
    return instructor;
  };

  return (
    <>
      <div className={`sec-page-header ${styles.secPageHeader}`}>
        <div className={`main-div ${styles.mainDiv}`}>
          <img
            src={courseData.image}
            className={`path-course ${styles.headerImg}`}
          />
          <div className={`path-course ${styles.pathCourse}`}>
            <p className={styles.pathCourseParagarph}>{courseData.category}</p>
          </div>

          <h1 className={styles.mainDivH1}>{courseData.title}</h1>
          <p className={styles.mainDivParagarph}>{courseData.Introduction}</p>
          <span className={`rating-info ${styles.ratingInfo} `}>
            <span className={`rating-num ${styles.ratingNum}`}>
              {courseData.rate}
            </span>
            <span className={`rating-stars ${styles.ratingStars}`}>
              {<Stars rate={courseData.rate} />}
            </span>
            <span className={`num-of-ratings ${styles.numOfRatings}`}>
              {" "}
              ({courseData.ratingCount} ratings){" "}
            </span>
            <span className={`num-of-students ${styles.numOfStudents}`}>
              {courseData.enrollCount} students{" "}
            </span>
          </span>

          <p>
            Created by
            {getInstructors()}
          </p>
          <div className={styles.iconsDiv}>
            <span className={styles.iconStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-patch-exclamation"
                viewBox="0 0 16 16"
              >
                <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" />
                <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z" />
              </svg>
              <p className={styles.textDiscIcon}>
                Last updated {courseData.lastUpdate}
              </p>
            </span>
            <span className={styles.iconStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-globe"
                viewBox="0 0 16 16"
              >
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
              </svg>
              <p className={styles.textDiscIcon}>{courseData.globe}</p>
            </span>
            <span className={styles.iconStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-badge-cc"
                viewBox="0 0 16 16"
              >
                <path d="M3.708 7.755c0-1.111.488-1.753 1.319-1.753.681 0 1.138.47 1.186 1.107H7.36V7c-.052-1.186-1.024-2-2.342-2C3.414 5 2.5 6.05 2.5 7.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114H6.213c-.048.615-.496 1.05-1.186 1.05-.84 0-1.319-.62-1.319-1.727v-.743zm6.14 0c0-1.111.488-1.753 1.318-1.753.682 0 1.139.47 1.187 1.107H13.5V7c-.053-1.186-1.024-2-2.342-2C9.554 5 8.64 6.05 8.64 7.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.743z" />
                <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
              </svg>
              <p className={styles.textDiscIcon}>{courseData.Captioning}</p>
            </span>
          </div>

          <div className={styles.divDisplay}>
            <p className={styles.cardTitle}>E£{data.allData.price}</p>
            <div className={styles.addBtn}>Add to Card</div>
            <p className={styles.moneyBack}>30-Day Money-Back Guarantee </p>
            <span className={styles.divLinks}>
              <a href="#" className={`card-link ${styles.links}`}>
                {" "}
                Share{" "}
              </a>
              <a href="#" className={`card-link ${styles.links}`}>
                Gift this course{" "}
              </a>
              <a href="#" className={`card-link ${styles.links}`}>
                Apply coupon{" "}
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
