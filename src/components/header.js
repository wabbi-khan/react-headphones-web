import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { useCart } from "react-use-cart";
import MainContent from "./mainContent";
import Footer from "./footer";
export default function Header() {
  const { totalItems } = useCart();

  return (
    <>
      <nav>
        <div className="logo">Company logo.</div>
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <li>My Cart</li>
          </Link>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <div className="search">
            <span>{totalItems}</span>
            <i class="fas fa-shopping-basket icon"></i>
          </div>
        </Link>
      </nav>
      <MainContent />
      <Footer />
    </>
  );
}
