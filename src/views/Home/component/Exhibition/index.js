
import { Carousel } from 'antd';
import './index.scss'
import gridImage from '@/assets/img/exhibition-wrap-bg.png'
import earth from '@/assets/img/earth.png'
import arcStar from '@/assets/img/arc-star.png'
import carousel1 from '@/assets/img/exhibition/carousel1.png'
import carousel2 from '@/assets/img/exhibition/carousel2.png'
import carousel3 from '@/assets/img/exhibition/carousel3.png'
import carousel4 from '@/assets/img/exhibition/carousel4.png'

const Exhibition = () => {
    return <div className='exhibition-wrap'>
      <img src={gridImage} className="exhibition-wrap-img"/>
      <div className='carousel-wrap'>
        <Carousel dots={false} autoplay={true}>
          <img className='carousel-item' src={carousel1} />
          <img className='carousel-item' src={carousel2} />
          <img className='carousel-item' src={carousel3} />
          <img className='carousel-item' src={carousel4} />
        </Carousel>
        <img src={earth} className="earth"/>
        <div className="carousel-wrap-img"></div>
        <img src={arcStar} className="arc-star-img"/>
      </div>
    </div>
}
export default Exhibition;