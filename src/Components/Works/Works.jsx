import React from 'react'
import "./Works.css"
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from '../../Context';
import { useContext} from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-scroll";

const Works = () => {
   const handleEmailClick = () => {
      window.location.href = "mailto:Dakoukyelmestapha@proton.me"; // Replace with your email address
    };

   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

     // React Spring animations
  const transition = { duration: 3500, type: "spring" };
  const mainCircleAnimation = useSpring({
    rotate: 0,
    from: { rotate: 45 },
    config: transition,
  });

  return (
    <div className="works">
          <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>Works for all these</span>
            <span>Brand & Clients</span>
            <spane>Take all project i am working with team if is big 
                        if is just part of project
                <br/>
                however
                <br/>
                is frontend or backend
            </spane>
            
              <button className="button s-button" onClick={handleEmailClick}>Talk Me</button>
           
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>

        <div className="w-right">
               <animated.div
                  style={mainCircleAnimation}
                  className="w-mainCircle">
                <div className="w-secCircle">
                   <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                   <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                   <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                   <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                   <img src={Facebook} alt="" />
                </div>
                </animated.div>
               


                <div className="w-backCircle blueCircle">

                </div>
                <div className="w-backCircle brubleCircle">

                </div>


            </div>
        </div>
  )
}

export default Works