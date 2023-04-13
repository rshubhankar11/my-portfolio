import React from "react";
import Footer from "./Footer";

const Base = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#c2c2d6",
      }}
    >
      {children}
      <Footer />
    </div>
  );
};

export default Base;
