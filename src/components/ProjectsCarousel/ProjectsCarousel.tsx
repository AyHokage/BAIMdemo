// ProjectCarousel.tsx

import React, { useState } from 'react';
import ExportedImage from "next-image-export-optimizer";; // Import the Next.js ExportedImage component
import styles from './ProjectsCarousel.module.css'; // Import your CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft as caretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight as caretRight } from '@fortawesome/free-solid-svg-icons';
import Project from '../Project/Project';
 
const ProjectCarousel = ({imagesArr}: any) => {
 
  const [selected, setSelected] = useState(0) 

  const gap = 16;
  const [width, setWidth] = useState<number>(0);
  const carouselRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    // Update the width when the window is resized
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize width
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleScroll = (scrollBy: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy(scrollBy, 0);
    } 
  }; 

  return ( 
    <div className={styles.carousel}> 
    <h2 className={styles.heading}>Наши проекты:</h2>
    <div className={styles.wrapper}>
      <div className={styles.carousel} ref={carouselRef}>
      
      <button className={`${styles.nextButton} ${styles.arrow}`} onClick={() => handleScroll(width + gap)}><FontAwesomeIcon style={{fontSize: '1rem'}} className="fa-solid fa-caret-right" icon={caretRight} /></button>
      <button className={`${styles.prevButton} ${styles.arrow}`} onClick={() => handleScroll(-(width + gap))}><FontAwesomeIcon style={{fontSize: '1rem'}} className="fa-solid fa-caret-left" icon={caretLeft} /></button>
      
        <div className={styles.content}>
            {imagesArr.map((project: string, i: number) => i === selected ? <div key={i} className={styles.item}><Project index={i} setSelected={setSelected} selected={true} project={project} /></div> : <div key={i} className={styles.item}><Project index={i} setSelected={setSelected} selected={false} project={project} /></div> )}
          
        </div>
        
      </div>
      
    </div>
    </div>
  );
};

export default ProjectCarousel;
