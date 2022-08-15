
import { Col, Row } from 'antd';
import './index.scss'
import truthVolcano from '@/assets/img/truthVolcano.png';
import logo2 from '@/assets/img//logo2.png';



const Square = () => {
    return <div className='square-wrap'>
      <div className="square">
      <img src={truthVolcano}></img>
      <p>Next Generation Joint Reserve System</p>
      <span className="word_line"></span>
      <span className="bottom_line"></span>
      <img className="bot_logo" src={logo2}></img>
      <div className="bot_word">
        <Row>
          <Col span={6}>
            <p>23</p>
            <p className="smile">Factors of attention</p>
          </Col>
          <Col span={6}>
            <p>23</p>
            <p className="smile">Factors of attention</p>
          </Col>
          <Col span={6}>
            <p>23</p>
            <p className="smile">Factors of attention</p>
          </Col>
        </Row>
      </div>
      <p>Diffusion Metafi is a set of combined reserve system based on Web3</p>
  </div>
    </div>
}
export default Square