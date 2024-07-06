import styles from "../HomePage.module.scss";

function HomeWorkExpPart() {
  return (
    <>
      <div className={styles.frame}>
        <h1>Employment</h1>

        <ul>
          <li className={styles.frame}>
            <h2>Warehouse Worker</h2>
            <h3>UAB &quot;Langvila&quot;, Kaunas, Lithuania</h3>
            <h3>June 2017 - August 2017</h3>
            <h4>Managed the warehouse and production facilities.</h4>
            <h4>
              Manufactured and assembled indoor and outdoor windowsills
              according to orders.
            </h4>
          </li>
          <li className={styles.frame}>
            <h2>Tractor Driver</h2>
            <h3>Gečių ŽŪB, Gečiai, Lithuania</h3>
            <h3>July 2018 - August 2018</h3>
            <h4>Operated and maintained assigned tractor</h4>
            <h4>Transported crops and other goods using a tipper trailer.</h4>
          </li>
          <li className={styles.frame}>
            <h2>Driver</h2>
            <h3>Valdo Lekavičiaus IĮ, Kaunas, Lithuania</h3>
            <h3>July 2019 - August 2019</h3>
            <h4>Worked as a driver with a cargo van.</h4>
            <h4>
              Delivered confectionery products from the factory to
              customers/retailers.
            </h4>
          </li>
          <li className={styles.frame}>
            <h2>Intern</h2>
            <h3>UAB &quot;Mobilis&quot;, Kaunas, Lithuania</h3>
            <h3>June 2020 - July 2020</h3>
            <h4>Performed basic repair tasks for trucks and vans.</h4>
          </li>
          <li className={styles.frame}>
            <h2>Factory Worker</h2>
            <h3>Mondelez Lithuania Production, Kaunas, Lithuania</h3>
            <h3>January 2022 - April 2023</h3>
            <h4>
              Primarily responsible for transporting raw materials and products
              within the production facilities.
            </h4>
          </li>
          <li className={styles.frame}>
            <h2>Project Administrator</h2>
            <h3>&quot;Kaimux&quot; Minecraft Project, Remote</h3>
            <h3>February 2023 - Present</h3>
            <h4>
              Configuring and testing plugins, maintaining servers, providing
              player support, leading the admin team, and recruiting new
              administrators.
            </h4>
          </li>
          <li className={styles.frame}>
            <h2>Warehouse Worker-Driver</h2>
            <h3>UAB &quot;Manrasta&quot;</h3>
            <h3>May 2024 - Present</h3>
            <h4>
              Picking and assembling orders, maintaining warehouse order, and
              delivering goods to customers.
            </h4>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HomeWorkExpPart;
