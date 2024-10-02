import { createBrowserRouter } from "react-router-dom";
import CoverageOverTimeMain from "./components/coverage_over_time/Main";
import LayoutMain from "./components/layout/Main";
import TestingMain from "./components/testing/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "",
        element: <TestingMain />,
      },
      {
        path: "coverage-over-time",
        element: <CoverageOverTimeMain />,
      },
    ],
  },
]);
