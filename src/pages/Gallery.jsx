import React from 'react';
import Logo from '../components/Header/HeaderSection/Logo/Logo';
import HeaderMenu from '../components/Header/HeaderSection/HeaderMenu/HeaderMenu';
import HeaderSection from '../components/Header/HeaderSection/HeaderSection';
import PhotoGallerySection from '../components/Main/PhotoGallerySection/PhotoGallerySection';
import FooterSection from '../components/FooterSection/FooterSection';

const Gallery = () => {
  return (
    <section>
      <HeaderSection>
        <Logo />
        <HeaderMenu />
      </HeaderSection>
      <article>
        <PhotoGallerySection />
      </article>
      <FooterSection />
    </section>
  );
};

export default Gallery;
