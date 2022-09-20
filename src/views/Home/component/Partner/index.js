
import { CSSTransition } from 'react-transition-group'
import { useInView } from "react-cool-inview";
import { useTranslation } from 'react-i18next'
import './index.scss'
import binance from '@/assets/img/binance-logo.png'
import dalles from '@/assets/img/dalles-logo.png'
import kyles from '@/assets/img/kyles-logo.png'
import sbxg from '@/assets/img/sbxg-logo.png'
import solidity from '@/assets/img/solidity-logo.png'
import the from '@/assets/img/the-logo.png'
import cLogo from '@/assets/img/c-logo.png'
import pancake from '@/assets/img/pancake-logo.png'







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
        <img src={solidity} />
      </div>
    </CSSTransition>
    <CSSTransition
      in={!!inView}
      timeout={ 1000 }
      classNames='show3'
    >
      <div className='partner-item'>
        <img src={the} />
        <img src={cLogo} />
      </div>
    </CSSTransition>
    <CSSTransition
      in={!!inView}
      timeout={ 1000 }
      classNames='show4'
    >
      <div className='partner-item'>
        <img src={sbxg} />
        <img src={pancake} />
      </div>
    </CSSTransition>
  </div>
}
export default Home;