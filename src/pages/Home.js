import React from 'react';
import './Home.css';
import Shakira from './images/shakira.jpg';
import teamleader from './images/team-leader.jpg';
import prodanca from './images/prodanca.jpg';
import FooterNav from './FooterNav';



const Home = () => {
  return (
    <div className="home">
      
       <h1 className="header">Welcome to <br /> Skincare Central</h1>
      <p>Taking care of your skin is crucial for maintaining good health and a youthful appearance. Skincare not only improves the appearance of your skin, but it can also help to prevent a variety of skin conditions, such as acne, wrinkles, and sun damage. </p>
      <h2 className="important">Meet the Specialists</h2>
      <ul className="specialists">
        <li>
        <img src={Shakira} className="specialist-image" />
        <h3 className="specialist-name">Dr. Jane Doe</h3>
          <p>Dr. Jane Doe is a renowned dermatologist with over 20 years of experience. She is known for her expertise in treating acne and other skin conditions. </p>
        </li>
        <li>
        <img src={prodanca} className="specialist-image" />
        <h3 className="specialist-name">Dr. John Smith</h3>
          <p>Dr. John Smith is a highly respected cosmetic surgeon with a passion for helping people achieve their best appearance. He has been at the forefront of many advances in skincare technology and is always looking for ways to improve patient outcomes. </p>
        </li>
      </ul>
      <h2 className="important">Our Team Leader</h2>
      <img src={teamleader}className="team-leader-image" />
      <p>Meet Sarah, our team leader and the driving force behind Skincare Central. With her passion for skincare and her commitment to providing the best care for her patients, she is the perfect person to guide you on your skincare journey.</p>
      <FooterNav/>
    </div>
  );
};

export default Home;
