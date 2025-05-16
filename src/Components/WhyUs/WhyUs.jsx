import React from "react";
import styles from "./WhyUs.module.css";
import { assets } from "../../assets/assets.jsx";
import { Link } from "react-router-dom";

const WhyUs = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.maincontainer}>
        <div className={styles.leftcontainer}>
          <img src={assets.whyus} alt="about" className={styles.image} />
        </div>
        <div className={styles.rightcontainer}>
          <h2 className={styles.header}>Why Choose Us</h2>
          <p className={styles.text}>
            At Avs Deals, we are dedicated to providing cutting-edge technology solutions tailored to your unique needs.
            Specializing in security products, computer peripherals, and printer services, our knowledgeable team is here
            to guide you in selecting the right tools to enhance your digital experience. We offer expert advice,
            personalized recommendations, and comprehensive support, ensuring you receive reliable products that protect
            your digital life and deliver exceptional performance. Explore our diverse range of innovative solutions today
            and let us empower you to navigate the digital world with confidence.
          </p>
          <Link to="/contact-us" className={styles.learnbtn}>Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
