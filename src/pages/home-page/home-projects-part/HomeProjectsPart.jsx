import styles from "./HomeProjectsPart.module.scss";
import tempPhotoOfProject1 from "/images/statistics-app-temp.png";
import tempPhotoOfProject2 from "/images/conditions-of-newbie-admins.png";
import { useState } from "react";

const projects = [
  { id: 1, image: tempPhotoOfProject1, alt: "Project 1" },
  { id: 2, image: tempPhotoOfProject2, alt: "Project 2" },
];

function HomeProjectsPart() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <>
      <div className={styles.projectsContainer}>
        <h1>My personal projects</h1>
        <div className={styles.carouselContainer}>
          <div className={styles.carousel}>
            {projects.map((project, index) => {
              return (
                index === currentIndex && (
                  <img
                    key={project.id}
                    src={project.image}
                    alt={project.alt}
                    className={styles.slide}
                  />
                )
              );
            })}
          </div>
          <div className={styles.buttonsContainer}>
            <button onClick={prevSlide} className={styles.prevButton}>
              &#10094;
            </button>
            <button onClick={nextSlide} className={styles.nextButton}>
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeProjectsPart;
