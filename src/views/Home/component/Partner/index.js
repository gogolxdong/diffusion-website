
import { Col, Row } from 'antd';
import './index.scss'
import samsung from '@/assets/img/samsung-log.png'
import upbit from '@/assets/img/upbit-log.png'
import binance from '@/assets/img/binance-logo.png'


const Home = () => {
    return <div className='partner-wrap'>
      {/* <Row>
        <Col xs={24} sm={24} md={7} lg={7} xl={7}>
          <div className='partner-left'>
          </div>
        </Col>
        <Col xs={24} sm={24} md={17} lg={17} xl={17}>
          <div className='partner-right'>
          </div>
        </Col>
      </Row> */}
      <div className='partner-item'>
        <div className='partner-left-text'>Partner<div className='partner-left-text-line'></div></div>
      </div>
      <div className='partner-item'>
        <img src={upbit} />
        <img src={samsung} />
      </div>
      <div className='partner-item'>
        <img src={binance} />
        <img src={upbit} />
      </div>
      <div className='partner-item'>
        <img src={samsung} />
        <img src={binance} />
      </div>
    </div>
}
export default Home;