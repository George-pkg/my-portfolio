import { useLayoutEffect } from "react";
import WaveBorderBottom from "../../components/waveBorder/WaveBorderBottom/WaveBorderBottom";
import WaveBordertop from "../../components/waveBorder/WaveBorderTop/WaveBorderTop";
import styles from "./About.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(`.${styles.container}`, {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: `.${styles.title}`,
        start: "top 600px",
        end: "bottom 550px",
        scrub: true,
      }
    })

    return () => {
      gsap.killTweensOf(`.${styles.container}`);
    }
  }, [])


  return(
    <div>
      <WaveBordertop />
      <div className={styles.about} id='about'>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>Quem sou</h1>
          </div>
          <div className={styles.text}>
            <p>
            Olá, tenho 20 anos e sou apaixonado por astronomia e programação, em consequência, me tornei um programador fascinado por conhecimento.<br /><br />
            Tenho em minha bagagem de linguagens: <span>Node.js, Flutter, React, Python e MongoDB </span>com banco de Dados.<br /><br />
            Atualmente estou cursando Análise e Desenvolvimento de Sistemas e trabalho como full-stack na Tyconnex, mas tenho foco no back-end.
            </p>
          </div>
        </div>
      </div>
      <WaveBorderBottom />
    </div>
  );
};