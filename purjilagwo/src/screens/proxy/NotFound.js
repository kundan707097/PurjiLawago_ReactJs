import React from "react";

const notFoundStyle = {
  textAlign: "center",
  margin: "100px auto",
  fontSize: "24px",
  fontFamily: "Arial, sans-serif",
  color: "#333",
};

const NotFound = () => {
  return (
    <div style={notFoundStyle}>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;