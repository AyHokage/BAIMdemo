import React, { useState } from 'react';
import styles from './CardsCarousel.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft as caretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight as caretRight } from '@fortawesome/free-solid-svg-icons';

const CardsCarousel = ({ cardType, images }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex >= images.length - 2 ? 0 : prevIndex + 2));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex <= 0 ? images.length - 2 : prevIndex - 2));
  };

  return (
    <>
    <div className={styles.carouselImages}>
      <button className={styles.arrow} onClick={prevSlide}>
        <FontAwesomeIcon style={{ fontSize: '1rem' }} className="fa-solid fa-caret-left" icon={caretLeft} />
      </button> 
      <button className={styles.arrow} onClick={nextSlide}>
        <FontAwesomeIcon style={{ fontSize: '1rem' }} className="fa-solid fa-caret-right" icon={caretRight} />
      </button>
    </div>
    </>
  );
};

export default CardsCarousel;
