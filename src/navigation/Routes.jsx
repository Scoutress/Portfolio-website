const Routes = {
  homePage: {
    link: "/",
    name: "HomePage",
  },
  projectDetailsPage: {
    link: "/project/:id",
    name: "ProjectDetailsPage",
  },
  errorPage: {
    link: "/*",
    name: "404",
  },
};

export default Routes;
