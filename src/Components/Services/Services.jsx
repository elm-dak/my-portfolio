import React from 'react';
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import { themeContext } from '../../Context';
import { useContext } from "react";
import resum from './resum.pdf';
import { useSpring, animated } from "react-spring";

const Service = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

 // React Spring animations
 const transition = { duration: 1000, type: "spring" };
 const glassesAnimation = useSpring({
   left: "14rem",
   from: { left: "25rem" },
   config: transition,
 });
 const webDevAnimation = useSpring({
   left: "-4rem",
   top: "12rem",
   from: { left: "-11rem", top: "12rem" },
   config: transition,
 });
 const uiuxAnimation = useSpring({
   left: "12rem",
   top: "19rem",
   from: { top: "19rem", left: "25rem" },
   config: transition,
 });

  return (
    <div className="services" id='Services'>
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
        <span>Services</span>
        <spane>
          Take all project I am competent and capable of handling projects  
          both independently<br/> and within a team. 
          <br/>I effectively manage them with creativity and adaptability.
        </spane>
        <a href={resum} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="cards">
      <animated.div style={glassesAnimation}>
          <Card  
            emoji={HeartEmoji}
            heading={'Design'}
            detail={"Figma, Adobe xd, Sketch, Photoshop"}
          />
        </animated.div>

        <animated.div style={webDevAnimation}>
          <Card  
            emoji={Glasses}
            heading={'Software Engineering'}
            detail={"C, C++, Php, Python, MySQL, SQL/PL, SQL/TR"}
          />
        </animated.div>

        <animated.div style={uiuxAnimation}>
          <Card  
            emoji={Humble}
            heading={'Developer'}
            detail={"Html, Css, JavaScript, React, Symfony"}
          />
        </animated.div>

        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
}

export default Service;
