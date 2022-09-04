
import { CSSTransition } from 'react-transition-group'
import { useInView } from "react-cool-inview";
import { useTranslation } from 'react-i18next'
import './index.scss'
import samsung from '@/assets/img/samsung-log.png'
import upbit from '@/assets/img/upbit-log.png'
import binance from '@/assets/img/binance-logo.png'
import dalles from '@/assets/img/dalles-logo.jpg'
import kyles from '@/assets/img/kyles-logo.jpg'



const Home = () => {
  const { t } = useTranslation()
  const { observe , inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: "50px",
  });
  return <div className='partner-wrap' ref={observe}>
    <CSSTransition
      in={!!inView}
      timeout={ 1000 }
      classNames='show'
    >
      <div className='partner-item'>
        <div className='partner-left-text'>{t('home.Partner')}<div className='partner-left-text-line'></div></div>
      </div>
    </CSSTransition>
    <CSSTransition
      in={!!inView}
      timeout={ 1000 }
      classNames='show1'
    >
      <div className='partner-item'>
        <img src={dalles} />
        <img src={kyles} />
      </div>
    </CSSTransition>
    <CSSTransition
      in={!!inView}
      timeout={ 1000 }
      classNames='show2'
    >
      <div className='partner-item'>
        <img src={binance} />
        <img src={upbit} />
      </div>
    </CSSTransition>
    <CSSTransition
      in={!!inView}
      timeout={ 1000 }
      classNames='show3'
    >
      <div className='partner-item'>
        <img src={samsung} />
        <img src={binance} />
      </div>
    </CSSTransition>
  </div>
}
export default Home;