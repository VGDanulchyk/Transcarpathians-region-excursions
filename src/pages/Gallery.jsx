import React from 'react';
import Logo from '../components/Header/HeaderSection/Logo/Logo';
import HeaderMenu from '../components/Header/HeaderSection/HeaderMenu/HeaderMenu';
import HeaderSection from '../components/Header/HeaderSection/HeaderSection';
import PhotoGallerySection from '../components/Main/PhotoGallerySection/PhotoGallerySection';

const Gallery = () => {
  return (
    <div>
      <HeaderSection>
        <Logo />
        <HeaderMenu />
      </HeaderSection>
      <PhotoGallerySection />
    </div>
  );
};

export default Gallery;
