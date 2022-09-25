import React from "react";
import Card from "./CouresCard";
import styles from "../../Assets/Styles/coursesSection.module.css";
import Loading from "../Loading";
import Error from "../Error";
import { useState, useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

function Courses() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setLoading(true);
    setData("");
    setError(false);
    fetch("http://localhost:3005/courses")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((res) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (data !== "") {
    let listOfCards = data.map((course) => {
      return <Card course={course} key={course.id} />;
    });
    return <Data data={listOfCards} topic={data[0].topic} />;
  }
}

function Data({ data, topic }) {
  return (
    <section className={styles.courses}>
      <div className={styles.broadHint}>
        <h2 className={styles.broadHintTitle}>A broad selection of courses</h2>
        
        <p>
          Choose from 185,000 online video courses with new additions published
          every month
        </p>
      </div>

      <div className={`container-courses ${styles.containerCourses}`}>
        <div className={`courses-discription ${styles.coursesDiscription}`}>
          <span>Expand your career opportunities with Python</span>
          <p>
            Take one of Udemy’s range of Python courses and learn how to code
            using this incredibly useful language. Its simple syntax and
            readability makes Python perfect for Flask, Django, data science,
            and machine learning. You’ll learn how to build everything from
            games to sites to apps. Choose from a range of courses that will
            appeal to...
          </p>
        </div>
        <div className={`explore-btn ${styles.exploreBtn}`}>
          <a href="#">Explore {topic}</a>
        </div>

        <div className={`swiper ${styles.swiperStyle}`}>
          <div className="swiper-wrapper">{data}</div>
          <div class="swiper-pagination"></div>

          {/* If we need navigation buttons  */}
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
}
export const getSwiper = () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween: 30,
    // Optional parameters
    direction: "horizontal",

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      // when window width is >= 1px
      1: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 575px
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 767px
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 991px
      991: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      // when window width is >= 1399px
      1399: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
};

export default Courses;
