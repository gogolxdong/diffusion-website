
import { Col, Row } from 'antd';
import './index.scss'
import truthVolcano from '@/assets/img/truthVolcano.png';
import logo2 from '@/assets/img//logo2.png';

const Square = () => {
    return <div className='square-wrap'>
      <div className="square">
        <img src={truthVolcano} className='truthVolcano'></img>
        <Row>
          <Col xs={24} sm={24} md={14} lg={12} xl={12}>
            <div className="word-wrap">
              <p className="title">Next Generation Joint Reserve 
                <span className="word-line-wrap">
                  &nbsp;System
                  <span className="word-line"></span>
                </span>
              </p>
              <p className="description">Diffusion Metafi is a set of combined reserve system based on Web3</p>
            </div>
          </Col>
         </Row>
         <Row>
          <Col xs={24} sm={24} md={14} lg={12} xl={12}>
            <div className='square-data-wrap'>
              <div className="square-data-item alone-line">
                <p>23</p>
                <p className="square-data-des">Factors of attention</p>
              </div>
              <div className="square-data-item">
                <p>23</p>
                <p className="square-data-des">Diffusivity element</p>
              </div>
              <div className="square-data-item">
                <p>64</p>
                <p className="square-data-des">Call factor</p>
              </div>
            </div>
            </Col>
         </Row>
        <img className="bot-logo" src={logo2}></img>
      </div>
    </div>
}
export default Square