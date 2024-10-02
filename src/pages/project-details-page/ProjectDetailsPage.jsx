import DetailedProjectInfoPart from "./detailed-project-info-part/DetailedProjectInfoPart.jsx";
import styles from "./ProjectDetailsPage.module.scss";
import ProjectMediaPart from "./project-media-part/ProjectMediaPart.jsx";

function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div id="detailed" className={styles.section}>
          <DetailedProjectInfoPart />
        </div>
        <div id="media" className={styles.section}>
          <ProjectMediaPart />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
