import styles from "./support.module.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Support = (props) => {
  // return (
  //   <div id="support" className={styles.container}>
  //     <div className={styles.left}>
  //       <h1 className={`display-2 ${styles.header}`}>Need help?</h1>
  //       <p className={styles.text}>
  //         Our team is here to help you every step of the way, so you can start
  //         watching your favorite shows and movies in no time. <br />

  //       </p>
  //       <div className={styles.buttons}>
  //         <a type="button" className={styles.whatsapp} href="https://wa.me/17789010266">
  //           <WhatsAppIcon /> whatsapp{" "}
  //         </a>
  //         <a
  //           type="button"
  //           className={styles.callUs}
  //           href="tel:+1(778) 901-0266"
  //         >
  //           <LocalPhoneIcon /> call us
  //         </a>
  //       </div>
  //     </div>
  //     <img src={require("./images/support.png")} />
  //   </div>
  // );
  return (
    <div id="support" className={styles.containerNew}>
      <div className={styles.contentNew}>
        <h1 className={`display-2 ${styles.headerNew}`}>Precisa de ajuda?</h1>
        <p className={styles.textNew}>
          <span>
          Nossa equipe está aqui para ajudá-lo em cada etapa do processo, para que você possa começar a assistir seus programas e filmes favoritos rapidamente.{" "}
          </span>{" "}
          <br />
          <br />
          <br />
          Número de telefone:(48) 9 9664-1498
        </p>
        <div className={styles.buttonsNew}>
          <a
            type="button"
            className={styles.whatsapp}
            href="https://api.whatsapp.com/send?phone=5548996641498&text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20realizar%20um%20teste%20dos%20canais,%20por%20favor."
          >
            <WhatsAppIcon /> whatsapp{" "}
          </a>
          <a
            type="button"
            className={styles.callUs}
            href="tel:+5548996641498"
          >
            <LocalPhoneIcon /> ligue para nós
          </a>
        </div>
      </div>
    </div>
  );
};

export default Support;
