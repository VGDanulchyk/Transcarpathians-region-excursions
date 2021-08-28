import React from 'react';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import styles from './PhotoGallerySection.module.scss';

const PhotoGallerySection = () => {
  return (
    <section className={styles.wrapper}>
      <PhotoGallery />
    </section>
  );
};

export default PhotoGallerySection;
