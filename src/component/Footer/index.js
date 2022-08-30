import { CSSTransition } from 'react-transition-group'
import { useInView } from "react-cool-inview";
import { Col, Row } from 'antd';
import logo from '@/assets/img/logo.png'
import feiJiLogo from '@/assets/img/feiji-logo.png'
import githubLogo from '@/assets/img/github-logo.png'
import larkLogo from '@/assets/img/lark-logo.png'
import mLogo from '@/assets/img/m-logo.png'
import maoLogo from '@/assets/img/mao-logo.png'
import "./index.scss";

export const Footer = () => {
  const { observe , inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: "50px",
  });
  return (
    <div className="footer-wrap" ref={observe}>
      <Row>
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <CSSTransition
            in={!!inView}
            timeout={ 1000 }
            classNames='show'
          >
            <div className="content-left">
              <img src={logo} className="logo"/>
              <div className='logo-list'>
                <a><img src={feiJiLogo} /></a>
                <a><img src={maoLogo} /></a>
                <a><img src={larkLogo} /></a>
                <a><img src={mLogo} /></a>
                <a><img src={githubLogo} /></a>
              </div>
            </div>
          </CSSTransition>
        </Col>
        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
          <div className="content-right">
            <CSSTransition
              in={!!inView}
              timeout={ 1000 }
              classNames='show1'
            >
              <div className="list-item">
                <div>Products</div>
                <div>UNIVERSE</div>
                <div>BONDS</div>
                <div>STAKING</div>
              </div>
            </CSSTransition>
            <CSSTransition
              in={!!inView}
              timeout={ 1000 }
              classNames='show2'
            >
              <div className="list-item">
                <div>Learn</div>
                <div>DOCUMENTATION</div>
                <div>BLOG</div>
              </div>
            </CSSTransition>
            <CSSTransition
              in={!!inView}
              timeout={ 1000 }
              classNames='show3'
            >
              <div className="list-item">
                <div>Contact us</div>
                <div>GetDiffusion@protonmail.com</div>
              </div>
            </CSSTransition>
          </div>
        </Col>
      </Row>
    </div>
  );
};
