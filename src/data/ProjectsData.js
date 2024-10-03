const projectsData = [
  {
    id: 1,
    name: "Administration Statistics for Minecraft server",
    description1:
      "The goal of this project is to collect " +
      "statistical data about each member of the administration, analyze them and, with the help of certain " +
      "algorithms, calculate the percentages of how well the administrator does his job. The result is presented " +
      "as a percentage value and a recommendation for promotion/demotion.",
    description2:
      "This is a project I came up with myself, which I have been developing for about a year and a half. " +
      "I first created it in MS Excel, then recreated it in Google Sheets, and now I'm slowly working on " +
      "creating a fully functional project with a Java application.",
    description3:
      "Currently, data is collected manually, but it is planned to implement automatic data transfer from Minecraft " +
      "servers and other sources. The project is intended for personal use.",
    status: "Work in progress (WIP)",
    deploying: "Not deployed",
    technologies: "Java Spring Boot, Vite, MySQL",
    github: "https://github.com/Scoutress/StatisticsApp",
    media: "/images/adminStatsPhoto.png",
  },
  {
    id: 2,
    name: "Logoipsum Test Website",
    description1:
      "This project is about finding various handymen who provide services at home. This could be plumbing services, " +
      "repair work, painting and so on. The user can choose from the available services and book a time when he " +
      "would like the master to come.",
    description2:
      "This is a website that we created together with our classmates while learning programming. It is not intended " +
      "for deployment. However, it is a decent option for learning purposes.",
    description3:
      "The website includes registration, login, service search, filtering, booking and other functions.",
    status: "Completed",
    deploying: "Will not be deployed",
    technologies: "MERN stack - MongoDB, Express.js, React.js, Node.js.",
    github: "https://github.com/Scoutress/Logoipsum-demo-website",
    media: "/images/LogoipsumTestWebsite.png",
  },
  {
    id: 3,
    name: "Rankup Tasks Generator",
    description1:
      "This project is designed to generate a yml file that contains the Minecraft plugin configuration. " +
      "This is a plugin that tells players the tasks they need to complete in order to advance to the next level.",
    description2:
      "Tasks consist of 7 categories - Dig, Kill, Craft, Place and others. " +
      "Each category has about 20 to 200 different items to perform the action on.",
    description3:
      "The essence of the system is to generate tasks for each level separately, by selecting various " +
      "categories, various items, and with each level steadily increasing the theoretical duration of completing the tasks. " +
      "Photo below shows, how should look like final product of generated configuration.",
    status: "Work in progress (WIP)",
    deploying: "Not deployed",
    technologies: "Java",
    github: "https://github.com/Scoutress/Rankup-tasks-generator",
    media: "/images/RankupGeneratorExample.png",
  },
  {
    id: 4,
    name: "The cost of cooking a meal",
    description1:
      "This was my first programming project that I tried to create during my first programming training. " +
      "The purpose of the project is to calculate the approximate cost of making each dish, taking into account the prices " +
      "of food products and the recipe of each dish. Of course, the operating costs of kitchen equipment are not worth " +
      "calculating, so they are not included.",
    description2:
      "According to my idea, the project administrator has the right to supplement the system with new " +
      "products and to update the prices of existing products as they prevail in the market. This would be " +
      "1 gram, 1 milliliter, etc. prices. Every visiting user would see already existing recipes with prices. " +
      "Each logged-in user could add their own recipes with the exact quantities of the required products and " +
      "the system would automatically calculate the price accordingly.",
    description3:
      "At the moment the project is not working, so unfortunately I have nothing to show. " +
      "I plan to finish and deploy this project in the future.",
    status: "Work in progress (WIP)",
    deploying: "Not deployed",
    technologies: "Java Spring Boot, MySQL, Thymeleaf",
    github: "https://github.com/Scoutress/CodeAcademy-Final-Project",
    media: "/images/CookingCostPage.png",
  },
];

export default projectsData;
