import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HeaderMenu = () => {

    const [category, setCategory] = useState('')

    fetch(`https://infinite-sands-56335.herokuapp.com/category?category=${category}`)
    .then(res=> res.json())
    .then(data => console.log(data))

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className="mx-auto" href="/"><h2><b>Daily News</b></h2></Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar bg="light" expand="lg" >
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link onClick={()=>setCategory('The latest')} href="#home">The latest</Nav.Link>
                            <Nav.Link onClick={()=>setCategory('Politics')}  href="#link">Entertainment</Nav.Link>
                            <Nav.Link onClick={()=>setCategory('Coronavirus')} href="#link">Coronavirus</Nav.Link>
                            <Nav.Link onClick={()=>setCategory('Bangladesh')} href="#link">Bangladesh</Nav.Link>
                            <Nav.Link onClick={()=>setCategory('Sports')} href="#link">Sports</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default HeaderMenu;