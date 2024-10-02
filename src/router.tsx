import { createBrowserRouter } from "react-router-dom";
import LayoutMain from "./components/layout/Main";
import TestingMain from "./components/testing/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "/",
        element: <TestingMain />,
      },
    ],
  },
]);
