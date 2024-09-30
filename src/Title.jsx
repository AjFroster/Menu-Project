import React from "react";

const Title = ({ text }) => {
  return (
    <div className="section-center">
      <h2>{text ? text : "default title"}</h2>
      <div className="title-underline"></div>
    </div>
  );
};

export default Title;
