
import { Col, Row } from 'antd';
import './index.scss'
import truthVolcano from '@/assets/img/truthVolcano.png';
import logo2 from '@/assets/img//logo2.png';



const Square = () => {
    return <div className='square-wrap'>
      <div className="square">
        <img src={truthVolcano} className='truthVolcano'></img>
        <div className="word-wrap">
          <p className="title">Next Generation Joint Reserve System</p>
          <p className="description">Diffusion Metafi is a set of combined reserve system based on Web3</p>
          <span className="word_line"></span>
        </div>
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
      </div>
    </div>
}
export default Square