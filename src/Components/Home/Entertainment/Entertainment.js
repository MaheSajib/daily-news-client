import React from 'react';
import { Card } from 'react-bootstrap';

const Polities = ({ newsData }) => {
    return (
        <div className="container">
            <h1>Entertainment</h1>
            <div className="d-flex row justify-content-center ">
            {
                newsData.filter(nd => nd.category === 'entertainment').map(nd =>
                    <Card className="m-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={nd.imageURL} />
                        <Card.Body>
                            <Card.Title>{nd.title}</Card.Title>
                        </Card.Body>
                    </Card>
                )
            }
            </div>
        </div>
    );
};

export default Polities;