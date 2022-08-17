
import { Carousel } from 'antd';
import './index.scss'
import gridImage from '@/assets/img/news-wrap-bg.png'
import earth from '@/assets/img/earth.png'
import carouselWrapImg from '@/assets/img/carousel-wrap-img.png'
import arcStar from '@/assets/img/arc-star.png'



const News = () => {
    return <div className='news-wrap'>
      <img src={gridImage} className="news-wrap-img"/>
      <div className='carousel-wrap'>
        <Carousel dots={false} autoplay={true}>
          <div className='carousel-item'>1</div>
          <div className='carousel-item'>2</div>
          <div className='carousel-item'>3</div>
          <div className='carousel-item'>4</div>
        </Carousel>
        <img src={earth} className="earth"/>
        <img src={carouselWrapImg} className="carousel-wrap-img"/>
        <img src={arcStar} className="arc-star-img"/>
      </div>
    </div>
}
export default News;