import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Routes from "./Routes";
import Root from "./Root";
import HomePage from "../pages/home-page/HomePage";

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
        path: Routes.errorPage.link,
        element: <ErrorPage />,
      },
    ],
  },
]);

export default Router;
