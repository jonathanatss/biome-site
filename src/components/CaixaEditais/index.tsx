import { Card } from "react-bootstrap";

export default function CaixaEditais() {
    return (
      <Card.Body
        className="mb-3 box-card-content"
      >
        <a className="text-decorarion-none" href="/">
          <span className="badge text-white box-card-badge px-2 pt-2 bg-novo">01/2021</span>
          <div className="mb-3 box-card-content">
            <h5 className="card-title font-weight-bold color-azul-ufrn">Teste 01</h5>
            <p className="card-text text-muted font-weight-bold mb-2">Inscrições até 28/11/2021</p>
            <div className="card-footer bg-transparent border-top-0 p-0 mb-2 tags">
              <small className="badge bg-light text-dark">Graduação</small>
            </div>
          </div>
        </a>
      </Card.Body>
    );
  }