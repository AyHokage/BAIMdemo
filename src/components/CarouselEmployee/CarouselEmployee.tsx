import React, { useState, useEffect } from 'react';
import styles from './CarouselEmployee.module.css';
import { Props } from '@/types';


const Carousel: React.FC<Props> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleSlides = 3;

  const goToPrevSlide = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const goToNextSlide = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, items.length - maxVisibleSlides));
  };

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === items.length - maxVisibleSlides;

  return (
    <div className={styles['carousel-wrapper']}>
      {items.length > maxVisibleSlides && !isFirstSlide && (
        <div className={styles['btnDiv']}><button className={styles['prev-button']} onClick={goToPrevSlide}>&#9650;</button></div>
      )}
      <div className={styles['carousel-container']}>
        <div className={styles['carousel-slide']} style={{ transform: `translateY(-${currentIndex * (100 / maxVisibleSlides)}%)`, transition: 'transform 0.5s ease-in-out' }}>
          {items.map((item, index) => (
            <div key={index} className={styles['carousel-item']}>
              <div className={styles.circle}></div>
              <div className={styles.text}>{item.description}</div>
            </div>
          ))}
        </div>
      </div>
      {items.length > maxVisibleSlides && !isLastSlide && (
        <div className={styles['btnDiv']}>
          <button className={styles['next-button']} onClick={goToNextSlide}>&#9660;</button>

        </div>
      )}
    </div>
  );
};

export default Carousel;
