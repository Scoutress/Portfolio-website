import { RouterProvider } from "react-router-dom";
import Router from "./navigation/Router";
import "./styles/global.scss";

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
