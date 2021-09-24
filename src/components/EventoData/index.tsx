import style from './style.module.css';

export default function EventoData({ mes, dia }: { mes: string; dia: string }) {
  return (
    <div className={style.calendar}>
      {mes}
      <hr />
      <span className="dia">{dia}</span>
    </div>
  );
}
