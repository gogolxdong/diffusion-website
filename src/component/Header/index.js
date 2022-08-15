
import logo from '../../assets/img/logo.png'
import language from '../../assets/img/language.png'
import './index.scss'
import { Col, Row } from 'antd';
export const Header = () => {
    return <div>
      <Row>
          <Col span={12} className="left_nav">
            <img src={logo} />
          </Col>
          <Col span={12} className="right_nav">
            <span>Document</span>
            <span>Dapp</span>
            <img src={language} />
          </Col>
      </Row>
    </div>
}