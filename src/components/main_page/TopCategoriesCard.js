import React from "react";
import styles from "../../Assets/Styles/topCategories.module.css";
function TopCategoriesCard(props) {
  return (
    <>
      <a href="#" className={styles.topCategoriesCardLink}>
        <img
          src={props.categories.image}
          alt={props.categories.name}
          className={styles.topCategoriesCardImg}
        ></img>
        <span className={styles.topCategoriesCardSpan}>
          {props.categories.name} 
        </span>
      </a>
    </>
  );
}

export default TopCategoriesCard;
