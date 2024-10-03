import styles from "./HomeProjectsPart.module.scss";
import projectsData from "./../../../data/ProjectsData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const projects = projectsData.map((project) => ({
  id: project.id,
  title: project.name,
  image: project.media, // Should be 1850x800
  alt: project.name,
  status: project.status,
  technologies: project.technologies,
  description: project.description1,
}));

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
              <div className={styles.projectInfo}>
                <div className={styles.title}>
                  <strong>Title: </strong>
                  {projects[currentIndex].title}
                </div>
                <div className={styles.status}>
                  <strong>Status: </strong>
                  {projects[currentIndex].status}
                </div>
                <div className={styles.description}>{projects[currentIndex].description}</div>
                <div className={styles.technologies}>
                  <strong>Technologies: </strong>
                  {projects[currentIndex].technologies}
                </div>
                <div>
                  <strong>Press</strong> for more info
                </div>
              </div>
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
