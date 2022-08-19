import React, { useEffect, useState } from 'react';
import  cityBg from '@/assets/img/cityBg.png'
import  cloudBg from '@/assets/img/cloudBg.png'
import brightCity from '@/assets/img/brightCity.png'
import darkCity from '@/assets/img/darkCity.png'
import rocket from '@/assets/img/rocket.png'
import  giantLogo from '@/assets/img/giantLogo.png'
import rocketSpacecraft from '@/assets/img/rocketSpacecraft.png'
import  land from '@/assets/img/land.png'
import  man from '@/assets/img/man.png'

import  airship1 from '@/assets/img/universe/airship1.png'
import  airship2 from '@/assets/img/universe/airship2.png'
import  airship3 from '@/assets/img/universe/airship3.png'
import  planet1 from '@/assets/img/universe/planet1.png'
import  planet2 from '@/assets/img/universe/planet2.png'
import  planet3 from '@/assets/img/universe/planet3.png'
import  planet4 from '@/assets/img/universe/planet4.png'
import  planet5 from '@/assets/img/universe/planet5.png'
import  planet6 from '@/assets/img/universe/planet6.png'
import  planet7 from '@/assets/img/universe/planet7.png'
import  trajectory1 from '@/assets/img/universe/trajectory1.png'
import  trajectory2 from '@/assets/img/universe/trajectory2.png'
import './index.scss'

const FirstScreen = () => {
    const [hasScroll, setHasScroll] = useState(false)
    // addEventListener scroll
    useEffect(() => {
      const ele = document;
      if (ele) {
        ele.addEventListener('scroll', handleScroll);
        return () => ele.removeEventListener('scroll', handleScroll);
      }
    }, []);

    useEffect(() => {
      handleDisplay()
    },[hasScroll])

    const findScroller = (element) => {
      element.onscroll = function() { console.log(element)}
   
      Array.from(element.children).forEach(findScroller);
  }

    const handleScroll = () => {
      if (!hasScroll) {
        setHasScroll(true)
      }
    };

    const handleDisplay = () => {
      if (!hasScroll) return
      const cloudBg = document.querySelector('.cloudBg')
      const cityBg = document.querySelector('.cityBg')
      const city = document.querySelector('.city-wrap')
      const cityImg = document.querySelector('.city-img-wrap')
      // const city = document.querySelector('.city-wrap')
      // const cityImg = document.querySelector('.city-img-wrap')
      cloudBg.style.display = 'block'
      cityBg.style.display = 'none'
    }

    return <div className='first-screen-wrap'>
        <img src={cityBg} className='first-screen-wrap-img cityBg' />
        <img src={cloudBg} className='first-screen-wrap-img cloudBg' style={{ display: 'none' }}/>
        <div className='city-wrap'>
          <img src={darkCity} className='darkCity' />
          <img src={brightCity} className='brightCity' />
        </div>
        <div className='city-img-wrap'>
          <img src={rocket} className='rocket' />
          <img src={giantLogo} className='giantLogo' />
        </div>
        <div className='universe-wrap' style={{ display: 'none' }}>
          <img src={rocketSpacecraft} className='rocketSpacecraft' />
          <img src={land} className='land' />
          <img src={man} className='man' />
        </div>
        <div className='universe-img-wrap' style={{ display: 'none' }}>
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
}
export default FirstScreen