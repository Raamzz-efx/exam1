import React, { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10))); // Limit to 10 posts for brevity
  }, []);

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Blog Dashboard</h2>
      <table style={tableStyle}>
        <thead>
          <tr style={headerRowStyle}>
            <th style={headerCellStyle}>ID</th>
            <th style={headerCellStyle}>Title</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={post.id} style={index % 2 === 0 ? evenRowStyle : oddRowStyle}>
              <td style={cellStyle}>{post.id}</td>
              <td style={cellStyle}>{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Container styles
const containerStyle = {
  padding: "20px",
  textAlign: "center",
  backgroundColor: "#f8f9fa",
  minHeight: "100vh",
};

const headingStyle = {
  fontSize: "24px",
  color: "#343a40",
  marginBottom: "20px",
  fontFamily: "'Arial', sans-serif",
};

// Table styles
const tableStyle = {
  width: "80%",
  margin: "20px auto",
  borderCollapse: "collapse",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  overflow: "hidden",
};

// Header row styles
const headerRowStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
};

const headerCellStyle = {
  padding: "10px",
  fontSize: "16px",
  textTransform: "uppercase",
};

// Row styles
const evenRowStyle = {
  backgroundColor: "#f1f1f1",
};

const oddRowStyle = {
  backgroundColor: "#ffffff",
};

const cellStyle = {
  padding: "10px",
  fontSize: "14px",
  textAlign: "center",
  borderBottom: "1px solid #dee2e6",
};

export default Home;
