import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Routes from "./Routes";
import Root from "./root/Root";
import HomePage from "../pages/home-page/HomePage";
import ProjectDetailsPage from "../pages/project-details-page/ProjectDetailsPage";

const Router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Routes.homePage.link,
        element: <HomePage />,
      },
      {
        path: Routes.projectDetailsPage.link,
        element: <ProjectDetailsPage />,
      },
      {
        path: Routes.errorPage.link,
        element: <ErrorPage />,
      },
    ],
  },
]);

export default Router;
