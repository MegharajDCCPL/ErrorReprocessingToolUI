import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import next from "../../assets/next.png";
import previous from "../../assets/previous.png";
import styles from "./LaunchPage.module.css";
import ErrorLogger from "../common/ErrorLogger";

const LaunchCarousel = ({ cardsData }) => {
  const chunkSize = 4;
  const cardChunks = [];

  try {
    for (let i = 0; i < cardsData.length; i += chunkSize) {
      cardChunks.push(cardsData.slice(i, i + chunkSize));
    }
  } catch (error) {
    ErrorLogger(error);
  }

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    try {
      setCurrentCardIndex((currentCardIndex + 1) % cardChunks.length);
    } catch (error) {
      ErrorLogger(error);
    }
  };

  const prevCard = () => {
    try {
      setCurrentCardIndex(
        currentCardIndex === 0 ? cardChunks.length - 1 : currentCardIndex - 1
      );
    } catch (error) {
      ErrorLogger(error);
    }
  };

  useEffect(() => {
    try {
      const intervalId = setInterval(nextCard, 5000);
      return () => clearInterval(intervalId);
    } catch (error) {
      ErrorLogger(error);
    }
  }, [currentCardIndex, cardChunks.length]);

  return (
    <div className="d-flex flex-column justify-content-between ms-5 me-5">
      <div
        id="card-info"
        className={`d-flex flex-column align-items-center ${styles["card-container"]}`}
      >
        <div className={styles["card-row"]}>
          {cardChunks[currentCardIndex]?.slice(0, 2).map((card, index) => (
            <div key={index} className={`${styles.card}`}>
              <div className={styles["card-header"]}>
                <img src={card.imgSrc} alt={card.title} />
                <h5 className={styles["card-title"]}>{card.title}</h5>
              </div>
              <div className={styles["card-body"]}>
                <p className={styles["card-text"]}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles["card-row"]}>
          {cardChunks[currentCardIndex]?.slice(2, 4).map((card, index) => (
            <div key={index} className={`${styles.card}`}>
              <div className={styles["card-header"]}>
                <img src={card.imgSrc} alt={card.title} />
                <h5 className={styles["card-title"]}>{card.title}</h5>
              </div>
              <div className={styles["card-body"]}>
                <p className={styles["card-text"]}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="d-flex justify-content-center align-items-center mt-4 ">
        <button
          id="previous-btn"
          className={`${styles["btn-navigation"]} me-3`}
          onClick={prevCard}
        >
          <img src={previous} alt="Previous" />
        </button>
        {cardChunks.map((_, index) => (
          <button
            key={index}
            className={`${styles["slide-button"]} ${
              currentCardIndex === index ? styles["active"] : ""
            }`}
            onClick={() => setCurrentCardIndex(index)}
          ></button>
        ))}
        <button
          id="next-btn"
          className={`${styles["btn-navigation"]} ms-3`}
          onClick={nextCard}
        >
          <img src={next} alt="Next" />
        </button>
      </div> */}
    </div>
  );
};

export default LaunchCarousel;
