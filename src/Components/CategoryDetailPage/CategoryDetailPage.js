import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import demo from '../../image/demo.jpg'
import AppLayout from '../AppLayout/AppLayout';

const CategoryDetailPage = () => {

    return (
        <AppLayout>
        <div className="container">
            <div className="d-flex row justify-content-center m-5">
                <Card className="m-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={demo} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="m-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={demo} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="m-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={demo} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="m-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={demo} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="m-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={demo} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="m-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={demo} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card>

            </div>

            <div className="d-flex row justify-content-center m-5">
                <Card className="m-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={demo} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Author</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="#">Read More</Card.Link>
                        <Card.Link href="#">Category</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="m-3" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Author</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="#">Read More</Card.Link>
                        <Card.Link href="#">Category</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="m-3" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Author</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="#">Read More</Card.Link>
                        <Card.Link href="#">Category</Card.Link>
                    </Card.Body>
                </Card>
            </div>

            <div className="m-5">
                <Card className="bg-dark text-white my-5">
                    <Card.Img style={{ height: '20rem' }} src={demo} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white my-5">
                    <Card.Img style={{ height: '20rem' }} src={demo} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white my-5">
                    <Card.Img style={{ height: '20rem' }} src={demo} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>

            <div className="container-fluid group">
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={demo} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Author</Card.Subtitle>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            <Card>
                <Card.Img style={{ width: '40rem' }} variant="top" src={demo} />
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <div className="button">
                <Button variant="secondary">Load More</Button>
            </div>
        </div>
        </AppLayout>
    );
};

export default CategoryDetailPage;