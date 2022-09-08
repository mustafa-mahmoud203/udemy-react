import React from 'react'
import styles from '../appStyles.module.css';

function NavHeader() {
  return (
    <header>
    <nav>
      <div className={`drawer-menu ${styles.drawerMenuStyle}`}><i className="fa-solid fa-bars"></i></div>
      <div className={`logo ${styles.logoStyle}`}>
        <a href="#"><img className={styles.logoImgStyle} src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="udemy image" /></a>
      </div>

      <div className="nav-item-Categories"><a className={styles.navItemCategoriesLinkStyle}>Categories</a></div>

      <div className={`container-search ${styles.containerSearchStyle}`}>
        <form className={`search-bar ${styles.searchBarStyle}`} id="search">
          <button className={styles.searchBarButtonStyle} type="submit" id="search_btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <input
            type="text"
            placeholder="Search for anything"
            className={`filter-el ${styles.searchBarInputStyle}`}
          />
        </form>
      </div>

      <div className={`nav-items ${styles.navItemsStyle}`}>
        <div className="udemy-business">
          <a className={styles.navItemsLinkStyle} href="#" target="_blank">Udemy Business</a>
        </div>
        <div className="Teach-on-udemy">
          <a className={styles.navItemsLinkStyle} href="#">Teach on Udemy</a>
        </div>
      </div>

      <div className={`search-shopping-icons ${styles.searchShoppingIconsStyle}`}>
        <div className={`search-icon ${styles.searchIconStyle}`}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className={`shopping-icon ${styles.shoppingIconStyle}`}>
          <a href="#"> <i className={`fa-solid fa-cart-shopping ${styles.shoppingIconStyle}`}></i></a>
        </div>
      </div>

      <div className={`nav-bottoms ${styles.navBottomsStyle}`}>
        <div className={`log-in ${styles.logInStyle}`}>
          <a className={styles.logInLinkStyle} href="#"> Log in</a>
        </div>

        <div className={`sign-up ${styles.signUpStyle}`}>
          <a className={styles.signUpLinkStyle} href="#">Sign up</a>
        </div>
        <div className={`globle-icon ${styles.globleIconStyle}`} >
          <a className={styles.globleIconLinkStyle} href="#"> <i className="fa-solid fa-globe"></i></a>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default NavHeader