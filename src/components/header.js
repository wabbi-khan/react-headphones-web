import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import "./header.css";
import MainContent from "./mainContent";
export default function Header() {
  const onclick = () => {
    console.log("object");
  };
  return (
    <>
      <nav>
        <div className="logo">Company logo.</div>
        <ul>
          <li>Home</li>
          <li>Our Products</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <Link to="/cart">
          <div className="search">
            <i class="fas fa-search icon"></i>
            <i class="fas fa-shopping-basket icon" onClick={onclick}>
              k
            </i>
          </div>
        </Link>
      </nav>
      <MainContent />
      <Footer />
    </>
  );
}
