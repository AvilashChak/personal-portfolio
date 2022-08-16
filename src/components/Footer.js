import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo.svg";
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';
import navIcon4 from '../assets/images/Envelope.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/* <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col> */}
                    <Col>
                        <div>
                            <h2>How do you take your coffee?</h2>
                            <h4>Let's work together...</h4>
                        </div>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/avilash-chakraborty-a40928161/" target="_blank"><img src={navIcon1} /></a>
                            <a href="https://github.com/AvilashChak" target="_blank"><img src={navIcon2} /></a>
                            <a href="https://drive.google.com/file/d/1KdT2ug17AymjPVdC1yICtT0byDlIaYBp/view?usp=sharing" target="_blank"><img src={navIcon3} /></a>
                            <a href="mailto:avilashchak@gmail.com"><img src={navIcon4} className="social-icon-envelope"/></a>
                        </div>
                        <p>&#169; Created by Avilash Chakraborty</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}