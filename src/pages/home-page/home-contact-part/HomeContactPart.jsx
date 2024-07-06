import styles from "../HomePage.module.scss";

function HomeContactPart() {
  return (
    <>
      <div className={styles.frame}>
        <h1>Contact Me</h1>
        <form>
          <div>
            <label htmlFor="name">Name/Company</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default HomeContactPart;
