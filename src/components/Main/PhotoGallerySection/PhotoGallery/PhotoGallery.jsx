import React from 'react';
import ImageGallery from 'react-image-gallery';
import './PhotoGallery.css';

import PG1 from '../../../../img/MainImg/PhotoGalleryImg/PG1.jpg';
import PG5 from '../../../../img/MainImg/PhotoGalleryImg/PG5.jpg';
import PG14 from '../../../../img/MainImg/PhotoGalleryImg/PG14.jpg';
import PG15 from '../../../../img/MainImg/PhotoGalleryImg/PG15.jpg';
import PG16 from '../../../../img/MainImg/PhotoGalleryImg/PG16.jpg';
import PG17 from '../../../../img/MainImg/PhotoGalleryImg/PG17.jpg';
import PG26 from '../../../../img/MainImg/PhotoGalleryImg/PG26.jpg';
import PG33 from '../../../../img/MainImg/PhotoGalleryImg/PG33.jpg';

const images = [
  {
    original: PG1,
    thumbnail: PG1,
  },

  {
    original: PG5,
    thumbnail: PG5,
  },

  {
    original: PG14,
    thumbnail: PG14,
  },

  {
    original: PG15,
    thumbnail: PG15,
  },
  {
    original: PG16,
    thumbnail: PG16,
  },

  {
    original: PG17,
    thumbnail: PG17,
  },

  {
    original: PG26,
    thumbnail: PG26,
  },

  {
    original: PG33,
    thumbnail: PG33,
  },
];

class PhotoGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}
export default PhotoGallery;
