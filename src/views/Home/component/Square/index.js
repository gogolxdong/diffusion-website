
import { CSSTransition } from 'react-transition-group'
import { useInView } from "react-cool-inview";
import { Col, Row } from 'antd';
import AnimatedNumbers from "react-animated-numbers";
import './index.scss'
import truthVolcano from '@/assets/img/truthVolcano.png';
import logo2 from '@/assets/img//logo2.png';
import { useTranslation } from 'react-i18next'


const Square = () => {
  const { t } = useTranslation()
  const { observe , inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: "50px",
  });
  return <div className='square-wrap' ref={observe}>
    <div className="square">
      <img src={truthVolcano} className='truthVolcano'></img>
      <Row>
        <Col xs={24} sm={24} md={14} lg={12} xl={12}>
          <div className="word-wrap">
          <CSSTransition
            in={!!inView}
            timeout={ 1000 }
            classNames='show'
          >
            <p className="title">{t('home.square-title')} 
              <span className="word-line-wrap">
                &nbsp;{t('home.System')}
                <span className="word-line"></span>
              </span>
            </p>
            </CSSTransition>
            <CSSTransition
              in={!!inView}
              timeout={ 1000 }
              classNames='show1'
            >
              <p className="description">{t('home.square-des')}</p>
            </CSSTransition>
          </div>
        </Col>
        </Row>
        <Row>
        <Col xs={24} sm={24} md={14} lg={12} xl={12}>
          <div className='square-data-wrap'>
            <div className="square-data-item alone-line">
              <div>
                <AnimatedNumbers
                  animateToNumber={23}
                  configs={(number, index) => {
                    return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                  }}
                />
              </div>
              <div className="square-data-des">{t('home.square-item1')}</div>
            </div>
            <div className="square-data-item">
              <div>
                <AnimatedNumbers
                  animateToNumber={23}
                  configs={(number, index) => {
                    return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                  }}
                />
              </div>
              <div className="square-data-des">{t('home.square-item2')}</div>
            </div>
            <div className="square-data-item">
              <div>
                <AnimatedNumbers
                  animateToNumber={64}
                  configs={(number, index) => {
                    return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                  }}
                />
              </div>
              <div className="square-data-des">{t('home.square-item3')}</div>
            </div>
          </div>
          </Col>
        </Row>
        <CSSTransition
          in={!!inView}
          timeout={ 1000 }
          classNames='show'
        >
          <img className="bot-logo" src={logo2}></img>
        </CSSTransition>
    </div>
  </div>
}
export default Square