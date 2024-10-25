import { createBrowserRouter } from "react-router-dom";
import CoverageOverTimeMain from "./components/coverage_over_time/Main";
import IndividualTestingMain from "./components/individual_testing/Main";
import AuthLayout from "./components/layout/auth/Main";
import { PublicLayout } from "./components/layout/public/Main";
import LoginMain from "./components/login/Main";
import RegisterMain from "./components/register/Main";
import TestingMain from "./components/testing/Main";

export const router = createBrowserRouter([
  // Authenticated routes
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <TestingMain />,
      },
      {
        path: "coverage-over-time",
        element: <CoverageOverTimeMain />,
      },
      {
        path: "individual-testing",
        element: <IndividualTestingMain />,
      },
    ],
  },
  // Public routes
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "",
        element: <LoginMain />,
      },
      {
        path: "register",
        element: <RegisterMain />,
      },
    ],
  },
]);
