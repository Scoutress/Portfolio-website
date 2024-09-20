import mainStyles from "../HomePage.module.scss";
import useContactForm from "../../../hooks/UseContactForm";
import styles from "./HomeContactPart.module.scss";

function HomeContactPart() {
  const { formData, emailError, handleChange, handleSubmit } = useContactForm();

  return (
    <>
      <div className={mainStyles.frame}>
        <h1>Contact Me</h1>
        <div className={styles.text}>
          <p>
            You can reach me via email: <br />
            lekavicius.justas@gmail.com <br />
            <br />
            Or with this form -&gt; <br />
            <br />
            I live in Kaunas, Lithuania. <br />
            My time zone - EET/EEST.
          </p>
        </div>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name/Company</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {emailError && <p className={mainStyles.error}>{emailError}</p>}
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default HomeContactPart;
