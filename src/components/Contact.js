import { Container, Row, Col } from "react-bootstrap";
import contactImg from '../assets/img/ContactUs2.svg';

export const Contact = () => {

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} >
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>My Socials</h2>

                    <div class="buttons">
                            <div class="row">
                                <button class="linkedin">
                                <span><i class="fab fa-linkedin-f"></i></span>
                                <a href="https://www.linkedin.com/in/shivba-pawar-7572a9162/" style={{textDecoration:"none", color:"white"}} target="_blank" rel="noreferrer">LinkedIn</a></button>
                                <button class="github">
                                <span><i class="fab fa-github"></i></span>
                                <a href="https://github.com/shivba28" style={{textDecoration:"none", color:"white"}} target="_blank" rel="noreferrer">GitHub</a></button>
                            </div>
                        </div>
                    </Col>
                </Row> 
            </Container>
        </section>    
    )
}