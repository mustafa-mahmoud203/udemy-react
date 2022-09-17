import React from 'react'
import styles from '../Assets/Styles/appStyles.module.css';
function Footer() {
  return (
    <>
     <footer>
      <div className={styles.itemsLang}>
        <div className={styles.footerListItems}>
          <div>
            <dl>
              <dd><a href="#">Udemy Business</a></dd>
              <dd><a href="#">Teach on Udemy</a></dd>
              <dd><a href="#">Get the app</a></dd>
              <dd><a href="#">About us</a></dd>
              <dd><a href="#">Contact us</a></dd>
            </dl>
          </div>
          <div>
            <dl>
              <dd><a href="#">Careers</a></dd>
              <dd><a href="#">Blog</a></dd>
              <dd><a href="#">Help and Support</a></dd>
              <dd><a href="#">Affiliate</a></dd>
              <dd><a href="#">Investors</a></dd>
            </dl>
          </div>
          <div>
            <dl>
              <dd><a href="#">Terms</a></dd>
              <dd><a href="#">Privacy policy</a></dd>
              <dd><a href="#">Cookie settings</a></dd>
              <dd><a href="#">Sitemap</a></dd>
              <dd><a href="#">Accessibility statement</a></dd>
            </dl>
          </div>
        </div>
        <div className={styles.lang}>
          <i className={`${styles.langIconAndParagraph} fa-solid fa-globe`}></i>
          <p className={styles.langIconAndParagraph}>English</p>
        </div>
      </div>

      <div className={styles.fooUdemyIcon}>
        <div>
          <a href="#" className={styles.fooLogo}
            ><img className={styles.fooLogoImg} src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="udemy image"
          /></a>
        </div>
        <div className={styles.endFoo}>© 2022 Udemy, Inc.</div>
      </div>
    </footer>
    </>
  )
}

export default Footer