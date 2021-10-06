import React from 'react';
import Logo from '../components/Header/HeaderSection/Logo/Logo';
import HeaderMenu from '../components/Header/HeaderSection/HeaderMenu/HeaderMenu';
import HeaderSection from '../components/Header/HeaderSection/HeaderSection';
import PhotoGallerySection from '../components/Main/PhotoGallerySection/PhotoGallerySection';
import FooterSection from '../components/FooterSection/FooterSection';
import styles from './Pages.module.scss';

const Gallery = () => {
  return (
    <section className={styles.container}>
      <article>
        <HeaderSection>
          <Logo />
          <HeaderMenu />
        </HeaderSection>
        <article>
          <PhotoGallerySection />
        </article>
      </article>
      <article>
        <FooterSection />
      </article>
    </section>
  );
};

export default Gallery;
