import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import '../App.css';

function NavbarComponent() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">SOLYS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                {/* <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}
            </Container>
        </Navbar>
    );
}

function Body() {
    useEffect(() => {
        document.title = 'Solys';
    }, []);
    return (
        <Container className="text-start text-light">
            <div className="mt-5">
                <Row>
                    <Col md={12}>
                        <p className="fs-11">Security infrastructure for crypto wallets</p>
                    </Col>
                    <Col md="auto">
                        {/* <p className="sentence">
                        <span className="slidingVertical">
                            <span>Create single-use wallets</span>
                            <span>Manage (multi-sig, mpc, hardware) wallets</span>
                            <span>Automate swapping</span>
                            <span>Undo transactions</span>
                            <span>Send, Receive, Swap, Bridge tokens</span>
                        </span>
                    </p> */}
                        <p className="fs-3">Hardware wallet level security with your existing software wallets.</p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md="auto">
                        <InputGroup className="mb-3">
                            {/* <Form.Control
                                placeholder="Enter Email"
                                aria-label="Enter Email"
                                aria-describedby="basic-addon"
                                className="input-1"
                            /> */}
                            <Button href="https://tpffe8264hy.typeform.com/to/JeFTGiid" target="_blank" rel="noopener noreferrer" className="btn-1 rounded-pill">
                                Get Early Access
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

function ComingSoon() {
    return (
        <>
            {<NavbarComponent />}
            {<Body />}
        </>
    );
}

export default ComingSoon;