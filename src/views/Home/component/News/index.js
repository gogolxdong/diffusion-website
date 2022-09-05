
import { Col, Row } from 'antd';
import { CSSTransition } from 'react-transition-group'
import { useInView } from "react-cool-inview";
import { useTranslation } from 'react-i18next'
import newsImg from '@/assets/img/news-img.png'
import './index.scss'

const News = () => {
  const { t } = useTranslation()
  const { observe , inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: "50px",
  });
  const { observe: observe1 , inView:inView1 } = useInView({
    unobserveOnEnter: true,
    rootMargin: "50px",
  });
  const { observe: observe2 , inView:inView2 } = useInView({
    unobserveOnEnter: true,
    rootMargin: "50px",
  });
  const { observe: observe3 , inView:inView3 } = useInView({
    unobserveOnEnter: true,
    rootMargin: "50px",
  });
  const { observe: observe4 , inView:inView4 } = useInView({
    unobserveOnEnter: true,
    rootMargin: "50px",
  });
  return <div className='news-wrap'>
    <div className='news-header-wrap' ref={observe}>
      <CSSTransition
        in={!!inView}
        timeout={ 1000 }
        classNames='show'
      >
        <div className='in-text'>IN</div>
      </CSSTransition>
      <CSSTransition
        in={!!inView}
        timeout={ 1000 }
        classNames='show1'
      >
        <div className='line-wrap'>
          <div className='line-left'>{t('home.NEWS')}</div>
          <div className='line-right'>{t('home.MORE')}</div>
        </div>
      </CSSTransition>
    </div>
    <div className='news-content'>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <img className='new-img' src={newsImg} />
          <div className='news-item' ref={observe1}>
            <CSSTransition
              in={!!inView1}
              timeout={ 1000 }
              classNames='show'
            >
              <div className='item-time'>Published in Coinmonks·Jun 23</div>
            </CSSTransition>
            <CSSTransition
              in={!!inView1}
              timeout={ 1000 }
              classNames='show1'
            >
              <div className='item-content'><a href="https://medium.com/coinmonks/diffusiondao-multiverse-the-collection-and-fruition-of-human-dreams-in-digital-space-8e7e305e3486" target="blank">DiffusionDao multiverse- the collection and fruition of human dreams in digital space</a></div>
            </CSSTransition>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className='news-item' ref={observe2}>
            <CSSTransition
              in={!!inView2}
              timeout={ 1000 }
              classNames='show'
            >
              <div className='item-time'>Published in Coinmonks·Jun 18</div>
            </CSSTransition>
            <CSSTransition
              in={!!inView2}
              timeout={ 1000 }
              classNames='show1'
            >
              <div className='item-content'><a href="https://medium.com/coinmonks/the-intrinsic-value-of-diffusiondaos-crazy-multi-meta-verse-cb75cc5dcfec" target="blank">The intrinsic value of DiffusionDAO’s crazy multi meta verse</a></div>
            </CSSTransition>
          </div>
          <div className='news-item' ref={observe3}>
            <CSSTransition
              in={!!inView3}
              timeout={ 1000 }
              classNames='show'
            >
              <div className='item-time'>Published in Coinmonks·Jun 11</div>
            </CSSTransition>
            <CSSTransition
              in={!!inView3}
              timeout={ 1000 }
              classNames='show1'
            >
              <div className='item-content'><a href="https://medium.com/coinmonks/the-dual-realities-of-diffusiondao-and-crazy-multiverse-7b4cc0437989" target="blank">DiffusionDAO’s dual realities and DiffusionDAO’s crazy multi meta verse</a></div>
            </CSSTransition>
          </div>
          <div className='news-item' ref={observe4}>
            <CSSTransition
              in={!!inView4}
              timeout={ 1000 }
              classNames='show'
            >
              <div className='item-time'>Published in Coinmonks·May 25</div>
            </CSSTransition>
            <CSSTransition
              in={!!inView4}
              timeout={ 1000 }
              classNames='show1'
            >
              <div className='item-content'><a href="https://medium.com/coinmonks/diffusiondaos-organization-and-core-business-exposition-49437df8c8c" target="blank">DiffusionDAO’s Organization and Core Business Exposition</a></div>
            </CSSTransition>
          </div>
        </Col>
      </Row>
    </div>
  </div>
}
export default News;