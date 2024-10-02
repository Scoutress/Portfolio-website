import DetailedProjectInfoPart from "./detailed-project-info-part/DetailedProjectInfoPart.jsx";
import styles from "./ProjectDetailsPage.module.scss";
import ProjectMediaPart from "./project-media-part/ProjectMediaPart.jsx";
import { useParams } from "react-router-dom";
import projectsData from "../../data/ProjectsData.js";

function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div id="detailed" className={styles.section}>
          <DetailedProjectInfoPart project={project} />
        </div>
        <div id="media" className={styles.section}>
          <ProjectMediaPart project={project} />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;
