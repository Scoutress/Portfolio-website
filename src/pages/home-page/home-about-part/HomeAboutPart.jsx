import profileImage from "/images/PortraitPhoto.jpg";
import styles from "./HomeAboutPart.module.scss";
import UseDeviceType from "../../../hooks/UseDeviceType";

function HomeAboutPart() {
  const isMobile = UseDeviceType();

  return (
    <div className={styles.box}>
      {isMobile ? (
        <>
          <div className={styles.mobileImagePart}>
            <img src={profileImage} alt="profileImage" className={styles.profileImage} />
          </div>
          <div className={styles.text}>
            <h1>Justas Lekavičius</h1>
            <p>
              Also in gaming community known as <strong>Scoutress</strong>. <br />
              As a web developer, I am captivated by the boundless flexibility and creative freedom
              that coding offers. The dynamic nature of web development allows me to blend technical
              skills with innovative design, crafting websites that are not only functional but also
              visually engaging. I thrive on solving complex problems and transforming ideas into
              interactive digital experiences. The versatility of programming enables me to adapt to
              various challenges and continuously learn new technologies. My passion lies in
              creating seamless and intuitive user interfaces, ensuring that every project I work on
              is both efficient and aesthetically pleasing. Embracing the ever-evolving landscape of
              web development, I am dedicated to delivering high-quality solutions that meet the
              unique needs of each client.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className={styles.imagePart}>
            <img src={profileImage} alt="profileImage" className={styles.profileImage} />
          </div>
          <div className={styles.text}>
            <h1>Justas Lekavičius</h1>
            <p>
              Also in gaming community known as <strong>Scoutress</strong>. <br />
              As a web developer, I am captivated by the boundless flexibility and creative freedom
              that coding offers. The dynamic nature of web development allows me to blend technical
              skills with innovative design, crafting websites that are not only functional but also
              visually engaging. I thrive on solving complex problems and transforming ideas into
              interactive digital experiences. The versatility of programming enables me to adapt to
              various challenges and continuously learn new technologies. My passion lies in
              creating seamless and intuitive user interfaces, ensuring that every project I work on
              is both efficient and aesthetically pleasing. Embracing the ever-evolving landscape of
              web development, I am dedicated to delivering high-quality solutions that meet the
              unique needs of each client.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default HomeAboutPart;
