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
  Booking,
  CompleteOrder,
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
        path: "/my-new-trip",
        element: <NewTrip />,
      },
      {
        path: "/trip/:id",
        element: <Trip />,
      },
      {
        path: "/ticket/:id",
        element: <Ticket />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/complete-order",
        element: <CompleteOrder />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
