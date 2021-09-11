import React from 'react';
import { Card } from 'react-bootstrap';

const Sports = ({ newsData }) => {
    return (
        <div className="container">
            <h1>Sports</h1>
            <div className="d-flex row justify-content-center ">
            {
                newsData.filter(nd => nd.category === 'sports').map(nd =>
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

export default Sports;