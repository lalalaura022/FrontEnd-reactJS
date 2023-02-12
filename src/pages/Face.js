import React from 'react';
import './Face.css';
import Cleanser from './images/cleanser.jpg';
import Exfoliator from './images/exfoliator.jpg';
import Toner from './images/toner.jpg';
import Moisturizer from './images/moisturizer.jpg';
import Mask from './images/mask.jpg';
import BackgroundPicture from "./BackgroundPicture";

const Face = () => {
  return (
    <div className="SkincareForFace">
      <h1>Skincare for Face</h1>
      <p>Taking care of your facial skin is important for maintaining a healthy and youthful appearance. Here are some tips for a daily skincare routine:</p>
      <div className="SkincareForFace-grid">
        <div className="SkincareForFace-item">
          <img src={Cleanser} alt="Cleanser" />
          <h2>Cleanse</h2>
          <p>Cleanse your face twice a day with a gentle cleanser to remove dirt, oil, and makeup.</p>
        </div>
        <div className="SkincareForFace-item">
          <img src={Exfoliator} alt="Exfoliator" />
          <h2>Exfoliate</h2>
          <p>Exfoliate once or twice a week to remove dead skin cells and unclog pores.</p>
        </div>
        <div className="SkincareForFace-item">

          <img src={Toner} alt="Toner" />
          <h2>Tone</h2>
          <p>Use a toner to balance the pH of your skin and prepare it for moisturizing.</p>
        </div>
        <div className="SkincareForFace-item">
          <img src={Moisturizer} alt="Moisturizer" />
          <h2>Moisturize</h2>
          <p>Apply a daily moisturizer with SPF to protect your skin from sun damage.</p>
        </div>
        <div className="SkincareForFace-item">
          <img src={Mask} alt="Mask" />
          <h2>Mask</h2>
          <p>Use a weekly face mask to provide deep hydration and nourishment.</p>
        </div>
      </div>
      <br></br>
      <BackgroundPicture
    backgroundImage="https://wayofwill.com/wp-content/uploads/2022/03/two-women-smiling.jpeg"
    style={{
      height: "60vh"
      
    }}
  >
  </BackgroundPicture>
    </div>
  );
};

export default Face;
