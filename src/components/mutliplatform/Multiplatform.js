import styles from "./multiplatform.module.css";

import { useState } from "react";

const Multiplatform = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={`display-2 ${styles.header}`}>Multi plataforma</h1>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
          Com os serviços Connect Shop TV, você pode assistir seus programas de TV e filmes favoritos em alta definição <span>em qualquer lugar</span>, <span>a qualquer momento.</span>
          </p>
          <p>
          Nossos serviços oferecem infinitas opções de entretenimento,
             permitindo que você <span>personalize sua experiência de visualização.</span>
          </p>
        </div>
        <img src={require("./images/multi platform.png")} />
      </div>
    </div>
  );
};

export default Multiplatform;
