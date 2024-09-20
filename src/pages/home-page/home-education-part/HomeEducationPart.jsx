import styles from "../HomePage.module.scss";

function HomeEducationPart() {
  return (
    <>
      <div className={styles.frame}>
        <h1>Education</h1>
        <ul className={styles.frame}>
          <li>
            <h2>Profession studies of Pedagogy (Informatics)</h2>
            <h3>Mykolas Romeris University</h3>
            <h4>September 2024 - present</h4>
          </li>
        </ul>
        <ul className={styles.frame}>
          <li>
            <h2>Full-Stack Programming (MERN stack)</h2>
            <h3>Iamjunior</h3>
            <h4>June 2024 - August 2024</h4>
          </li>
        </ul>
        <ul className={styles.frame}>
          <li>
            <h2>Full-Stack Programming (Java)</h2>
            <h3>CodeAcademy</h3>
            <h4>September 2023 - December 2023</h4>
          </li>
        </ul>
        <ul className={styles.frame}>
          <li>
            <h2>Master&apos;s Degree in Transport Machinery Engineering</h2>
            <h3>Vytautas Magnus University Agriculture Academy</h3>
            <h4>September 2021 - June 2023</h4>
          </li>
        </ul>
        <ul className={styles.frame}>
          <li>
            <h2>
              Bachelor&apos;s Degree in Transport and Logistics Engineering
            </h2>
            <h3>Vytautas Magnus University Agriculture Academy</h3>
            <h4>September 2017 - June 2021</h4>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HomeEducationPart;
