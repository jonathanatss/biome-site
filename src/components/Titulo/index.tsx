import React from "react";
import { Row } from 'react-bootstrap';

import style from './style.module.css';

type TituloProps = {
    title: string;
    color: string;
}

export default function Subtitulo (props: TituloProps){
    return(
        <Row style={{ color: props.color}}>
            <div className={style.div_}>
                <h1 className={style.title_}>{props.title}</h1> 
            </div>
        </Row>
    );
}