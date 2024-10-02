import styles from "./HomeProjectsPart.module.scss";
import photoOfProject1 from "/images/adminStatsPhoto.png";
import photoOfProject2 from "/images/LogoipsumTestWebsite.png";
import photoOfProject3 from "/images/RankupGeneratorExample.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    image: photoOfProject1,
    alt: "Project 1",
    description: "Description for Project 1",
  },
  {
    id: 2,
    image: photoOfProject2,
    alt: "Project 2",
    description: "Description for Project 2",
  },
  {
    id: 3,
    image: photoOfProject3,
    alt: "Project 3",
    description: "Description for Project 3",
  },
  // Should be 1850x800
];

function HomeProjectsPart() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const handleClick = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div className={styles.projectsContainer}>
      <h1>My personal projects</h1>
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          <div
            className={styles.slideContainer}
            onMouseEnter={() => setHoveredIndex(currentIndex)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleClick(projects[currentIndex].id)}
          >
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].alt}
              className={`${styles.slide} ${hoveredIndex === currentIndex ? styles.blur : ""}`}
            />
            {hoveredIndex === currentIndex && (
              <div className={styles.description}>{projects[currentIndex].description}</div>
            )}
          </div>
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
  );
}

export default HomeProjectsPart;
