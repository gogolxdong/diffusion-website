
import centerEarth from '@/assets/img/centerEarth.png'
import advantageArrow from '@/assets/img/advantageArrow.png'
import goldenStar from '@/assets/img/goldenStar.png'
import greenChild from '@/assets/img/greenChild.png'
import selfishSpace from '@/assets/img/selfishSpace.png'
import { Col, Row } from 'antd';
import './index.scss'

const Metacosmic = () => {
    return <div className='metacosmic-wrap'>
      <div className='metacosmic-main'>
        <div className='metacosmic-title'>Releases and product updates</div>
        <div className='metacosmic-content'>
          <div className='cont-text'> Metacosmic Financial Center</div>
          <div className="online-day-wrap">
            <div className='online-day'>12 d</div>
            <div className='online-tag'>Online</div>
          </div>
        </div>
        <div className='mountain'></div>
        <img src={centerEarth} className='centerEarth' />
      </div>
      <div className='metacosmic-card-list'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <div className='metacosmic-card'>
              <div className='metacosmic-card-text'>The golden kingdom of the stars</div>
              <img className='metacosmic-card-arrow' src={advantageArrow} />
              <img className='metacosmic-card-img' src={goldenStar} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <div className='metacosmic-card'>
              <div className='metacosmic-card-text'>The green earth and the smiles of children</div>
              <img className='metacosmic-card-arrow' src={advantageArrow} />
              <img className='metacosmic-card-img' src={greenChild} />
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <div className='metacosmic-card'>
              <div className='metacosmic-card-text'>Selfish space</div>
              <img className='metacosmic-card-arrow' src={advantageArrow} />
              <img className='metacosmic-card-img' src={selfishSpace} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
}
export default Metacosmic;