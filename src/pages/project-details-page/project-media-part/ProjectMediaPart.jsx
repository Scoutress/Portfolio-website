import PropTypes from "prop-types";
import styles from "./ProjectMediaPart.module.scss";

function ProjectMediaPart({ project }) {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <img src={project.media} alt={`${project.name} screenshot`} />
      </div>
    </div>
  );
}

ProjectMediaPart.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectMediaPart;
