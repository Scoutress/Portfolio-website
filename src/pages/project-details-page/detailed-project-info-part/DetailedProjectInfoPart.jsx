import PropTypes from "prop-types";
import styles from "./DetailedProjectInfoPart.module.scss";

function DetailedProjectInfoPart({ project }) {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h2 className={styles.title}>{project.name}</h2>
        <p className={styles.description}>{project.description}</p>
      </div>
    </div>
  );
}

DetailedProjectInfoPart.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailedProjectInfoPart;
