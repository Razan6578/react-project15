import { createBrowserRouter } from "react-router";
import App from "../../App";
import AboutUs from "../../pages/AboutUs";
import ProductList from "../../pages/ProductList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/about",
    Component: AboutUs,
  },
  {
    path: "/products",
    Component: ProductList,
  }
]);