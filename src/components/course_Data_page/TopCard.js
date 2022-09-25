import React from "react";
import styles from "../../Assets/Styles/courseDataComponentsStyles/topCard.module.css";
import { useState } from "react";
function TopCard(data) {

const  [fix, setFix] = useState(false);

const setFixedSideBar = () => {
  window.scrollY >= 500 ? setFix(true) : setFix(false);
};
window.addEventListener("scroll", setFixedSideBar);
  const listIcons = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-play-btn"
      viewBox="0 0 16 16"
    >
      <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
    </svg>,
    <i className="fa-regular fa-file"></i>,
    <i className="fa-solid fa-file-arrow-down"></i>,
    <i className="fa-brands fa-meta"></i>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-phone"
      viewBox="0 0 16 16"
    >
      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>,
    <i className="fa-solid fa-trophy"></i>,
  ];
  console.log(data.allData.hoursCount);
  return (
    <>
      <div className={`card ${styles.pageCard}`}  style={{position: fix?"fixed":"absolute"}} >
        <img src={data.allData.image} style={{display: fix?"none":"block"}} className="card-img-top" alt="..." />
        <div className={styles.topCardBody}>
          <p className={styles.cardTitle}>E£{data.allData.price}</p>
          <div className={styles.addBtn}>Add to Card</div>
          <div className={styles.buyBtn}>Buy Now</div>
          <p className={styles.moneyBack}>30-Day Money-Back Guarantee </p>
          <p className={styles.courseContentText}>This course includes:</p>
          <span className={styles.courseContentVal}>
            {listIcons[0]}
            <p className={styles.courseContentValText}>
              {data.allData.hoursCount} hours on-demand video
            </p>
          </span>
          <span className={styles.courseContentVal}>
            {listIcons[1]}
            <p className={styles.courseContentValText}>
              {data.allData.articlesCount} article
            </p>
          </span>
          <span className={styles.courseContentVal}>
            {listIcons[2]}
            <p className={styles.courseContentValText}>
              {data.allData.downloadableResource} downloadable resource
            </p>
          </span>
          <span className={styles.courseContentVal}>
            {listIcons[3]}
            <p className={styles.courseContentValText}>Full lifetime access</p>
          </span>
          <span className={styles.courseContentVal}>
            {listIcons[4]}
            <p className={styles.courseContentValText}>
              Access on mobile and TV
            </p>
          </span>
          <span className={styles.courseContentVal}>
            {listIcons[5]}
            <p className={styles.courseContentValText}>
              Certificate of completion
            </p>
          </span>

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
        <div className={styles.downCardBody}>
         <p className={styles.downCardBodyTitle}>Training 5 or more people?</p>
         <p className={styles.downCardBodydesc}>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
         <div className={styles.tryBtn}>Try Udemy Business</div>
        </div>
      </div>
    </>
  );
}

export default TopCard;
