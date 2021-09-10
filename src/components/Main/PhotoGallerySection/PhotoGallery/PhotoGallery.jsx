import React from 'react';
import ImageGallery from 'react-image-gallery';
import './PhotoGallery.css';

import PG1 from '../../../../img/MainImg/PhotoGalleryImg/PG1.jpg';
import PG2 from '../../../../img/MainImg/PhotoGalleryImg/PG2.jpg';
import PG3 from '../../../../img/MainImg/PhotoGalleryImg/PG3.jpg';
import PG4 from '../../../../img/MainImg/PhotoGalleryImg/PG4.jpg';
import PG5 from '../../../../img/MainImg/PhotoGalleryImg/PG5.jpg';
import PG6 from '../../../../img/MainImg/PhotoGalleryImg/PG6.jpg';
import PG7 from '../../../../img/MainImg/PhotoGalleryImg/PG7.jpg';
import PG8 from '../../../../img/MainImg/PhotoGalleryImg/PG8.jpg';
import PG9 from '../../../../img/MainImg/PhotoGalleryImg/PG9.jpg';
import PG10 from '../../../../img/MainImg/PhotoGalleryImg/PG10.jpg';
import PG11 from '../../../../img/MainImg/PhotoGalleryImg/PG11.jpg';
import PG12 from '../../../../img/MainImg/PhotoGalleryImg/PG12.jpg';
import PG13 from '../../../../img/MainImg/PhotoGalleryImg/PG13.jpg';
import PG14 from '../../../../img/MainImg/PhotoGalleryImg/PG14.jpg';
import PG15 from '../../../../img/MainImg/PhotoGalleryImg/PG15.jpg';
import PG16 from '../../../../img/MainImg/PhotoGalleryImg/PG16.jpg';
import PG17 from '../../../../img/MainImg/PhotoGalleryImg/PG17.jpg';
import PG18 from '../../../../img/MainImg/PhotoGalleryImg/PG18.jpg';
import PG19 from '../../../../img/MainImg/PhotoGalleryImg/PG19.jpg';
import PG20 from '../../../../img/MainImg/PhotoGalleryImg/PG20.jpg';
import PG21 from '../../../../img/MainImg/PhotoGalleryImg/PG21.jpg';
import PG22 from '../../../../img/MainImg/PhotoGalleryImg/PG22.jpg';
import PG23 from '../../../../img/MainImg/PhotoGalleryImg/PG23.jpg';
import PG24 from '../../../../img/MainImg/PhotoGalleryImg/PG24.jpg';
import PG25 from '../../../../img/MainImg/PhotoGalleryImg/PG25.jpg';
import PG26 from '../../../../img/MainImg/PhotoGalleryImg/PG26.jpg';
import PG27 from '../../../../img/MainImg/PhotoGalleryImg/PG27.jpg';
import PG28 from '../../../../img/MainImg/PhotoGalleryImg/PG28.jpg';
import PG29 from '../../../../img/MainImg/PhotoGalleryImg/PG29.jpg';
import PG30 from '../../../../img/MainImg/PhotoGalleryImg/PG30.jpg';
import PG31 from '../../../../img/MainImg/PhotoGalleryImg/PG31.jpg';
import PG32 from '../../../../img/MainImg/PhotoGalleryImg/PG32.jpg';
import PG33 from '../../../../img/MainImg/PhotoGalleryImg/PG33.jpg';
import PG34 from '../../../../img/MainImg/PhotoGalleryImg/PG34.jpg';
import PG35 from '../../../../img/MainImg/PhotoGalleryImg/PG35.jpg';
import PG36 from '../../../../img/MainImg/PhotoGalleryImg/PG36.jpg';

const images = [
  {
    original: PG1,
    thumbnail: PG1,
  },
  {
    original: PG2,
    thumbnail: PG2,
  },
  {
    original: PG3,
    thumbnail: PG3,
  },
  {
    original: PG4,
    thumbnail: PG4,
  },
  {
    original: PG5,
    thumbnail: PG5,
  },
  {
    original: PG6,
    thumbnail: PG6,
  },
  {
    original: PG7,
    thumbnail: PG7,
  },
  {
    original: PG8,
    thumbnail: PG8,
  },
  {
    original: PG9,
    thumbnail: PG9,
  },
  {
    original: PG10,
    thumbnail: PG10,
  },
  {
    original: PG11,
    thumbnail: PG11,
  },
  {
    original: PG12,
    thumbnail: PG12,
  },

  {
    original: PG13,
    thumbnail: PG13,
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
    original: PG18,
    thumbnail: PG18,
  },
  {
    original: PG19,
    thumbnail: PG19,
  },

  {
    original: PG20,
    thumbnail: PG20,
  },

  {
    original: PG21,
    thumbnail: PG21,
  },

  {
    original: PG22,
    thumbnail: PG22,
  },

  {
    original: PG23,
    thumbnail: PG23,
  },

  {
    original: PG24,
    thumbnail: PG24,
  },

  {
    original: PG25,
    thumbnail: PG25,
  },
  {
    original: PG26,
    thumbnail: PG26,
  },

  {
    original: PG27,
    thumbnail: PG27,
  },

  {
    original: PG28,
    thumbnail: PG28,
  },

  {
    original: PG29,
    thumbnail: PG29,
  },
  {
    original: PG30,
    thumbnail: PG30,
  },

  {
    original: PG31,
    thumbnail: PG31,
  },

  {
    original: PG32,
    thumbnail: PG32,
  },

  {
    original: PG33,
    thumbnail: PG33,
  },

  {
    original: PG34,
    thumbnail: PG34,
  },

  {
    original: PG35,
    thumbnail: PG35,
  },

  {
    original: PG36,
    thumbnail: PG36,
  },
];

class PhotoGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}
export default PhotoGallery;
