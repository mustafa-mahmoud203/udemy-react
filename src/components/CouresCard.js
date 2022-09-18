import React from "react";
import styles from "../Assets/Styles/appStyles.module.css";
import { Link } from "react-router-dom";
function Card(data) {
  let stars = [];
  let counter = 0;
  let instructor = [];
  for (let i = 0; i < parseInt(data.course.rate); i++) {
    stars.push(
      <i
        className={`fa-solid fa-star ${styles.goldStar}`}
        key={"fa-solid" + counter}
      ></i>
    );
    counter++;
  }
  if (data.course.rate - parseInt(data.course.rate) > 0) {
    stars.push(
      <i
        className={`fa-solid fa-star ${styles.goldStar}`}
        key={"fa-solid" + counter}
      ></i>
    );
    counter++;
  }
  for (let i = 0; i < 5 - Math.ceil(data.course.rate); i++) {
    stars.push(
      <i
        className={`fa-solid fa-star ${styles.grayStar}`}
        key={"fa-solid" + counter}
      ></i>
    );
    counter++;
  }

  for (let i = 0; i < data.course.instructor.length; i++) {
    instructor.push(data.course.instructor[i].name);
  }

  return (
    <Link style={{ textDecoration: "none" }} to={"/course"} state={data.course}>
      <div className={`courses-card ${styles.coursesCard}`}>
        <img src={data.course.image} alt={data.course.topic}></img>
        <h5>{data.course.title}</h5>
        <p className={`author-name ${styles.authorName}`}>{instructor}</p>
        <span>
          <span className={`rating-num ${styles.ratingNum}`}>
            {data.course.rate}
          </span>
          <span className={`rating-stars ${styles.ratingStars}`}>{stars}</span>
          <span className={`num-of-students ${styles.numOfStudents}`}>
            {data.course.studentsNumber}
          </span>
        </span>
        <div className={`course-price ${styles.coursePrice}`}>
          E£ {data.course.price}
        </div>
      </div>
    </Link>
  );
}

export default Card;
