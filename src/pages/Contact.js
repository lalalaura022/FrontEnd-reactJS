import React, { useState } from "react";
import ButtonSS from "./Button";
import './Contact.css';

const Contact = () => {
  const [showHeart, setShowHeart] = useState(false);

  const toggleHeart = () => {
    setShowHeart(!showHeart);
  };

  return (
    <div className="Contact">
      <h1>Contact Us</h1>
      <p>
        Have any questions or concerns? Please don't hesitate to reach out to
        us!
      </p>
      <div className="Contact-info">
        <div className="Contact-item">
          <img
            src="https://icon-library.com/images/location-icon-png/location-icon-png-29.jpg"
            alt="Location Icon"
          />
          <h2>Address</h2>
          <p>Piata Romana, Nr 19</p>
        </div>
        <div className="Contact-item">
          <img
            src="https://icon-library.com/images/368540-200.png"
            alt="Phone Icon"
          />
          <h2>Phone</h2>
          <p>(555) 555-5555</p>
        </div>
        <div className="Contact-item">
          <img
            src="https://icon-library.com/images/gmail-icon-png/gmail-icon-png-22.jpg"
            alt="Gmail Icon"
          />
          <h2>Email</h2>
          <p>contact@gmail.com</p>
        </div>
      </div>
      <ButtonSS onClick={toggleHeart} style={{ marginTop: "20px" }}>
        Love!
      </ButtonSS>
      {showHeart && <p style={{ fontSize: "36px" }}>❤️</p>}
    </div>
  );
};

export default Contact;
