import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

export default router;
