import PropTypes from "prop-types";
import styles from "./DetailedProjectInfoPart.module.scss";

function DetailedProjectInfoPart({ project }) {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h2 className={styles.title}>{project.name}</h2>
        <p className={styles.status}>
          <strong>Status: </strong>
          {project.status}
        </p>
        <p className={styles.deploying}>
          <strong>Deploying: </strong>
          {project.deploying}
        </p>
        <p className={styles.description}>{project.description1}</p>
        <br />
        <p className={styles.description}>{project.description2}</p>
        <br />
        <p className={styles.description}>{project.description3}</p>
        <br />
        <p className={styles.technologies}>
          <strong>Used technologies and languages: </strong>
          {project.technologies}
        </p>
        <a
          className={styles.description}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>GitHub: </strong>
          {project.github}
        </a>
      </div>
    </div>
  );
}

DetailedProjectInfoPart.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    deploying: PropTypes.string.isRequired,
    description1: PropTypes.string.isRequired,
    description2: PropTypes.string.isRequired,
    description3: PropTypes.string.isRequired,
    technologies: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailedProjectInfoPart;
