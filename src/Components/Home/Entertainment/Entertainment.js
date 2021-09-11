import React from 'react';
import { Card } from 'react-bootstrap';
import entertainment from '../../../image/demo.jpg'

const Polities = () => {
    return (
        <div className="container">
            <h1>Entertainment</h1>
            <div className="d-flex row justify-content-center ">
                <Card className="m-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={entertainment} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="m-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={entertainment} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="m-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={entertainment} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Polities;