import { createBrowserRouter } from "react-router-dom";
import { Home, City, MyTrip, Trip, Post, Plan, NotFound } from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/city",
    element: <City />,
  },
  {
    path: "/my-trip",
    element: <MyTrip />,
  },
  {
    path: "/trip",
    element: <Trip />,
  },
  {
    path: "/post/:id",
    element: <Post />,
  },
  {
    path: "/plan",
    element: <Plan />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
