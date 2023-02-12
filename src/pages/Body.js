import React from 'react';
import './Body.css';
import BackgroundPicture from "./BackgroundPicture";

const BodySkinCare = () => {
  return (
    <div className="body-skin-care-container">
      <h1 className="page-title">Body Skin Care</h1>
      <p className="page-description">
        Maintaining healthy skin on your body is just as important as taking care of your face. Here are some products to help keep your skin hydrated and glowing.
      </p>
      <div className="product-container">
        <div className="product">
        <BackgroundPicture
    backgroundImage="https://cdn11.bigcommerce.com/s-gla6430ozo/images/stencil/200x200/products/2654/15531/sachajuan_shiny_citrus_body_lotion_500ml__79359.1612538544.jpg?c=2"
    style={{
      height: "200px",
      width: "200px"
      
    }}
  >
  </BackgroundPicture>
         
          <h2 className="product-title">Body Lotion</h2>
          <p className="product-description">
            A hydrating body lotion is a must for maintaining soft and supple skin. Look for lotions with nourishing ingredients such as shea butter and coconut oil.
          </p>
        </div>
        <div className="product">
        <BackgroundPicture
    backgroundImage="https://www.napofarm.ro/image/cache/catalog/Biotiful%20Brands/produse/nude-body-scrub-200x200.jpg"
    style={{
      height: "200px",
      width: "200px"
      
    }}
  >
  </BackgroundPicture>
          <h2 className="product-title">Body Scrub</h2>
          <p className="product-description">
            Exfoliating your skin regularly is important for removing dead skin cells and revealing brighter, smoother skin. Try a gentle scrub with ingredients like sugar or coffee.
          </p>
        </div>
        <div className="product">
        <BackgroundPicture
    backgroundImage="https://www.sephora.com/productimages/sku/s2226264-main-zoom.jpg?imwidth=160"
    style={{
      height: "200px",
      width: "200px",
      
    }}
  >
  </BackgroundPicture>
          <h2 className="product-title">Body Oil</h2>
          <p className="product-description">
            Body oils can provide deep hydration and nourishment for your skin. Look for oils with antioxidants like vitamin E and essential fatty acids.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BodySkinCare;
