import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import me from '../../img/me.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext} from "react";
import { Link } from "react-scroll"; // Removed Framer Motion import
import Modal from 'react-modal';
import { useSpring, animated } from "react-spring";
import { useState } from "react";

const Intro = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:Dakoukyelmestapha@proton.me"; // Replace with your email address
  };
  // Transition
  const transition = { duration: 2000, tension: 170, friction: 20 }; 

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // React Spring animations
  const glassesEmojiAnimation = useSpring({
    left: "-12%",
    from: { left: "-36%" },
    config: transition,
  });

  const webDevAnimation = useSpring({
    left: "68%",
    from: { top: "-4%", left: "74%" },
    config: transition,
  });

  const bestDesignAnimation = useSpring({
    left: "0rem",
    from: { left: "9rem", top: "18rem" },
    config: transition,
  });

  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    
  <div className="intro">
  <div className="i-left">
      <div className="i-name">
          <span style={{color : darkMode? 'white': ''}}>Hy! I Am </span>
          <span>Dakouky El Mestapha</span>
          <span>As a student, I am proficient 
            in Software Engineering and Data Engineering,
             with a strong foundation in 
             web design and development. </span>
      </div>

      <button className="button i-button" onClick={handleEmailClick}>
          Talk me
      </button>

    <div className="i-icons">
        <a href='https://github.com/elm-dak'>        
            <img src={Github} alt="" />
        </a>
       <a href="https://www.instagram.com/elm_dak/">
       <img src={Instagram} alt="" />
        </a> 
        <a href="https://www.linkedin.com/in/elmestapha-dakouky-62a892269/">
        <img src={LinkedIn} alt="" />
        </a>
    </div>

     
  </div>
  <div className="i-right">
  <img src={Vector1} alt="" />
  <img src={Vector2} alt="" />
  <img src={me} alt="" />
  <animated.img
      style={glassesEmojiAnimation}
      src={glassesimoji}
      alt="" />
    
  <animated.div 
  className="floating-div"
   style={webDevAnimation}
    >
    <FloatingDiv image={Crown} txt1='Data ' txt2='Engineering' />
  </animated.div>
  <animated.div   style={bestDesignAnimation}
  className="floating-div"
  >
  <FloatingDiv image={Thumbup} txt1='Software' 
    txt2='Engineering' />  
  </animated.div>

  <div className="blur" style={{background: 
  "rgb (233 210 255)"}}></div>
 
  <div className="blur" style={{
    background:'#C1F5FF',
     top: '17rem', 
    width:'21rem',
   height: '11rem' ,
   left:'-9rem'}} ></div>


    </div>
 </div>
  )
}

export default Intro