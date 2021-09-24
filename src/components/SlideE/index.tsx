import { Row, Col, Card } from "react-bootstrap";
import style from "./caixa-editais.module.scss";
import CaixaEditais from "../CaixaEditais/index";

const status_option = {
  novo: {
    titulo: "Novos",
    box: "box-editais-novos",
    bg: "bg-novo",
    border: "border-color-novo",
    color: "color-novo"
  },
  andamento: {
    titulo: "Em Andamento",
    box: "box-editais-andamentos",
    bg: "bg-andamento",
    border: "border-color-andamento",
    color: "color-andamento"
  },
  encerrado: {
    titulo: "Encerrados",
    box: "box-editais-encerrados",
    bg: "bg-encerrado",
    border: "border-color-encerrado",
    color: "color-encerrado"
  }
};

export default function SlideE({
  status,
  lista
}: {
  status: string;
  lista: any;
}) {
  return (
    <>
      <div className={`${status_option[status].box} px-5`}>
        <p
          className={`mb-0 px-3 box-status color-white ${status_option[status].bg} ${status_option[status].border}`}
        >
          {status_option[status].titulo}
        </p>
        <Card
          className={`rounded-lg mb-5 mt-3 mb-lg-0 box-card scrollbar ${style.card_edital} ${status_option[status].border} ${style.editais}`}
        >
          <CaixaEditais />
          <CaixaEditais />
          <CaixaEditais />
          <CaixaEditais />
          <CaixaEditais />
          <CaixaEditais />
          <CaixaEditais />
        </Card>
      </div>
    </>
  );
}
