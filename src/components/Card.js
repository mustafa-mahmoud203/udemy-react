import React from "react";

function Card(data) {
  let stars = [];
  let counter = 0;
  for (let i = 0; i < parseInt(data.course.rating); i++) {
    stars.push(
      <i className="fa-solid fa-star gold-star" key={"fa-solid" + counter}></i>
    );
    counter++;
  }
  if (data.course.rating - parseInt(data.course.rating) > 0) {
    stars.push(
      <i className="fa-solid fa-star gold-star" key={"fa-solid" + counter}></i>
    );
    counter++;
  }
  for (let i = 0; i < 5 - Math.ceil(data.course.rating); i++) {
    stars.push(
      <i className="fa-solid fa-star gray-star" key={"fa-solid" + counter}></i>
    );
    counter++;
  }

  return (
    <div className="courses-card">
      <img src={data.course.image} alt={data.course.tabs}></img>
      <h5>{data.course.title}</h5>
      <p className="author-name">{data.course.author}</p>
      <span>
        <span className="rating-num">{data.course.rating}</span>
        <span className="rating-stars">{stars}</span>
        <span className="num-of-students">{data.course.people}</span>
      </span>
      <div className="course-price">
        {data.course.price} <strike> {data.course.oldPrice}</strike>{" "}
      </div>
    </div>
  );
}

export default Card;


