import styles from "./footer.module.css";
import SentimentSatisfiedAltSharpIcon from "@mui/icons-material/SentimentSatisfiedAltSharp";

const Footer = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.try}>
          <p className={styles.CTA}>Experimente o Connect Shop TV hoje</p>
          <a
            className={`btn ${styles.tryNowBTN}`}
            href="https://api.whatsapp.com/send?phone=5548996641498&text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20realizar%20um%20teste%20dos%20canais,%20por%20favor."
          >
            Vamos nos divertir <SentimentSatisfiedAltSharpIcon />
          </a>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.content}>
          <img className={styles.footerLogo} src={require("./logo (1).png")} />
          <p className={styles.footerText}>
            Connect Shop TV <br /> Todos os direitos reservados. 2023
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
