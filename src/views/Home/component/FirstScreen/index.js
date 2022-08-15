import './index.scss'
import brightCity from '@/assets/img/brightCity.png'
import darkCity from '@/assets/img/darkCity.png'

const FirstScreen = () => {
    return <div className='first-screen-wrap'>
        <div className='city-bg'>
          <img src={darkCity} />
          <img src={brightCity} />
        </div>
    </div>
}
export default FirstScreen