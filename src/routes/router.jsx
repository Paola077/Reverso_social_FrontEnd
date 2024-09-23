import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout/layout";
import PlanIgualdad from "../pages/PlanIgualdad";
import Femsenior from "../pages/Femsenior";
import Events from "../pages/Events";
import Services from "../pages/Services";
import Employment from "../pages/Employment";
import Resources from "../pages/Resources";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="reverso-social" />,
      },
      {
        path: "reverso-social",
        element: <PlanIgualdad />,
      },
      {
        path: "reverso-social/femsenior",
        element: <Femsenior />,
        children: [
          {
            index: true,
            element: <Navigate to="eventos" />,
          },
          {
            path: "eventos",
            element: <Events />,
          },
          {
            path: "servicios",
            element: <Services />,
          },
          {
            path: "empleo",
            element: <Employment />,
          },
          {
            path: "recursos",
            element: <Resources />,
          },
        ],
      },
      {
        path: "reverso-social/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
