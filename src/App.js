import React from "react";
import "./App.css";
import Header from "./components/header";
import Cart from "./components/Cart";
// import { Route, Routes } from "react-router";
import { CartProvider } from "react-use-cart";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <div className="container">
        <CartProvider>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </div>
    </>
  );
}

export default App;
