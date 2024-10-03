import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layout/layout";
import PlanIgualdad from "../pages/PlanIgualdad";
import Femsenior from "../pages/femsenior/Femsenior";
import Events from "../pages/Events";
import Services from "../pages/Services";
import Employment from "../pages/Employment";
import Resources from "../pages/Resources";
import SignInUpForm from "../components/forms/logInForm/SignInUpForm"
import RSForms from "../pages/RSForms";
import FSForms from "../pages/FSForms";

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
        element: <SignInUpForm />, 
      },
      {
        path: "reverso-social/signin",
        element: <SignInUpForm />, 
      },
      {
        path: "formulario/:formType",
        element: <RSForms />,
      },
      {
        path: "formulariofs/:formType",
        element: <FSForms />,
      },
    ],
  },
]);

export default router;
