import React from 'react'

const notFoundStyle = {
    textAlign: "center",
    margin: "100px auto",
    fontSize: "24px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  };

const DataNotFound = () => {
    
    return (
        <div style={notFoundStyle}>
          <h1>Data Not Available</h1>
        </div>
      );
}

export default DataNotFound