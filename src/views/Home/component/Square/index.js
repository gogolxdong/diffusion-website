
import { CSSTransition } from 'react-transition-group'
import { useInView } from "react-cool-inview";
import { Col, Row } from 'antd';
import AnimatedNumbers from "react-animated-numbers";
import './index.scss'
import truthVolcano from '@/assets/img/truthVolcano.png';
import logo2 from '@/assets/img//logo2.png';

const Square = () => {
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
            <p className="title">Next Generation Joint Reserve 
              <span className="word-line-wrap">
                &nbsp;System
                <span className="word-line"></span>
              </span>
            </p>
            </CSSTransition>
            <CSSTransition
              in={!!inView}
              timeout={ 1000 }
              classNames='show1'
            >
              <p className="description">Diffusion Metafi is a set of combined reserve system based on Web3</p>
            </CSSTransition>
          </div>
        </Col>
        </Row>
        <Row>
        <Col xs={24} sm={24} md={14} lg={12} xl={12}>
          <div className='square-data-wrap'>
            <div className="square-data-item alone-line">
              <p>
                <AnimatedNumbers
                  animateToNumber={23}
                  configs={(number, index) => {
                    return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                  }}
                />
              </p>
              <p className="square-data-des">Factors of attention</p>
            </div>
            <div className="square-data-item">
              <p>
                <AnimatedNumbers
                  animateToNumber={23}
                  configs={(number, index) => {
                    return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                  }}
                />
              </p>
              <p className="square-data-des">Diffusivity element</p>
            </div>
            <div className="square-data-item">
              <p>
                <AnimatedNumbers
                  animateToNumber={64}
                  configs={(number, index) => {
                    return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                  }}
                />
              </p>
              <p className="square-data-des">Call factor</p>
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