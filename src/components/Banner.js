import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
//import headerImg from "../assets/img/header-img.svg"
import "animate.css";
import TrackVisibility from 'react-on-screen';
import "sakura-js/dist/sakura.css";
import bg1 from "../assets/background/photofunky.gif";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full Stack", "Game", "Solidity"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
  


    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }
    
    return (
        
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                           <span className="tagline">Welcome to my Portfolio</span>
                        <div className={isVisible ? "animate__animated animate__lightSpeedInLeft" : ""}><h1>{`Hi, I'm Shivba Pawar`}<span className="wrap"><br />{text + ` Developer`}</span></h1></div>
                        <p>
                            With a Master of Science degree in Computer Science and a strong foundation in software engineering, I am a highly skilled and motivated professional. 
                            My expertise lies in full-stack web development, where I have honed my skills in front-end technologies such as React JS and HTML/CSS, as well as back-end technologies including Node.js and SQL. 
                            I have a proven track record of delivering high-quality projects, optimizing performance, and improving user experiences. 
                            Combining my technical proficiency with effective problem-solving abilities, I thrive in collaborative environments and excel in delivering innovative solutions. 
                            With a passion for continuous learning and a drive for excellence, I am poised to contribute to impactful and cutting-edge software development projects.
                        </p>
                        <a href="#contact" style={{textDecoration: 'none'}}><button>Let's connect<ArrowRightCircle size={25} /></button></a>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    </Col>
                </Row>
            </Container>
            <div><img src={bg1} alt='bg1' /></div>
            <div><img src={bg1} alt='bg2' style={{left: "82%", marginTop:"-350px"}}/></div>
        </section>
    )
}