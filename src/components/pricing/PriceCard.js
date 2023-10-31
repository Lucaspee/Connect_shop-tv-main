import styles from "./priceCard.module.css";

const PriceCard = (props) => {
  return (
    <div className={`container-fluid ${styles.cardContainer}`}>
      <p className={styles.period}>{props.period}</p>
      <p className={styles.price}>
        <sup>R$</sup>
        {props.price}
      </p>
      <a
        type="button"
        className={`${styles.subscribe}`}
        href="https://api.whatsapp.com/send?phone=5548996641498&text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20realizar%20um%20teste%20dos%20canais,%20por%20favor."
      >
        se inscrever
      </a>
    </div>
  );
};

export default PriceCard;
