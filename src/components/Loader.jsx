import React from "react";
import "./Loader.css"; // Import the CSS file

const Loader = () => {
  return (
    <div className="terminal-loader">
      <div className="terminal-header">
        <div className="terminal-title">Status</div>
        <div className="terminal-controls">
          <div className="control close"></div>
          <div className="control minimize"></div>
          <div className="control maximize"></div>
        </div>
      </div>
      <div className="loader-text">Loading...</div>
    </div>
  );
};

export default Loader;
