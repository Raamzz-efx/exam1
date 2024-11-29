import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <div style={navContainerStyle}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/add-blog" style={linkStyle}>
          Add Blog
        </Link>
      </div>
    </nav>
  );
};

const navbarStyle = {
  padding: "10px 20px",
  backgroundColor: "#007bff", // Blue background
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  position: "sticky", // Sticks to the top of the page
  top: 0,
  zIndex: 1000,
};

const navContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const linkStyle = {
  margin: "0 15px",
  color: "#fff", // White text for contrast
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px",
  textTransform: "uppercase",
  transition: "color 0.3s ease", // Smooth transition effect on hover
};

linkStyle[":hover"] = {
  color: "#ffcc00", // Yellow color on hover
};

export default Navbar;
