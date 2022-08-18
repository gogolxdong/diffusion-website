
import { Col, Row } from 'antd';
import newsImg from '@/assets/img/news-img.png'
import './index.scss'

const News = () => {
    return <div className='news-wrap'>
      <div className='news-header-wrap'>
        <div className='in-text'>IN</div>
        <div className='line-wrap'>
        <div className='line-left'>THE NEWS</div>
          <div className='line-right'>MORE</div>
        </div>
      </div>
      <div className='news-content'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <img className='new-img' src={newsImg} />
            <div className='news-item'>
              <div className='item-time'>China.org.cn　2021-05-25</div>
              <div className='item-content'>Rome Declaration of Global Health123123 SummitHealth Summit</div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className='news-item'>
              <div className='item-time'>China.org.cn　2021-05-25</div>
              <div className='item-content'>Rome Declaration of Global Health123123 SummitHealth Summit</div>
            </div>
            <div className='news-item'>
              <div className='item-time'>China.org.cn　2021-05-25</div>
              <div className='item-content'>Rome Declaration of Global Health123123 SummitHealth Summit</div>
            </div>
            <div className='news-item'>
              <div className='item-time'>China.org.cn　2021-05-25</div>
              <div className='item-content'>Rome Declaration of Global Health123123 SummitHealth Summit</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
}
export default News;