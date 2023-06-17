import { Col, Container, Row } from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/shivba-pawar-7572a9162/"><img src={navIcon1} alt="Icon1"/></a>
                            <a href="https://github.com/shivba28"><img src={navIcon2} alt="Icon2"/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}