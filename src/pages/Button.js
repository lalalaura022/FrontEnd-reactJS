import React, { useState } from "react";

const ButtonSS = props => {
  const [hover, setHover] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: hover ? "orange" : "white",
          color: hover ? "white" : "black",
          ...props.style
        }}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default ButtonSS;
