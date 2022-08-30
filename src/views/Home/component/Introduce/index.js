
import { CSSTransition } from 'react-transition-group'
import { useInView } from "react-cool-inview";
import './index.scss'
import img1 from '@/assets/img/person-one.png'
import img2 from '@/assets/img/person-two.png'
import img3 from '@/assets/img/person-three.png'
import img4 from '@/assets/img/person-four.png'
import img5 from '@/assets/img/person-five.png'


const Introduce = () => {
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
        classNames='show'
      >
        <div className='item-text'>
          <div className='item-title'>Neo-keynesianism<span className='colour-span'></span></div>
          <div className='item-des'>
            <p>The first generation of Neo-Keynesian economics is a general economic idea developed from Keynesian economics during the 1930s through the 1970s, especially after World War II. </p>
            <p>This theory emphasizes the importance of subject regulation. DIffusion Metafi adopts the ideas and tools of this school and integrates them into the overall algorithm to ensure the stability and adjustability of ecological economy.</p>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={!!inView1}
        timeout={ 1000 }
        classNames='show1'
      >
        <img className='item-img' src={img1} />
      </CSSTransition>
    </div>
    <div className='list-item' ref={observe2}>
      <CSSTransition
        in={!!inView2}
        timeout={ 1000 }
        classNames='show'
      >
        <div className='item-text'>
          <div className='item-title'>DSGE<span className='colour-span'></span></div>
          <div className='item-des'>
            <p>DSGE is the abbreviation of Dynamic Stochastic General Equilibrium model. WEB3's macroeconomic model is intertemporal Dynamic with random uncertainty, and it needs to analyze the economy from the perspective of General Equilibrium. Therefore, our important regulation in METAFI comes from the guidance data given by DSGE model, which is the crown of mathematical finance. </p>
            <p>This is the first milestone of scientific model in the cryptocurrency world.</p>
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
          classNames='show'
        >
        <div className='item-text'>
          <div className='item-title'>DFS<span className='colour-span'></span></div>
          <div className='item-des'>
            <p>DFS is the core asset of the Diffusiondao Multiuniverse. </p>
            <p>Each DFS is backed by a corresponding risk-free asset, so each DFS has intrinsic value, which is a reassuring and secure digital asset.</p>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={!!inView3}
        timeout={ 1000 }
        classNames='show1'
      >
        <img className='item-img' src={img3} />
      </CSSTransition>
    </div>
    <div className='list-item' ref={observe4}>
      <CSSTransition
          in={!!inView4}
          timeout={ 1000 }
          classNames='show'
        >
        <div className='item-text'>
          <div className='item-title'>Spos<span className='colour-span'></span></div>
          <div className='item-des'>
            <p>Social pos (proof of intelligent Rights and Interests). In DIffusion Metafi, APOS consensus mechanism is the main means to obtain DFS. You can improve APOS value by obtaining the "wise" type NFT, so that "" can work for you. </p>
            <p>You can increase your income by increasing your intellectual equity, so start forming your own group of "wise men".</p>
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
        classNames='show'
      >
        <div className='item-text'>
          <div className='item-title'>METAFI<span className='colour-span'></span></div>
          <div className='item-des'>
            <p>METAFI is the financial center of the future digital space and also the core universe of DIffusiondao, which is full of mathematical formulas. Metafis adopts the new Keynesian DSGE model to regulate the ecology, prompting DFS to achieve the target inflation rate and realize the optimal monetary policy under the promise. Metafs is a vast system responsible for taking statistics of the entire ecology. We analyze various data and indicators of the whole ecology, such as diffusion index, TVL, total liquidity and other key indicators, and make some major decisions based on DSGE model and AI. For example, interest rate APY and bond discount rate are set, and traditional economics knowledge is combined with decentralized finance to carry out macro-control on the whole ecology. This is a space to create wealth, this is a financial universe worth exploring and participating in, please leave your wealth creation myth.</p>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={!!inView5}
        timeout={ 1000 }
        classNames='show1'
      >
        <img className='item-img' src={img5} />
      </CSSTransition>
    </div>
  </div>
}
export default Introduce