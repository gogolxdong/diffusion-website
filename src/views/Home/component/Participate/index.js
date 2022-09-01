import { CSSTransition } from 'react-transition-group'
import { useInView } from "react-cool-inview";
import { useTranslation } from 'react-i18next'
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
import goldCoins from '@/assets/img/gold-coins.png'

const Participate = () => {
  const { t } = useTranslation()
  const { observe: observe1 , inView:inView1 } = useInView({
    unobserveOnEnter: true,
    rootMargin: "50px",
  });
  const { observe: observe2 , inView:inView2 } = useInView({
    unobserveOnEnter: true,
    rootMargin: "50px",
  });
  const { observe: observe3 , inView:inView3 } = useInView({
    unobserveOnEnter: true,
    rootMargin: "50px",
  });
  const { observe: observe4 , inView:inView4 } = useInView({
    unobserveOnEnter: true,
    rootMargin: "50px",
  });
  return <div className='participate-wrap'>
    <div className='participate-header'>{t('home.participat-title')}</div>
    <div className='participate-list'>
      <div className='list-item' ref={observe1}>
        <CSSTransition
          in={!!inView1}
          timeout={ 1000 }
          classNames='show'
        >
          <div className='item-img-wrap'>
            <img src={participate1} className="background-img"/>
            <img src={pen} className="pen"/>
          </div>
        </CSSTransition>
        <CSSTransition
          in={!!inView1}
          timeout={ 1000 }
          classNames='show'
        >
          <div className='item-text'>{t('home.participat-item-1')}</div>
        </CSSTransition>
      </div>
      <div className='list-item' ref={observe2}>
        <CSSTransition
          in={!!inView2}
          timeout={ 1000 }
          classNames='show1'
        >
          <div className='item-img-wrap'>
            <img src={participate2} className="background-img"/>
            <img src={phone} className="phone"/>
            <img src={circilar} className="circilar"/>
          </div>
        </CSSTransition>
        <CSSTransition
          in={!!inView2}
          timeout={ 1000 }
          classNames='show1'
        >
          <div className='item-text'>{t('home.participat-item-2')}</div>
        </CSSTransition>
      </div>
      <div className='list-item' ref={observe3}>
        <CSSTransition
          in={!!inView3}
          timeout={ 1000 }
          classNames='show2'
        >
          <div className='item-img-wrap'>
            <img src={participate3} className="background-img"/>
            <img src={seal} className="seal"/>
          </div>
        </CSSTransition>
        <CSSTransition
          in={!!inView3}
          timeout={ 1000 }
          classNames='show2'
        >
          <div className='item-text'>{t('home.participat-item-3')}</div>
        </CSSTransition>
      </div>
      <div className='list-item' ref={observe4}>
        <CSSTransition
          in={!!inView4}
          timeout={ 1000 }
          classNames='show3'
        >
          <div className='item-img-wrap'>
            <img src={participate4} className="background-img bullion"/>
            <img src={coloredStars} className="coloredStars"/>
            <img src={goldCoins} className="goldCoins"/>
          </div>
        </CSSTransition>
        <CSSTransition
          in={!!inView4}
          timeout={ 1000 }
          classNames='show3'
        >
          <div className='item-text'>{t('home.participat-item-4')}</div>
        </CSSTransition>
      </div>
    </div>
    <div className='participate-footer-wrap'>
      <div className='participate-footer'>
        {t('home.participat-btn')}
        <span className='participate-arrow'></span>
      </div>
    </div>
  </div>
}
export default Participate