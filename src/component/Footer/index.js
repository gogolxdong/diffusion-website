import { CSSTransition } from 'react-transition-group'
import { useInView } from "react-cool-inview";
import { useTranslation } from 'react-i18next'
import { Col, Row } from 'antd';
import logo from '@/assets/img/logo.png'
import feiJiLogo from '@/assets/img/feiji-logo.png'
import githubLogo from '@/assets/img/github-logo.png'
import larkLogo from '@/assets/img/lark-logo.png'
import mLogo from '@/assets/img/m-logo.png'
import maoLogo from '@/assets/img/mao-logo.png'
import "./index.scss";

export const Footer = () => {
  const { t } = useTranslation()
  const { observe , inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: "50px",
  });
  return (
    <div className="footer-wrap" ref={observe}>
      <Row>
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <CSSTransition
            in={!!inView}
            timeout={ 1000 }
            classNames='show'
          >
            <div className="content-left">
              <img src={logo} className="logo"/>
              <div className='logo-list'>
                <a href="https://t.me/DiffusionDAO" target="blank"><img src={feiJiLogo} /></a>
                <a href="https://discord.com/invite/bhv6ysfNuq" target="blank"><img src={maoLogo} /></a>
                <a href="https://twitter.com/DFSDIFFUSION" target="blank"><img src={larkLogo} /></a>
                <a href="https://medium.com/@getdiffusion" target="blank"><img src={mLogo} /></a>
                <a href="https://github.com/DiffusionDAO" target="blank"><img src={githubLogo} /></a>
              </div>
            </div>
          </CSSTransition>
        </Col>
        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
          <div className="content-right">
            <CSSTransition
              in={!!inView}
              timeout={ 1000 }
              classNames='show1'
            >
              <div className="list-item">
                <div>{t('footer.Products')}</div>
                <div>{t('footer.Universe')}</div>
                <div>{t('footer.Bonds')}</div>
                <div>{t('footer.Staking')}</div>
              </div>
            </CSSTransition>
            <CSSTransition
              in={!!inView}
              timeout={ 1000 }
              classNames='show2'
            >
              <div className="list-item">
                <div>{t('footer.Learn')}</div>
                <div>{t('footer.Documentation')}</div>
                <div>{t('footer.Blog')}</div>
              </div>
            </CSSTransition>
            <CSSTransition
              in={!!inView}
              timeout={ 1000 }
              classNames='show3'
            >
              <div className="list-item">
                <div>{t('footer.Contact')}</div>
                <div>diffusiondao@protonmail.com</div>
              </div>
            </CSSTransition>
          </div>
        </Col>
      </Row>
    </div>
  );
};
