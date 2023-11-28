import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import UserLogin from "./pages/UserLogin";
import CompanyLogin from "./pages/CompanyLogin";
import UserRegister from "./pages/UserRegister";
import CompanyRegister from "./pages/CompanyRegister";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/user/login",
    element: <UserLogin />,
  },
  {
    path: "/company/login",
    element: <CompanyLogin />,
  },
  {
    path: "/user/register",
    element: <UserRegister />,
  },
  {
    path: "/company/register",
    element: <CompanyRegister />,
  },
]);

export default router;
