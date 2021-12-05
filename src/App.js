import React from "react";
import "./App.css";
import Header from "./components/header";
import Cart from "./components/Cart";
// import { Route, Routes } from "react-router";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <>
      <div className="container">
        <CartProvider>
          <Header />
          <Cart />
        </CartProvider>
      </div>
    </>
  );
}

export default App;
