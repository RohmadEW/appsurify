import { createBrowserRouter } from "react-router-dom";
import TestingMain from "./components/testing/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <TestingMain />,
  },
]);
