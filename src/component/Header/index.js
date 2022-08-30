import logo from '@/assets/img/logo.png'
import language from '@/assets/img/language.png'
import './index.scss'
import { Col, Row } from 'antd';
export const Header = () => {
    return <div className="header-wrap">
      <Row>
          <Col span={12} className="left-nav">
            <img src={logo} />
          </Col>
          <Col span={12} className="right-nav">
            <a>Document</a>
            <a href="https://test.diffusiondao.org/" target="_blank">Dapp</a>
            <img src={language} />
          </Col>
      </Row>
    </div>
}