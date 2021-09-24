import { Container } from "react-bootstrap";
import Link from "next/link";

type eventProps = {
  title: string;
  id: string;
  image: string;
};

export default function ServicoLink(props: eventProps) {
  return (
    <Container>
      <Link href={`/servicos/${encodeURIComponent(props.id)}`}>
        <a>{props.title}</a>
        <img src={props.image}></img>
      </Link>
    </Container>
  );
}
