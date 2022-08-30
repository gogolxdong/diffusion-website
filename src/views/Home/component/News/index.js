
import { Col, Row } from 'antd';
import { CSSTransition } from 'react-transition-group'
import { useInView } from "react-cool-inview";
import newsImg from '@/assets/img/news-img.png'
import './index.scss'

const News = () => {
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
          <div className='line-left'>THE NEWS</div>
          <div className='line-right'>MORE</div>
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
              <div className='item-time'>China.org.cn　2021-05-25</div>
            </CSSTransition>
            <CSSTransition
              in={!!inView1}
              timeout={ 1000 }
              classNames='show1'
            >
              <div className='item-content'>Rome Declaration of Global Health123123 SummitHealth Summit</div>
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
              <div className='item-time'>China.org.cn　2021-05-25</div>
            </CSSTransition>
            <CSSTransition
              in={!!inView2}
              timeout={ 1000 }
              classNames='show1'
            >
              <div className='item-content'>Rome Declaration of Global Health123123 SummitHealth Summit</div>
            </CSSTransition>
          </div>
          <div className='news-item' ref={observe3}>
            <CSSTransition
              in={!!inView3}
              timeout={ 1000 }
              classNames='show'
            >
              <div className='item-time'>China.org.cn　2021-05-25</div>
            </CSSTransition>
            <CSSTransition
              in={!!inView3}
              timeout={ 1000 }
              classNames='show1'
            >
              <div className='item-content'>Rome Declaration of Global Health123123 SummitHealth Summit</div>
            </CSSTransition>
          </div>
          <div className='news-item' ref={observe4}>
            <CSSTransition
              in={!!inView4}
              timeout={ 1000 }
              classNames='show'
            >
              <div className='item-time'>China.org.cn　2021-05-25</div>
            </CSSTransition>
            <CSSTransition
              in={!!inView4}
              timeout={ 1000 }
              classNames='show1'
            >
              <div className='item-content'>Rome Declaration of Global Health123123 SummitHealth Summit</div>
            </CSSTransition>
          </div>
        </Col>
      </Row>
    </div>
  </div>
}
export default News;