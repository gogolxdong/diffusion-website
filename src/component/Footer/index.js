import { Col, Row } from 'antd';
import logo from '@/assets/img/logo.png'
import feiJiLogo from '@/assets/img/feiji-logo.png'
import githubLogo from '@/assets/img/github-logo.png'
import larkLogo from '@/assets/img/lark-logo.png'
import mLogo from '@/assets/img/m-logo.png'
import maoLogo from '@/assets/img/mao-logo.png'

import "./index.scss";

export const Footer = () => {
  return (
    <div className="footer-wrap">
      <Row>
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
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
        </Col>
        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
          <div className="content-right">
            <div className="list-item">
              <div>Products</div>
              <div>UNIVERSE</div>
              <div>BONDS</div>
              <div>STAKING</div>
            </div>
            <div className="list-item">
              <div>Learn</div>
              <div>DOCUMENTATION</div>
              <div>BLOG</div>
            </div>
            <div className="list-item">
              <div>Contact us</div>
              <div>GetDiffusion@protonmail.com</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
