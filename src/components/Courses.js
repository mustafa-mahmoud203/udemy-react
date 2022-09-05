import React from 'react'
import Card from "./Card";
function Courses(data) {
    
   let listOfCards=data.allCourses.map((course)=>{
      return <Card course={course} key={course.id}/>;
});

  return (
    <section className='container-courses'>
      <div className='courses-discription'>
        <span>Expand your career opportunities with Python</span>
        <p>
        Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to...
        </p>
      </div>
      <div className='explore-btn'>
        <a href='#'>Explore {data.allCourses[0].tabs}</a>
      </div>
     
    

      <div className='courses-swiper'>
        {/* <Card course={allCourses.allCourses[0]}></Card> */}
        {listOfCards}
      </div>
    
    </section>
  );
}

export default Courses