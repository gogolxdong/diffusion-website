import { CSSTransition } from 'react-transition-group'
import { useInView } from "react-cool-inview";
import './index.scss'
import participate1 from '@/assets/img/participate1.gif'
import participate2 from '@/assets/img/participate2.gif'
import participate3 from '@/assets/img/participate3.gif'
import participate4 from '@/assets/img/participate4.gif'
import { useEffect } from 'react';

const Participate = () => {
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
  return <div className='participate-wrap'>
    <div className='participate-header'>How to participate in</div>
    <div className='participate-list'>
      <div className='list-item' ref={observe1}>
        <CSSTransition
          in={!!inView1}
          timeout={ 1000 }
          classNames='show'
        >
          <div className='item-img-wrap'>
            <img src={participate1} className="background-img"/>
          </div>
        </CSSTransition>
        <CSSTransition
          in={!!inView1}
          timeout={ 1000 }
          classNames='show'
        >
          <div className='item-text'>Own NFT to earn revenue</div>
        </CSSTransition>
      </div>
      <div className='list-item' ref={observe2}>
        <CSSTransition
          in={!!inView2}
          timeout={ 1000 }
          classNames='show1'
        >
          <div className='item-img-wrap'>
            <img src={participate2} className="background-img"/>
          </div>
        </CSSTransition>
        <CSSTransition
          in={!!inView2}
          timeout={ 1000 }
          classNames='show1'
        >
          <div className='item-text'>The bond</div>
        </CSSTransition>
      </div>
      <div className='list-item' ref={observe3}>
        <CSSTransition
          in={!!inView3}
          timeout={ 1000 }
          classNames='show2'
        >
          <div className='item-img-wrap'>
            <img src={participate3} className="background-img"/>
          </div>
        </CSSTransition>
        <CSSTransition
          in={!!inView3}
          timeout={ 1000 }
          classNames='show2'
        >
          <div className='item-text'>DFS token pledge to earn income</div>
        </CSSTransition>
      </div>
      <div className='list-item' ref={observe4}>
        <CSSTransition
          in={!!inView4}
          timeout={ 1000 }
          classNames='show3'
        >
          <div className='item-img-wrap'>
            <img src={participate4} className="background-img"/>
          </div>
        </CSSTransition>
        <CSSTransition
          in={!!inView4}
          timeout={ 1000 }
          classNames='show3'
        >
          <div className='item-text'>Start a farm and earn revenue</div>
        </CSSTransition>
      </div>
    </div>
    <div className='participate-footer-wrap'>
      <div className='participate-footer'>
        Immediately to participate in 
        <span className='participate-arrow'></span>
      </div>
    </div>
  </div>
}
export default Participate