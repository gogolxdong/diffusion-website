
import { Col, Row } from 'antd';
import './index.scss'
import partnerLeftImg from '@/assets/img/partner-left-img.png'
import partnerRightImg from '@/assets/img/partner-right-img.png'

const Home = () => {
    return <div className='partner-wrap'>
      <Row>
        <Col xs={24} sm={24} md={7} lg={7} xl={7}>
          <div className='partner-left'>
            <div className='partner-left-text'>Partner<div className='partner-left-text-line'></div></div>
            <img src={partnerLeftImg} className='partner-img' />
          </div>
        </Col>
        <Col xs={24} sm={24} md={17} lg={17} xl={17}>
          <div className='partner-right'>
            <img src={partnerRightImg} className='partner-img' />
          </div>
        </Col>
      </Row>
    </div>
}
export default Home;