
import { CSSTransition } from 'react-transition-group'
import { useInView } from "react-cool-inview";
import { useTranslation } from 'react-i18next'
import './index.scss'
import img1 from '@/assets/img/person-one.png'
import img2 from '@/assets/img/person-two.png'
import img3 from '@/assets/img/person-three.png'
import img4 from '@/assets/img/person-four.png'
import img5 from '@/assets/img/person-five.png'

const Introduce = () => {
  const { t } = useTranslation()
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
  const { observe: observe5 , inView:inView5 } = useInView({
    unobserveOnEnter: true,
    rootMargin: "50px",
  });
  return <div className='introduce-wrap'>
    <div className='list-item' ref={observe1}>
      <CSSTransition
        in={!!inView1}
        timeout={ 1000 }
        classNames='show1'
      >
        <div className='item-text'>
          <div className='item-title'>{t('home.New Keynesianism')}<span className='colour-span'></span></div>
          <div className='item-des'>
            <p>{t('home.New-Keynesianism-des1')}</p>
            <p>{t('home.New-Keynesianism-des2')}</p>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={!!inView1}
        timeout={ 1000 }
        classNames='show'
      >
        <img className='item-img' src={img1} />
      </CSSTransition>
    </div>
    <div className='list-item' ref={observe2}>
      <CSSTransition
        in={!!inView2}
        timeout={ 1000 }
        classNames='show1'
      >
        <div className='item-text'>
          <div className='item-title'>{t('DSGE')}<span className='colour-span'></span></div>
          <div className='item-des'>
            <p>{t('home.DSGE-des1')}</p>
            <p>{t('home.DSGE-des2')}</p>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={!!inView2}
        timeout={ 1000 }
        classNames='show1'
      >
        <img className='item-img' src={img2} />
      </CSSTransition>
    </div>
    <div className='list-item' ref={observe3}>
      <CSSTransition
          in={!!inView3}
          timeout={ 1000 }
          classNames='show1'
        >
        <div className='item-text'>
          <div className='item-title'>{t('home.DFS')}<span className='colour-span'></span></div>
          <div className='item-des'>
            <p>{t('home.DFS-des1')}</p>
            <p>{t('home.DFS-des2')}</p>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={!!inView3}
        timeout={ 1000 }
        classNames='show'
      >
        <img className='item-img' src={img3} />
      </CSSTransition>
    </div>
    <div className='list-item' ref={observe4}>
      <CSSTransition
          in={!!inView4}
          timeout={ 1000 }
          classNames='show1'
        >
        <div className='item-text'>
          <div className='item-title'>{t('home.SPOS')}<span className='colour-span'></span></div>
          <div className='item-des'>
            <p>{t('home.SPOS-des1')}</p>
            <p>{t('home.SPOS-des2')}</p>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={!!inView4}
        timeout={ 1000 }
        classNames='show1'
      >
        <img className='item-img' src={img4} />
      </CSSTransition>
    </div>
    <div className='list-item' ref={observe5}>
      <CSSTransition
        in={!!inView5}
        timeout={ 1000 }
        classNames='show1'
      >
        <div className='item-text'>
          <div className='item-title'>{t('home.MetaFi')}<span className='colour-span'></span></div>
          <div className='item-des'>
            <p>{t('home.MetaFi-des')}</p>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={!!inView5}
        timeout={ 1000 }
        classNames='show'
      >
        <img className='item-img' src={img5} />
      </CSSTransition>
    </div>
  </div>
}
export default Introduce