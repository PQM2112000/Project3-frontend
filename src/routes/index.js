import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../pages/login/Login";
import { Home } from "../pages/home";
import { Product } from "../pages/product";
import { History } from "../pages/history";
import { Category } from "../pages/category";
import UpdateCategory from "../pages/category/updateCategory";
import AddCategory from "../pages/category/addCategory";
import Logout from "../pages/logout/Logout";
import AddProduct from "../pages/product/addProduct";
import UpdateProduct from "../pages/product/updateProduct";
export const AppRouting = () => {
  const login = localStorage.getItem("login");
  return (
    <Router>
      <Routes>
        <Route path="/" element={login ? <Home /> : <Login />} />
        <Route path="/home" element={login ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={login ? <Product /> : <Login />} />
        <Route
          path="product/addProduct"
          element={login ? <AddProduct /> : <Login />}
        />
        <Route
          path="product/updateProduct"
          element={login ? <UpdateProduct/> : <Login />}
        />
        <Route path="/history" element={login ? <History /> : <Login />} />
        <Route path="/category" element={login ? <Category /> : <Login />} />
        <Route
          path="category/updateCategory"
          element={login ? <UpdateCategory /> : <Login />}
        />
        <Route
          path="category/addCategory"
          element={login ? <AddCategory /> : <Login />}
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};
