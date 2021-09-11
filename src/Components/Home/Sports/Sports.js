import React from 'react';
import { Card } from 'react-bootstrap';
import sports from '../../../image/demo.jpg'

const Sports = () => {
    return (
        <div className="container">
            <h1>Sports</h1>
            <div className="d-flex row justify-content-center ">
                <Card className="m-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={sports} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="m-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={sports} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="m-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={sports} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Sports;