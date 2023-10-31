import styles from "./pricing.module.css";
import HdIcon from "@mui/icons-material/Hd";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import PriceCard from "./PriceCard";
import { Fragment, useState } from "react";
import AndroidIcon from "@mui/icons-material/Android";

const Pricing = (props) => {
  const [screenWidth, setWidth] = useState(window.screen.width);
  window.addEventListener("resize", () => {
    setWidth(window.screen.width);
  });

  return (
    <Fragment>
      <div id="pricing" className={styles.pricingContainer}>
        <h1 className={`display-2 ${styles.pricingHeader}`}>
          Planos <span>simples</span> e <span>acessíveis</span>
        </h1>
        <div className={styles.featuresAndPlans}>
          <div className={styles.features}>
            {screenWidth < 900 ? (
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
                <Grid xs={4} md={4}>
                  <div className={styles.listItem}>
                    <span>
                      <HdIcon sx={{ color: "#fc1a57" }} fontSize="large" />
                    </span>{" "}
                    4K streaming
                  </div>
                </Grid>

                <Grid xs={4} md={4}>
                  <div className={styles.listItem}>
                    <span>
                      <AllInclusiveIcon
                        sx={{ color: "#fc1a57" }}
                        fontSize="large"
                      />
                    </span>{" "}
                    A maior biblioteca de filmes e séries
                  </div>
                </Grid>
                <Grid xs={4} md={4}>
                  <div className={styles.listItem}>
                    <span>
                      <AndroidIcon sx={{ color: "#fc1a57" }} fontSize="large" />
                    </span>{" "}
                    Suporta qualquer sistema operacional
                  </div>
                </Grid>
                <Grid xs={4} md={4}>
                  <div className={styles.listItem}>
                    <span>
                      <SupportAgentIcon
                        sx={{ color: "#fc1a57" }}
                        fontSize="large"
                      />
                    </span>{" "}
                    Suporte ao cliente amigável 24 horas por dia, 7 dias por semana
                  </div>
                </Grid>
                <Grid xs={4} md={4}>
                  <div className={styles.listItem}>
                    <span>
                      <AspectRatioIcon
                        sx={{ color: "#fc1a57" }}
                        fontSize="large"
                      />
                    </span>{" "}
                    Compativel com vários dispositivos
                  </div>
                </Grid>

                <Grid xs={4} md={4}>
                  <div className={styles.listItem}>
                    <span>
                      <LiveTvIcon sx={{ color: "#fc1a57" }} fontSize="large" />
                    </span>{" "}
                    Conteúdo sob demanda, sem comerciais.
                  </div>
                </Grid>
              </Grid>
            ) : (
              <ul>
                <li>
                  <span>
                    <LiveTvIcon sx={{ color: "#fc1a57" }} fontSize="large" />
                  </span>{" "}
                  Acesso a uma ampla seleção de canais
                </li>
                <li>
                  <span>
                    <AllInclusiveIcon
                      sx={{ color: "#fc1a57" }}
                      fontSize="large"
                    />
                  </span>{" "}
                  Conteúdo sob demanda sem comerciais.
                </li>
                <li>
                  <span>
                    <HdIcon sx={{ color: "#fc1a57" }} fontSize="large" />
                  </span>{" "}
                  Transmissão em 4K
                </li>
                <li>
                  <span>
                    <AspectRatioIcon
                      sx={{ color: "#fc1a57" }}
                      fontSize="large"
                    />
                  </span>{" "}
                  Compativel com vários dispositivos
                </li>
                <li>
                  <span>
                    <SupportAgentIcon
                      sx={{ color: "#fc1a57" }}
                      fontSize="large"
                    />
                  </span>{" "}
                  Suporte ao cliente amigável 24 horas por dia, 7 dias por semana
                </li>
              </ul>
            )}
          </div>

          <div className={`container-fluid ${styles.plans}`}>
            <Grid
              container
              rowSpacing={screenWidth > 900 ? 5 : 5}
              columnSpacing={{ xs: 1, s: 3 }}
            >
              <Grid xs={4} s={4} md={4}>
                <PriceCard period=" 1 Mês" price={35} />
              </Grid>
              <Grid xs={4} s={4} md={4}>
                <PriceCard period=" 3 Mêses" price={100} />
              </Grid>
              <Grid xs={4} s={4} md={4}>
                <PriceCard period=" 6 Mêses" price={195} />
              </Grid>
              <Grid xs={4} s={4} md={4}>
                <PriceCard period=" 12 Mêses" price={390} />
              </Grid>
              <Grid xs={4} s={4} md={4}>
                <PriceCard period=" 15 Mêses" price={490} />
              </Grid>
              <Grid xs={4} s={4} md={4}>
                <PriceCard period=" 24 Mêses" price={790} />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Pricing;
