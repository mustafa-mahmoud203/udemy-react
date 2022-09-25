import React from "react";
import styles from "../../Assets/Styles/courseDataComponentsStyles/instructor.module.css";
import InstructorData from "./InstructorData"
function Instructor(data) {
  const getInstructors = () => {
    
    let listOfInstructors =data.allData.instructor.map(item=>{
      return <InstructorData allData={item}/>
    }) ;
    return listOfInstructors;
  }
  return (
    <>
      <p className={styles.instructor}>Instructor</p>
      <div className={styles.mainDiv}>{getInstructors()}</div>
    </>
  );
}

export default Instructor;
