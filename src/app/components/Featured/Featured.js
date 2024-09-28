import React from "react";
import CardNew from "../Card/Card";
import styles from "./styles";

const Featured = () => {
  return (
    <div>
      {/* <h1>featured</h1> */}
      <CardNew
        styleforCard={styles.card}
        styleforContent={styles.cardContent}
        content={
          "First Prize in WhyHack InnovateHer Hackathon conducted by Kerala Startup Mission powered by TCS and ICFOSS"
        }
        imgUrl={
          "https://drive.google.com/uc?export=view&id=1ejElKYlt-z5xjSEFegbgvDB4cV72SPRs"
        }
      />
    </div>
  );
};

export default Featured;
