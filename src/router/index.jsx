import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, ProductDetail } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/:id",
    element: <ProductDetail />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
