import React, { useEffect, useState } from "react";
import { Spin } from 'antd';
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
  const [showImg, setShowImg] = useState(false);
  const startOpen = 0;
  useEffect(() => {
    const ele = document;
    drawStar()
    setTimeout(() => {
      setShowImg(true)
    }, 3000);
    if (ele) {
      ele.addEventListener("scroll", handleScroll);
      return () => ele.removeEventListener("scroll", handleScroll);
    }
  }, []);
  
  const drawStar = () => {
    const cityBg = document.querySelector(".cityBg");
    const screenW = cityBg.clientWidth;
    const screenH = cityBg.offsetHeight;
    for (let i = 0; i < 30; i++) {
      const span = document.createElement("span");
      span.classList.add("star")
      cityBg.appendChild(span);
      const x = parseInt(Math.random() * screenW);
      const y = parseInt(Math.random() * screenH);
      span.style.left = x + "px";
      span.style.top = y + "px";
      const scale = Math.random() * 2;
      span.style.transform = "scale(" + scale + ", " + scale + ")";
      const rate = Math.random() * 2;
      span.style.animationDelay = rate + "s";
    }
  };

  const handleScroll = (e) => {
    // get scrollTop
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const cloudBg = document.querySelector(".cloudBg");
    const cityBg = document.querySelector(".cityBg");
    const stickyWrap = document.querySelector(".sticky-wrap");
    const cityWrap = document.querySelector(".city-wrap");
    const cityImgWrap = document.querySelector(".city-img-wrap");
    const universeWrap = document.querySelector(".universe-wrap");
    const universeImgWrap = document.querySelector(".universe-img-wrap");
    const height = stickyWrap.offsetHeight;
    if (scrollTop >= startOpen && scrollTop < startOpen + 3*height) {
      const offset = (scrollTop - startOpen)/3
      if (offset >= height/2) {
        cloudBg.style.display = "block";
        cityBg.style.display = "none";
      } else {
        cloudBg.style.display = "none";
        cityBg.style.display = "block";
      }
      let percent =  parseFloat((offset / height).toFixed(2))
      percent = percent >= 0.96 ? 1:percent
      const percent2 = parseFloat(1+percent)
      let opacity = 1 - percent/2
      elemetDisplay(cityWrap,offset, percent2, opacity)
      elemetDisplay(cityImgWrap,-offset, percent2, opacity)
      elemetDisplay(universeWrap,-offset, percent, percent)
      elemetDisplay(universeImgWrap,offset, percent, percent)
    }
  };

  const elemetDisplay = (ele,translateY,scale, opacity) => {
    ele.style.transform =  "translateY("+ translateY +"px)";
    // anime({
    //   targets: ele,
    //   translateY: translateY,
    //   scale: scale,
    //   opacity: opacity,
    //   easing: "easeInOutQuad",
    // });
  }

  return (
    <div className="first-screen-wrap">
      <div className="sticky-wrap">
        <div className="first-screen-wrap-img cityBg">
          {
            showImg && <img src={cityBg} />
          }
        </div>
        <img src={cloudBg} className='first-screen-wrap-img cloudBg' style={{ display: 'none' }}/>
        <div className='city-wrap'>
          {
            showImg ? 
              <>
                <img src={darkCity} className='darkCity' />
                <img src={brightCity} className='brightCity' />
              </>
            :
            <Spin size="large" />
          }
        </div>
        <div className='city-img-wrap'>
          {
            showImg && 
              <>
                <img src={rocket} className='rocket' />
                <img src={giantLogo} className='giantLogo' />
              </>
          }

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
    </div>
  );
};
export default FirstScreen;
