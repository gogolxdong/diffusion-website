import React, { useEffect, useState } from "react";
import anime from "animejs";
import cityBg from "@/assets/img/cityBg.png";
import cloudBg from "@/assets/img/cloudBg.png";
import brightCity from "@/assets/img/brightCity.png";
import darkCity from "@/assets/img/darkCity.png";
import rocket from "@/assets/img/rocket.png";
import giantLogo from "@/assets/img/giantLogo.png";
import rocketSpacecraft from "@/assets/img/rocketSpacecraft.png";
import land from "@/assets/img/land.png";
import man from "@/assets/img/man.png";

import airship1 from "@/assets/img/universe/airship1.png";
import airship2 from "@/assets/img/universe/airship2.png";
import airship3 from "@/assets/img/universe/airship3.png";
import planet1 from "@/assets/img/universe/planet1.png";
import planet2 from "@/assets/img/universe/planet2.png";
import planet3 from "@/assets/img/universe/planet3.png";
import planet4 from "@/assets/img/universe/planet4.png";
import planet5 from "@/assets/img/universe/planet5.png";
import planet6 from "@/assets/img/universe/planet6.png";
import planet7 from "@/assets/img/universe/planet7.png";
import trajectory1 from "@/assets/img/universe/trajectory1.png";
import trajectory2 from "@/assets/img/universe/trajectory2.png";
import "./index.scss";

const FirstScreen = () => {
  const [hasScroll, setHasScroll] = useState(false);
  // addEventListener scroll
  useEffect(() => {
    const ele = document;
    drawStar()
    if (ele) {
      ele.addEventListener("scroll", handleScroll);
      return () => ele.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    handleDisplay();
  }, [hasScroll]);

  const drawStar = () => {
    const cityBg = document.querySelector(".cityBg");
    const screenW = cityBg.clientWidth;
    const screenH = cityBg.offsetHeight;
    for (let i = 0; i < 50; i++) {
      const span = document.createElement("span");
      span.classList.add("star")
      cityBg.appendChild(span);
      const x = parseInt(Math.random() * screenW);
      const y = parseInt(Math.random() * screenH);
      span.style.left = x + "px";
      span.style.top = y + "px";
      const scale = Math.random() * 1.5;
      span.style.transform = "scale(" + scale + ", " + scale + ")";
      const rate = Math.random() * 1.5;
      span.style.animationDelay = rate + "s";
    }
  };

  const handleScroll = () => {
    if (!hasScroll) {
      setHasScroll(true);
    }
  };

  const handleDisplay = () => {
    if (!hasScroll) return;
    const cloudBg = document.querySelector(".cloudBg");
    const cityBg = document.querySelector(".cityBg");
    const firstScreen = document.querySelector(".first-screen-wrap");
    cloudBg.style.display = "block";
    cityBg.style.display = "none";
    const height = firstScreen.offsetHeight;
    anime({
      targets: ".city-wrap",
      translateY: height,
      duration: 5000,
      easing: "easeInOutExpo",
    });
    anime({
      targets: ".city-img-wrap",
      translateY: -height,
      duration: 5000,
      easing: "easeInOutExpo",
    });
    anime({
      targets: ".universe-wrap",
      translateY: -height,
      duration: 5000,
      easing: "easeInOutExpo",
    });
    anime({
      targets: ".universe-img-wrap",
      translateY: height,
      duration: 5000,
      easing: "easeInOutExpo",
    });
  };

  return (
    <div className="first-screen-wrap">
      <div className="first-screen-wrap-img cityBg"></div>
      <img src={cloudBg} className='first-screen-wrap-img cloudBg' style={{ display: 'none' }}/>
      <div className='city-wrap'>
          <img src={darkCity} className='darkCity' />
          <img src={brightCity} className='brightCity' />
        </div>
        <div className='city-img-wrap'>
          <img src={rocket} className='rocket' />
          <img src={giantLogo} className='giantLogo' />
        </div>
        <div className='universe-wrap'>
          <img src={rocketSpacecraft} className='rocketSpacecraft' />
          <img src={land} className='land' />
          <img src={man} className='man' />
        </div>
        <div className='universe-img-wrap'>
          <img src={airship1} className='airship1' />
          <img src={airship2} className='airship2' />
          <img src={airship3} className='airship3' />
          <img src={planet1} className='planet1' />
          <img src={planet2} className='planet2' />
          <img src={planet3} className='planet3' />
          <img src={planet4} className='planet4' />
          <img src={planet5} className='planet5' />
          <img src={planet6} className='planet6' />
          <img src={planet7} className='planet7' />
          <img src={trajectory1} className='trajectory1' />
          <img src={trajectory2} className='trajectory2' />
        </div>
    </div>
  );
};
export default FirstScreen;
