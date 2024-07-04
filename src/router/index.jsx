import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";

import {
  Home,
  City,
  MyTrip,
  Trip,
  NewTrip,
  Post,
  Ticket,
  Cart,
  NotFound,
} from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cities/:city",
        element: <City />,
      },
      {
        path: "/my-trip",
        element: <MyTrip />,
      },
      {
        path: "/new-trip",
        element: <NewTrip />,
      },
      {
        path: "/trip/:id",
        element: <Trip />,
      },
      {
        path: "/ticket",
        element: <Ticket />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
