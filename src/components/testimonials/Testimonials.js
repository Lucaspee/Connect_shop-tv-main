import Carousel from "react-bootstrap/Carousel";
import styles from "./testimonials.module.css";
import SingleReview from "./singleReview";
import { useState } from "react";

const Testimonials = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  window.addEventListener("resize", () => {
    setScreenWidth(screenWidth);
  });
  return (
    <div className={styles.container}>
      <Carousel indicators={false} controls={screenWidth <= 770 && false}>
        <Carousel.Item>
          <SingleReview
            name="Sérgio Franco"
            imageUrl={require("./images/Ali Almafrachi.jpg")}
            review="É um dos melhores serviços que já vi 10/10 🌟"
          />
        </Carousel.Item>
        <Carousel.Item>
          <SingleReview
            name="Valter Alnis"
            imageUrl={require("./images/Muqdam Jubouri.jpg")}
            review="Rapaz, bom demais, o sistema é top, não travou nada, zero, muito bom, até a piazada gostou, um monte de filme, sério, top demais!"
          />
        </Carousel.Item>
        <Carousel.Item>
          <SingleReview
            name="Susan Smith"
            imageUrl={require("./images/female.png")}
            review="Só elogios mesmo, a TV ta funcionando muito bem, todos os canias, é ótimo! Amei!"
          />
        </Carousel.Item>
        <Carousel.Item>
          <SingleReview
            name="Samer Hamdan"
            imageUrl={require("./images/male.png")}
            review="Bom dia, tudo bem sim. A Tv está funcionando perfeitamente, todos os canais liberados e muita qualidade, fora que 0 travamento, recomendo, melhor do mercado!"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonials;
