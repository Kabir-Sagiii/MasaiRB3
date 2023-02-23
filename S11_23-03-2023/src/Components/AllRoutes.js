import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Help from "./Help";
import Products from "./Products";
import Users from "./Users";
import PageNotFound from "./PageNotFound";
import UserDetails from "./UserDetails";
import ProductDetails from "./ProductDetails";

function AllRoutes(props) {
  var routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/help",
      element: <Help />,
    },
    {
      path: "/userdetails",
      element: <UserDetails />,
    },
    {
      path: "/productdetails/:id",
      element: <ProductDetails />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ];
  //   return (
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/users" element={<Users />} />
  //       <Route path="/products" element={<Products />} />
  //       <Route path="/help" element={<Help />} />
  //       <Route path="*" element={<PageNotFound />} />
  //     </Routes>
  //   );
  return (
    <Routes>
      {routes.map((ele, i) => {
        return <Route key={i + 1} path={ele.path} element={ele.element} />;
      })}
    </Routes>
  );
}

export default AllRoutes;
