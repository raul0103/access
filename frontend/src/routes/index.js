import {createBrowserRouter} from "react-router";

import App from "../App.jsx";

import MainLayout from "../layouts/MainLayout.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";

import Register from "../pages/auth/Register.jsx";
import Login from "../pages/auth/Login.jsx";
import Dashboard from "../pages/Dashboard.jsx";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        Component: MainLayout,
        children: [
          {
            index: true,
            Component: Dashboard,
          },
        ],
      },
      {
        Component: AuthLayout,
        children: [
          {path: "register", Component: Register},
          {path: "login", Component: Login},
        ],
      },
    ],
  },
]);

export default router;
