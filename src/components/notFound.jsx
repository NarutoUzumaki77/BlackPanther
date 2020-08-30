import React from "react";

const NotFound = () => {
  return (
    <div className="center">
      <i
        class="fa fa-frown-o"
        aria-hidden="true"
        style={{ fontSize: "200px" }}
      ></i>
      <br />
      <span style={{ fontSize: "50px", fontWeight: "bold" }}>404</span>
      <p style={{ fontSize: "30px" }}>Page Not Found</p>
    </div>
  );
};

export default NotFound;
