
import { CSSTransition } from 'react-transition-group'
import { useInView } from "react-cool-inview";
import './index.scss'
import samsung from '@/assets/img/samsung-log.png'
import upbit from '@/assets/img/upbit-log.png'
import binance from '@/assets/img/binance-logo.png'


const Home = () => {
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
        <div className='partner-left-text'>Partner<div className='partner-left-text-line'></div></div>
      </div>
    </CSSTransition>
    <CSSTransition
      in={!!inView}
      timeout={ 1000 }
      classNames='show1'
    >
      <div className='partner-item'>
        <img src={upbit} />
        <img src={samsung} />
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