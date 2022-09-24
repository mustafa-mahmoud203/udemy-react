import React from "react";
import Card from "./CouresCard";
import styles from "../Assets/Styles/appStyles.module.css";
import Loading from "./Loading";
import Error from "./Error";
import { useState, useEffect } from "react";

function Courses() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState("");
  let allData;
  useEffect(() => {
    setLoading(true);
    setData("");
    setError(false);
  allData=  fetch("http://localhost:3005/courses")
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
    
    return <Data data={listOfCards} topic={data[0].topic}/>;
  }
}

function Data({ data ,topic}) {
  return (
    <section className={`container-courses ${styles.containerCourses}`}>
      <div className={`courses-discription ${styles.coursesDiscription}`}>
        <span>Expand your career opportunities with Python</span>
        <p>
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to...
        </p>
      </div>
      <div className={`explore-btn ${styles.exploreBtn}`}>
        <a href="#">Explore {topic}</a>
      </div>

      <div className={`courses-swiper ${styles.coursesSwiper}`}>
        {/* <Card course={allCourses.allCourses[0]}></Card> */}
        {data}
      </div>
    </section>
  );
}

export default Courses;
