import DateSquare from "@components/DateSquare";
import Link from "next/link";
import styles from "./style.module.css";

export default function EventCard(props) {
  const { title, place, starts, id } = props.item;

  const date = new Date(starts);

  const tags = ["tag1", "tag2"];

  return (
    <div className={styles.card_evento}>
      <div className={styles.event_image_date}>
        <DateSquare
          day={date.getDay().toString()}
          month={date
            .toLocaleString("default", { month: "long" })
            .substring(0, 3)}
          year={date.getFullYear().toString().substring(0, 2)}
        />
      </div>
      <div className={styles.conteudo}>
        <Link href={`/${props.url}/${encodeURIComponent(id)}`}>
          <a className={styles.link}>
            <h2 className={styles.title}>{title} </h2>
          </a>
        </Link>
        <div className={styles.info}>{place} </div>

        <div className={styles.tags}>
          {tags.map((tag) => {
            return <div className={styles.invididual_tag}> {tag} </div>;
          })}
        </div>
      </div>
    </div>
  );
}
