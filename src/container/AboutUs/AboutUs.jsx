import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Welcome to Gericht, where passion for flavor and exceptional hospitality unite. Our talented chefs create exquisite dishes using the finest ingredients, ensuring a culinary journey that tantalizes the senses. Experience our warm ambiance, attentive service, and attention to detail, as we strive to make every visit to Gericht an unforgettable dining experience.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Since 1999, Gericht has delighted diners in Connaught Place with its culinary prowess and warm hospitality. From our humble beginnings, we have grown into a beloved establishment, known for our exquisite flavors and attentive service. With a rich history rooted in passion and innovation, we invite you to join us and be a part of our continuing culinary legacy.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
