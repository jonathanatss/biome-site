import { Image } from "react-bootstrap";
import styles from "./style.module.css";

type DateSquareProps = {
  day: string;
  month: string;
  year: string;
};

export default function DateSquare({ day, month, year }: DateSquareProps) {
  return (
    <div className={styles.fatherDiv}>
      <Image
        src="/img/blank_date_square_blue.png"
        className={styles.squareImage}
      />

      <div className={styles.day}>
        <span>{day}</span>
      </div>

      <div className={styles.month}>
        <span>
          {month}/{year}
        </span>
      </div>
    </div>
  );
}
