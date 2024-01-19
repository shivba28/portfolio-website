import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import skl1 from '../assets/img/meter1.svg';
import skl2 from '../assets/img/meter2.svg';
import skl3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';
import TrackVisibility from "react-on-screen";
import "animate.css"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <section className='skill' id='skill'>
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
      {({ isVisible }) =>
      <div className={isVisible ? "animate__animated animate__heartBeat" : ""}>
                        <div className='skill-bx'>
                            <h2>
                                Technical Skills
                            </h2>
                            <p>As a software developer, I possess a strong set of technical skills that allow me to create innovative and efficient solutions. My expertise includes:</p>
                            <Carousel responsive={responsive} showDots={true} infinite={true} className='skill-slider' removeArrowOnDeviceType={["desktop","mobile", "tablet"]} autoPlay={true} autoPlaySpeed={2000}>
                                <div className='item'>
                                    <img src={skl1} alt='Image1' />
                                    <h5>Full Stack Web Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={skl2} alt='Image2' />
                                    <h5>Database Management</h5>
                                </div>
                                <div className='item'>
                                    <img src={skl3} alt='Image3' />
                                    <h5>Server-Side Programming</h5>
                                </div>
                                <div className='item'>
                                    <img src={skl1} alt='Image4' />
                                    <h5>Version Control & Collaboration</h5>
                                </div>
                                <div className='item'>
                                    <img src={skl3} alt='Image3' />
                                    <h5>Problem Solving & Troubleshooting</h5>
                                    <br></br>
                                </div>
                            </Carousel>
                        </div>
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp}  alt='background'/>
        </section>
    )
}

