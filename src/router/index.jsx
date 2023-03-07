import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, ProductDetail, AboutMe } from "../pages";

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
  {
    path: "/about",
    element: <AboutMe />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
