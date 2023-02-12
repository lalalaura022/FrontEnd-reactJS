import React from "react";

function BackgroundPicture(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: "cover",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
        ...props.style
      }}
    >
      {props.children}
    </div>
  );
}

export default BackgroundPicture;