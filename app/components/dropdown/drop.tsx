import { useState } from "react";
import styles from "./drop.module.css";

interface propsDrop {
  question: string;
  answer: string;
}

function Drop({ question, answer }: propsDrop) {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.container}>
      <button
        onClick={() => setActive(!active)}
        className={active ? `questionsBtn active` : "questionsBtn"}
        type="button"
        aria-expanded={active}
        aria-controls="message"
      >
        <span className={styles.question}>{question}</span>
        <img
          className={styles.imgShevron}
          src={active ? "/chevron-up-outline.svg" : "/chevron-down-outline.svg"}
          alt="close"
        />
      </button>
      <p className="answers" id="message">
        {answer}
      </p>
    </div>
  );
}

export default Drop;
