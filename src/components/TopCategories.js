import React from 'react'
import { useState, useEffect } from 'react';
import Loading from "./Loading";
import Error from "./Error";
import TopCategoriesCard from './TopCategoriesCard';
import styles from "../Assets/Styles/topCategories.module.css";
function TopCategories() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState("");
    
    useEffect(() => {
      setLoading(true);
      setData("");
      setError(false);
    fetch("http://localhost:3005/categories")
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
    
      let listOfCategories = data.map((categories) => {
        return <TopCategoriesCard categories={categories} key={categories.id} />;
      });
      
      return (
        <>
        <section className={styles.topCategoriesContainer}>
          <span className={styles.topCategoriesTitle}>Top categories</span>
            <div className={styles.topCategories}>
                {listOfCategories}
            </div>
        </section>
        </>
      );
    }
}

export default TopCategories