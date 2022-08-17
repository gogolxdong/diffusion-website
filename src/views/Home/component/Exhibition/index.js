
import { Carousel } from 'antd';
import './index.scss'
import gridImage from '@/assets/img/exhibition-wrap-bg.png'
import earth from '@/assets/img/earth.png'
import carouselWrapImg from '@/assets/img/carousel-wrap-img.png'
import arcStar from '@/assets/img/arc-star.png'
import dashboard from '@/assets/img/exhibition/dashboard.png'
import bond from '@/assets/img/exhibition/bond.png'
import reward from '@/assets/img/exhibition/reward.png'
import mint from '@/assets/img/exhibition/mint.png'




const Exhibition = () => {
    return <div className='exhibition-wrap'>
      <img src={gridImage} className="exhibition-wrap-img"/>
      <div className='carousel-wrap'>
        <Carousel dots={false} autoplay={true}>
          <img className='carousel-item' src={dashboard} />
          <img className='carousel-item' src={bond} />
          <img className='carousel-item' src={mint} />
          <img className='carousel-item' src={reward} />
        </Carousel>
        <img src={earth} className="earth"/>
        <img src={carouselWrapImg} className="carousel-wrap-img"/>
        <img src={arcStar} className="arc-star-img"/>
      </div>
    </div>
}
export default Exhibition;