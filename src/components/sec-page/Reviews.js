import React from "react";
import styles from "./styles/reviews.module.css";
import Stars from "./Stars";
import { useState } from "react";
function Reviews(data) {
  let check = data.allData.reviews.length > 10;

  const getReviews = () => {
    let listVal = [];
    data.allData.reviews.forEach((element) => {
      let val = (
        <div className={styles.mainDiv}>
          <div className={styles.leftDiv}>
            <div className={styles.circleName}>
              <span className={styles.letterCircle}>
                {element.name.substring(0, 1)}
              </span>
            </div>
          </div>

          <div className={styles.reigthDiv}>
            <div className={styles.name}>{element.name}</div>
            <span className={styles.time}>
              {" "}
              {<Stars rate={element.rate} />} {element.time}
            </span>
            <p className={styles.revContent}>{element.content} </p>
            <div className={styles.circles}>
              <div className={styles.circleLike}>
                <span className={styles.handUpCircle}>
                  <i className="fa-regular fa-thumbs-up"></i>
                </span>
              </div>
              <div className={styles.circleLike}>
                <span className={styles.handDownCircle}>
                  <i className="fa-regular fa-thumbs-down"></i>
                </span>
              </div>
              <a className={styles.report} href="#">
                Report
              </a>
            </div>
          </div>
        </div>
      );
      listVal.push(val);
    });
    return listVal;
  };

  const getFirstTenItems = () => {
    let arrLength =
      data.allData.reviews.length <= 10 ? data.allData.reviews.length : 10;
    let firstItems = [];
    for (let i = 0; i < arrLength; i++) {
      firstItems.push(getReviews()[i]);
    }
    return firstItems;
  };

  const getMoreItem = () => {
    let moreItems = [];
    for (let i = 10; i < data.allData.reviews.length && check; i++) {
      moreItems.push(getReviews()[i]);
    }
    return moreItems;
  };

  const [more, setmore] = useState(false);
  const changeMoreItem = () => {
    setmore((e) => !e);
  };
  let arrVal = ["more", "less"];
  return (
    <>
      <p className={styles.title}>Reviews</p>
    
      {getFirstTenItems()}
      {more && getMoreItem()}
      <button
        className={`${styles.moreItemBtn}  ${!check && styles.moreItemBtnHide}`}
        onClick={changeMoreItem}
      >
        See {more ? arrVal[1] : arrVal[0]} reviews
      </button>
    </>
  );
}

export default Reviews;
