import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <article className={styles.footItem}>
        <p className={styles.title}>Адресса:</p>
        <p> Україна, Закарпатська область, смт. Воловець.</p>
      </article>
      <article className={styles.footItem}>
        <p className={styles.title}>Телефон:</p>
        <p className={styles.phoneText}>
          <a href="tel:+380972472688" className={styles.phone}>
            +38(097) 247 26 88
          </a>
        </p>
        <p className={styles.phoneText}>
          <a href="tel:+380674316246" className={styles.phone}>
            +38(067) 431 62 46
          </a>
        </p>
      </article>
      <article className={styles.footItem}>
        <div className={styles.faceIcon}>
          <SocialIcon url="https://www.facebook.com/profile.php?id=100010266603693" />
        </div>
      </article>
    </footer>
  );
};

export default Footer;
