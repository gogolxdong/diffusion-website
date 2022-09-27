import { CSSTransition } from "react-transition-group";
import { useInView } from "react-cool-inview";
import { Col, Row } from "antd";
import AnimatedNumbers from "react-animated-numbers";
import "./index.scss";
import truthVolcano from "@/assets/img/truthVolcano.png";
import logo2 from "@/assets/img//logo2.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Square = () => {
  const [attention, setAttention] = useState(0);
  const [diffusion, setDiffusion] = useState(0);
  const [invocation, setInvocation] = useState(0);
  fetch("https://middle.diffusiondao.org/dashboard").then((res) => {
    res.json().then((res) => {
      const values = Object.values(res.concentration);
      const average =
        values.reduce(
          (accumulator, currentValue) => accumulator + currentValue
        ) / values.length || 0;
      setAttention(average);
    });
  });

  const { t } = useTranslation();
  const { observe, inView } = useInView({
    unobserveOnEnter: true,
    rootMargin: "50px",
  });
  return (
    <div className="square-wrap" ref={observe}>
      <div className="square">
        <img src={truthVolcano} className="truthVolcano"></img>
        <Row>
          <Col xs={24} sm={24} md={14} lg={12} xl={12}>
            <div className="word-wrap">
              <CSSTransition in={!!inView} timeout={1000} classNames="show">
                <p className="title">
                  {t("home.square-title")}
                  <span className="word-line-wrap">
                    &nbsp;{t("home.System")}
                    <span className="word-line"></span>
                  </span>
                </p>
              </CSSTransition>
              <CSSTransition in={!!inView} timeout={1000} classNames="show1">
                <p className="description">{t("home.square-des")}</p>
              </CSSTransition>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={14} lg={12} xl={12}>
            <div className="square-data-wrap">
              <div className="square-data-item alone-line">
                <div>
                  <AnimatedNumbers
                    animateToNumber={attention}
                    configs={(number, index) => {
                      return {
                        mass: 1,
                        tension: 230 * (index + 1),
                        friction: 140,
                      };
                    }}
                  />
                </div>
                <div className="square-data-des">
                  {t("home.attention-factor")}
                </div>
              </div>
              <div className="square-data-item">
                <div>
                  {diffusion ? (
                    <AnimatedNumbers
                      animateToNumber={diffusion}
                      configs={(number, index) => {
                        return {
                          mass: 1,
                          tension: 230 * (index + 1),
                          friction: 140,
                        };
                      }}
                    />
                  ) : (
                    "--"
                  )}
                </div>
                <div className="square-data-des">
                  {t("home.diffusion-factor")}
                </div>
              </div>
              <div className="square-data-item">
                <div>
                  {invocation ? (
                    <AnimatedNumbers
                      animateToNumber={invocation}
                      configs={(number, index) => {
                        return {
                          mass: 1,
                          tension: 230 * (index + 1),
                          friction: 140,
                        };
                      }}
                    />
                  ) : (
                    "--"
                  )}
                </div>
                <div className="square-data-des">
                  {t("home.invocation-factor")}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <CSSTransition in={!!inView} timeout={1000} classNames="show">
          <img className="bot-logo" src={logo2}></img>
        </CSSTransition>
      </div>
    </div>
  );
};
export default Square;
