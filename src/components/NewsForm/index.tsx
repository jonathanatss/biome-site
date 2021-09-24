import React from 'react';

import { Form, Button } from 'react-bootstrap';
import style from './style.module.css';

export default function NewsForm() {
    return (
        <>
            <div className="text-center">
                <h1 className={style.title_}>
                    Receba nossas notícias
                </h1>
            </div>
            <Form>
                <Form.Group controlId="formBasicEmail" className="pb-2">
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <>
                <div className={style.div_check}>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Eu não sou um robô" />
                    </Form.Group>
                </div>
                </>
                <div className="text-center">
                    <Button className={style.button_subs}>Inscreva-se</Button>
                </div>
            </Form>
        </>
    )
}