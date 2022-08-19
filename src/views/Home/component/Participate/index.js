import './index.scss'
import participate1 from '@/assets/img/participate1.png'
import participate2 from '@/assets/img/participate2.png'
import participate3 from '@/assets/img/participate3.png'
import participate4 from '@/assets/img/participate4.png'
import pen from '@/assets/img/pen.png'
import phone from '@/assets/img/phone.png'
import circilar from '@/assets/img/circular.png'
import seal from '@/assets/img/seal.png'
import coloredStars from '@/assets/img/colored-stars.png'

const FirstScreen = () => {
    return <div className='participate-wrap'>
      <div className='participate-header'>How to participate in</div>
      <div className='participate-list'>
        <div className='list-item'>
          <div className='item-img-wrap'>
            <img src={participate1} className="background-img"/>
            <img src={pen} className="pen"/>
          </div>
          <div className='item-text'>Own NFT to earn revenue</div>
        </div>
        <div className='list-item'>
          <div className='item-img-wrap'>
            <img src={participate2} className="background-img"/>
            <img src={phone} className="phone"/>
            <img src={circilar} className="circilar"/>
          </div>
          <div className='item-text'>The bond</div>
        </div>
        <div className='list-item'>
          <div className='item-img-wrap'>
            <img src={participate3} className="background-img"/>
            <img src={seal} className="seal"/>
          </div>
          <div className='item-text'>DFS token pledge to earn income</div>
        </div>
        <div className='list-item'>
          <div className='item-img-wrap'>
            <img src={participate4} className="background-img"/>
            <img src={coloredStars} className="coloredStars"/>
          </div>
          <div className='item-text'>Start a farm and earn revenue</div>
        </div>
      </div>
      <div className='participate-footer-wrap'>
        <div className='participate-footer'>
          Immediately to participate in 
          <span className='participate-arrow'></span>
        </div>
      </div>
    </div>
}
export default FirstScreen